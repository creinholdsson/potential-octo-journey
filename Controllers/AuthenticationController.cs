using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PyeongchangKampen.Configuration;
using PyeongchangKampen.Models;
using PyeongchangKampen.Models.DTO.Creation;
using PyeongchangKampen.Models.DTO.Retrieve;
using PyeongchangKampen.Services;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace PyeongchangKampen.Controllers
{
    [Route("/api/auth")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public class AuthenticationController : Controller
    {
        private TokenConfigurationParameters _TokenParameters;
        private UserManager<ApplicationUser> _UserManager;
        private SignInManager<ApplicationUser> _SignInManager;
        private ILogger<AuthenticationController> _Logger;
        private IEmailService _EmailService;

        public AuthenticationController(IOptions<TokenConfigurationParameters> tokenParameters,
                    UserManager<ApplicationUser> userManager,
                    SignInManager<ApplicationUser> signInManager,
                    ILogger<AuthenticationController> logger,
                    IEmailService emailService)
        {
            _TokenParameters = tokenParameters.Value;
            _UserManager = userManager;
            _SignInManager = signInManager;
            _Logger = logger;
            _EmailService = emailService;
        }

        [HttpPost("signin")]
        public async Task<IActionResult> SignIn([FromBody]SignInDto signInDto)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest(ModelState);
            }


            var signInResult = await _SignInManager.PasswordSignInAsync(signInDto.Username, signInDto.Password, false, false);

            if (signInResult.Succeeded == false)
            {
                ModelState.AddModelError("", "Username or password is incorrect");
                return BadRequest(ModelState);
            }

            var loggedOnUser = await _UserManager.FindByNameAsync(signInDto.Username);
            var roles = await _UserManager.GetRolesAsync(loggedOnUser);


            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, signInDto.Username),
                new Claim(ClaimTypes.NameIdentifier, loggedOnUser.Id)
            };
            claims.AddRange(roles.Select(x => new Claim(ClaimsIdentity.DefaultRoleClaimType, x)));

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_TokenParameters.SigningKey));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _TokenParameters.Issuer,
                audience: _TokenParameters.Audience,
                claims: claims,
                signingCredentials: credentials
                );

            _Logger.LogInformation($"User {signInDto} logged in");
            return Ok(new SignInForRetrieveDto { Username = signInDto.Username, Token = new JwtSecurityTokenHandler().WriteToken(token), Roles = roles.ToArray() });
        }

        [HttpGet("user/{userName}")]
        public async Task<IActionResult> GetUser(string username)
        {
            if (string.IsNullOrEmpty(username))
            {
                ModelState.AddModelError("username", "cannot be null");
                return BadRequest(ModelState);
            }
            var user = await _UserManager.FindByNameAsync(username);

            if (user == null)
            {
                return NotFound();
            }



            return Ok(Mapper.Map<UserForRetrieve>(user));
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]ApplicationUserForCreationDto userDto)
        {
            if (ModelState.IsValid == false)
            {
                return BadRequest(ModelState);
            }

            var user = new ApplicationUser
            {
                UserName = userDto.Username,
                Email = userDto.Email,
                PhoneNumber = userDto.PhoneNumber
            };

            var creationsResult = await _UserManager.CreateAsync(user, userDto.Password);
            if (creationsResult.Succeeded)
            {
                _Logger.LogInformation($"Created user {userDto.Username}");

                return Ok(CreateToken(user));
            }
            else
            {
                AddErrorsToModelState(creationsResult);

                _Logger.LogWarning($"Failed to create user {userDto.Username}");
                return BadRequest(ModelState);
            }

        }

        [HttpGet("check")]
        public async Task<IActionResult> IsUsernameTaken(string username)
        {
            var user = await _UserManager.FindByNameAsync(username);
            if (user == null)
            {
                return Ok(new { User = username, IsAvailable = true });
            }
            else
            {
                return Ok(new { User = username, IsAvailable = false });
            }
        }

        [HttpPost("{username}/addasadmin")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> AddAsAdmin(string username)
        {
            var user = await _UserManager.FindByNameAsync(username);
            if(user == null)
            {
                ModelState.AddModelError(nameof(username), "Cannot find user with that username");
                return BadRequest(ModelState);
            }
            var result = await _UserManager.AddToRoleAsync(user, "Administrator");
            if(result.Succeeded)
            {
                _Logger.LogInformation($"{User.Identity.Name} added {username} as administrator");

                return Ok("User added to role");
            }
            return BadRequest(result.Errors);
        }

        [HttpPost("passwordReset")]
        public async Task<IActionResult> RequestEmailReset([FromBody]UserForPasswordResetRequest userDto)
        {
            var user = await _UserManager.FindByEmailAsync(userDto.Email);
            if(user != null)
            {
                var token = await _UserManager.GeneratePasswordResetTokenAsync(user);
                _Logger.LogInformation($"Sending request for reset link to {userDto.Email}");

                await _EmailService.SendEmailAsync(user.Email, "Användaruppgifter", $@"
                    Hej {user.UserName} <br /> <br />
                    Du har begärt användaruppgifter för PyeongchangKampen. Ditt användarnamn på sidan är {user.UserName}. <br /><br />
                    Vill du nollställa ditt lösenord trycker du <a href='https://pyeongchangkampen.azurewebsites.net/user/reset?token={UrlEncoder.Default.Encode(token)}&id={user.Id}'>här</a><br /><br />
                    (alternativt klistrar in denna länk: https://pyeongchangkampen.azurewebsites.net/user/reset?token={UrlEncoder.Default.Encode(token)}&id={user.Id})");
            }
            return Ok();
        }

        [HttpPost("{userId}/reset")]
        public async Task<IActionResult> EmailReset(string userId, [FromBody]UserForPasswordReset userDto)
        {
            var user = await _UserManager.FindByIdAsync(userId);
            if (user == null)
            {
                ModelState.AddModelError("UserId", "No user with that id");
            }

            _Logger.LogInformation($"Got request to reset password for {user.UserName}");

            var result = await _UserManager.ResetPasswordAsync(user, userDto.Token, userDto.Password);
            if(result.Succeeded)
            {
                return Ok();
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }


        private SignInForRetrieveDto CreateToken(ApplicationUser user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, user.UserName)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_TokenParameters.SigningKey));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _TokenParameters.Issuer,
                audience: _TokenParameters.Audience,
                claims: claims,
                signingCredentials: credentials);

            return new SignInForRetrieveDto { Username = user.UserName, Token = new JwtSecurityTokenHandler().WriteToken(token) };
        }


        private void AddErrorsToModelState(IdentityResult result)
        {
            foreach(var error in result.Errors)
            {
                ModelState.AddModelError(error.Code, error.Description);
            }
        }
    }
}

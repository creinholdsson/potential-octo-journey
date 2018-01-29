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
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Controllers
{
    [Route("/api/auth")]
    public class AuthenticationController : Controller
    {
        private TokenConfigurationParameters _TokenParameters;
        private UserManager<ApplicationUser> _UserManager;
        private SignInManager<ApplicationUser> _SignInManager;
        private ILogger<AuthenticationController> _Logger;

        public AuthenticationController(IOptions<TokenConfigurationParameters> tokenParameters,
                    UserManager<ApplicationUser> userManager,
                    SignInManager<ApplicationUser> signInManager,
                    ILogger<AuthenticationController> logger)
        {
            _TokenParameters = tokenParameters.Value;
            _UserManager = userManager;
            _SignInManager = signInManager;
            _Logger = logger;
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
            };
            var creationsResult = await _UserManager.CreateAsync(user, userDto.Password);
            if (creationsResult.Succeeded)
            {
                return Ok(CreateToken(user));
            }
            else
            {
                AddErrorsToModelState(creationsResult);
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
                return Ok("User added to role");
            }
            return BadRequest(result.Errors);
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

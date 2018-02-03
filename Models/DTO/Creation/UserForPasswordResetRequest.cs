using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models.DTO.Creation
{
    public class UserForPasswordResetRequest
    {
        [EmailAddress]
        [Required]
        public string Email { get; set; }
    }
}

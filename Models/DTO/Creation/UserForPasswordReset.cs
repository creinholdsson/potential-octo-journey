using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models.DTO.Creation
{
    public class UserForPasswordReset
    {
        public string Token { get; set; }
        public string Password { get; set; }
    }
}

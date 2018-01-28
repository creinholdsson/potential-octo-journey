using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models.DTO.Retrieve
{
    public class UserForRetrieve
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public int TotalPoints { get; set; }
    }
}

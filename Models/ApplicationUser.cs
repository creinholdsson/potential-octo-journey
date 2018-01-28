using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models
{
    public class ApplicationUser: IdentityUser
    {
        public ICollection<Bet> Bets { get; set; }

        [NotMapped]
        public int TotalPoints { get; set; }

        [NotMapped]
        public int Rank { get; set; }
    }
}

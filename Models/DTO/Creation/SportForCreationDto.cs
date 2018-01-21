using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PyeongchangKampen.Models.DTO.Creation
{
    public class SportForCreationDto
    {
        [Required]
        public string Name { get; set; }
        public string Icon { get; set; }
    }
}

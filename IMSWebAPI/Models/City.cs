using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class City
    {
        public City()
        {
            Districts = new HashSet<District>();
        }

        public short Id { get; set; }
        public string Name { get; set; } = null!;

        public virtual ICollection<District> Districts { get; set; }
    }
}

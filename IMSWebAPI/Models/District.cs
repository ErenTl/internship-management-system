using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class District
    {
        public District()
        {
            Addresses = new HashSet<Address>();
        }

        public int Id { get; set; }
        public short CityId { get; set; }
        public string Name { get; set; } = null!;

        public virtual City City { get; set; } = null!;
        public virtual ICollection<Address> Addresses { get; set; }
    }
}

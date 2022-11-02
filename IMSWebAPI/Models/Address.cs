using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class Address
    {
        public Address()
        {
            Companies = new HashSet<Company>();
            Internships = new HashSet<Internship>();
        }

        public long Id { get; set; }
        public int DistrictId { get; set; }
        public string AddressInfo { get; set; } = null!;

        public virtual District? District { get; set; } = null!;
        public virtual ICollection<Company>? Companies { get; set; }
        public virtual ICollection<Internship>? Internships { get; set; }
    }
}

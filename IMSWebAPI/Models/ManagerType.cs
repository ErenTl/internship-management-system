using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class ManagerType
    {
        public ManagerType()
        {
            Internships = new HashSet<Internship>();
        }

        public short Id { get; set; }
        public string Type { get; set; } = null!;

        public virtual ICollection<Internship> Internships { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class InternshipType
    {
        public InternshipType()
        {
            Internships = new HashSet<Internship>();
        }

        public short Id { get; set; }
        public string Type { get; set; } = null!;

        public virtual ICollection<Internship> Internships { get; set; }
    }
}

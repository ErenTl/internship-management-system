using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class Company
    {
        public Company()
        {
            CompanyFields = new HashSet<CompanyField>();
            Internships = new HashSet<Internship>();
        }

        public long Id { get; set; }
        public string FormalName { get; set; } = null!;
        public long AddressId { get; set; }
        public string Telephone { get; set; } = null!;
        public string? Fax { get; set; }
        public string Email { get; set; } = null!;

        public virtual Address Address { get; set; } = null!;
        public virtual ICollection<CompanyField> CompanyFields { get; set; }
        public virtual ICollection<Internship> Internships { get; set; }
    }
}

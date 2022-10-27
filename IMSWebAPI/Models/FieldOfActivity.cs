using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class FieldOfActivity
    {
        public FieldOfActivity()
        {
            CompanyFields = new HashSet<CompanyField>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;

        public virtual ICollection<CompanyField> CompanyFields { get; set; }
    }
}

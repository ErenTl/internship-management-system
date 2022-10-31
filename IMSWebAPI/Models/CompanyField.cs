using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class CompanyField
    {
        public long Id { get; set; }
        public long CompanyId { get; set; }
        public int FieldId { get; set; }

        public virtual Company? Company { get; set; } = null!;
        public virtual FieldOfActivity? Field { get; set; } = null!;
    }
}

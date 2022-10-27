using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class Ime
    {
        public long Id { get; set; }
        public long InternshipId { get; set; }
        public string Iban { get; set; } = null!;

        public virtual Internship Internship { get; set; } = null!;
    }
}

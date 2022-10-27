using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class InternshipDocControl
    {
        public int Id { get; set; }
        public long InternshipId { get; set; }
        public string InternshipsBookPath { get; set; } = null!;
        public string EvulationFormPath { get; set; } = null!;
        public bool? Accepted { get; set; }

        public virtual Internship Internship { get; set; } = null!;
    }
}

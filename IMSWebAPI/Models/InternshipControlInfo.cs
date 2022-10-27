using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class InternshipControlInfo
    {
        public int Id { get; set; }
        public long InternshipId { get; set; }
        public string InfoMessage { get; set; } = null!;

        public virtual Internship Internship { get; set; } = null!;
    }
}

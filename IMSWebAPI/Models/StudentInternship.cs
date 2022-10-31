using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class StudentInternship
    {
        public long Id { get; set; }
        public long StudentId { get; set; }
        public long InternId { get; set; }

        public virtual Internship? Intern { get; set; } = null!;
        public virtual Student? Student { get; set; } = null!;
    }
}

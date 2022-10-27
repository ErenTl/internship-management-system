using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class InternshipExam
    {
        public int Id { get; set; }
        public long InternshipId { get; set; }
        public long TeacherId { get; set; }
        public DateOnly ExamTime { get; set; }
        public bool? Passed { get; set; }
        public short AcceptedWorkDay { get; set; }

        public virtual Internship Internship { get; set; } = null!;
        public virtual Teacher Teacher { get; set; } = null!;
    }
}

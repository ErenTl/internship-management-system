using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class Teacher
    {
        public Teacher()
        {
            Commissions = new HashSet<Commission>();
            InternshipExams = new HashSet<InternshipExam>();
        }

        public long UserId { get; set; }
        public string RegistrationNumber { get; set; } = null!;

        public virtual User? User { get; set; } = null!;
        public virtual ICollection<Commission> Commissions { get; set; }
        public virtual ICollection<InternshipExam> InternshipExams { get; set; }
    }
}

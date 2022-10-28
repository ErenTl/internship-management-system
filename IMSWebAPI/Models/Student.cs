using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class Student
    {
        public Student()
        {
            StudentInternships = new HashSet<StudentInternship>();
        }

        public long UserId { get; set; }
        public string StudentNumber { get; set; } = null!;

        public virtual User? User { get; set; } = null!;
        public virtual ICollection<StudentInternship> StudentInternships { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class Internship
    {
        public Internship()
        {
            Imes = new HashSet<Ime>();
            InternshipControlInfos = new HashSet<InternshipControlInfo>();
            InternshipDocControls = new HashSet<InternshipDocControl>();
            InternshipExams = new HashSet<InternshipExam>();
            StudentInternships = new HashSet<StudentInternship>();
        }

        public long Id { get; set; }
        public long AddressId { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime? EndingDate { get; set; }
        public int WorkDay { get; set; }
        public short InternshipType { get; set; }
        public bool Sgk { get; set; }
        public bool _25age { get; set; }
        public bool Gss { get; set; }
        public bool StateContribution { get; set; }
        public bool AutumnPeriod { get; set; }
        public short Manager { get; set; }
        public long? CompanyId { get; set; }

        public virtual Address Address { get; set; } = null!;
        public virtual Company? Company { get; set; }
        public virtual InternshipType? InternshipTypeNavigation { get; set; } = null!;
        public virtual ManagerType? ManagerNavigation { get; set; } = null!;
        public virtual ICollection<Ime>? Imes { get; set; }
        public virtual ICollection<InternshipControlInfo>? InternshipControlInfos { get; set; }
        public virtual ICollection<InternshipDocControl>? InternshipDocControls { get; set; }
        public virtual ICollection<InternshipExam>? InternshipExams { get; set; }
        public virtual ICollection<StudentInternship>? StudentInternships { get; set; }
    }
}

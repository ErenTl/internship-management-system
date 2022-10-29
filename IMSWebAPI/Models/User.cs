using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class User
    {
        public User()
        {
            Admins = new HashSet<Admin>();
        }

        public long Id { get; set; }
        public short DepartmentId { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Telephone { get; set; } = null!;
        public string Tc { get; set; } = null!;
        public DateOnly? LastLogin { get; set; }

        public virtual Department? Department { get; set; } = null!;
        public virtual Student? Student { get; set; }
        public virtual Teacher? Teacher { get; set; }
        public virtual ICollection<Admin> Admins { get; set; }
    }
}

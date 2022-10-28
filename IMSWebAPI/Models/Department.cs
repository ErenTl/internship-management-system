using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class Department
    {
        public Department()
        {
            Users = new HashSet<User>();
        }

        public short Id { get; set; }
        public short FacultyId { get; set; }
        public string Name { get; set; } = null!;

        public virtual Faculty? Faculty { get; set; } = null!;
        public virtual ICollection<User> Users { get; set; }
    }
}

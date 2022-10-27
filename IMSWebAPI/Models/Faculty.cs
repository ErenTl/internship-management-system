using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class Faculty
    {
        public Faculty()
        {
            Departments = new HashSet<Department>();
        }

        public short Id { get; set; }
        public string Name { get; set; } = null!;

        public virtual ICollection<Department> Departments { get; set; }
    }
}

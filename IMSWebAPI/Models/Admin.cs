using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class Admin
    {
        public short Id { get; set; }
        public long UserId { get; set; }
        public bool SuperAdmin { get; set; }

        public virtual User User { get; set; } = null!;
    }
}

using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class Commission
    {
        public short Id { get; set; }
        public long TeacherId { get; set; }

        public virtual Teacher Teacher { get; set; } = null!;
    }
}

using System;
using System.Collections.Generic;

namespace IMSWebAPI.Models
{
    public partial class Announcement
    {
        public long Id { get; set; }
        public string Title { get; set; } = null!;
        public string Content { get; set; } = null!;
        public DateOnly Date { get; set; }
    }
}

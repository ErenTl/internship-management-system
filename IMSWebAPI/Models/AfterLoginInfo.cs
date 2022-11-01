namespace IMSWebAPI.Models
{
    public class AfterLoginInfo
    {
        public User? user { get; set; }
        public string id { get; set; }
        public string role { get; set; }
        public string AccessToken { get; set; }
        public DateOnly? previousLogin { get; set; }
    }
}

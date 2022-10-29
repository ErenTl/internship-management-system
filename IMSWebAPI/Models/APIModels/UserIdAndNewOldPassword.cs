namespace IMSWebAPI.Models.APIModels
{
    public class UserIdAndNewOldPassword
    {
        public long userId { get; set; }
        public string oldPassword { get; set; }
        public string newPassword { get; set; }
    }
}

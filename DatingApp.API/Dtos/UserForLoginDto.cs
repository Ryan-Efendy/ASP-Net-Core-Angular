using System.ComponentModel.DataAnnotations;
namespace DatingApp.API.Dtos {
    public class UserForLoginDto {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength (8, MinimumLength = 4, ErrorMessage = "Password are must between 4-8 characters")]
        public string Password { get; set; }
    }
}
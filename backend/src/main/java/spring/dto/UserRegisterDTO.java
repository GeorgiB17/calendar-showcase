package spring.dto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = false)
public class UserRegisterDTO {
    private String username;
    private String password;
    private String email;
    private String profilePic;
    private String name;

    public UserRegisterDTO() {}

    public UserRegisterDTO(String username, String password, String email, String profilePic, String name) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.profilePic = profilePic;
        this.name = name;
        
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getProfilePic() {
        return profilePic;
    }
    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    
}

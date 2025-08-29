package backend.entities;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    @Column(name = "user_id")
    private Long id;
    private String username;
    private String email;
    private String password;
    private String profilePic;
    
    
    @JsonManagedReference
    @OneToMany(mappedBy = "creator")
    private Set<EventEntity> createdEvents= new HashSet<>();

    @ManyToMany(mappedBy = "participants")
    private Set<EventEntity> eventsParticipated= new HashSet<>();

    public UserEntity() {
    
    }

    public UserEntity(Long id, String username, String email, String password, String profilePic) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profilePic = profilePic;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    
    
    //@//JsonIgnore
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getProfilePic() {
        return profilePic;
    }
    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }
    public Set<EventEntity> getCreatedEvents() {
        return createdEvents;
    }
    public void setCreatedEvents(Set<EventEntity> createdEvents) {
        this.createdEvents = createdEvents;
    }

    public Set<EventEntity> getEventsParticipated() {
        return eventsParticipated;
    }
    public void setEventsParticipated(Set<EventEntity> eventsParticipated) {
        this.eventsParticipated = eventsParticipated;
    }
   


}


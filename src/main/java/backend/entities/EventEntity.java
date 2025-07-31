package backend.entities;

import java.time.LocalDateTime;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "events")
public class EventEntity {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "event_id")
private Long id;
private String title;
private String description;
private LocalDateTime time;
private String location;

@ManyToOne
@JoinColumn(name = "user_id", nullable = false)
private UserEntity creator;

    
@ManyToMany
@JoinTable(
    name = "event_participants",
    joinColumns = @JoinColumn(name = "event_id"),
    inverseJoinColumns = @JoinColumn(name = "user_id")
)
private Set<UserEntity> participants;

public EventEntity() {
}
public EventEntity(Long id, String title, String description, LocalDateTime time, String location, UserEntity creator) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.time = time;
    this.location = location;
    this.creator = creator;
}
public Long getId() {
    return id;
}
public void setId(Long id) {
    this.id = id;
}

public String getTitle() {
    return title;


}
public void setTitle(String title) {
    this.title = title;}
public String getDescription() {
    return description;
}
public void setDescription(String description) {
    this.description = description;
}
public LocalDateTime getTime() {
    return time;
}
public void setTime(LocalDateTime time) {
    this.time = time;
}
public String getLocation() {
    return location;
}
public void setLocation(String location) {
    this.location = location;
}
public UserEntity getCreator() {
    return creator;
}
public void setCreator(UserEntity creator) {
    this.creator = creator;
}
public Set<UserEntity> getParticipants() {
    return participants;
}
public void setParticipants(Set<UserEntity> participants) {
    this.participants = participants;
}


}

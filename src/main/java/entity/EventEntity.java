package entity;

import java.time.LocalDateTime;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "events")
public class EventEntity {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long event_id;
private String title;
private String description;
private LocalDateTime time;
private String location;

@OneToOne
@JoinColumn(name = "user_id", nullable = false)
private UserEntity creator;

@ManyToMany
@JoinTable(
    name = "event_participants",
    joinColumns = @JoinColumn(name = "event_id"),
    inverseJoinColumns = @JoinColumn(name = "user_id")
)
private Set<UserEntity> participants;



}

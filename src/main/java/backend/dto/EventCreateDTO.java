package backend.dto;

import java.time.LocalDateTime;

public class EventCreateDTO {
    private String title;
     private String description;
     private LocalDateTime time;
       private String location;
       private long creatorID;
       private String duration;


public EventCreateDTO() {}

    public EventCreateDTO(String title, String description, LocalDateTime time, String location, long creatorID, String duration) {
        this.title = title;
        this.description = description;
        this.time = time;
        this.location = location;
        this.creatorID = creatorID;
        this.duration = duration;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

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

    public long getCreatorID() {
        return creatorID;
    }

    public void setCreatorID(long creatorID) {
        this.creatorID = creatorID;
    }

    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }
}

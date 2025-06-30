package service;
import java.time.LocalDateTime;

public class Event {
    private final LocalDateTime eventDateTime;
    private final String eventName;
    private final String eventDescription;
    private final String eventLocation;
    private final User eventCreator;

    public Event(LocalDateTime eventDateTime, String eventName, String eventDescription, String eventLocation, User eventCreator) {
        this.eventDateTime = eventDateTime;
        this.eventName = eventName;
        this.eventDescription = eventDescription;
        this.eventLocation = eventLocation;
        this.eventCreator = eventCreator;
    }

    public LocalDateTime getEventDateTime() {
        return eventDateTime;
    }

    public String getEventName() {
        return eventName;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public String getEventLocation() {
        return eventLocation;
    }

    public User getEventCreator() {
        return eventCreator;
    }
}


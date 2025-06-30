package service;
import java.util.List;

public class User {
    String name;
    String email;
    String password;
    List<Event> events;

    public User(String name, String email, String password, List<Event> events) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.events = events;
    }
    public String getName() {
        return name;
    }
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    public List<Event> getEvents() {
        return events;
    }
}

package backend.controllers;


import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.dto.EventCreateDTO;
import backend.entities.EventEntity;
import backend.entities.UserEntity;
import backend.services.EventService;
import backend.services.UserService;


@RestController
@RequestMapping("/api/events")
public class EventController {


    private final EventService eventService;
    private final UserService userService;



    public EventController(EventService eventService, UserService userService) {
        this.eventService = eventService;
        this.userService = userService;
    }

    

    @GetMapping("/{id}")
    public ResponseEntity<EventEntity> getEventById(@PathVariable Long id) {
        return eventService.findEventById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/test")
    public ResponseEntity<String> testEndpoint() {
        return ResponseEntity.ok("Event Controller is working!");
    }
    
    @PostMapping("/create")
    public ResponseEntity<String> createEvent(@RequestBody EventCreateDTO dto) {
        if (dto.getTitle() == null || dto.getDescription() == null || dto.getTime() == null || dto.getLocation() == null) {
            return ResponseEntity.badRequest().body("All input fields are required.");
        }
        
        EventEntity event = new EventEntity();
        
        UserEntity creator = userService.findUserById(dto.getCreatorID())
                .orElseThrow(() -> new IllegalArgumentException("Invalid creator ID"));
        
        
                event.setTitle(dto.getTitle());

        event.setDescription(dto.getDescription());
        event.setTime(dto.getTime());
        event.setLocation(dto.getLocation());
        event.setCreator(creator);
        event.setDuration(dto.getDuration());
        eventService.saveEvent(event);
        
        return ResponseEntity.ok("Event created successfully!");
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long id) {
        if (!eventService.findEventById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        eventService.deleteEvent(id);
        return ResponseEntity.ok("Event deleted successfully!");
    }
    @GetMapping("/all")
    public ResponseEntity<List<EventEntity>> getAllEvents() {
        List<EventEntity> events = eventService.findAllEvents();
        return ResponseEntity.ok(events);
    }

    
}



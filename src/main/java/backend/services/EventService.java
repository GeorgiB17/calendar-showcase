package backend.services;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import backend.entities.EventEntity;
import backend.entities.UserEntity;
import backend.repositories.EventRepository;

@Service
public class EventService {
    
    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }
    


    public Optional<EventEntity> findEventById(Long id) {
        return eventRepository.findById(id);
    }
    public Optional<EventEntity> findEventByTitle(String title) {
        return eventRepository.findByTitle(title);
    }
    public List<EventEntity> findEventsByCreator(UserEntity creator) {
        return eventRepository.findByCreator(creator);
    }
    public List<EventEntity> findEventsByParticipant(UserEntity participant) {
        return eventRepository.findByParticipantsContains(participant);
    }
    public EventEntity saveEvent(EventEntity event) {
        return eventRepository.save(event);
    }
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
    public List<EventEntity> findAllEvents() {
        return eventRepository.findAll();
    }



    
    


}


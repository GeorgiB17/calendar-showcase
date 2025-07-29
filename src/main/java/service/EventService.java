package service;


import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entity.EventEntity;
import entity.UserEntity;
import repository.EventRepository;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;
    
    public Optional<EventEntity> findEventById(Long id) {
        return eventRepository.findById(id);
    }
    public Optional<EventEntity> findEventByTitle(String title) {
        return eventRepository.findByTitle(title);
    }
    public Set<EventEntity> findEventsByCreator(UserEntity creator) {
        return eventRepository.findByCreator(creator);
    }
    public Set<EventEntity> findEventsByParticipant(UserEntity participant) {
        return eventRepository.findByParticipantsContains(participant);
    }
    public EventEntity saveEvent(EventEntity event) {
        return eventRepository.save(event);
    }
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
    public Set<EventEntity> findAllEvents() {
        return Set.copyOf(eventRepository.findAll());
    }
    


}


package backend.repositories;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.entities.EventEntity;
import backend.entities.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    
   
    Optional<UserEntity> findByUsername(String username);
    Optional<UserEntity> findByEmail(String email);
    Set<UserEntity> findByCreatedEvents(EventEntity event);
    Set<UserEntity> findByEventsParticipated(EventEntity event);
}

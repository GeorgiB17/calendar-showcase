package backend.repositories;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.entities.EventEntity;
import backend.entities.UserEntity;
@Repository
public interface EventRepository extends JpaRepository<EventEntity, Long> {


    
    Optional<EventEntity> findByTitle(String title);

    

    Set<EventEntity> findByCreator(UserEntity creator);
    Set<EventEntity> findByParticipantsContains(UserEntity participant);
}
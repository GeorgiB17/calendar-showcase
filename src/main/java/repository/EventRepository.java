package repository;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.EventEntity;
import entity.UserEntity;
@Repository
public interface EventRepository extends JpaRepository<EventEntity, Long> {
    
    Optional<EventEntity> findByTitle(String title);
    Optional<EventEntity> findById(Long id);

    Set<EventEntity> findByCreator(UserEntity creator);
    Set<EventEntity> findByParticipantsContains(UserEntity participant);
}
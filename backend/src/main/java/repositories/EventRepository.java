package repositories;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entities.EventEntity;
import entities.UserEntity;

@Repository
public interface EventRepository extends JpaRepository<EventEntity, Long> {
    Optional<EventEntity> findByTitle(String title);
    List<EventEntity> findByCreator(UserEntity creator);
    List<EventEntity> findByParticipantsContains(UserEntity participant);
}
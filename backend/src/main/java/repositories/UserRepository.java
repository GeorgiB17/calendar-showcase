package repositories;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entities.EventEntity;
import entities.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    @Override
    Optional<UserEntity> findById(Long id);
    Optional<UserEntity> findByUsername(String username);
    Optional<UserEntity> findByEmail(String email);
    List<UserEntity> findByCreatedEvents(EventEntity event);
    List<UserEntity> findByEventsParticipated(EventEntity event);
    
}


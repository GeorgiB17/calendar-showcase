package backend.services;


import java.util.Optional;

import org.springframework.stereotype.Service;

import backend.entities.UserEntity;
import backend.repositories.UserRepository;


@Service
public class UserService {
   
    
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public Optional<UserEntity> findUserByIdOrUsername(Long id, String username) {
        if (id != null) {
            return userRepository.findById(id);
        } else if (username != null) {
            return userRepository.findByUsername(username);
        }
        return Optional.empty();
    }

    public void setUserPassword(UserEntity user, String password) {
        user.setPassword(password);
        userRepository.save(user);
    }
    

}

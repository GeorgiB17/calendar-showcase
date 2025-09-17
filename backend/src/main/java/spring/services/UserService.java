package spring.services;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import spring.entities.UserEntity;
import spring.repositories.UserRepository;


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
   public boolean checkPassword(String rawPassword, String storedPassword) {
        return rawPassword.equals(storedPassword);
    }

    public void setUserPassword(UserEntity user, String password) {
        user.setPassword(password);
        userRepository.save(user);
    }
    public List<UserEntity> findAllUsers() {
        return userRepository.findAll();
    }
    public Optional<UserEntity> findUserById(Long id) {
        return userRepository.findById(id);
    }
    public Optional<UserEntity> findUserByUsername(String username) {
        return userRepository.findByUsername(username);

    }
    public UserEntity createUser(UserEntity user) {
        return userRepository.save(user);
    }
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
     public void saveUser(UserEntity user) {
        userRepository.save(user);
     }
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    public void updateUserProfilePic(Long id, String profilePicUrl) {
        Optional<UserEntity> userOpt = userRepository.findById(id);
        if (userOpt.isPresent()) {
            UserEntity user = userOpt.get();
            user.setProfilePic(profilePicUrl);
            userRepository.save(user);
        }
    }
    

    

    



    
}

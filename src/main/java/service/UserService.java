package service;


import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entity.UserEntity;
import repository.UserRepository;


@Service
public class UserService {
   
    
    private UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

   


    public Optional<UserEntity> findUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<UserEntity> findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Optional<UserEntity> findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    public UserEntity saveUser(UserEntity user) {
        return userRepository.save(user);
    }
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    public Optional<UserEntity> findUserByIdOrUsername(Long id, String username) {
        if (id != null) {
            return userRepository.findById(id);
        } else if (username != null) {
            return userRepository.findByUsername(username);
        }
        return Optional.empty();
    }
     public Set<UserEntity> findAllUsers() {
        return Set.copyOf(userRepository.findAll());
    }
    public void setUserPassword(UserEntity user, String password) {
        user.setPassword(password);
        userRepository.save(user);
    }
    

}

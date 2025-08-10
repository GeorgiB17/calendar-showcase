package backend.controllers;



import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.dto.UserRegisterDTO;
import backend.entities.UserEntity;
import backend.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

     @GetMapping("/all")
    public ResponseEntity<List<UserEntity>> getAllUsers() {
        List<UserEntity> users = userService.findAllUsers();
        return ResponseEntity.ok(users);
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserRegisterDTO dto) {
        if (dto.getUsername() == null || dto.getPassword() == null || dto.getEmail() == null) {
            return ResponseEntity.badRequest().body("All input fields are required.");
        }
        if (userService.findUserByUsername(dto.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists.");
        }
        
        UserEntity user = new UserEntity();
        user.setUsername(dto.getUsername());
        user.setPassword(dto.getPassword());
        user.setFullName(dto.getFullName());
        user.setEmail(dto.getEmail());
        
        userService.saveUser(user);
        
        return ResponseEntity.ok("User registered successfully!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        if (!userService.findUserById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        userService.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully!");
    }
     @GetMapping("/{id}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable Long id) {
        return userService.findUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());

    }
}


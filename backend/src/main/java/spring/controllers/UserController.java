package spring.controllers;


import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import spring.dto.LoginDTO;
import spring.dto.UserRegisterDTO;
import spring.entities.UserEntity;
import spring.services.UserService;


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
        if (dto.getUsername() == null || dto.getPassword() == null || dto.getEmail() == null || dto.getName() == null) {
            return ResponseEntity.badRequest().body("All input fields are required.");
        }
        if (userService.findUserByUsername(dto.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists.");
        }
        
        UserEntity user = new UserEntity();
        user.setUsername(dto.getUsername());
        user.setPassword(dto.getPassword());
        user.setProfilePic(dto.getProfilePic());
        user.setEmail(dto.getEmail());
        user.setName(dto.getName());
        
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

    @GetMapping("/username/{username}") 
    public ResponseEntity<UserEntity> getUserByUsername(@PathVariable String username) {
        return userService.findUserByUsername(username)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
        @PostMapping("/login")
        public ResponseEntity<?> login(@RequestBody LoginDTO request) {
            Optional<UserEntity> optionalUser = userService.findUserByUsername(request.getUsername());

            if (optionalUser.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }

            UserEntity user = optionalUser.get();

            
            if (!userService.checkPassword(request.getPassword(), user.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }

            
            return ResponseEntity.ok(user);
        }

        @PatchMapping("/{id}/uploadProfilePic")
public ResponseEntity<String> updateProfilePic(
        @PathVariable Long id,
        @RequestParam("file") MultipartFile file) {

    Optional<UserEntity> user = userService.findUserById(id);
    if (user.isEmpty()) {
        return ResponseEntity.status(404).body("User not found");
    }

    try {
        // 1. Save file to server
        String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path uploadPath = Paths.get("uploads/");
        Files.createDirectories(uploadPath); // make sure folder exists
        Path filePath = uploadPath.resolve(filename);
        Files.write(filePath, file.getBytes());

        // 2. Update user's profilePicUrl
        String fileUrl = "/uploads/" + filename; // or full URL if needed
        userService.updateUserProfilePic(id, fileUrl);

        // 3. Return success
        return ResponseEntity.ok("Profile picture updated successfully");

    } catch (Exception e) {
        return ResponseEntity.status(500).body("Failed to upload profile picture");
    }
}

        @GetMapping("/picture/{id}")
        public ResponseEntity<String> getProfilePic(@PathVariable Long id) {
            Optional<UserEntity> userOpt = userService.findUserById(id);
            if (userOpt.isEmpty()) {
                return ResponseEntity.status(404).body("User not found");
            }
            String profilePicUrl = userOpt.get().getProfilePic();
            return ResponseEntity.ok(profilePicUrl);
        }
   
}


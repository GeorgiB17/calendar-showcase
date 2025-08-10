package backend.startup;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import backend.entities.UserEntity;
import backend.repositories.UserRepository;
@Component
public class Startup implements CommandLineRunner {

    private final  UserRepository userRepository;
    
    public Startup(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        if(userRepository.findByUsername("Gogi").isEmpty()) {
            UserEntity user = new UserEntity();
            user.setUsername("Gogi");
            user.setEmail("gogi@abv.bg");
            user.setPassword("password");
            userRepository.save(user);
            System.out.println("Default user created: " + user.getUsername()); //TODO: Logger
        }
    }
    
}



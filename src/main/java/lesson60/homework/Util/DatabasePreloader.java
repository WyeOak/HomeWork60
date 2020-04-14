package lesson60.homework.Util;

import lesson60.homework.Model.Publication;
import lesson60.homework.Repository.PublicationRepository;
import lesson60.homework.Model.User;
import lesson60.homework.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Configuration
public class DatabasePreloader {
    private static final Random r = new Random();
    private static final BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, PublicationRepository publicationRepository) {
            userRepository.deleteAll();
            publicationRepository.deleteAll();

            return(args) -> save(userRepository, publicationRepository);
    }

    private void save(UserRepository userRepository, PublicationRepository publicationRepository){
        List<User> users = Arrays.asList(users());
        userRepository.saveAll(users);

        int publicationAmount = r.nextInt(20) + 10;

        for(int i = 0; i < publicationAmount; i++){
            String username = users.get(r.nextInt(users.size())).getUsername();

            User user = userRepository.findByUsername(username).get();

            Publication p = new Publication(user, Generator.makeName()+".img",Generator.makeDescription());
            publicationRepository.save(p);
        }
    }

    private User[] users() {
        return new User[]{
                new User("markus", crypt.encode("markus123")),
                new User("nikita", crypt.encode("nikita123")),
                new User("tawanna", crypt.encode("tawanna123")),
                new User("brunilda", crypt.encode("brunilda123")),
        };
    }
}

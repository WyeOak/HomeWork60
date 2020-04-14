package lesson60.homework.Services;

import lesson60.homework.Repository.CommentRepository;
import lesson60.homework.Repository.PublicationRepository;
import lesson60.homework.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PublicationRepository publicationRepository;
}


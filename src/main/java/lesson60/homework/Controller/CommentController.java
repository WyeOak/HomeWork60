package lesson60.homework.Controller;

import lesson60.homework.Repository.CommentRepository;
import lesson60.homework.Services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentController {
    @Autowired
    CommentRepository commentRepository;

    final private CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }
}

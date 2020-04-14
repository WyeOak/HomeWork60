package lesson60.homework.Repository;

import lesson60.homework.Model.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, String> {
}
package lesson60.homework.Repository;

import lesson60.homework.Model.Like;
import org.springframework.data.repository.CrudRepository;

public interface LikeRepository extends CrudRepository<Like, String> {
}

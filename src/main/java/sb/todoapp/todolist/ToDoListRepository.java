package sb.todoapp.todolist;

import org.springframework.data.repository.CrudRepository;

public interface ToDoListRepository extends CrudRepository<ToDoList, Long> {
}

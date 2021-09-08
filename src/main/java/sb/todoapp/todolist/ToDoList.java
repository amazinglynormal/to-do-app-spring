package sb.todoapp.todolist;

import sb.todoapp.todo.ToDo;
import sb.todoapp.user.User;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "ToDoList")
public class ToDoList {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "toDoList")
    private Set<ToDo> toDos;

    protected ToDoList() {
    }

    public ToDoList(Long id, String title) {
        this.id = id;
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}

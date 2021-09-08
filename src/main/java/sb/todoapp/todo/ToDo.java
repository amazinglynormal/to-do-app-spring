package sb.todoapp.todo;

import sb.todoapp.todolist.ToDoList;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "ToDo")
@Table(name = "TO_DO_ITEM")
public class ToDo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;


    @ManyToOne
    @JoinColumn(name = "to_do_list_id")
    private ToDoList toDoList;

    protected ToDo() {
    }

    public ToDo(Long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

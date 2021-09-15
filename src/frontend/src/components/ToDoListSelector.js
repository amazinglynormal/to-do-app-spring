import { Button, List } from "antd";
import { Link } from "react-router-dom";

export const ToDoListSelector = ({ usersToDoLists }) => {
  return (
    <List
      size="large"
      header={<h2>Your To-Do Lists</h2>}
      footer={<Button type="primary">Create new To-Do List</Button>}
      bordered
      dataSource={usersToDoLists}
      renderItem={(item) => (
        <List.Item>
          <Link to={`/todolist/${item.id}`}>{item.title}</Link>
        </List.Item>
      )}
    />
  );
};

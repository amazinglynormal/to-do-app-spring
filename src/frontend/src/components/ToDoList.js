import { List } from "antd";

const data = {};

export const ToDoList = () => {
  return (
    <List
      itemLayout="horizontal"
      data={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  );
};

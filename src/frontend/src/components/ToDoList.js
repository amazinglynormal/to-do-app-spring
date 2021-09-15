import { Button, List } from "antd";

export const ToDoList = () => {
  const data = [
    {
      title: "test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "test2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const deleteButtonClicked = () => {
    console.log("delete button clicked");
  };

  return (
    <>
      <div>
        <h1>List Title</h1>
        <Button danger onClick={deleteButtonClicked}>
          Delete
        </Button>
      </div>
      <List
        itemLayout="horizontal"
        footer={<Button type="primary">Add new To-Do</Button>}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </>
  );
};

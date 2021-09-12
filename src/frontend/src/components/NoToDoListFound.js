import { Button, Empty } from "antd";

export const NoToDoListFound = () => {
  return (
    <Empty description={<span>No To-Do Lists Found</span>}>
      <Button type="primary">Create list</Button>
    </Empty>
  );
};

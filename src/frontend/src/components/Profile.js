import React from "react";
import { Button, List } from "antd";

import { Container } from "./Container";

const Profile = () => {
  const data = [{ name: "John Doe", email: "johndoe@example.com" }];
  return (
    <Container>
      <h1>Profile Page</h1>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(user) => (
          <List.Item
            actions={[
              <Button key="edit" onClick={() => console.log("edit clicked")}>
                edit
              </Button>,
            ]}
          >
            <List.Item.Meta title={user.name} description="Name" />
            <List.Item.Meta title={user.email} description="Email" />
            <List.Item.Meta title={"********"} description="Password" />
          </List.Item>
        )}
      />
      <Button
        danger
        type="primary"
        onClick={() => console.log("delete account clicked")}
      >
        Delete Account
      </Button>
    </Container>
  );
};

export default Profile;

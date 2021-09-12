import { useState } from "react";

import { Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="login">Log In</Menu.Item>
      <Menu.Item key="signup">Sign Up</Menu.Item>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
    </Menu>
  );
};

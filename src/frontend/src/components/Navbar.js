import { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/login">Log In</Link>
      </Menu.Item>
      <Menu.Item key="signup">
        <Link to="/signup">Sign Up</Link>
      </Menu.Item>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
    </Menu>
  );
};

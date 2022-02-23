import React from "react";
import { DownOutlined, MenuOutlined, StarFilled } from "@ant-design/icons";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
//flex for nav-bar
const style = {
  spacing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottom: "2px solid lightgrey",
    maxWidth:'100%'

  },
};
//Drop down menu
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="single scroll" href="www.google.com">
        Cakes
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="single scroll" href="www.google.com">
        CupCakes
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="single scroll" href="www.google.com">
        About
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="single scroll" href="www.google.com">
        Reviews
      </a>
    </Menu.Item>
  </Menu>
);

const NavBar = () => {
  return (
    <div style={style.spacing}>
      <StarFilled />
      <h1>GH GirlCakes</h1>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <MenuOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default NavBar;

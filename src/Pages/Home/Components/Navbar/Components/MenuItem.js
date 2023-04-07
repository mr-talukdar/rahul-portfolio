import React from "react";
import NavItem from "./NavItem";
import { CloseOutlined } from "@ant-design/icons";
function MenuItem({ showMenu, active }) {
  return (
    <ul
      className={
        active
          ? "flex text-2xl font-light flex-col items-center justify-center  backdrop-blur-md gap-8 left-1/4 bg-secondary/70 fixed inset-0 md:hidden"
          : "hidden"
      }
    >
      <CloseOutlined onClick={showMenu} />

      <NavItem text="About" href="#about"></NavItem>
      <NavItem text="Interests" href="#interests"></NavItem>
      <NavItem text="Blogs" href="#blogs"></NavItem>
    </ul>
  );
}

export default MenuItem;

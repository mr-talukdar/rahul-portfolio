import React, { useState } from "react";
import NavItem from "./Components/NavItem";
import MenuItem from "./Components/MenuItem";
import { MenuOutlined } from "@ant-design/icons";

function Navbar() {
  const [active, setActive] = useState(false);
  const showMenuHandler = () => {
    console.log(active);
    setActive(!active);
  };
  return (
    <div className="bg-secondary uppercase fixed font-bold z-0 text-white  w-full flex justify-between p-4 items-center">
      <div className="text-2xl ">
        <a href="/">Rahul Talukdar</a>
      </div>
      <nav>
        <div className=" right-6  md:hidden">
          <MenuOutlined onClick={showMenuHandler} />
        </div>
        <ul className=" hidden md:flex gap-8 p-6">
          <NavItem text="About" href="#about"></NavItem>
          <NavItem text="Interests" href="#interests"></NavItem>
          <NavItem text="Blogs" href="#blogs"></NavItem>
        </ul>
        <MenuItem showMenu={showMenuHandler} active={active} />
      </nav>
    </div>
  );
}

export default Navbar;

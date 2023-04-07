import React from "react";

function NavItem(props) {
  return (
    <li>
      <a href={props.href}>{props.text}</a>
    </li>
  );
}

export default NavItem;

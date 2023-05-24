import React from "react";
import { SidebarData } from "./data";
import logo from "../../assets/img/logo-black.png";

function Sidebar() {
  return (
    <div className="Sidebar">
      <img src={logo} className="logonav" alt="logo"></img>
      <ul className="SidebarList">
        {SidebarData.map((val) => {
          return (
            <li
              key={val.link}
              className="sidebarRow"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

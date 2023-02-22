import React from "react";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="side">
      <img src="/side-logo.jpg" className="side-logo" />
      <div className="menu">
        <div >
          <div className="sub-menu">
            <i className="fa-solid fa-house"></i>
            <p>Dashboard</p>
          </div>
          <div className="sub-menu">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <p>Fee management</p>
          </div>
        </div>
        <div className="sett">
        <div className="sub-menu setting">
          <i className="fa-solid fa-gear"></i>
          <p>Settings</p>
        </div>
        </div>
      </div>
    </div>
  );
}

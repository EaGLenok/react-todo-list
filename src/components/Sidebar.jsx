import React from "react";
import "../styles/sidebar.scss";

const Sidebar = () => {
  return (
    <div className="wrapper__sidebar">
      <div className="main__sidebar">
        <div className="sidebar__header">
          <h1>Projects</h1>
        </div>
        <div className="sidebar__buttons">
          <button className="sidebar__button_new-project">New Project</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

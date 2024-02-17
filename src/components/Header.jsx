import React from "react";
import "../styles/header.scss";
import list from "../assets/list.svg";

const Header = () => {
  return (
    <div className="wrapper-header">
      <div className="header__main">
        <img src={list} alt="list" />
        <h1>YourTodo</h1>
      </div>
    </div>
  );
};

export default Header;

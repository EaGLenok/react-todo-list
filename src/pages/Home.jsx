import React from "react";
import Task from "../components/Task";
import Header from "../components/Header";
import "../styles/home.scss";

import SideBar from "../components/Sidebar";
import PopUpCreate from "../components/PopUpCreate";

const Home = () => {
  const [popUp, setPopup] = React.useState(false);

  return (
    <div className="home-container">
      <div className="wrapper">
        <Header />
        <div className="sidebar__container">
          <SideBar />
          <div className="content">
            <div className="content__button__new-task">
              <button
                onClick={() => setPopup(true)}
                className="button__new-task"
              >
                New item
              </button>
              <Task />
            </div>
            <PopUpCreate popUp={popUp} setPopup={setPopup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

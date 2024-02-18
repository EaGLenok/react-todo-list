import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/task.scss";
import PopUpDetails from "../components/PopUpDetails";

const Task = () => {
  const tasks = useSelector((state) => state.task.items);
  const [popUp, setPopup] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const openPopUp = (index) => {
    setCurrentTask(tasks[index]);
    setPopup(true);
  };

  return (
    <div className="wrapper__tasks">
      <div className={popUp ? "overflow" : ""}>
        {popUp && <PopUpDetails task={currentTask} setPopup={setPopup} />}
      </div>
      {tasks.map((item, index) => (
        <div className="task" key={index}>
          <div className="task__name">
            <p>{item.title}</p>
            <button onClick={() => openPopUp(index)} className="task-details">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;

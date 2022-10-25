import React, { useState } from "react";

export default function EditTaskDesabled({
  task,
  setEdit,
  taskList,
  setTaskList,
}) {
  const [isTaskComplete, setIsTaskComplete] = useState(false);

  const deleteTask = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  return (
    <>
      <div className="contentCheckTask">
        <input
          className="checkTask"
          type="checkbox"
          onClick={() => setIsTaskComplete(!isTaskComplete)}
        ></input>
        <span className={isTaskComplete ? "taskIsComplete" : "task"}>
          {task.inputText}
        </span>
      </div>

      <div>
        {!isTaskComplete && (
          <button className="btn-edit" onClick={() => setEdit(true)}>
            Edit
          </button>
        )}
        <button className="btn-delete" onClick={() => deleteTask(task.id)}>
          Remove
        </button>
      </div>
    </>
  );
}

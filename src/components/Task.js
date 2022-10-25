import { useState } from "react";
import EditTaskDesabled from "./EditTaskDesabled";
import EditTaskEnabled from "./EditTaskEnabled";

export const Task = ({
  task,
  taskList,
  setTaskList,
  inputText,
  setInputText,
}) => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="listTask" id={task.id}>
        {edit ? (
          <EditTaskEnabled
            task={task}
            setEdit={setEdit}
            inputText={inputText}
            setInputText={setInputText}
            setTaskList={setTaskList}
            taskList={taskList}
          />
        ) : (
          <EditTaskDesabled
            task={task}
            setEdit={setEdit}
            setTaskList={setTaskList}
            taskList={taskList}
          />
        )}
      </div>
    </>
  );
};

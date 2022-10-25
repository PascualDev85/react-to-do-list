import { useState, useEffect } from "react";
import LOCAL_STORAGE_KEY from "../utils/data";

import { Form } from "./Form";
import { Task } from "./Task";

export const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storageTaskList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTaskList) {
      setTaskList(storageTaskList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    if (taskList.length === 0) {
      setShowForm(false);
    }
  }, [taskList]);

  return (
    <>
      <div>
        <div className="contentPrimary">
          <h1>To Do List</h1>
          <div className="contentForm">
            <Form
              setTaskList={setTaskList}
              taskList={taskList}
              inputText={inputText}
              setInputText={setInputText}
              setShowForm={setShowForm}
            />
          </div>
          <div className={showForm ? "contentList" : "contentEmpty"}>
            {taskList.map((e) => (
              <Task
                key={e.id}
                id={e.id}
                task={e}
                taskList={taskList}
                setTaskList={setTaskList}
                inputText={inputText}
                setInputText={setInputText}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

import { useState } from "react";

export const Form = ({
  setTaskList,
  taskList,
  setInputText,
  inputText,
  setShowForm,
}) => {
  const [showMessage, setShowMessage] = useState(false);

  const newTaskList = {
    id: Date.now(),
    inputText: inputText,
    completed: false,
  };

  const inputFomrHandler = ({ target }) => {
    console.log(target);
    setInputText(target.value);
    setShowMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      setShowMessage(true);
    } else {
      setTaskList([newTaskList, ...taskList]);
      setInputText("");
      // setShowMessage(true);
      setShowForm(true);
    }

    console.log(taskList);
  };

  return (
    <form onClick={handleSubmit}>
      <input
        type="text"
        className="todoList"
        placeholder="Add a Task"
        value={inputText}
        onChange={inputFomrHandler}
        autoComplete="off"
        maxLength={300}
      />
      <button className="addList">Add</button>
      {showMessage && <p className="message">Please enter a task</p>}
    </form>
  );
};

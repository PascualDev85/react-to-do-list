import { useState } from "react";

export default function EditTaskEnabled({
  task,
  setEdit,
  setTaskList,
  taskList,
}) {
  const [value, setValue] = useState(task.inputText);

  const handleChange = ({ target }) => {
    const text = target.value;
    setValue(text);
  };

  const upDateTaskList = (ediTaskList) => {
    const { id, inputText } = ediTaskList;

    const temp = [...taskList];
    const element = temp.find((item) => item.id === id);
    element.inputText = inputText;
    setTaskList(temp);
  };

  const handleClick = (e) => {
    e.preventDefault();
    upDateTaskList({
      id: task.id,
      inputText: value,
      completed: false,
    });
    setEdit(false);
  };

  return (
    <>
      <input
        className="inpt-task"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <div>
        <button className="btn-back" onClick={() => setEdit(false)}>
          Cancel
        </button>
        <button className="btn-save" onClick={handleClick}>
          Save
        </button>
      </div>
    </>
  );
}

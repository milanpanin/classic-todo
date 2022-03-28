import { useState } from "react";
import { useTodo, useUpdateTodo } from "./context/TodoContext";

const NewTodo = () => {
  const updateTodo = useUpdateTodo();
  const todoList = useTodo();

  const [todo, setTodo] = useState("");

  const onButtonClick = () => {
    const todoObj = {
      // id: todoList.at(-1).id ? todoList.at(-1).id + 1 : 0,
      id: Math.random(),
      content: todo,
      done: false,
    }

    const newList = [...todoList, todoObj];

    updateTodo(newList);
    setTodo("");
  };

  return (
    <section className="newTodo">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your new To-Do"
      />
      <button onClick={() => onButtonClick()}>Add To-Do</button>
    </section>
  );
};

export default NewTodo;

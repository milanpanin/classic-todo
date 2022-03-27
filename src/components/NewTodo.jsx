import { useState } from "react";

const NewTodo = () => {
  const [todo, setTodo] = useState("");

  const onButtonClick = () => {
		console.log(todo);
		setTodo('');
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

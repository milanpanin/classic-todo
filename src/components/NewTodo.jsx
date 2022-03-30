import { useState } from "react";
import { useTodo, useUpdateTodo } from "./context/TodoContext";
import styled from "styled-components";

const Input = styled.section`
  padding: 25px;
  display: flex;
  border-radius: 5px;
  margin: 0 0 15px 0;
  background-color: ${(props) => props.theme.section};

  input{
    width: 80%;
    margin: 0 2% 0 0;
    padding: 5px;
    font-size: 20px;
    border: 0;
    outline: none;
  }

  button{
    width: 18%;
    cursor: pointer;
    font-size: 18px;
  }
`;

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

    newList.sort(function(x, y) {
      return x.done - y.done;
    });

    updateTodo(newList);
    setTodo("");
  };

  return (
    <Input>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your new To-Do"
      />
      <button onClick={() => onButtonClick()}>Add To-Do</button>
    </Input>
  );
};

export default NewTodo;

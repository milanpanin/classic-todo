import { useState, useContext } from "react";
import styled from "styled-components";
import ToDoContext from "../context/todo-context";

const Input = styled.section`
  padding: 25px;
  display: flex;
  border-radius: 5px;
  margin: 0 0 15px 0;
  background-color: ${(props) => props.theme.section};

  input {
    width: 80%;
    margin: 0 2% 0 0;
    padding: 5px;
    font-size: 20px;
    border: 0;
    outline: none;

    @media (max-width: 768px) {
      font-size: 16px;
      
    }
  }

  button {
    width: 18%;
    cursor: pointer;
    font-size: 18px;
    border: 1px solid #636363;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  @media (max-width: 620px) {
    flex-direction: column;
    padding: 15px;

    input {
      width: 100%;
      margin: 0 0 15px 0;
    }

    button {
      width: 50%;
      margin: 0 auto;
      padding: 5px 0;
    }
  }
`;

const NewTodo = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(ToDoContext);

  const formHandler = () => {
    if (todo) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <Input>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your new To-Do"
      />
      <button onClick={formHandler}>Add To-Do</button>
    </Input>
  );
};

export default NewTodo;

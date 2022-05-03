import { useContext } from "react";
import styled from "styled-components";
import ToDoContext from "../context/todo-context";

const Item = styled.section`
  padding: 15px;
  margin: 5px 0;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  font-size: 18px;
  transition: 0.1s;
  display: flex;
  justify-content: space-between;
  text-decoration: ${(props) => props.strike ? 'line-through' : ''};
  background-color: ${(props) => props.theme.itemBackground};
  cursor: default;

  .doneButton, .deleteButton{
    padding: 2px 10px;
    border-radius: 3px;
    outline: none;
    border: 1px solid #636363;
    cursor: pointer;
  }
`;

const TodoItem = ({item}) => {
  const {commitTodo, deleteTodo} = useContext(ToDoContext);

  return ( 
    <Item >
      <p>{item.value}</p>
      {!item.isDone && <button className="doneButton" onClick={() => commitTodo(item.id)}>Done</button>}
      {item.isDone && <button className="deleteButton" onClick={() => deleteTodo(item.id)}>Delete</button>}
    </Item>
  );
}
 
export default TodoItem;
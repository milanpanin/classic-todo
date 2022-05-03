import { useContext } from "react";
import styled from "styled-components";
import ToDoContext from "../context/todo-context";
import { BsFillCheckSquareFill, BsXSquareFill } from "react-icons/bs";

const Item = styled.section`
  padding: 15px;
  margin: 5px 0;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  font-size: 18px;
  transition: 0.1s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: ${(props) => props.strike ? 'line-through' : ''};
  background-color: ${(props) => props.theme.itemBackground};
  cursor: default;

  .doneButton, .deleteButton{
    cursor: pointer; 
    font-size: 24px;
  }

  .doneButton:hover{
    color: #509946;
  }

  .deleteButton:hover{
    color: #922d2d;
  }

  .textStrike{
    text-decoration: line-through;
  }
`;

const TodoItem = ({item}) => {
  const {commitTodo, deleteTodo} = useContext(ToDoContext);

  return ( 
    <Item >
      <p className={item.isDone ? 'textStrike' : ''}>{item.value}</p>
      {!item.isDone && <BsFillCheckSquareFill className="doneButton" onClick={() => commitTodo(item.id)} />}
      {item.isDone && <BsXSquareFill className="deleteButton" onClick={() => deleteTodo(item.id)} />}
    </Item>
  );
}
 
export default TodoItem;
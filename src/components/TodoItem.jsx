import { useTodo, useUpdateTodo } from "./context/TodoContext";
import styled from "styled-components";

const Item = styled.section`
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  font-size: 16px;
  transition: 0.1s;
  display: flex;
  justify-content: space-between;

  &:hover{
    background-color: #b9b9b9;
    cursor: default;
  }

  .doneButton, .deleteButton{
    padding: 2px 10px;
    cursor: pointer;
  }
`;

const sortList = (list) => {
  list.sort(function(x, y) {
    return x.done - y.done;
  });
}

const TodoItem = ({ el }) => {
  const updateTodo = useUpdateTodo();
  const todoList = useTodo();

  const onItemDone = () => {
    todoList.map(item => item.id === el.id && (item.done = true));

    sortList(todoList);
    updateTodo(todoList);
  }

  const onItemDelete = () => {
    todoList.filter(item => item.id !== el.id);

    sortList(todoList);
    updateTodo(todoList);
  }

  return ( 
    <Item >
      {el.done ? <del>{el.content}</del> : <p>{el.content}</p>}
      {!el.done && <button className="doneButton" onClick={onItemDone}>Done</button>}
      {el.done && <button className="deleteButton" onClick={onItemDelete}>Delete</button>}
    </Item>
  );
}
 
export default TodoItem;
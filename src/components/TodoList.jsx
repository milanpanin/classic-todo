import TodoItem from './TodoItem';
import { useTodo } from "./context/TodoContext";
import styled from "styled-components";

const List = styled.section`
  padding: 25px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.section};

  .emptyListText{
    font-size: 20px;
    color: ${(props) => props.theme.text};
    text-align: center;
  }
`;

const TodoList = () => {
  const todoList = useTodo();
  
  return(
    <List>
      {!todoList.length && <p className='emptyListText'>Unesite novi To-Do!</p>}
      {todoList.map(el => 
        <TodoItem key={el.id} el={el}/> 
      )}
    </List>
  );
};

export default TodoList;

import { useContext } from 'react';
import TodoItem from './TodoItem';
import styled from "styled-components";
import ToDoContext from '../context/todo-context';

const List = styled.section`
  padding: 25px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.section};

  .emptyListText{
    font-size: 20px;
    color: ${(props) => props.theme.text};
    text-align: center;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const TodoList = () => {
  const {todo} = useContext(ToDoContext);

  return(
    <List>
      {!todo.length && <p className='emptyListText'>List is empty, add new To-Do!</p>}
      {todo.map(item => 
        <TodoItem key={item.id} item={item}/> 
      )}
    </List>
  );
};

export default TodoList;

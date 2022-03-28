import TodoItem from './TodoItem';
import { useTodo } from "./context/TodoContext";

const TodoList = () => {
  const todoList = useTodo();
  
  return(
    <section className="todoList">
      {todoList.map(el => 
        <TodoItem key={el.id} el={el}/> 
      )}
    </section>
  );
};

export default TodoList;

import { useTodo, useUpdateTodo } from "./context/TodoContext";

const TodoItem = ({ el }) => {
  const updateTodo = useUpdateTodo();
  const todoList = useTodo();

  const onItemClick = () => {
    todoList.map(item => item.id === el.id && (item.done = true));

    todoList.sort(function(x, y) {
      return x.done - y.done;
    });

    updateTodo(todoList);
  }

  return ( 
    <div className="todoItem" onClick={onItemClick}>
      <p>{el.content}</p>
    </div>
  );
}
 
export default TodoItem;
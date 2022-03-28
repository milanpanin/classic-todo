const TodoItem = ({ el }) => {
  return ( 
    <div className="todoItem">
      <p>{el.content}</p>
    </div>
  );
}
 
export default TodoItem;
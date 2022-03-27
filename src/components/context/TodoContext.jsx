import React, { useState, useContext } from "react";

const TodoContext = React.createContext();
const UpdateTodoContext = React.createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

export const useUpdateTodo = () => {
  return useContext(UpdateTodoContext);
};

export const TodoProvider = ({ value, children }) => {
  const [todo, setTodo] = useState(value);

  return (
    <TodoContext.Provider value={todo}>
      <UpdateTodoContext.Provider value={setTodo}>
        {children}
      </UpdateTodoContext.Provider>
    </TodoContext.Provider>
  );
};

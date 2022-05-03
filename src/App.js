import { useState } from "react";
import NewTodo from './components/NewTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';

import ToDoContext from "./context/todo-context";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import './App.css';


function App() {
  const [theme, setTheme] = useState('light');
  const [todo, setTodo] = useState([]);

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const addTodo = (newTodo) => {
    setTodo((prevState) => {
      const newTodoObj = {
        id: Math.random(),
        value: newTodo,
        isDone: false
      };

      console.log([...prevState, newTodoObj]);
      return [...prevState, newTodoObj];
    });
  }

  const commitTodo = (todoId) => {
    let commitedTodo = [...todo];
    commitedTodo.map(el => (el.id === todoId) && (el.isDone = true));

    console.log(commitedTodo);
    setTodo(commitedTodo);
  }

  const deleteTodo = (todoId) => {
    let newTodoList = todo.filter(item => item.id !== todoId);

    setTodo(newTodoList);
  }

  return (
    <ToDoContext.Provider value={{ todo, addTodo, changeTheme, commitTodo, deleteTodo }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <main className="App">
          <Header />
          <NewTodo />
          <TodoList />
        </main>
      </ThemeProvider>
    </ToDoContext.Provider>
  );
}

export default App;

import { useState } from "react";
import NewTodo from './components/NewTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';

import ToDoContext from "./context/todo-context";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import './App.css';


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('allTodos')) || []);

  const changeTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  const setLocalStorage = (data) => {
    localStorage.setItem('allTodos', JSON.stringify(data));
  }

  const sortTodoList = () => {
    setTodo((prevState) => {
      return prevState.sort((a, z) => a.isDone - z.isDone);
    });
  }

  const addTodo = (newTodo) => {
    setTodo((prevState) => {
      const newTodoObj = {
        id: Math.random(),
        value: newTodo,
        isDone: false
      };

      let newState = [...prevState, newTodoObj];
      setLocalStorage(newState);

      return newState;
    });

    sortTodoList();
  }

  const commitTodo = (todoId) => {
    let commitedTodo = [...todo];
    commitedTodo.map(el => (el.id === todoId) && (el.isDone = true));
    setLocalStorage(commitedTodo);

    setTodo(commitedTodo);
    sortTodoList();
  }

  const deleteTodo = (todoId) => {
    let newTodoList = todo.filter(item => item.id !== todoId);
    setLocalStorage(newTodoList);

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

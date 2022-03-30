import { useState } from "react";
import NewTodo from './components/NewTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { TodoProvider } from './components/context/TodoContext';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const onButtonClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <TodoProvider value={[]}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <main className="App">
          <Header onButtonClick={onButtonClick} />
          <NewTodo />
          <TodoList />
        </main>
      </ThemeProvider>
    </TodoProvider>
  );
}

export default App;

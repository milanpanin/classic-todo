import './App.css';
import NewTodo from './components/NewTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { TodoProvider } from './components/context/TodoContext'

function App() {
  return (
    <TodoProvider value={[]}>
      <main className="App">
        <Header />
        <NewTodo />
        <TodoList/>
      </main>
    </TodoProvider>
  );
}

export default App;

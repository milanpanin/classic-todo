import './App.css';
import NewTodo from './components/NewTodo';
import Theme from './components/Theme';
import TodoList from './components/TodoList';
import { TodoProvider } from './components/context/TodoContext'

function App() {
  return (
    <TodoProvider value={[]}>
      <main className="App">
        <Theme />
        <NewTodo />
        <TodoList/>
      </main>
    </TodoProvider>
  );
}

export default App;

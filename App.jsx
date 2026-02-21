import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <header className="app-header">
          <h1>Lista de Tarefas Avançada</h1>
          <p>React Hooks • Context API • Memoization</p>
        </header>
        
        <main className="app-main">
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </main>
        
        <footer className="app-footer">
          <p>© 2024 - Projeto React Avançado</p>
        </footer>
      </div>
    </TodoProvider>
  );
}

export default App;
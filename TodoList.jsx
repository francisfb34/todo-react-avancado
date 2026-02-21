import React, { useMemo } from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useTodo();

  const todoItems = useMemo(() => {
    return todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ));
  }, [todos]);

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhuma tarefa encontrada</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todoItems}
    </ul>
  );
};

export default React.memo(TodoList);
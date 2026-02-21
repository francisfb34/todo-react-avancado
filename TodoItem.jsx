import React, { useCallback } from 'react';
import { useTodo } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodo();

  const handleToggle = useCallback(() => {
    toggleTodo(todo.id);
  }, [todo.id, toggleTodo]);

  const handleRemove = useCallback(() => {
    removeTodo(todo.id);
  }, [todo.id, removeTodo]);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
        <span className="todo-date">
          {new Date(todo.createdAt).toLocaleDateString()}
        </span>
      </div>
      <button onClick={handleRemove} className="btn-remove">
        Remover
      </button>
    </li>
  );
};

export default React.memo(TodoItem);
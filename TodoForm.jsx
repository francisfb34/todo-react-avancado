import React, { useState, useCallback } from 'react';
import { useTodo } from '../context/TodoContext';

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  }, [inputValue, addTodo]);

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicionar nova tarefa..."
        className="todo-input"
      />
      <button type="submit" className="btn-add">
        Adicionar
      </button>
    </form>
  );
};

export default React.memo(TodoForm);
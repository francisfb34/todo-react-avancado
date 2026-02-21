import React, { useCallback } from 'react';
import { useTodo } from '../context/TodoContext';

const TodoFilter = () => {
  const { filter, setFilter, stats } = useTodo();

  const filters = [
    { value: 'all', label: 'Todas', count: stats.total },
    { value: 'pending', label: 'Pendentes', count: stats.pending },
    { value: 'completed', label: 'Concluídas', count: stats.completed }
  ];

  return (
    <div className="todo-filter">
      {filters.map(({ value, label, count }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`filter-btn ${filter === value ? 'active' : ''}`}
        >
          {label} ({count})
        </button>
      ))}
    </div>
  );
};

export default React.memo(TodoFilter);
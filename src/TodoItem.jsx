import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onDelete, onComplete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onComplete}
        className="checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button className="action-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
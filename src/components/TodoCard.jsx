import React from 'react';
const todoCard = ({ title, status }) => {
    return (
      <li className="todo-card">
        <div className="card-title">{title}</div>
        <div className="card-status">{status}</div>
      </li>
    );
  }
export default todoCard;
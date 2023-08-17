import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState({ title: '', goal: '' });

  const handleSubmit = (e) => {
    // prevent default action
    // console.log("Submitted")
    e.preventDefault();
    if (value.title ) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue({ title: '', goal: '' });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" value={value.title} onChange={(e) => setValue((prev) => ({ ...prev, title: e.target.value }))} className="todo-input" placeholder='What is the task today?' />
      <input type='number' value={value.goal} onChange={(e) => setValue((prev) => ({ ...prev, goal: e.target.value }))} className='todo-input' placeholder="What's your Personal Record?" />
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}

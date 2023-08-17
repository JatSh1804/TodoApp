import React, { useEffect, useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = () => {
  // console.log(localStorage.getItem("prev"))
  const PrevToDo = JSON.parse(localStorage.getItem("prev"))
  const [todos, setTodos] = useState(PrevToDo || []);
  useEffect(() => {
    localStorage.setItem("prev", JSON.stringify(todos))
    // console.log("todos changed")
  }, [todos])
  const addTodo = (todo) => {
    // console.log("ToDo")
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo.title, goal: todo.goal, quantity: 0, completed: false },
    ]);
  }
  const setQuantity = (task, current) => {
    setTodos(
      todos.map((el) => {
        if (el.id == task.id) {
          return { id: task.id, task: task.task, quantity: current, goal: task.goal, completed: false };
        } else { return el }
      }))
    console.log(todos)
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      <div className="Todo"><p>Task Assigned</p><p>Completed</p> <p>Goal</p><p style={{ width: "100px" }}></p></div>
      {todos.map((todo) =>
      (
        <Todo
          key={todo.id}
          task={todo}
          setQuantity={setQuantity}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      )
      )}
    </div>
  );
};

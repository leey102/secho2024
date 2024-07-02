// src/components/TodoList.js
import { useState } from "react";
import Progressbar from "./Progressbar";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "할 일 1", completed: false },
    { text: "할 일 2", completed: false },
    { text: "할 일 3", completed: false },
    { text: "할 일 4", completed: false },
    { text: "할 일 5", completed: false },
    { text: "할 일 6", completed: false },
    { text: "할 일 7", completed: false },
    { text: "할 일 8", completed: false },
    { text: "할 일 9", completed: false },
    { text: "할 일 10", completed: false },
  ]);

  const [todoCheck, setTodoCheck] = useState(0);

  const handleCheckboxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    setTodoCheck(newTodos.filter((item) => item.completed).length);
  };

  return (
    <div>
      <h2>Todo 리스트</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <Progressbar total={todos.length} check={todoCheck} />
    </div>
  );
};

export default TodoList;

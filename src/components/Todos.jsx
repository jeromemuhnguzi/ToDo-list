import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function Todos() {
  const [todos, setTodos] = React.useState([
    { text: "Wake up", isCompleted: false },
    { text: "Code", isCompleted: false },
    { text: "Sleep", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div>
        <TodoForm addTodo={addTodo} />
      </div>

      <div>
        <table>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Mark as done</th>
            <th>Delete</th>
          </tr>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </table>

        {/*<Form /> */}
      </div>
      {/*
      <nav className = 'R'
>
        <Link to='/Form' >
          {' '}
          Log-in/Register{' '}
        </Link>
        </nav>  */}
    </div>
  );
}

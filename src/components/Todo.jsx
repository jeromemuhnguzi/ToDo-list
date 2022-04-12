import React from "react";
import CloseIcon from "../assets/icons/Close";
import DoneIcon from "../assets/icons/Done";

export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <tr>
      <td>{index + 1}.</td>
      <td>
        <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
          {todo.text}
        </p>
      </td>
      <td>
        <DoneIcon onClick={() => completeTodo(index)} />
      </td>
      <td>
        <CloseIcon onClick={() => removeTodo(index)} color="#ff0000" />
      </td>
    </tr>
  );
}

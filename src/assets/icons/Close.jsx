import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    >
      <path
        fill={props.color}
        d="M19.491 3.486a1 1 0 00-.698.307L12 10.586 5.207 3.793a1 1 0 10-1.414 1.414L10.586 12l-6.793 6.793a1.001 1.001 0 101.414 1.414L12 13.414l6.793 6.793a1 1 0 101.414-1.414L13.414 12l6.793-6.793a1 1 0 00-.716-1.721z"
      ></path>
    </svg>
  );
}

export default Icon;

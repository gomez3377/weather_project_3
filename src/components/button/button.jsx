import React from "react";

const Button = ({ btnStyle, content }) => {
  return (
    <button
      className={`${btnStyle} rounded-full font-bold flex items-center justify-center text-lg w-10 h-10`}
    >
      {content}
    </button>
  );
};

export default Button;

import React from "react";

function Theme({ color, setColor }) {
  const updateTheme = (e) => {
    setColor(e.target.dataset.color);
    //   e.target.style.transform = "scale(1.3)";
  };
  return (
    <div
      className="theme"
      data-color={color}
      style={{ backgroundColor: color }}
      onClick={updateTheme}
    ></div>
  );
}

export default Theme;

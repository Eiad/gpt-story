import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <div className="logo"></div>
      <div className="menu">
        <span>Menu 1</span>
        <span>Menu 2</span>
        <span>Menu 3</span>
      </div>
    </div>
  );
}

export default Header;

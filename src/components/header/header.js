import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <div className="logo"></div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>
            <a href="#">Generate Story</a>
          </li>
          <li>
            <a href="#">Birthday Fun Fact</a>
          </li>
          <li>
            <a href="#">Suggest Me Music</a>
          </li>
          <li>
            <a href="#">Suggest Me Music</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

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
            <button onClick={() => props.onChangeTab("GenerateStory")}>
              Generate Story
            </button>
          </li>
          <li>
            <button onClick={() => props.onChangeTab("BirthdayFunFact")}>
              Birthday Fun Fact
            </button>
          </li>
          <li>
            <button onClick={() => props.onChangeTab("SuggestMeMusicGpt")}>
              Suggest Me Music
            </button>
          </li>
          <li>
            <button onClick={() => props.onChangeTab("SuggestTravelLocation")}>
              Suggest Travel Location
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

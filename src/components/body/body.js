import React from "react";
import GenerateStory from "./GenerateStory/generateStory";
import BirthdayFunFact from "./BirthdayFunFact/birthdayFunFact";

function Body(props) {
  return (
    <div className="body">
      <GenerateStory onStoryGenerated={props.onStoryGenerated} />
      <BirthdayFunFact />
    </div>
  );
}

export default Body;

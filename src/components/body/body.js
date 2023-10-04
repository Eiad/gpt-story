import React from "react";
import GenerateStory from "./GenerateStory/generateStory";
import BirthdayFunFact from "./BirthdayFunFact/birthdayFunFact";
import SuggestMeGpt from "./SuggestMeGpt/SuggestMeGpt"; // Import the new component

function Body(props) {
  return (
    <div className="body">
      <GenerateStory onStoryGenerated={props.onStoryGenerated} />
      <BirthdayFunFact />
      <SuggestMeGpt />
    </div>
  );
}

export default Body;

import React from "react";
import GenerateStory from "./GenerateStory/generateStory";
import BirthdayFunFact from "./BirthdayFunFact/birthdayFunFact";
import SuggestMeMusicGpt from "./SuggestMeMusicGpt/SuggestMeMusicGpt";
import SuggestTravelLocation from "./SuggestTravelLocation/suggestTravelLocation";

function Body(props) {
  return (
    <div className="body">
      <GenerateStory onStoryGenerated={props.onStoryGenerated} />
      <BirthdayFunFact />
      <SuggestMeMusicGpt />
      <SuggestTravelLocation
        onlocationSuggestions={props.onlocationSuggestions}
      />
    </div>
  );
}

export default Body;

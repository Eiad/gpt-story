import React from "react";
import GenerateStory from "./GenerateStory/generateStory";
import BirthdayFunFact from "./BirthdayFunFact/birthdayFunFact";
import SuggestMeMusicGpt from "./SuggestMeMusicGpt/SuggestMeMusicGpt";
import SuggestTravelLocation from "./SuggestTravelLocation/suggestTravelLocation";

function Body(props) {
  return (
    <div className="body">
      {props.selectedTab === "GenerateStory" && (
        <GenerateStory onStoryGenerated={props.onStoryGenerated} />
      )}
      {props.selectedTab === "BirthdayFunFact" && <BirthdayFunFact />}
      {props.selectedTab === "SuggestMeMusicGpt" && <SuggestMeMusicGpt />}
      {props.selectedTab === "SuggestTravelLocation" && (
        <SuggestTravelLocation
          onlocationSuggestions={props.onlocationSuggestions}
        />
      )}
    </div>
  );
}

export default Body;

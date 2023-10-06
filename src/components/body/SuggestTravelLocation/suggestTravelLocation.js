import React, { useState } from "react";
import axios from "axios";

function SuggestTravelLocation(props) {
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSuggestTravelLocation = async () => {
    try {
      const response = await axios.post("/api/suggestTravelLocationAPI", {
        keyword: keyword,
      });
      setSuggestions(response.data);
      props.onlocationSuggestions(response.data); // Notify the parent component
    } catch (error) {
      console.error("Error:", error);
      setSuggestions(["Sorry, an error occurred. Please try again."]);
    }
  };

  return (
    <div>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter a keyword"
      />
      <button onClick={handleSuggestTravelLocation}>
        Suggest Travel Location
      </button>
      <h3>Suggested locations:</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestTravelLocation;

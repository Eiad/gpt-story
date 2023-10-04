import React, { useState } from "react"; // Importing React and useState hook
import axios from "axios"; // Importing axios to make HTTP requests

function SuggestMeGpt() {
  // State to hold the mood input value
  const [mood, setMood] = useState("");
  // State to hold the list of music suggestions
  const [suggestions, setSuggestions] = useState([]);

  const handleMusicSuggestion = async () => {
    try {
      console.log("Mood:", mood);

      // Making a POST request to the backend to get music suggestions
      const response = await axios.post("/api/SuggestMeGptAPI", { mood: mood });

      console.log("API Response:", response);
      // Updating the state with the received list of music suggestions
      setSuggestions(response.data);
    } catch (error) {
      // Handling errors and updating the state with an error message
      console.error("Error:", error);
      setSuggestions(["Sorry, an error occurred. Please try again."]);
    }
  };

  return (
    <div>
      {/* Input field to capture user's mood */}
      <input
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        placeholder="Enter your mood"
      />
      {/* Button to initiate the music suggestion process */}
      <button onClick={handleMusicSuggestion}>Suggest Music</button>

      {/* Displaying the title */}
      <h3 className="title">Music for your mood:</h3>

      {/* Iterating over the list of suggestions and displaying them */}
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestMeGpt;

import React, { useState } from "react";
import axios from "axios";

function GenerateStory(props) {
  const [keywords, setKeywords] = useState("");
  const [story, setStory] = useState("");

  const handleGenerateStory = async () => {
    try {
      const response = await axios.post("/api/generateStoryAPI", {
        keywords: keywords,
      });
      setStory(response.data);
      props.onStoryGenerated(response.data); // Notify the parent component
    } catch (error) {
      console.error("Error:", error);
      setStory("Sorry, an error occurred. Please try again.");
    }
  };

  return (
    <div>
      <input
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Enter keywords"
      />
      <button onClick={handleGenerateStory}>Generate Story</button>
      <h3>
        <span className="title">Once upon a time:</span> <span>{story}</span>
      </h3>
    </div>
  );
}

export default GenerateStory;

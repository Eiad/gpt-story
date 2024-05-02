import React, { useState } from "react";
import axios from "axios";

function BirthdayFunFact() {
  const [birthday, setBirthday] = useState("");
  const [storydate, setStoryDate] = useState("");

  // Function to fetch a fun fact based on the selected date
  const handleFetchBirthdayFact = async () => {
    try {
      const response = await axios.post("/api/birthdayFunFactAPI", {
        date: birthday,
      });
      setStoryDate(response.data);
    } catch (error) {
      console.error("Error:", error);
      setStoryDate("Sorry, an error occurred. Or i probably disabled the API calls as it costs - Please try again or contact me on Github ;).");
    }
  };

  return (
    <div>
      <h2>Select a Birthday for a Fun Fact</h2>
      <input
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <button onClick={handleFetchBirthdayFact}>Fetch Fun Fact</button>
      <h3>
        <span></span> <span>{storydate}</span>
      </h3>
    </div>
  );
}

export default BirthdayFunFact;

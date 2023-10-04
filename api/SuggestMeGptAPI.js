const axios = require("axios"); // Importing axios to make HTTP requests

// Setting the OpenAI API key
// (It's recommended to store this securely using environment variables)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

module.exports = async (req, res) => {
  // Extracting the musical preference or mood from the incoming request body
  const preference = req.body.mood;

  // Specifying the endpoint for the OpenAI GPT-3.5 Turbo Instruct API
  const endpoint =
    "https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct-0914/completions";

  // Defining the headers for the HTTP request
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  // Preparing the data payload for the HTTP request
  const data = {
    // The prompt instructs GPT to suggest 10 songs based on the given mood
    prompt: `Given the musical preference "${preference}", suggest 10 songs or music tracks.`,
    temperature: 0.7, // Controls randomness: higher values make output more random
    max_tokens: 200, // Maximum number of tokens (words) in the response
  };

  try {
    // Making the POST request to the OpenAI API
    const openaiResponse = await axios.post(endpoint, data, {
      headers: headers,
    });

    // Extracting the list of music suggestions and splitting by new lines
    let musicSuggestions = openaiResponse.data.choices[0].text
      .trim()
      .split("\n");

    // Sending the list of music suggestions as a response
    res.status(200).send(musicSuggestions);
  } catch (error) {
    // Handling any errors during the API call
    res.status(500).send("Error suggesting music.");
    console.log("Error:", error);
  }
};

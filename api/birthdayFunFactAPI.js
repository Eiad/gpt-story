module.exports = async (req, res) => {
  // Importing the axios library for making HTTP requests
  const axios = require("axios");

  // Setting the OpenAI API key (Note: This should ideally be stored securely)
  const OPENAI_API_KEY = "";

  // Extracting the date from the request body
  const date = req.body.date;

  // Setting the endpoint for the OpenAI GPT-3.5 Turbo Instruct API
  const endpoint =
    "https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct-0914/completions";

  // Defining the headers for the HTTP request
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  // Constructing the data for the HTTP request
  const data = {
    prompt: `Tell me an interesting fact about the date (${date}) that's short and doesn't exceed 12 words. start with "On this date and then mention the date day`,
    temperature: 0,
    max_tokens: 120,
    frequency_penalty: 0,
    presence_penalty: 1,
    top_p: 0.3,
  };

  try {
    // Making a POST request to the OpenAI API
    const openaiResponse = await axios.post(endpoint, data, {
      headers: headers,
    });

    // Extracting the generated fun fact from the API response
    let funFact = openaiResponse.data.choices[0].text;

    // Sending the generated fun fact as a response
    res.status(200).send(funFact);
  } catch (error) {
    // Handling any errors during the API call
    res.status(500).send("Error generating fun fact.");
    console.log("Error:", error);
  }
};

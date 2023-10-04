module.exports = async (req, res) => {
  // Importing the axios library for making HTTP requests
  const axios = require("axios");

  // Setting the OpenAI API key (Note: This should ideally be stored securely)
  const OPENAI_API_KEY = "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";

  // Extracting the keywords from the request body
  const keywords = req.body.keywords;

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
    //prompt: `Based on the provided keywords (${keywords}), create a cute story suitable for a 5-year-old child. The story should not exceed 12 words. Ensure the story is in the same language as the keywords.`,
    prompt: `give a fun fact using this keywords (${keywords}). make it short should not exceed 12 words. Ensure the fact is in the same language as the keywords.`,
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

    // Extracting the generated story from the API response
    let story = openaiResponse.data.choices[0].text;

    // Sending the generated story as a response
    res.status(200).send(story);
  } catch (error) {
    // Handling any errors during the API call
    res.status(500).send("Error generating story ya Ash.");
    console.log("Error:", error);
  }
};

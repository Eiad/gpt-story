module.exports = async (req, res) => {
  const axios = require("axios");

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const keyword = req.body.keyword;

  const endpoint =
    "https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct-0914/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };
  const data = {
    prompt: `Suggest 3 travel locations related to the keyword (${keyword})`,
    temperature: 0.7,
    max_tokens: 200,
  };
  try {
    const openaiResponse = await axios.post(endpoint, data, { headers });
    let locationSuggestions = openaiResponse.data.choices[0].text
      .trim()
      .split("\n");
    res.status(200).send(locationSuggestions);
  } catch (error) {
    res.status(500).send("Error suggesting locations.");
    console.log("Error:", error);
  }
};

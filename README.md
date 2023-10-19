# GPT Story Generator

This project uses OpenAI's GPT-3 API to generate stories, fun facts, music suggestions and travel location suggestions based on user input.

## Getting Started

To get started, you'll need an API key for OpenAI's GPT-3 API. Sign up for an OpenAI account and generate an API key.

Then, create a .env file in the root directory and add your API key:
OPENAI_API_KEY=YOUR_API_KEY
Install the dependencies:
npm install
Run the app:
npm start
The app will be served at http://localhost:3000.

## Available Features

The app has the following main features:

### Generate Story

Enter a few keywords and GPT-3 will generate a short story based on those keywords.

### Birthday Fun Fact

Enter a date and GPT-3 will generate an interesting fun fact about that date.

### Suggest Me Music

Enter your mood or musical preference and GPT-3 will suggest some songs or music tracks.

### Suggest Travel Location

Enter a keyword and GPT-3 will suggest some travel locations related to that keyword.

## How it Works

The frontend is built using React and the backend uses Express. The frontend makes API calls to the backend, which in turn makes requests to OpenAI's GPT-3 API using the Axios library.

The responses from the GPT-3 API are returned to the frontend and displayed to the user.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

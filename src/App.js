// Import necessary components and styles
import React from "react";
import "./styles/main-styles.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

// Define function to handle generated stories
function App() {
  const onStoryGenerated = (story) => {
    console.log("A new story was generated:", story);
  };

  const onlocationSuggestions = (locationSuggestions) => {
    console.log("A new travel was generated:", locationSuggestions);
  };

  // Render components and pass props
  return (
    <section className="App">
      <Header title="GPT Story Generator" desc="Have fun on your OWn!" />
      <Body
        onStoryGenerated={onStoryGenerated}
        onlocationSuggestions={onlocationSuggestions}
      />
      <Footer />
    </section>
  );
}

// Export App component as default
export default App;

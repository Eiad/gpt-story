import React, { useState } from "react";
import "./styles/main-styles.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

function App() {
  const [selectedTab, setSelectedTab] = useState("GenerateStory");

  const onStoryGenerated = (story) => {
    console.log("A new story was generated:", story);
  };

  const onlocationSuggestions = (locationSuggestions) => {
    console.log("A new travel was generated:", locationSuggestions);
  };

  return (
    <section className="App">
      <Header
        title="GPT Story Generator"
        desc="Have fun on your own!"
        onChangeTab={(tabName) => setSelectedTab(tabName)}
      />
      <Body
        onStoryGenerated={onStoryGenerated}
        onlocationSuggestions={onlocationSuggestions}
        selectedTab={selectedTab}
      />
      <Footer />
    </section>
  );
}

// Export App component as default
export default App;

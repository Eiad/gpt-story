import React from "react";
import "./styles/main-styles.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

function App() {
  const onStoryGenerated = (story) => {
    console.log("A new story was generated:", story);
  };
  return (
    <section className="App">
      <Header title="GPT Story Generator" desc="Have fun on your OWn!" />
      <Body onStoryGenerated={onStoryGenerated} />
      <Footer />
    </section>
  );
}

export default App;

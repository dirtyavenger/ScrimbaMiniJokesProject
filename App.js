import React from "react";
import Card from "./components/Card";
import jokes from "./jokesData.js";

export default function App() {
  return (
    <main>
      {jokes.map((joke) => (
        <Card setup={joke.setup} punchline={joke.punchline} />
      ))}
    </main>
  );
}

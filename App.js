import React from "react";
import Card from "./components/Card";

const jokes = [
  {
    setup: "I got my daughter a fridge for her birthday.",
    punchline: "I can't wait to see her face light up when she opens it.",
  },

  {
    setup: "How did the hacker escape the police?",
    punchline: "He just ransomware!",
  },

  {
    setup: "Why don't pirates travel on mountain roads?",
    punchline: "Scurvy.",
  },

  { setup: "Why do bees stay in the hive in the winter?", punchline: "Swarm." },

  {
    setup: "What's the best thing about Switzerland?",
    punchline: "I don't know, but the flag is a big plus!",
  },
];

export default function App() {
  return (
    <main>
      <Card kokot={1} setup={jokes[0].setup} punchline={jokes[0].punchline} />
      <Card setup={jokes[1].setup} punchline={jokes[1].punchline} />
      <Card setup={jokes[2].setup} punchline={jokes[2].punchline} />
      <Card setup={jokes[3].setup} punchline={jokes[3].punchline} />
      <Card setup={jokes[4].setup} punchline={jokes[4].punchline} />
    </main>
  );
}

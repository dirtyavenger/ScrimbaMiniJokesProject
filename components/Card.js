import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      <p>{props.punchline}</p>
      <hr />
    </div>
  );
}

import React from "react";
import "./style.css"

function Jumbotron() {
  return (
    <div
      style={{ minHeight: 200, clear: "both", paddingTop: 50, textAlign: "center"}}
      className="jumbotron">
        <h1>React Google Book Search</h1>
        <br/>
        <h3>Search for and save books of interest</h3>
    </div>
  );
}

export default Jumbotron;
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  function fire(led) {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      console.log(xhr.responseText);
    });
    // open the request with the verb and the url
    xhr.open(
      "GET",
      "https://5f7789a49449f700070e1767.onlosant.com/gpio/" + led
    );
    // send the request
    xhr.send();
  }

  function fireRed(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    fire(17);
  }

  function fireYellow(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    fire(27);
  }

  function fireGreen(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    fire(22);
  }
  return (
    <div className="App">
      <button type="button" onClick={fireRed}>
        RED
      </button>
      <button type="button" onClick={fireYellow}>
        YELLOW
      </button>
      <button type="button" onClick={fireGreen}>
        GREEN
      </button>
    </div>
  );
}
export default App;

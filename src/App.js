import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board nRows={5} nColumns={5} />
      </div>
    );
  }
}

export default App;

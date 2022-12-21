import React from "react";

import ForM from "./components/form";

import "./App.css";

function App() {
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <ForM />
      </div>
    </div>
  );
}

export default App;

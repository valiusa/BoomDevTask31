import React from "react";

import LoginForm from "./components/LoginForm";

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
        <LoginForm />
      </div>
    </div>
  );
}

export default App;

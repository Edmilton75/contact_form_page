import React, { useState } from "react";
import "./App.css";
import Buttom from "./components/Button";
import Checkbox from "./components/Checkbox";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import InputRadio from "./components/InputRadio";

const App = () => {
  const [firtName, setFirtsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(firtName);
    console.log(lastName);
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <Header />
      <div className="container-names">
        <TextInput
          type="text"
          label="Firts name"
          onChange={(e) => setFirtsName(e.target.value)}
        />
        <TextInput
          type="text"
          label="Last name"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <TextInput
        type="email"
        label="Email Adress"
        onChange={(e) => setLastName(e.target.value)}
      />

      <p>Query type</p>
      <div className="container-radio">
        <InputRadio label="General Enguire" defaultChecked />
        <InputRadio label="Suporte Request" />
      </div>

      <p className="query-types">Message:</p>

      <textarea id="message" name="message" placeholder="..."></textarea>

      <Checkbox
        id="checkbox"
        type="checkbox"
        label="I consent to being contacted by the team"
      />
      <Buttom type="submit" textBtn="Submit" />
    </form>
  );
};

export default App;

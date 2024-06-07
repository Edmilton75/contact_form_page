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
  const [checkbox, setCheckbox] = useState("");
  const [radio, setRadio] = useState("");
  const [textArea, setTextArea] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Firts Name: ${firtName}`);
    console.log(`Last name: ${lastName}`);
    console.log(`E-mail: ${email}`);
    if (textArea) {
      console.log(`Message: ${textArea}`);
    }
    if (radio) {
      console.log(`Query type: ${radio}`);
    }

    if (checkbox) {
      console.log("aceito os termos!");
    } else {
      console.log("nao aceito os termos");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <Header />
      <div className="container-names">
        <TextInput
          type="text"
          label="Firts name"
          required
          onChange={(e) => setFirtsName(e.target.value)}
        />
        <TextInput
          type="text"
          label="Last name"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <TextInput
        type="email"
        label="Email Adress"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>Query type</p>
      <div className="container-radio">
        <InputRadio
          label="General Enguire"
          onChange={(e) => setRadio(e.target.id)}
        />
        <InputRadio
          label="Suporte Request"
          onChange={(e) => setRadio(e.target.id)}
        />
      </div>

      <p className="query-types">Message:</p>

      <textarea
        id="message"
        name="message"
        placeholder="..."
        onChange={(e) => setTextArea(e.target.value)}
      ></textarea>

      <Checkbox
        type="checkbox"
        label="I consent to being contacted by the team"
        onChange={(e) => setCheckbox(e.target.value)}
        required
      />
      <Buttom type="submit" textBtn="Submit" />
    </form>
  );
};

export default App;

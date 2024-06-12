import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import InputRadio from "./components/InputRadio";

const App = () => {
  /*   const [firtName, setFirtsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("General Enguire");
  const [textArea, setTextArea] = useState(""); */
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    checkbox: false,
    radio: "General Enguire",
    textarea: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Firts Name: ${form.nome}`);
    console.log(`Last name: ${form.sobrenome}`);
    console.log(`E-mail: ${form.email}`);
    if (form.textarea) {
      console.log(`Message: ${form.textarea}`);
    }
    if (form.radio) {
      console.log(`Query type: ${form.radio}`);
    }

    if (form.checkbox) {
      console.log("aceito os termos!");
    } else {
      console.log("nao aceito os termos");
    }
    console.log({ form });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <Header />
      <div className="container-names">
        <TextInput
          type="text"
          label="First name"
          required
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        <TextInput
          type="text"
          label="Last name"
          required
          onChange={(e) => setForm({ ...form, sobrenome: e.target.value })}
        />
      </div>
      <TextInput
        type="email"
        label="Email Address"
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <p>Query type</p>
      <div className="container-radio">
        <InputRadio
          label="General Enquire"
          defaultChecked
          onChange={(e) => setForm({ ...form, radio: e.target.id })}
        />
        <InputRadio
          label="Support Request"
          onChange={(e) => setForm({ ...form, radio: e.target.id })}
        />
      </div>

      <p className="query-types">Message:</p>

      <textarea
        id="message"
        name="message"
        placeholder="..."
        onChange={(e) => setForm({ ...form, textarea: e.target.value })}
      ></textarea>

      <Checkbox
        type="checkbox"
        label="I consent to being contacted by the team"
        onChange={(e) => setForm({ ...form, checkbox: e.target.checked })}
        required
      />
      <Button type="submit" textBtn="Submit" />
    </form>
  );
};

export default App;

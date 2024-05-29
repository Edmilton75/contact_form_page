import React, { HtmlHTMLAttributes, useState } from "react";
import Header from "./Header";
import "./App.css";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Buttom from "./Button";

const App = () => {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Header />
      <div className="contain-name">
        <Input
          name="firts-name"
          id="nome"
          type="text"
          children="Firts name"
          width="100%"
          onChange={handleChange}
        />
        <Input
          name="last-name"
          id="sobrenome"
          type="text"
          children="Last name"
          width="100%"
          onChange={handleChange}
        />
      </div>
      <Input
        name="email-Address"
        id="email"
        type="email"
        children="Email Address"
        onChange={handleChange}
      />
      <p className="query-types">Query Type</p>
      <div className="contain-radios">
        <div className="contain-radio">
          <Input
            name="General"
            id="General"
            type="radio"
            children="General Enquiry"
          />
        </div>
        <div className="contain-radio">
          <Input
            name="Suport"
            id="Suport"
            type="radio"
            children="Suport Request"
          />
        </div>
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

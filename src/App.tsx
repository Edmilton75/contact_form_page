import React from "react";
import Header from "./Header";
import "./App.css";
import Input from "./Input";

const App = () => {
  return (
    <div className="form">
      <Header />
      <div className="contain-name">
        <Input
          name="firts-name"
          id="firts-name"
          type="text"
          children="Firts name"
          width="100%"
        />
        <Input
          name="last-name"
          id="last-name"
          type="text"
          children="Last name"
          width="100%"
        />
      </div>
      <Input
        name="email-Address"
        id="email-Address"
        type="email"
        children="Email Address"
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
    </div>
  );
};

export default App;

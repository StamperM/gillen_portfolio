import React, { useState } from "react";
import "../styles/contact.css";
import {Link} from "react-router-dom";
import validator from "validator";

export default function Contact() {
  const name = ([name, setName] = useState(""));
  const message = ([message, setMesage] = useState(""));
  const email = ([emailerr, setEmailerr] = useState(""));
  const validateEmail = (e) => {
    let email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailerr("Valid Email :)");
    } else {
      setEmailErr("Enter valid email");
    }
    const emailSubject = (name) => {
      setName(name);
    };
    const emailMessage = (message) => {
      setMessage(message);
    };
    const sendEmail = (name, email, message) => {
      emailMessage(message);
      emailSubject(name);
    };

    return (
      <div>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName;
              }}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => validateEmail(e)}
            />
          </label>
          <label>
            Message
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage;
              }}
            />
          </label>
          <button type="button" className="btn cust-btn" onClick={sendEmail}>
            <Link to="mailto:melissagillen3@gmail.com?message={}&body={message}">
              Submit
            </Link>
          </button>
        </form>
      </div>
    );
  };
}

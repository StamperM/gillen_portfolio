import React, { useState } from "react";
import "../styles/contact.css";
import {Link} from "react-router-dom";
import {validateEmail} from '../../utils/emailHelper'

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMesage] = useState("");
  const  [email,setEmail] = useState("");
  const [err, setErrorMsg]=useState('');


  const inputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if(inputType==='email'){
        setEmail(inputValue)
    }else if (inputType==='message'){
        setMesage(inputValue);
    } else {
        setName(inputValue);
    }
    
    const sumbitEmail= (e) => {

      e.preventDefault();
  
      if (!validateEmail(email)) {
        setErrorMsg('Email or username is invalid');
    
        return;
    
      }
    setName('');
    setMesage('');
    setEmail('');
   }
   

    return (
      <div>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange=
                {inputChange}
              
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              value={email}
              onChange={inputChange}
            />
          </label>
          <label>
            Message
            <input
              type="text"
              name="message"
              value={message}
              onChange= 
                {inputChange} 
             
            />
          </label>
          <button type="button" className="btn cust-btn" onClick={sumbitEmail}>
            <Link to="mailto:melissagillen3@gmail.com?message={}&body={message}">
              Submit
            </Link>
          </button>
        </form>
        {err &&(
            <div>
                <p className="err-text"> {err}</p>
       </div>
        )}
      </div>
    );
  };
}

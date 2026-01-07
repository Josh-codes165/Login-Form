import React from "react";
import { useState } from "react";
import mail from "../src/assets/mail.png";
import padlock from "../src/assets/padlock.png";
import user from "../src/assets/user.png";
import './form1.css';
import { Link } from "react-router-dom";
function Form1() {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        password1: "",
        password2: ""
    })

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }

    const validate = () => {
        if(!userInput.name){
            alert("Please Enter your Name")
            return
        }
        if(!userInput.email){
            alert("Please Enter your Email")
            return
        }
        if(!userInput.password1){
            alert("Please Enter your Password")
            return
        } 
        if(!userInput.password2){
            alert("Please Confirm your Password")
            return
        } 
        if(userInput.password1 !== userInput.password2){
            alert("Passwords do not match")
            return
        }
        if(userInput.password1.length < 6){
            alert("Password must be at least 6 characters long")
            return
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if(!isValid) return;
        alert (`${userInput.name}, you have successfully registered!`)
        setUserInput({
        name: " ",
        email: " ",
        password1: " ",
        password2: " "})
    }

  return (
    <div className="form-container">
      <div className="texts">
        <h2>Register Here</h2>
        <p className="sign">Sign up to start your journey</p>
      </div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="grouped-input">
          <label htmlFor="">Name</label>
          <div className="input-container">
            <img src={user} alt="user-icon" className="image" />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>
        </div>
        <div className="grouped-input">
          <label htmlFor="">Email</label>
          <div className="input-container">
            <img src={mail} alt="mail-icon" className="image" />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="grouped-input">
          <label htmlFor="">Password</label>
          <div className="input-container">
            <img src={padlock} alt="padlock-icon" className="image" />
            <input
              type="password"
              name="password1"
              onChange={handleChange}
              placeholder="Enter your password (Password must be at least 6 characters long)"
            />
          </div>
        </div>
        <div className="grouped-input">
          <label htmlFor="">Confirm Password</label>
          <div className="input-container">
            <img src={padlock} alt="padlock-icon" className="image" />
            <input
              type="password"
              name="password2"
              onChange={handleChange}
              placeholder="Confirm password"
            />
          </div>
        </div>
        <div className="grouped-input.small">
          <button type="submit">Register</button>
          <small className="small">
            Already have an account?
            <Link to="/form"><span className="span">Sign in</span></Link>
          </small>
        </div>
      </form>
    </div>
  );
}

export default Form1;

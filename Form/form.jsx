import React,{useState } from "react";
import "./form.css";
import mail from "../src/assets/mail.png";
import padlock from "../src/assets/padlock.png";
import { Link } from "react-router-dom";

function Form() {

    const [userInput, setUserInput] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }

    const validate = () => {
        if(!userInput.email){
            alert("Please Enter your Email")
            return
        }
        if(!userInput.password){
            alert("Please Enter your Password")
            return
        }

        if(userInput.password.length < 6){
            alert("Password must be at least 6 characters long")
            return
        }
        return true;

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if(!isValid) return;
        console.log(userInput.email)
        console.log(userInput.password)
        alert("Welcome Back!")
        setUserInput({
        email: " ",
        password: " "
    })
    }
  return (
    <div className="form-container">
      <div className="texts">
        <h2>Welcome back</h2>
        <p className="sign">Sign in to continue your journey</p>
      </div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="grouped-input">
          <label htmlFor="">Email</label>
          <div className="input-container">
            <img src={mail} alt="mail-icon" className="image" />
            <input type="email" name="email" onChange={handleChange} placeholder="Enter your email" />
          </div>
        </div>
        <div className="grouped-input">
          <label htmlFor="">Password</label>
          <div className="input-container">
            <img src={padlock} alt="padlock-icon" className="image" />
            <input type="password" name="password" onChange={handleChange} placeholder="Enter your password" />
          </div>
        </div>
        <div className="grouped-input.small">
          <button type="submit">Login</button>
          <small className="small">Dont have an account? 
            <Link to="/form1"><span className="span">Sign up</span></Link></small>
        </div>
      </form>
    </div>
  );
}

export default Form;

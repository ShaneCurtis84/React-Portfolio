import React, { useState } from "react";
import "../../styles/Contact.css";

import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!userName && !validateEmail(email) && !message) {
      setErrorMessage("Please fill out the required fields");
    } else if (userName && !validateEmail(email) && !message) {
      setErrorMessage("Please enter your email and a message");
    } else if (userName && validateEmail(email) && !message) {
      setErrorMessage("Please enter a message");
    } else if (!userName && validateEmail(email) && !message) {
      setErrorMessage("Please enter your name and a message");
    } else if (!userName && !validateEmail(email) && message) {
      setErrorMessage("Please enter your name and email");
    } else if (!userName && validateEmail(email) && message) {
      setErrorMessage("Please enter your name");
    } else if (userName && !validateEmail(email) && message) {
      setErrorMessage("Please enter a valid email");
    } else {
      setErrorMessage(`Hello ${userName}, your message has been sent!`);
      setUserName("");
      setMessage("");
      setEmail("");
    }
  };

  return (
    <div className="contact-body">
      <h1 className="page-header">Contact Me</h1>
      <form className="form">
        <label htmlFor="username">Name:</label>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          rows="1"
          cols="40"
          placeholder=" Enter your name"
        />
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          rows="1"
          cols="40"
          placeholder="Enter your email address"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          value={message}
          name="password"
          onChange={handleInputChange}
          type="text"
          rows="6"
          cols="40"
          placeholder="Please leave me a message "
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>© Shane Curtis 2021</p>
      <a id="icons" href="https://github.com/ShaneCurtis84">
        <i className="fab fa-github fa-3x"></i>
      </a>
      <a id="icons" href="mailto:shaneccurtis1984@gmail.com">
        <i className="fas fa-envelope fa-3x"></i>
      </a>
      <a id="icons" href="www.linkedin.com/in/shane-curtis84">
        <i className="fab fa-linkedin fa-3x"></i>
      </a>
    </footer>
  );
}

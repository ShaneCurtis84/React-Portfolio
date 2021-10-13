import React from "react";
import Image from '../../assets/images/profile.png'
import '../../styles/About.css'

export default function About() {
  return (
    <div className="about-body">
      <h1 className="page-header">About Me</h1>

      <p className="about-content">
        Hi am Software Developer that has recently completed a Bootcamp in FullStack Web Development at the University of Western Australia. I love all things Tech and have a
         background in IT Tech Support. I am contactable by Email, Github and Linked in. Please feel free to reach out at the links provided below. 
      </p>
      <img id="profile" src={Image} alt="Profile Pic"></img>
    </div>
  );
}

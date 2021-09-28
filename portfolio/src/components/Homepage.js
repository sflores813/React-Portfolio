import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Homepage = () => {
  return (
    <>
      <section className="homepage">
        <div className="overlay">
          <h1>Stephen Flores</h1>
          <p>Front End Web Developer</p>

          <ul>
            <li>
              <a href="https://github.com/sflores813" target="_blank" rel="noopenner noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopenner noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Homepage;

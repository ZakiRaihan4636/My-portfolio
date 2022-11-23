import React from "react";
import './home.css';

const Social = () => {
  return (
    <div className="home__social">
      <a href="www.intagram.com" className="home__social-icon" target="blank">
        <i class="uil uil-instagram-alt"></i>
      </a>

      <a href="https://github.com" className="home__social-icon" target="blank">
        <i class="uil uil-github-alt"></i>
      </a>

      <a href="" className="home__social-icon" target="blank">
        <i class="uil uil-linkedin"></i>
      </a>
    </div>
  )
}


export default Social
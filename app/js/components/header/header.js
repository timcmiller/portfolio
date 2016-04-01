import React from 'react';
import ResumeStyles from './../../styles/resume';

export default React.createClass({

  render() {

    return (
      <header className="main-header">
          <ul id="navMenu" className="site-nav">
            <li data-menuanchor="about-me">
              <a className="nav-link" href="#about-me">About</a>
            </li>
            <li data-menuanchor="projects">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li data-menuanchor="contact">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
      </header>
    );
  }
})

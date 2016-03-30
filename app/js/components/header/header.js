import React from 'react';
import ResumeStyles from './../../styles/resume';
export default React.createClass({

  render() {

    return (
      <header className="main-header">
          <ul className="site-nav">
            <li>
              <a className="nav-link" href="#about">About</a>
            </li>
            <li>
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li>
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
      </header>
    );
  }
})

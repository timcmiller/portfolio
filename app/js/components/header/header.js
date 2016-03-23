import React from 'react';

export default React.createClass({

  render() {
    return (
      <header className="main-header">
          <ul className="site-nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a>Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
      </header>
    );
  }
})

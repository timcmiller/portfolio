import React from 'react';

export default React.createClass({

  render() {
    return (
      <header className="main-header">
          <ul className="site-nav">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Resume</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
      </header>
    );
  }
})

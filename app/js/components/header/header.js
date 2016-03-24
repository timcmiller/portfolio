import React from 'react';
import SkyLight from 'react-skylight';
import ResumeStyles from './../../styles/resume';
export default React.createClass({

  render() {

    return (
      <header className="main-header">
          <ul className="site-nav">
            <li>
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li>
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li>
              <a className="nav-link" onClick={() => this.refs.customDialog.show()}>Resume</a>
              <SkyLight dialogStyles={ResumeStyles} hideOnOverlayClicked ref="customDialog" title="A Custom Modal">
                <img className="resume-img" src="images/resume.png" alt="Resume" />
              </SkyLight>
            </li>
            <li>
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
      </header>
    );
  }
})

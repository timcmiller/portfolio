import React from 'react';

export default React.createClass({

  render() {
    return(
      <section className="landing-container">
        <div className="title-container">
          <h2 className="title">Tim C Miller</h2>
          <h3 className="subtitle">Full-Stack Engineer</h3>
        </div>
        <ul className="landing-list">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Ruby</li>
          <li>React</li>
          <li>React Native</li>
          <li>Angular</li>
          <li>Ember</li>
        </ul>
      </section>
    );
  }
});

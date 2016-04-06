import React from 'react';

export default React.createClass({

  render() {
    return (
      <section>
        <h2>
          About
        </h2>
        <div className="container">
          <p className="intro">
            I am a recent graduate from Code Fellows JavaScript Development seeking employment as a software developer. I previously was working in high end fashion retail managing multi-million dollar departments.
          </p>
          <img className="profile-img" src="images/profile.png" alt="Tim C Miller" />
        </div>
      </section>
    );
  }
})

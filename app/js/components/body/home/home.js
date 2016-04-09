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
            I am a software developer who likes to build things using JavaScript, Ruby, HTML and CSS. As a kid, I dreamed of becoming the mathematician to discover the last number of pi (it's 5). I like to drink whiskey, ride motorcycles and trick my wife into playing board games with me.
          </p>
          <img className="profile-img" src="images/profile.png" alt="Tim C Miller" />
        </div>
      </section>
    );
  }
})

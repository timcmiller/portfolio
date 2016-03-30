import React from 'react';

export default React.createClass({

  render() {
    return (
      <section>
        <h2>
          Contact
        </h2>
        <div className="container">
          <form className="contact-form">
            <div className="container row style-1">
              <label className="input-box">
                <span>*Name:</span>
                <input className="input" type="text" placeholder="Name" />
              </label>
              <label className="input-box">
                <span>*Email:</span>
                <input className="input" type="text" placeholder="Email" />
              </label>
            </div>
            <label className="input-box">
              Message:
              <textarea className="input"></textarea>
            </label>
            <button className="btn confirm" type="button">Send</button>
          </form>
        </div>
      </section>
    );
  }
})

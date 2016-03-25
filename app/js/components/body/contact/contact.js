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
            <div className="container row">
              <label className="input-box">
                <span>*Name:</span>
                <input type="text" placeholder="Name" />
              </label>
              <label className="input-box">
                <span>*Email:</span>
                <input type="text" placeholder="Subject" />
              </label>
            </div>
            <label className="input-box">
              Message:
              <textarea row="6" columns="15"></textarea>
            </label>
            <button className="btn confirm" type="button">Send</button>
          </form>
        </div>
      </section>
    );
  }
})

import React from 'react';

export default React.createClass({

  render() {
    return (
      <section>
        <h2>
          Contact
        </h2>
        <div className="container">
          <form id="ajax-contact" method="post" action="mailer.php" className="contact-form">
            <div className="container row style-1">
              <label className="input-box">
                <span>*Name:</span>
                <input className="input" id="name" type="text" name="name" required/>
              </label>
              <label className="input-box">
                <span>*Email:</span>
                <input className="input" type="email" id="email" name="email" required/>
              </label>
            </div>
            <label className="input-box">
              Message:
              <textarea className="input" id="message" name="message" required></textarea>
            </label>
            <button className="btn confirm" type="submit">Send</button>
          </form>
        </div>
      </section>
    );
  }
})

import React from 'react';

export default React.createClass({

  handleSubmit(e) {
    console.log('submitted');
    e.preventDefault();
    this.
    $.ajax({
      type: 'POST',
      url: '/contact/',
      data: $('#contact-form').serialize(),
      success: function(res) {
        console.log('e-mail sent');
      }
    });
  },

  handleNameChange(e) {
    this.props.changeName(e.target.value);
  },

  handleEmailChange(e) {
    this.props.changeEmail(e.target.value);
  },

  handleMessageChange(e) {
    this.props.changeMessage(e.target.value);
  },

  render() {
    return (
      <section>
        <h2>
          Contact
        </h2>
        <div className="container">
          <form id="contact-form" className="contact-form">
            <div className="container row style-1">
              <label className="input-box" forHTML="contact-form-name">
                <span>*Name:</span>

                <input
                  className="input"
                  id="contact-form-name"
                  type="text"
                  name="name"
                  onChange={this.handleNameChange}
                  required/>

              </label>
              <label className="input-box" forHTML="contact-form-mail">
                <span>*Email:</span>

                <input
                className="input"
                type="email"
                id="contact-form-mail"
                name="email"
                onChange={this.handleEmailChange}
                required/>

              </label>
            </div>
            <label className="input-box" forHTML="contact-form-message">
              *Message:

              <textarea
                className="input"
                id="contact-form-message"
                name="message"
                onChange={this.handleMessageChange}
                required>
              </textarea>

            </label>
            <button className="btn confirm" type="submit" onClick={this.handleSubmit}>Send</button>
          </form>
        </div>
      </section>
    );
  }
})

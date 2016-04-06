import React from 'react';

export default React.createClass({

  handleSubmit(e) {
    console.log('submitted');
    e.preventDefault();
    this.props.validateForm(this.props.name, this.props.email, this.props.message);
    $('#contact-form-name').val("");
    $('#contact-form-mail').val("");
    $('#contact-form-message').val("");
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
                  onChange={this.handleNameChange}/>

              </label>
              <label className="input-box" forHTML="contact-form-mail">
                <span>*Email:</span>

                <input
                className="input"
                type="email"
                id="contact-form-mail"
                name="email"
                onChange={this.handleEmailChange}/>

              </label>
            </div>
            <label className="input-box" forHTML="contact-form-message">
              *Message:

              <textarea
                className="input"
                id="contact-form-message"
                name="message"
                onChange={this.handleMessageChange}>
              </textarea>

            </label>
            <button className="btn confirm" type="submit" onClick={this.handleSubmit}>Send</button>
            {this.props.success ? <span>Message Sent!</span> : null}
          </form>
        </div>
      </section>
    );
  }
})

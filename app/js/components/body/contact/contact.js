import React from 'react';

export default React.createClass({

  componentDidMount() {
    $('#contact-form-name').val(this.props.name);
    $('#contact-form-mail').val(this.props.mail);
    $('#contact-form-message').val(this.props.message);
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.validateForm(this.props.name, this.props.email, this.props.message);
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
                <span className={this.props.nameInvalid ? "invalidText" : null}>*Name:</span>

                <input
                  className={this.props.nameInvalid ? "input invalid" : "input"}
                  id="contact-form-name"
                  type="text"
                  name="name"
                  onChange={this.handleNameChange}/>

              </label>
              <label className="input-box" forHTML="contact-form-mail">
                <span className={this.props.emailInvalid ? "invalidText" : null}>*Email:</span>

                <input
                className={this.props.emailInvalid ? "input invalid" : "input"}
                type="email"
                id="contact-form-mail"
                name="email"
                onChange={this.handleEmailChange}/>

              </label>
            </div>
            <label className="input-box" forHTML="contact-form-message">
              <span className={this.props.messageInvalid ? "invalidText" : null}>*Message:</span>

              <textarea
                className={this.props.messageInvalid ? "input invalid" : "input"}
                id="contact-form-message"
                name="message"
                onChange={this.handleMessageChange}>
              </textarea>

            </label>
            <button className={this.props.btnDisabled ? "btn icon-mail2 disabled" : "btn icon-mail2"} type="submit" onClick={this.handleSubmit} disabled={this.props.btnDisabled}></button>
            {this.props.success ? <span className="center">Message Sent!</span> : null}
            {this.props.failure ? <span className="invalidText center">Please fill in all required fields and use a valid emaild address</span> : null}
          </form>
        </div>
      </section>
    );
  }
})

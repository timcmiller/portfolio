import React from 'react';

export default React.createClass({

  render() {
    return (
      <section className="container">
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Subject" />
          <textarea row="6" columns="15"></textarea>
          <button type="button">Send</button>
        </form>
      </section>
    );
  }
})

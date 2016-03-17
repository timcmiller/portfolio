import React from 'react';

export default React.createClass({

  render() {
    return (
      <section className="container">
        <p>
          {this.props.heading}
        </p>
      </section>
    );
  }
})

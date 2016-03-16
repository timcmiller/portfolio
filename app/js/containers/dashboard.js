import React from 'react';
import ReactDOM from 'react-dom';

import PortfolioBody from './../components/body/body';

export default React.createClass({

  render() {
    return (
      <section>
        <PortfolioBody {...this.props} />
      </section>
    );
  }
});

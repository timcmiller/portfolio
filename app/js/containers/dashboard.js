import React from 'react';
import ReactDOM from 'react-dom';

import PortfolioBody from './../components/body/body';
import PortfolioHeader from './../components/header/header';
import PortfolioFooter from './../components/footer/footer';

export default React.createClass({

  render() {
    return (
      <section>
        <PortfolioHeader {...this.props} />
        <PortfolioBody {...this.props} />
        <PortfolioFooter />
      </section>
    );
  }
});

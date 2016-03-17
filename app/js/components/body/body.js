import React from 'react';

import Home from './home/home';
import Projects from './projects/projects';
import Contact from './contact/contact';

export default React.createClass({

  render() {
    return (
      <section>
        <Home {...this.props} />
        <Projects {...this.props} />
        <Contact {...this.props} />
      </section>
    );
  }
});

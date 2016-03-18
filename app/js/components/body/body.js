import React from 'react';

import Home from './home/home';
import ProjectList from './project_list/project_list';
import Contact from './contact/contact';

export default React.createClass({

  render() {
    return (
      <section>
        <Home {...this.props} />
        <ProjectList {...this.props} />
        <Contact {...this.props} />
      </section>
    );
  }
});

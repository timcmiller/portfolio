import React from 'react';

import Home from './home/home';
import ProjectList from './project_list/project_list';
import Contact from './contact/contact';

export default React.createClass({

  render() {
    return (
      <section className="body">
        <a className="page-links" id="about"></a>
        <Home {...this.props} />
        <a className="page-links" id="projects"></a>
        <ProjectList {...this.props} />
        <a className="page-links" id="contact"></a>
        <Contact {...this.props} />
      </section>
    );
  }
});

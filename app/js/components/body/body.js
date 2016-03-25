import React from 'react';

import Home from './home/home';
import ProjectList from './project_list/project_list';
import Contact from './contact/contact';

export default React.createClass({

  render() {
    return (
      <section className="body">
        <a name="home"></a>
        <Home {...this.props} />
        <a name="projects"></a>
        <ProjectList {...this.props} />
        <a name="contact"></a>
        <Contact {...this.props} />
      </section>
    );
  }
});

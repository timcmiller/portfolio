import React from 'react';

import Home from './home/home';
import ProjectList from './project_list/project_list';
import Contact from './contact/contact';
import Landing from './landing/landing';
import PortfolioFooter from './../footer/footer';


          // <div className="slide">Slide 1</div>
          // <div className="slide">Slide 2</div>
          // <div className="slide">Slide 3</div>
          // <div className="slide">Slide 4</div>
          // <div className="slide">Slide 5</div>

export default React.createClass({

  render() {
    return (
      <section id="fullpage" className="body">
        <div className="section">
          <Landing />
        </div>
        <div className="section">
          <Home {...this.props} />
        </div>
        <ProjectList {...this.props} />
        <div className="section">
          <Contact {...this.props} />
          <PortfolioFooter />
        </div>
      </section>
    );
  }
});

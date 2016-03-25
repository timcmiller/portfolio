import React from 'react';
import projectArray from './../../../lib/projects';
import Project from './project/project';

export default React.createClass({

  render() {
    var projectNodes = projectArray.map(function(project) {
      return (
        <Project key={project._id} {...project}>
          {project.title}
        </Project>
      );
    });

    return (
      <section className="project-container column">
        <h2>
          Projects
        </h2>
        {projectNodes}
      </section>
    );
  }
})

import React from 'react';
import projectArray from './../../../lib/projects';
import Project from './project/project';

export default React.createClass({

  render() {
    var projectNodes = projectArray.map(function(project) {
      return (
        <div className="slide" key={project._id}>
          <Project {...project}>
            {project.title}
          </Project>
        </div>
      );
    });

    return (
      <div className="section">
        {projectNodes}
      </div>
    );
  }
})

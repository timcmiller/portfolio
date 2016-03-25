import React from 'react';
import marked from 'marked';

export default React.createClass({

  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render() {
    var techNodes = this.props.tech.map(function(tech, key) {
      return (
        <span className="tech" key={key}>
          {tech}
        </span>
      );
    })

    var linkNodes = this.props.links.map(function(link, key) {
      return (
        <a href={link.link} alt={this.props.title + ' ' + link.site} className="icon-link" key={key}>
          <span className={link.icon + " icons"}></span>
        </a>
      );
    }.bind(this))

    return (
      <article className="container">
        <img className="project-logo" style={{width: this.props.width, height: this.props.height}} src={"images/" + this.props.img} alt={this.props.title} />
        <div callName="container column">
          <h2 dangerouslySetInnerHTML={this.rawMarkup()}></h2>
          <p>
            {this.props.description}
          </p>
          <div className="techContainer">
            {techNodes}
          </div>
          {linkNodes}
        </div>
      </article>
    );
  }
})

import React from 'react';
import marked from 'marked';

export default React.createClass({

  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render() {
    return (
      <article>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        {this.props.description}
      </article>
    );
  }
})

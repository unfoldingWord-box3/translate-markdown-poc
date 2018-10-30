import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';

import * as helpers from './helpers';

class BlockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: this.props.markdown
    }
  };

  setMarkdown(markdown) {
    this.setState({
      markdown: markdown
    });
  };

  setMarkdownFromHtml(html) {
    const markdown = helpers.htmlToMarkdown(html);
    this.setMarkdown(markdown);
  };

  render() {
    const props = this.props;
    let {
      markdown
    } = this.state;

    return (
      <Block
        {...props}
        markdown={markdown}
        setMarkdown={this.setMarkdown.bind(this)}
        setMarkdownFromHtml={this.setMarkdownFromHtml.bind(this)}
      />
    );
  };
};

Block.propTypes = {
  markdown: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  raw: PropTypes.bool,
  sectionIndex: PropTypes.number.isRequired,
  blockIndex: PropTypes.number.isRequired,
}

export default BlockContainer;

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
    this.props.setTargetBlock(
      this.props.sectionIndex,
      this.props.blockIndex,
      markdown,
    )
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

BlockContainer.propTypes = {
  markdown: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  raw: PropTypes.bool,
  sectionIndex: PropTypes.number.isRequired,
  blockIndex: PropTypes.number.isRequired,
  setTargetBlock: PropTypes.func.isRequired,
}

export default BlockContainer;

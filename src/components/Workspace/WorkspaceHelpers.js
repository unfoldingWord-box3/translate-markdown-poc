import TurndownService from 'turndown';
import request from 'request-promise';
import {each} from 'async';
import marked from 'marked';

const turndownService = new TurndownService();
turndownService.addRule('linebreaks', {
  filter: ['br'],
  replacement: () => '<br>',
});
const uriBase = window.location.href;

export const fetchFiles = (source, target) => new Promise((resolve, reject) => {
  let fileObjects = {};
  each([source, target],
    (fileObject, done) => {
      fetchFileData(fileObject).then(data => {
        fileObjects[fileObject.type] = data;
        done();
      });
    },
    (error) => {
      if (error) {
        console.log(error); reject(error);
      } else {
        resolve(fileObjects);
      }
    }
  );
});

export const htmlToMarkdown = (html) => {
  const isKeepBlank = (html === '<div><br></div><div><br></div>');
  const turndown = turndownService.turndown(html).replace(/<br>/g,'');
  const markdown = isKeepBlank ? '<br>' : turndown;
  return markdown;
};

export const markdownToHtml = (markdown) => {
  const isBlank = /^\s*$/g.test(markdown);
  const html = isBlank ? '<div><br></div><div><br></div>' : marked(markdown, {sanitize: true});
  return html;
};

export const blocksFromMarkdown = (markdown) => markdown.split(/\n\n/g);

export const sectionsFromBlocks = (blocks) => {
  let sections = [];
  let section = [];
  blocks.forEach(block => {
    const headingRegex = /^\s?#+/;
    const heading = headingRegex.test(block);
    if ((section.length > 0) && heading) {
      sections.push(section);
      section = [];
    }
    section.push(block);
  });
  // don't leave a dangling section
  if (section !== []) {
    sections.push(section);
    section = [];
  }
  return sections;
};

export const pivotSections = (sourceSections, targetSections) => {
  let pivotedSections = [];
  const longest = (sourceSections.length > targetSections.length) ?
    sourceSections : targetSections;
  longest.forEach((blocks, sectionIndex) => {
    let pivotedBlocks = [];
    blocks.forEach((block, blockIndex) => {
      const sourceSection = sourceSections[sectionIndex];
      const targetSection = targetSections[sectionIndex];
      const sourceBlock = sourceSection[blockIndex];
      const targetBlock = targetSection[blockIndex];
      const blockRow = {
        sourceBlock: sourceBlock,
        targetBlock: targetBlock,
      };
      pivotedBlocks.push(blockRow);
    });
    pivotedSections.push(pivotedBlocks);
  });
  return pivotedSections;
};

export const setBlockInSections = (sections, blockMarkdown, sectionIndex, blockIndex) => {
  let _sections = JSON.parse(JSON.stringify(sections));
  // overwrite the edited block
  _sections[sectionIndex][blockIndex] = blockMarkdown;
  const __sections = reparseSections(_sections);
  return __sections
};

export const blocksFromSections = (_sections) => {
  let allBlocks = [];
  _sections.forEach(_blocks => {
    _blocks.forEach(_block => {
      const isBlankLine = _block === '<br>';
      allBlocks.push(isBlankLine ? '' : _block);
    });
  });
  return allBlocks;
};

const _unicodePlaceholder_ = '↲';

export const blockPlaceholderAdd = (markdown) => {
  const isKeepBlank = /^\n{2,}$/g.test(markdown);
  const isRemoveBlank = /^[\n\s]?$/g.test(markdown);
  if (isKeepBlank) return _unicodePlaceholder_;
  if (isRemoveBlank) return '';
  return markdown;
};

export const blockPlaceholderRemove = (markdown) => {
  const isKeepBlank = markdown === _unicodePlaceholder_;
  return isKeepBlank ? '\n\n' : markdown;
};

export const prepareMarkdownForDisplay = (markdown) => {
  const isBlank = (markdown === '');
  return isBlank ? '\n\n' : markdown;
};

export const reparseSections = (sections) => {
  let _sections = JSON.parse(JSON.stringify(sections));
  const blocks = blocksFromSections(_sections);
  const markdownFile = blocks
  .map(block => blockPlaceholderAdd(block))
  .filter(block => block !== '')
  .map(block => blockPlaceholderRemove(block))
  .join('\n\n');
  const _blocks = blocksFromMarkdown(markdownFile);
  const __sections = sectionsFromBlocks(_blocks);
  return __sections;
}

export const fetchFileData = (config) => new Promise((resolve, reject) => {
  let data = config;
  get(config.uri)
  .then(text => {
    const _blocks = blocksFromMarkdown(text);
    const _sections = sectionsFromBlocks(_blocks);
    data.sections = _sections;
    resolve(data);
  })
  .catch(error => reject(error));
});


const get = (_uri) => new Promise((resolve, reject) => {
  const uri = uriBase + _uri;
  const options = {
    method: 'GET',
    uri: uri,
  };
  request(options)
  .then(data => resolve(data) )
  .catch(error => reject(error) );
});

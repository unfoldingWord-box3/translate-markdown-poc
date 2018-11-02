import TurndownService from 'turndown';
import marked from 'marked';

const turndownService = new TurndownService();
export const htmlToMarkdown = (html) => {
  const markdown = turndownService.turndown(html);
  return markdown;
}

export const markdownToHtml = (markdown) => {
  const html = marked(markdown, {sanitize: true});
  return html;
}

export const blocksFromMarkdown = (markdown) => {
  return markdown.split(/\n\s?\n/);
};

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
      allBlocks.push(_block);
    });
  });
  return allBlocks;
};

export const reparseSections = (sections) => {
  let _sections = JSON.parse(JSON.stringify(sections));
  const blocks = blocksFromSections(_sections);
  const markdownFile = blocks.join('\n\n');
  const _blocks = blocksFromMarkdown(markdownFile);
  const __sections = sectionsFromBlocks(_blocks);
  return __sections;
}

export const fetchFile = (config) => {
  const promise = new Promise((resolve) => {
    fetch(config.path)
      .then((res) => res.text())
      .then((text) => {
        const _blocks = blocksFromMarkdown(text);
        const _sections = sectionsFromBlocks(_blocks);
        const data = config;
        data.sections = _sections;
        resolve(data);
      });
  });
  return promise;
}

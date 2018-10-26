
export const sections = (blocks) => {
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

export const blocks = (markdown) => {
  return markdown
    .split(/\n\n/);
};

export const fetchFile = (config) => {
  const promise = new Promise((resolve) => {
    fetch(config.path)
      .then((res) => res.text())
      .then((text) => {
        const _blocks = blocks(text);
        const _sections = sections(_blocks);
        const data = config;
        data.sections = _sections;
        resolve(data);
      });
  });
  return promise;
}

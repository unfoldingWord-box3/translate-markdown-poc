# Translate Markdown
A Proof of Concept React App to facilitate translation of Markdown files.

Demo: [https://klappy.github.io/translate-markdown/]

## Purpose
Markdown is growing in popularity and becoming a common file format for text content. The current workflows around translating Markdown files is quite tedious and cumbersome at best.

Our organization has many content projects comprised of up to hundreds of markdown files. Our current translation workflow includes file conversion to a Translation Management System's compatible format that requires stripping inline formatting, links, and images, only to inject them back in after they are exported from the TMS.

Most content creators and translators of Markdown content are not typically familiar with translation workflows. Creating a clean and simple user experience to aid in an intuitive workflow was needed. Our goal was to maximize the amount of work not done and attempt to create a single web app that was easy to use with minimal training.

## Goals
- Handle end to end translation of a single Markdown file.
- Intuitive interface and workflow for non professional translators.
- Guide parity between original and translated markdown of text blocks.
  - Text alignment to avoid scrolling to find matching content.
  - Block level formatting such as headings.
  - Inline formatting.
  - Links and images.
- File Management to easily switch between Markdown files.
- Git integration:
  - Data persistence
  - Change tracking
  - Synchronize progress
  - Manage revisions

## Technical Overview
- Load original and translated file.
- Parse the line breaks of raw text to identify text blocks.
- Parse Headings to identify sections of content.
- Organize text blocks under headings.
- Render markdown text blocks as html for WYSIWYG editing.
- Display matching original and translation text blocks side by side.
- Toggle raw markdown to view and modify markdown.
- When section is modified or saved, data is persisted at file level.

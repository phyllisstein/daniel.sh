/* stylelint-disable */

import { createGlobalStyle } from 'styled-components'

export const Prism = createGlobalStyle`
  code[class*="language-"],
  pre[class*="language-"] {
    color: black;
    font-size: 1em;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    line-height: 1.5;
    white-space: pre;
    text-align: left;
    text-shadow: 0 1px white;
    word-wrap: normal;
    word-break: normal;
    word-spacing: normal;
    tab-size: 4;
    hyphens: none;

    background: none;
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #F5F2F0;
  }

  pre[class*="language-"] {
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;

    background: #B3D4FC;
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;

    background: #B3D4FC;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;

    white-space: normal;

    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9A6E3A;

    background: hsla(0, 0%, 100%, 0.5);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07A;
  }

  .token.function,
  .token.class-name {
    color: #DD4A68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #E90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`

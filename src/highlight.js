/**
 * @license
 * highlight.js
 * License: BSD-3-Clause
 * Copyright (c) 2006 Ivan Sagalaev
 */
import hljs from "highlight.js";
import vue from "highlight.js/lib/languages/xml";

/**
 * @license
 * highlightjs-graphql
 * License: MIT
 * Copyright (c) 2019 David Peek
 */
import { definer as graphql } from "highlightjs-graphql";

Object.entries({ vue, graphql }).forEach((language) => {
  hljs.registerLanguage(...language);
});
Object.assign(window, { hljs });

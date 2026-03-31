"use strict";
exports.ids = ["5549"];
exports.modules = {
67452(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_01_12_2023_yearly_review_md_01b_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_01_12_2023_yearly_review_md_01b_json__rspack_import_0 = __webpack_require__(76430);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys Assistant\'s 2023 Year In Review',
	description: 'What a year! A chance to look back at what marked 2023 and the plans I have for 2024.',
	authors: 'pierregilles',
	image: '/img/presentation/2023-year-in-review.jpg',
	slug: '2023-year-in-review'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What happened in 2023?",
  "id": "what-happened-in-2023",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Happy New Year to all 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I hope 2024 will be a year full of good things for you: health, family, projects!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Like every year, I take stock of the previous year and present my plans for the new year."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you prefer this review on video, I've made a YouTube live which is available for replay ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.youtube.com/watch?v=9aHgmzqObxQ",
        children: "here (in french only)"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "what-happened-in-2023",
      children: "What happened in 2023?"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},
76430(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/2023-year-in-review","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2024-01-12-2023-yearly-review.md","source":"@site/blog/2024-01-12-2023-yearly-review.md","title":"Gladys Assistant\'s 2023 Year In Review","description":"What a year! A chance to look back at what marked 2023 and the plans I have for 2024.","date":"2024-01-12T00:00:00.000Z","tags":[],"readingTime":5.24,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys Assistant\'s 2023 Year In Review","description":"What a year! A chance to look back at what marked 2023 and the plans I have for 2024.","authors":"pierregilles","image":"/img/presentation/2023-year-in-review.jpg","slug":"2023-year-in-review"},"unlisted":false,"prevItem":{"title":"Launch of the ULTIMATE guide to getting started in home automation 🚀","permalink":"/zh-Hans/blog/lancement-formation"},"nextItem":{"title":"Sonos integration now available!","permalink":"/zh-Hans/blog/gladys-4-32-sonos-integration"}}')

},

};
;
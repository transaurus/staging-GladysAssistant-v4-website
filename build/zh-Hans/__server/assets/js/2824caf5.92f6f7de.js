"use strict";
exports.ids = ["7405"];
exports.modules = {
61273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2022_03_21_gladys_assistant_is_now_compatible_with_debian_11_md_4b3_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2022_03_21_gladys_assistant_is_now_compatible_with_debian_11_md_4b3_json__rspack_import_0 = __webpack_require__(15457);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys Assistant is now compatible with Debian 11 & Ubuntu > 20.04',
	description: 'As Gladys runs in Docker, it could seems that it should be compatible with any system by default, but it\'s not as simple!',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-debian-11.jpg',
	slug: 'gladys-assistant-compatible-with-debian-11'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hi everyone,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I'm excited to announce that we just released the compatibility with Debian 11 and Ubuntu > 20.04."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We also released a bunch of improvement that will make it more easy to install Gladys on a NAS (Synology/Unraid)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "No new features were added in this release, it's a lot of long-term work & bugfixes 🙂"
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
15457(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-assistant-compatible-with-debian-11","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2022-03-21-gladys-assistant-is-now-compatible-with-debian-11.md","source":"@site/blog/2022-03-21-gladys-assistant-is-now-compatible-with-debian-11.md","title":"Gladys Assistant is now compatible with Debian 11 & Ubuntu > 20.04","description":"As Gladys runs in Docker, it could seems that it should be compatible with any system by default, but it\'s not as simple!","date":"2022-03-21T00:00:00.000Z","tags":[],"readingTime":2.65,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys Assistant is now compatible with Debian 11 & Ubuntu > 20.04","description":"As Gladys runs in Docker, it could seems that it should be compatible with any system by default, but it\'s not as simple!","authors":"pierregilles","image":"/img/presentation/gladys-debian-11.jpg","slug":"gladys-assistant-compatible-with-debian-11"},"unlisted":false,"prevItem":{"title":"Launching Gladys Assistant 4.9 with Amazon Alexa support","permalink":"/zh-Hans/blog/gladys-assistant-4-9-with-alexa-integration"},"nextItem":{"title":"Gladys Assistant 4.8 is available, with calendar based triggers and conditions in scenes!","permalink":"/zh-Hans/blog/gladys-assistant-4-8-with-calendar-in-scenes"}}')

},

};
;
"use strict";
exports.ids = ["6388"];
exports.modules = {
48009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_11_20_gladys_4_31_scene_tags_md_b63_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_11_20_gladys_4_31_scene_tags_md_b63_json__rspack_import_0 = __webpack_require__(66733);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Tag filtering & MQTT in scenes in Gladys Assistant 4.31',
	description: 'Gladys Assistant 4.31 brings new features to scenes, as well as fixes to the new alarm functionality.',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-assistant-4-31.jpg',
	slug: 'gladys-4-31-tags-mqtt-scene'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Tag filtering in scenes",
  "id": "tag-filtering-in-scenes",
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
      children: "Hello everyone,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["At the end of October I presented ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/blog/gladys-4-30-alarm-mode/",
        children: "Gladys Assistant 4.30"
      }), ", a version that brought a complete alarm to Gladys!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today I'm releasing Gladys Assistant 4.31, a version that brings a lot of new features and fixes following your feedback on the alarm mode 🎉🎉"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "tag-filtering-in-scenes",
      children: "Tag filtering in scenes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Many of you have been asking for a mechanism to filter the increasing number of scenes in your instances, and @Lokkye has done just that!"
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
66733(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-4-31-tags-mqtt-scene","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2023-11-20-gladys-4-31-scene-tags.md","source":"@site/blog/2023-11-20-gladys-4-31-scene-tags.md","title":"Tag filtering & MQTT in scenes in Gladys Assistant 4.31","description":"Gladys Assistant 4.31 brings new features to scenes, as well as fixes to the new alarm functionality.","date":"2023-11-20T00:00:00.000Z","tags":[],"readingTime":4.07,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Tag filtering & MQTT in scenes in Gladys Assistant 4.31","description":"Gladys Assistant 4.31 brings new features to scenes, as well as fixes to the new alarm functionality.","authors":"pierregilles","image":"/img/presentation/gladys-assistant-4-31.jpg","slug":"gladys-4-31-tags-mqtt-scene"},"unlisted":false,"prevItem":{"title":"Sonos integration now available!","permalink":"/zh-Hans/blog/gladys-4-32-sonos-integration"},"nextItem":{"title":"Gladys gets a full alarm!","permalink":"/zh-Hans/blog/gladys-4-30-alarm-mode"}}')

},

};
;
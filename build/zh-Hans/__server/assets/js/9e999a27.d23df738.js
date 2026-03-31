"use strict";
exports.ids = ["7545"];
exports.modules = {
86894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_08_26_gladys_4_27_dashboard_md_6b7_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_08_26_gladys_4_27_dashboard_md_6b7_json__rspack_import_0 = __webpack_require__(99744);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'IKEA TRÅDFRI Zigbee compatibility & dashboard device renaming',
	description: 'Even more personalized dashboards and Zigbee compatibility in Gladys Assistant 4.27',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-assistant-4-27.jpg',
	slug: 'gladys-4-27-dashboard-rename-and-zigbee'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Rename your devices on the dashboard",
  "id": "rename-your-devices-on-the-dashboard",
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
      children: "Hello everyone!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hope you spent good holidays ☀️"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["On the Gladys Assistant front, I returned last week with an update to v4.26.1, which introduced a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/t/gladys-assistant-v4-26-1-mosquitto-fixed-at-v2-0-15-google-home-graph-improved/118",
        children: "set of fixes"
      }), " in response to your feedback over the summer."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today I'm following up with a more important update in terms of features: Gladys Assistant 4.27."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "rename-your-devices-on-the-dashboard",
      children: "Rename your devices on the dashboard"
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
99744(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-4-27-dashboard-rename-and-zigbee","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2023-08-26-gladys-4-27-dashboard.md","source":"@site/blog/2023-08-26-gladys-4-27-dashboard.md","title":"IKEA TRÅDFRI Zigbee compatibility & dashboard device renaming","description":"Even more personalized dashboards and Zigbee compatibility in Gladys Assistant 4.27","date":"2023-08-26T00:00:00.000Z","tags":[],"readingTime":3.48,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"IKEA TRÅDFRI Zigbee compatibility & dashboard device renaming","description":"Even more personalized dashboards and Zigbee compatibility in Gladys Assistant 4.27","authors":"pierregilles","image":"/img/presentation/gladys-assistant-4-27.jpg","slug":"gladys-4-27-dashboard-rename-and-zigbee"},"unlisted":false,"prevItem":{"title":"MELCloud integration, full-screen tablet mode, Tuya shutters","permalink":"/zh-Hans/blog/gladys-4-29-melcloud-full-screen"},"nextItem":{"title":"Gladys Assistant is now compatible with Tuya devices!","permalink":"/zh-Hans/blog/gladys-assistant-tuya"}}')

},

};
;
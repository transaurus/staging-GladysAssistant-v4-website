"use strict";
exports.ids = ["913"];
exports.modules = {
4621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_05_06_gladys_4_40_external_zigbee_md_d63_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_05_06_gladys_4_40_external_zigbee_md_d63_json__rspack_import_0 = __webpack_require__(47769);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Test Gladys Assistant with an existing Zigbee2mqtt instance!',
	description: 'Are you a Home Assistant user who wants to test Gladys without touching your installation? It\'s possible!',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-4-40.jpg',
	slug: 'gladys-4-40-external-zigbee'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Using Gladys with an existing Zigbee2mqtt instance",
  "id": "using-gladys-with-an-existing-zigbee2mqtt-instance",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hi everyone!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today I'm releasing Gladys Assistant 4.40, an update to Gladys that brings a much-requested feature: the ability to use Gladys with an existing Zigbee2mqtt instance."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "using-gladys-with-an-existing-zigbee2mqtt-instance",
      children: "Using Gladys with an existing Zigbee2mqtt instance"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From now on, when you configure Zigbee2mqtt in Gladys, Gladys will offer you 2 choices:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys Zigbee2mqtt mode choice",
        src: (__webpack_require__(38478)/* ["default"] */.A) + "",
        width: "1822",
        height: "840"
      })
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
38478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/choose-zigbee-mode-8990adabf39a324a8cf8c4a7cce30e05.png");

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
47769(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-4-40-external-zigbee","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2024-05-06-gladys-4-40-external-zigbee.md","source":"@site/blog/2024-05-06-gladys-4-40-external-zigbee.md","title":"Test Gladys Assistant with an existing Zigbee2mqtt instance!","description":"Are you a Home Assistant user who wants to test Gladys without touching your installation? It\'s possible!","date":"2024-05-06T00:00:00.000Z","tags":[],"readingTime":2.71,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Test Gladys Assistant with an existing Zigbee2mqtt instance!","description":"Are you a Home Assistant user who wants to test Gladys without touching your installation? It\'s possible!","authors":"pierregilles","image":"/img/presentation/gladys-4-40.jpg","slug":"gladys-4-40-external-zigbee"},"unlisted":false,"prevItem":{"title":"DuckDB: Extreme Performance and a 97% Lighter Database!","permalink":"/zh-Hans/blog/gladys-and-duckdb"},"nextItem":{"title":"Launch of the ULTIMATE guide to getting started in home automation 🚀","permalink":"/zh-Hans/blog/lancement-formation"}}')

},

};
;
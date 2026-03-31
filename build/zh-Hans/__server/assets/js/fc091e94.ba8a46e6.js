"use strict";
exports.ids = ["9891"];
exports.modules = {
73103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_1_raspberry_pi_md_fc0_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_1_raspberry_pi_md_fc0_json__rspack_import_0 = __webpack_require__(3915);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'raspberry-pi',
	title: 'Installing Gladys Assistant on a Raspberry Pi',
	sidebar_label: 'Install on a Raspberry Pi'
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.admonition, {
      type: "warning",
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "Historically, I recommended using Raspberry Pi for installing Gladys."
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "However, they are becoming less competitive for several reasons:"
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
          children: "A high overall cost once you add the power supply, case, and SSD."
        }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
          children: "Limited reliability with a micro-SD card and a complex installation with an SSD."
        }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
          children: "Even with a USB SSD, the performance is still far inferior to that of a mini-PC with an integrated NVMe SSD."
        }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
          children: "A less powerful processor compared to low-power Intel equivalents."
        }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
          children: "Recurring power issues when adding a Zigbee dongle and an SSD."
        }), "\n"]
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "My recommendation is to buy a mini-PC. There are powerful options available on Amazon, including refurbished mini-PCs available for cheap."
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To install Gladys Assistant on a Raspberry Pi, I recommend installing Raspberry Pi OS first, then use our ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/installation/docker",
        children: "Docker"
      }), " tutorial."]
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
3915(module) {
module.exports = JSON.parse('{"id":"installation/raspberry-pi","title":"Installing Gladys Assistant on a Raspberry Pi","description":"Historically, I recommended using Raspberry Pi for installing Gladys.","source":"@site/docs/installation/1_raspberry-pi.md","sourceDirName":"installation","slug":"/installation/raspberry-pi","permalink":"/zh-Hans/docs/installation/raspberry-pi","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/installation/1_raspberry-pi.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"raspberry-pi","title":"Installing Gladys Assistant on a Raspberry Pi","sidebar_label":"Install on a Raspberry Pi"},"sidebar":"docs","previous":{"title":"Install on a Freebox Delta","permalink":"/zh-Hans/docs/installation/freebox-delta"},"next":{"title":"On your phone","permalink":"/zh-Hans/docs/installation/phone"}}')

},

};
;
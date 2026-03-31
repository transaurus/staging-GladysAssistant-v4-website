"use strict";
exports.ids = ["3599"];
exports.modules = {
11010(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_1_1_mini_pc_md_2b4_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_1_1_mini_pc_md_2b4_json__rspack_import_0 = __webpack_require__(58309);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'mini-pc',
	title: 'Install Gladys Assistant on a Mini-PC',
	sidebar_label: 'Install on a Mini-PC'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Which Hardware to Choose?",
  "id": "which-hardware-to-choose",
  "level": 2
}, {
  "value": "Installing Ubuntu Server on the Mini-PC",
  "id": "installing-ubuntu-server-on-the-mini-pc",
  "level": 2
}, {
  "value": "Installing Gladys Assistant",
  "id": "installing-gladys-assistant",
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
      children: "Installing on a mini-PC is the recommended method to fully enjoy Gladys. These small computers are reliable, powerful, energy-efficient, and affordable, making them an excellent solution for a home setup."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "which-hardware-to-choose",
      children: "Which Hardware to Choose?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I recommend the Beelink Mini S12 Pro. It's an incredible machine, at an affordable price."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I've been using it for the past year, and I've had great performance, and no issues at all."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can find it on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://amzn.to/4gKDV2E",
        children: "Amazon US"
      }), " for $169."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "installing-ubuntu-server-on-the-mini-pc",
      children: "Installing Ubuntu Server on the Mini-PC"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There are many videos online to install Ubuntu Server on a mini-PC."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I recommend this tutorial:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("div", {
      class: "youtubeVideoContainerInBlog",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)("iframe", {
        src: "https://www.youtube.com/embed/n7aEcfDNULc",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: true
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "installing-gladys-assistant",
      children: "Installing Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once Ubuntu is installed, all that remains is to install Docker and run Gladys via our official Docker image."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To do this, follow our detailed guide: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/installation/docker/",
        children: "Install Gladys with Docker"
      }), "."]
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
58309(module) {
module.exports = JSON.parse('{"id":"installation/mini-pc","title":"Install Gladys Assistant on a Mini-PC","description":"Installing on a mini-PC is the recommended method to fully enjoy Gladys. These small computers are reliable, powerful, energy-efficient, and affordable, making them an excellent solution for a home setup.","source":"@site/docs/installation/1_1_mini-pc.md","sourceDirName":"installation","slug":"/installation/mini-pc","permalink":"/zh-Hans/docs/installation/mini-pc","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/installation/1_1_mini-pc.md","tags":[],"version":"current","frontMatter":{"id":"mini-pc","title":"Install Gladys Assistant on a Mini-PC","sidebar_label":"Install on a Mini-PC"},"sidebar":"docs","previous":{"title":"Getting started","permalink":"/zh-Hans/docs/"},"next":{"title":"Install with Docker","permalink":"/zh-Hans/docs/installation/docker"}}')

},

};
;
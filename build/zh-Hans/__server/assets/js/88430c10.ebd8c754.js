"use strict";
exports.ids = ["2457"];
exports.modules = {
17571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_plus_intro_md_884_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_plus_intro_md_884_json__rspack_import_0 = __webpack_require__(62302);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'intro',
	title: 'Gladys Plus',
	sidebar_label: 'Intro'
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/plus/",
        children: "Gladys Plus"
      }), " is an additionnal product developed & maintained by ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://twitter.com/pierregillesl",
        children: "Pierre-Gilles Leymarie"
      }), ", founder of Gladys Assistant."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Plus is a paid product, entirely optional, that gives the user a few additional & interesting features:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "End-to-End Encrypted remote access"
        }), ": We all know that, when it comes to home automation, accessing the local setup from outside of the home network is complicated."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You either need to open your network to the outside of the internet, or you need to setup a VPN to your local network."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Both options are not perfect: the first one is insecure, because your local instance becomes available online and can be hacked and the VPN option is painful to setup, use and maintain."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["We provide Gladys Plus, accessible at ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://plus.gladysassistant.com",
        children: "plus.gladysassistant.com"
      }), ". It is an E2E encrypted tunnel that proxies the request to your home network without compromising your privacy. This is a result of the traffic being end-to-end encrypted."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Daily encrypted backups"
        }), ": Losing your home automation data because of a disk failure or a misconfiguration is never fun."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We provide an encrypted backup service, fully automated, so you can restore your instance at any time, anywhere."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
            children: "Outside world Open API"
          }), ": Sometimes, we want to send API request to our home to send new sensors data, or Owntracks location data for example."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
            children: "Google Home integration"
          }), ": Google Home is a unique integration. Google Home works exclusively in the cloud and we have very little control over this. Nonetheless, we are a Google-certified partner and offer a robust Google Home integration in Gladys Plus."]
        }), "\n"]
      }), "\n"]
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
62302(module) {
module.exports = JSON.parse('{"id":"plus/intro","title":"Gladys Plus","description":"Gladys Plus is an additionnal product developed & maintained by Pierre-Gilles Leymarie, founder of Gladys Assistant.","source":"@site/docs/plus/intro.md","sourceDirName":"plus","slug":"/plus/intro","permalink":"/zh-Hans/docs/plus/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/plus/intro.md","tags":[],"version":"current","frontMatter":{"id":"intro","title":"Gladys Plus","sidebar_label":"Intro"},"sidebar":"docs","previous":{"title":"Frontend tests","permalink":"/zh-Hans/docs/dev/cypress-tests"},"next":{"title":"Open API","permalink":"/zh-Hans/docs/plus/open-api"}}')

},

};
;
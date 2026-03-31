"use strict";
exports.ids = ["743"];
exports.modules = {
67533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_api_2_rest_api_md_404_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_api_2_rest_api_md_404_json__rspack_import_0 = __webpack_require__(86472);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'rest-api',
	title: 'HTTP API',
	sidebar_label: 'HTTP API'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Authentication",
  "id": "authentication",
  "level": 2
}, {
  "value": "API documentation",
  "id": "api-documentation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Assistant is a server that exposes an HTTP REST API."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This API is used for the Gladys frontend, but can also be used to perform actions automatically."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can code your own Gladys client, or create small scripts (via Node-RED, n8n) on top of this API."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Note:"
      }), " This API is only available via your local network (where Gladys is available). If you want to access a remote API, we offer an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/plus/open-api/",
        children: "Open API"
      }), " via Gladys Plus."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "authentication",
      children: "Authentication"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To retrieve an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "access_token"
      }), ", you can call the login route:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "curl --location --request POST 'http://GLADYS_IP_ADDRESS/api/v1/login' \\\n--header 'Content-Type: application/json;charset=UTF-8' \\\n--data-raw '{\"email\":\"<email>\", \"password\":\"<password>\"}'\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once the access_token has been retrieved, it can be used to call the :"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "curl --location --request GET 'http://GLADYS_IP_ADDRESS/api/v1/device' \\\n--header 'Accept: application/json, text/plain, */*' \\\n--header 'authorization: Bearer <access_token>''\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This will return a list of Gladys devices."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Note:"
      }), " The access_token is only valid for 24 hours. The refresh_token is valid for 30 days and allows you to fetch a new access_token by calling the route ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "POST /api/v1/access_token"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "api-documentation",
      children: "API documentation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Full documentation for this API can be found at: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://apidoc.gladysassistant.com/",
        children: "https://apidoc.gladysassistant.com/"
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
86472(module) {
module.exports = JSON.parse('{"id":"api/rest-api","title":"HTTP API","description":"Gladys Assistant is a server that exposes an HTTP REST API.","source":"@site/docs/api/2_rest_api.md","sourceDirName":"api","slug":"/api/rest-api","permalink":"/zh-Hans/docs/api/rest-api","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/api/2_rest_api.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"rest-api","title":"HTTP API","sidebar_label":"HTTP API"},"sidebar":"docs","previous":{"title":"Data model","permalink":"/zh-Hans/docs/api/data-model"},"next":{"title":"MQTT API","permalink":"/zh-Hans/docs/api/mqtt-api"}}')

},

};
;
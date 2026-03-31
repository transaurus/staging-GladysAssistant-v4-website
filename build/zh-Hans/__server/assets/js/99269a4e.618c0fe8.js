"use strict";
exports.ids = ["8139"];
exports.modules = {
44698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dev_4_cypress_tests_md_992_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dev_4_cypress_tests_md_992_json__rspack_import_0 = __webpack_require__(97159);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'cypress-tests',
	title: 'Run Cypress tests in Gladys',
	sidebar_label: 'Frontend tests'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Start the backend",
  "id": "start-the-backend",
  "level": 2
}, {
  "value": "Open Cypress",
  "id": "open-cypress",
  "level": 2
}, {
  "value": "Running tests in the CLI",
  "id": "running-tests-in-the-cli",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["We use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.cypress.io/",
        children: "Cypress"
      }), " for end-to-end frontend testing."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "start-the-backend",
      children: "Start the backend"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "server"
      }), " folder, run:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm run cypress\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This will create a new SQlite database just for tests, and start the backend."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "open-cypress",
      children: "Open Cypress"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "front"
      }), " folder, start Gladys frontend:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm run start:cypress\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then you can open the Cypress app:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm run cypress:open\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This will open the Cypress Electron app."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From there, you can start tests manually to see tests running in a browser:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Cypress Electron app",
        src: (__webpack_require__(17067)/* ["default"] */.A) + "",
        width: "1824",
        height: "1324"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "running-tests-in-the-cli",
      children: "Running tests in the CLI"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can run Cypress tests in the CLI by doing"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm run cypress:run\n"
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
17067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cypress-open-ec0e4aac09970ecb74539d297d285010.png");

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
97159(module) {
module.exports = JSON.parse('{"id":"dev/cypress-tests","title":"Run Cypress tests in Gladys","description":"We use Cypress for end-to-end frontend testing.","source":"@site/docs/dev/4_cypress_tests.md","sourceDirName":"dev","slug":"/dev/cypress-tests","permalink":"/zh-Hans/docs/dev/cypress-tests","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/dev/4_cypress_tests.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"cypress-tests","title":"Run Cypress tests in Gladys","sidebar_label":"Frontend tests"},"sidebar":"docs","previous":{"title":"Windows","permalink":"/zh-Hans/docs/dev/setup-development-environment-windows"},"next":{"title":"Intro","permalink":"/zh-Hans/docs/plus/intro"}}')

},

};
;
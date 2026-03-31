"use strict";
exports.ids = ["1453"];
exports.modules = {
63123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_google_cast_md_0c7_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_google_cast_md_0c7_json__rspack_import_0 = __webpack_require__(25224);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'google-cast',
	title: 'Make Gladys Assistant Speak on a Google Speaker',
	sidebar_label: 'Google Cast'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Adding a Google Speaker to Gladys Assistant",
  "id": "adding-a-google-speaker-to-gladys-assistant",
  "level": 2
}, {
  "value": "Making Gladys Assistant Speak on a Speaker",
  "id": "making-gladys-assistant-speak-on-a-speaker",
  "level": 2
}, {
  "value": "Important Note",
  "id": "important-note",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Assistant can broadcast voice messages on a Google speaker or any other Google Cast-compatible device."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "adding-a-google-speaker-to-gladys-assistant",
      children: "Adding a Google Speaker to Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Go to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Google Cast"
        }), " integration in the Gladys interface."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Open the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Google Cast Discovery"
        }), " tab: compatible devices on your network should appear automatically."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Google Cast Discovery",
        src: (__webpack_require__(90171)/* ["default"] */.A) + "",
        width: "2546",
        height: "1308"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Select your device and click ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Save"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Then, go to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Devices"
        }), " tab and assign the speaker to its corresponding room."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "making-gladys-assistant-speak-on-a-speaker",
      children: "Making Gladys Assistant Speak on a Speaker"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Once the speaker is added, you can use it in a scene with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Speak on a Speaker"
      }), " action:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Google Cast Speak on Speaker",
        src: (__webpack_require__(96060)/* ["default"] */.A) + "",
        width: "2584",
        height: "1436"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "important-note",
      children: "Important Note"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["This feature requires a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Gladys Plus"
        }), " subscription, as it relies on an AI-based Text-to-Speech (TTS) API, which is a paid service."]
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "In the future, we would like to offer a fully local solution, but currently, there are no high-quality alternatives for French TTS that work offline."
      })]
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
90171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/google-cast-65c15fc592a95c47d0aec1c89ab2bbf5.png");

},
96060(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/talk-on-speaker-8b4f5eece4579a4b5bf6ca7762f59818.png");

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
25224(module) {
module.exports = JSON.parse('{"id":"integrations/google-cast","title":"Make Gladys Assistant Speak on a Google Speaker","description":"Gladys Assistant can broadcast voice messages on a Google speaker or any other Google Cast-compatible device.","source":"@site/docs/integrations/google-cast.md","sourceDirName":"integrations","slug":"/integrations/google-cast","permalink":"/zh-Hans/docs/integrations/google-cast","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/google-cast.md","tags":[],"version":"current","frontMatter":{"id":"google-cast","title":"Make Gladys Assistant Speak on a Google Speaker","sidebar_label":"Google Cast"},"sidebar":"docs","previous":{"title":"Free Mobile","permalink":"/zh-Hans/docs/integrations/free-mobile"},"next":{"title":"Google Home","permalink":"/zh-Hans/docs/integrations/google-home"}}')

},

};
;
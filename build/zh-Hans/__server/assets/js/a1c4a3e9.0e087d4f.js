"use strict";
exports.ids = ["7619"];
exports.modules = {
47890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_node_red_md_a1c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_node_red_md_a1c_json__rspack_import_0 = __webpack_require__(8691);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'node-red',
	title: 'Node-RED',
	sidebar_label: 'Node-RED'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Activate Node-RED",
  "id": "activate-node-red",
  "level": 2
}, {
  "value": "Connect to Node-RED",
  "id": "connect-to-node-red",
  "level": 2
}, {
  "value": "Use",
  "id": "use",
  "level": 2
}, {
  "value": "Installing Node-RED outside of Gladys",
  "id": "installing-node-red-outside-of-gladys",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In this tutorial, we will show you how to integrate ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://nodered.org/",
        children: "Node-RED"
      }), " to Gladys Assistant."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This will allow you to connect hardware devices, APIs and online services."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "activate-node-red",
      children: "Activate Node-RED"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In Gladys, go to in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Integrations / Node-RED"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys needs to install a container. Don’t worry, it’s all been automated."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Go to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Configuration"
      }), " section and click on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Enable"
      }), " button. After a few moments (the time depends on your Raspberry Pi model and your bandwidth), you should visualize all the initialized elements and the links between each in green."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Etat des services Node-RED",
        src: (__webpack_require__(82585)/* ["default"] */.A) + "",
        width: "1758",
        height: "1504"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "connect-to-node-red",
      children: "Connect to Node-RED"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can open the Node-RED interface by clicking on the link\n", "⚠️", " Attention, the link is not accessible from Gladys Plus"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Lien Node-RED",
        src: (__webpack_require__(44838)/* ["default"] */.A) + "",
        width: "1762",
        height: "1502"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You arrive at your local Node-RED instance."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Login Node-RED",
        src: (__webpack_require__(61361)/* ["default"] */.A) + "",
        width: "1570",
        height: "1520"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To connect, you must use the connection information provided in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Configuration"
      }), " section."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "use",
      children: "Use"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now create your Node-RED flows"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Node-RED",
        src: (__webpack_require__(52011)/* ["default"] */.A) + "",
        width: "1916",
        height: "1514"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "installing-node-red-outside-of-gladys",
      children: "Installing Node-RED outside of Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want to start Node-RED yourself, you can follow our ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/blog/integrate-node-red-with-gladys-assistant-in-mqtt/",
        children: "blog post here"
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
52011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/node-red_en-ce9053c2ee0e14577062ca9a85aeb676.png");

},
82585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/node-red_etat_services_en-9453549fb78b07de14a44b0acdbd1510.png");

},
44838(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/node-red_link_en-d3ab4db1974d54c0bfd3dded50d071bd.png");

},
61361(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/node-red_login_en-16bc16559cc613daa5a343d276536bac.png");

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
8691(module) {
module.exports = JSON.parse('{"id":"integrations/node-red","title":"Node-RED","description":"In this tutorial, we will show you how to integrate Node-RED to Gladys Assistant.","source":"@site/docs/integrations/node-red.md","sourceDirName":"integrations","slug":"/integrations/node-red","permalink":"/zh-Hans/docs/integrations/node-red","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/node-red.md","tags":[],"version":"current","frontMatter":{"id":"node-red","title":"Node-RED","sidebar_label":"Node-RED"},"sidebar":"docs","previous":{"title":"Netatmo","permalink":"/zh-Hans/docs/integrations/netatmo"},"next":{"title":"Nuki","permalink":"/zh-Hans/docs/integrations/nuki"}}')

},

};
;
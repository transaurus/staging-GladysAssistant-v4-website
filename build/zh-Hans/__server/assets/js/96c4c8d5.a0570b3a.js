"use strict";
exports.ids = ["524"];
exports.modules = {
33257(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_tp_link_md_96c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_tp_link_md_96c_json__rspack_import_0 = __webpack_require__(8152);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'tp-link',
	title: 'TP-Link',
	sidebar_label: 'TP-Link'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Scan devices on the network",
  "id": "scan-devices-on-the-network",
  "level": 2
}, {
  "value": "Add a device",
  "id": "add-a-device",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To connect your TP-Link lights and plugs, go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Integrations / TP-Link"
      }), " in Gladys."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "scan-devices-on-the-network",
      children: "Scan devices on the network"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["By clicking on the button ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Scan network"
      }), ", Gladys will automatically detect different devices available on your Wi-Fi network. Make sure that they are installed, configured (with Kasa application) and turned on to be visible."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Device detection",
        src: (__webpack_require__(88543)/* ["default"] */.A) + "",
        width: "2434",
        height: "906"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "add-a-device",
      children: "Add a device"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Whether it is a light or a plug, Gladys will let you add this device through to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Connect"
      }), " button. Once added, you can configure in which room your device is installed."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a device",
        src: (__webpack_require__(32439)/* ["default"] */.A) + "",
        width: "598",
        height: "560"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You will find the various features available in Gladys in the device's card description."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Features",
        src: (__webpack_require__(21281)/* ["default"] */.A) + "",
        width: "2428",
        height: "1320"
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
32439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/tp_link_ajouter_appareil_en-cbef52da5cda1b5e1ad8288129e4fb9c.png");

},
88543(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/tp_link_detection_appareils_en-10cd6923d9a7ad3ed9f3127ed195a95b.png");

},
21281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/tp_link_features_en-ef888f6ec8752f28f1f10491706a1899.png");

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
8152(module) {
module.exports = JSON.parse('{"id":"integrations/tp-link","title":"TP-Link","description":"To connect your TP-Link lights and plugs, go to Integrations / TP-Link in Gladys.","source":"@site/docs/integrations/tp-link.md","sourceDirName":"integrations","slug":"/integrations/tp-link","permalink":"/zh-Hans/docs/integrations/tp-link","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/tp-link.md","tags":[],"version":"current","frontMatter":{"id":"tp-link","title":"TP-Link","sidebar_label":"TP-Link"},"sidebar":"docs","previous":{"title":"Telegram","permalink":"/zh-Hans/docs/integrations/telegram"},"next":{"title":"Tuya","permalink":"/zh-Hans/docs/integrations/tuya"}}')

},

};
;
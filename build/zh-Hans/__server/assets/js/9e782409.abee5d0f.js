"use strict";
exports.ids = ["4468"];
exports.modules = {
80762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_broadlink_md_9e7_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_broadlink_md_9e7_json__rspack_import_0 = __webpack_require__(28730);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'broadlink',
	title: 'Broadlink',
	sidebar_label: 'Broadlink'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Connect Broadlink device on network",
  "id": "connect-broadlink-device-on-network",
  "level": 2
}, {
  "value": "Control a device from Gladys",
  "id": "control-a-device-from-gladys",
  "level": 2
}, {
  "value": "Create a remote control",
  "id": "create-a-remote-control",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Locked device",
  "id": "locked-device",
  "level": 3
}, {
  "value": "RF management",
  "id": "rf-management",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys allows you to control Broadlink devices, or to create infrared remote controls."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "connect-broadlink-device-on-network",
      children: "Connect Broadlink device on network"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To allow Gladys to manage the Broadlink device, it should be connected on the same WiFi network as Gladys.\nTo do this, please follow the official Broadlink documentation according to your device."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "control-a-device-from-gladys",
      children: "Control a device from Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In Gladys, go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Integrations / Broadlink"
      }), ", click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Discover devices"
      }), " to look for detected Broadlink devices."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Then click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Save"
      }), " to add a device, or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Create remote control"
      }), " to control your infrared devices."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "create-a-remote-control",
      children: "Create a remote control"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can replace your physical remote controls by Gladys.\nGo to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Devices"
      }), ", then ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "New remote control"
      }), ", select you Broadlink controler and the type of the device to manage, and follow the learning mode."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "locked-device",
      children: "Locked device"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From the Broadlink mobile application, go to the device settings to unlock it."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "rf-management",
      children: "RF management"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today, only Infra-Red protocol is managed."
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
28730(module) {
module.exports = JSON.parse('{"id":"integrations/broadlink","title":"Broadlink","description":"Gladys allows you to control Broadlink devices, or to create infrared remote controls.","source":"@site/docs/integrations/broadlink.md","sourceDirName":"integrations","slug":"/integrations/broadlink","permalink":"/zh-Hans/docs/integrations/broadlink","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/broadlink.md","tags":[],"version":"current","frontMatter":{"id":"broadlink","title":"Broadlink","sidebar_label":"Broadlink"},"sidebar":"docs","previous":{"title":"Bluetooth","permalink":"/zh-Hans/docs/integrations/bluetooth"},"next":{"title":"CalDAV","permalink":"/zh-Hans/docs/integrations/caldav"}}')

},

};
;
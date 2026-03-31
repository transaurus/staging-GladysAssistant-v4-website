"use strict";
exports.ids = ["1653"];
exports.modules = {
82560(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dashboard_devices_md_9c2_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dashboard_devices_md_9c2_json__rspack_import_0 = __webpack_require__(86027);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'devices',
	title: 'Display devices on the dashboard',
	sidebar_label: 'Devices'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Configuration",
  "id": "configuration",
  "level": 2
}, {
  "value": "Usage",
  "id": "usage",
  "level": 2
}, {
  "value": "If no value is displayed",
  "id": "if-no-value-is-displayed",
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
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys Assistant, you can control your devices directly from the dashboard and display the values of your sensors in the interface."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You must have added at least a few devices to Gladys (it's much less exciting without them 😄)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configuration",
      children: "Configuration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the Gladys dashboard and click on \"Edit\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Select the \"Devices\" widget:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add the devices widget",
        src: (__webpack_require__(35805)/* ["default"] */.A) + "",
        width: "766",
        height: "1064"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Select the devices you want to display and pick a name for your widget (optional)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Select the devices to display",
        src: (__webpack_require__(60784)/* ["default"] */.A) + "",
        width: "762",
        height: "886"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"Save\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now see your devices on the dashboard, view their last values if they're sensors, or control them directly."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Devices widget",
        src: (__webpack_require__(25292)/* ["default"] */.A) + "",
        width: "782",
        height: "256"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "if-no-value-is-displayed",
      children: "If no value is displayed"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If your devices display \"no recent value\", it means the device hasn't sent any values recently."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Devices no recent value",
        src: (__webpack_require__(26319)/* ["default"] */.A) + "",
        width: "772",
        height: "250"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The default threshold is 48 hours without any values, but you can change this in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Settings"
      }), " -> ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "System"
      }), " -> ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Time to expiry of a state"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Time to expiry of a state",
        src: (__webpack_require__(32292)/* ["default"] */.A) + "",
        width: "904",
        height: "502"
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
60784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/choose-device-and-name-d4e2ca605836c6b409f7cfdc25ecf159.png");

},
32292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/delay-before-expiring-bf54ab068796219397ab41a318501bc0.png");

},
25292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/devices-with-value-8eeb8b1a658853b833ff07a094d9976c.png");

},
26319(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/no-recent-value-ff83917ea0c3c6aa88f7ed58f36c8fe3.png");

},
35805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/select-widget-4e582a158340f48a60d959d0730c4384.png");

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
86027(module) {
module.exports = JSON.parse('{"id":"dashboard/devices","title":"Display devices on the dashboard","description":"In Gladys Assistant, you can control your devices directly from the dashboard and display the values of your sensors in the interface.","source":"@site/docs/dashboard/devices.md","sourceDirName":"dashboard","slug":"/dashboard/devices","permalink":"/zh-Hans/docs/dashboard/devices","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/dashboard/devices.md","tags":[],"version":"current","frontMatter":{"id":"devices","title":"Display devices on the dashboard","sidebar_label":"Devices"},"sidebar":"docs","previous":{"title":"Camera","permalink":"/zh-Hans/docs/dashboard/camera"},"next":{"title":"EDF Tempo","permalink":"/zh-Hans/docs/dashboard/edf-tempo"}}')

},

};
;
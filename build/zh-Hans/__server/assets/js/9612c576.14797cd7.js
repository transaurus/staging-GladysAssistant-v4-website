"use strict";
exports.ids = ["3241"];
exports.modules = {
34173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dashboard_temperature_in_room_md_961_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dashboard_temperature_in_room_md_961_json__rspack_import_0 = __webpack_require__(12128);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'temperature-in-room',
	title: 'Display the average room temperature on the dashboard',
	sidebar_label: 'Room Temperature'
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
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys Assistant, you can display the average temperature of a room on your dashboard."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This widget fetches the temperature from all temperature sensors present in the room and displays an average on the dashboard."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You must have at least one temperature sensor configured beforehand."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This can be a sensor of any protocol (Zigbee, Matter, MQTT, it doesn't matter), and this sensor must be assigned to a room."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "Some sensors report a \"Device Temperature\", for example, a computer might report its CPU temperature. Gladys does not count these values as temperature values for this widget."
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configuration",
      children: "Configuration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the dashboard, and click \"Edit\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Select the \"Room Temperature\" widget, and click the + button."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add the temperature widget to Gladys",
        src: (__webpack_require__(24020)/* ["default"] */.A) + "",
        width: "764",
        height: "1044"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Next, select the room you want to display."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Select the room to display",
        src: (__webpack_require__(75407)/* ["default"] */.A) + "",
        width: "770",
        height: "652"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can configure custom thresholds where the widget color will change based on the temperature."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click \"Save\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "The room temperature widget",
        src: (__webpack_require__(28421)/* ["default"] */.A) + "",
        width: "800",
        height: "180"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you don't have any sensors in the room, or if these sensors haven't sent any values in the last hour, you will see:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "No data",
        src: (__webpack_require__(7971)/* ["default"] */.A) + "",
        width: "826",
        height: "206"
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
24020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/add-widget-temperature-in-room-38b49533f71956338caaa98f806a9e34.png");

},
7971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/no-temperature-b28f863cff5baf7e01b12607df05990f.png");

},
75407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/select-room-4d02a531e7e6adb6cb9e2981b7a0c0d2.png");

},
28421(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/temperature-in-room-4b577aafe1232ed51cafa242fb114ede.png");

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
12128(module) {
module.exports = JSON.parse('{"id":"dashboard/temperature-in-room","title":"Display the average room temperature on the dashboard","description":"In Gladys Assistant, you can display the average temperature of a room on your dashboard.","source":"@site/docs/dashboard/temperature-in-room.md","sourceDirName":"dashboard","slug":"/dashboard/temperature-in-room","permalink":"/zh-Hans/docs/dashboard/temperature-in-room","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/dashboard/temperature-in-room.md","tags":[],"version":"current","frontMatter":{"id":"temperature-in-room","title":"Display the average room temperature on the dashboard","sidebar_label":"Room Temperature"},"sidebar":"docs","previous":{"title":"Gauge","permalink":"/zh-Hans/docs/dashboard/gauge"},"next":{"title":"Room humidity","permalink":"/zh-Hans/docs/dashboard/humidity-in-room"}}')

},

};
;
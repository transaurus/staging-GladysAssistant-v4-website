"use strict";
exports.ids = ["9810"];
exports.modules = {
1568(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_api_3_mqtt_api_md_ca6_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_api_3_mqtt_api_md_ca6_json__rspack_import_0 = __webpack_require__(92745);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'mqtt-api',
	title: 'MQTT API',
	sidebar_label: 'MQTT API'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Push a decimal device state",
  "id": "push-a-decimal-device-state",
  "level": 3
}, {
  "value": "Push a text device state",
  "id": "push-a-text-device-state",
  "level": 3
}, {
  "value": "Push a state to a device",
  "id": "push-a-state-to-a-device",
  "level": 3
}, {
  "value": "Launch a scene with MQTT",
  "id": "launch-a-scene-with-mqtt",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you have configured a MQTT Broker with your Gladys installation, you will have access to the Gladys MQTT API."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Here are all the MQTT topics available, each one with an example message to send:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "push-a-decimal-device-state",
      children: "Push a decimal device state"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Say you have a temperature sensor sending data to Gladys, you'll have to send it's temperature values to:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Topic: gladys/master/device/:device_external_id/feature/:device_feature_external_id/state\nBody: 22.2\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "push-a-text-device-state",
      children: "Push a text device state"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you want, you can send text to Gladys to display it on the dashboard!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys Assistant MQTT text",
        src: (__webpack_require__(8011)/* ["default"] */.A) + "",
        width: "812",
        height: "280"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You need to create a \"Text\" device in the MQTT integration, then publish a message on this topic:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Topic: gladys/master/device/:device_external_id/feature/:device_feature_external_id/text\nBody: Hello Gladys!\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "push-a-state-to-a-device",
      children: "Push a state to a device"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Say you have a MQTT light, and you want it to be controlled in Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The light will need to subscribe to this topic:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "gladys/device/:device_external_id/feature/:device_feature_external_id/state\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Where it will receive values such as:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "1\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Meaning \"The light needs to be turned on\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Or"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "0\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Meaning \"The light needs to be turned off\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "launch-a-scene-with-mqtt",
      children: "Launch a scene with MQTT"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now launch a scene using MQTT by posting a message on the topic:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "gladys/master/scene/SCENE_SELECTOR/start\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["By replacing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SCENE_SELECTOR"
      }), " with the scene selector, which can be found in the scene edition URL."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For example, for the scene ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://192.168.1.10/dashboard/scene/cinema"
      }), ", you'll need to send a message to the topic:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "gladys/master/scene/cinema/start\n"
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
8011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/mqtt-text-7f7baff8228d149a5d69b3bf928e08bb.png");

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
92745(module) {
module.exports = JSON.parse('{"id":"api/mqtt-api","title":"MQTT API","description":"If you have configured a MQTT Broker with your Gladys installation, you will have access to the Gladys MQTT API.","source":"@site/docs/api/3_mqtt_api.md","sourceDirName":"api","slug":"/api/mqtt-api","permalink":"/zh-Hans/docs/api/mqtt-api","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/api/3_mqtt_api.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"mqtt-api","title":"MQTT API","sidebar_label":"MQTT API"},"sidebar":"docs","previous":{"title":"HTTP API","permalink":"/zh-Hans/docs/api/rest-api"},"next":{"title":"Contributing on Gladys Assistant","permalink":"/zh-Hans/docs/dev/developing-a-service"}}')

},

};
;
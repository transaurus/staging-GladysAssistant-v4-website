"use strict";
exports.ids = ["2308"];
exports.modules = {
49092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_send_a_zigbee_2_mqtt_message_md_e9e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_send_a_zigbee_2_mqtt_message_md_e9e_json__rspack_import_0 = __webpack_require__(3629);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'send-a-zigbee2mqtt-message-action',
	title: 'Send a Zigbee2Mqtt message',
	sidebar_label: 'Send a Zigbee2Mqtt message'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Send a Zigbee2Mqtt message in a scene",
  "id": "send-a-zigbee2mqtt-message-in-a-scene",
  "level": 2
}, {
  "value": "Concrete example: Trigger a siren Woox R7051 from a Gladys Assistant scene",
  "id": "concrete-example-trigger-a-siren-woox-r7051-from-a-gladys-assistant-scene",
  "level": 2
}, {
  "value": "In Gladys, create a scene",
  "id": "in-gladys-create-a-scene",
  "level": 3
}, {
  "value": "Inject a variable into a message",
  "id": "inject-a-variable-into-a-message",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In scenes, it is sometimes useful to send an order to control zigbee2mqtt devices that are not managed by Gladys Assistant."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "send-a-zigbee2mqtt-message-in-a-scene",
      children: "Send a Zigbee2Mqtt message in a scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To send a Zigbee2Mqtt message, it's very simple, create a \"send a Zigbee2Mqtt message\" action in a scene."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Send Zigbee2Mqtt message",
        src: (__webpack_require__(10985)/* ["default"] */.A) + "",
        width: "1142",
        height: "660"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "concrete-example-trigger-a-siren-woox-r7051-from-a-gladys-assistant-scene",
      children: ["Concrete example: Trigger a siren ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.zigbee2mqtt.io/devices/R7051.html",
        children: "Woox R7051"
      }), " from a Gladys Assistant scene"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "in-gladys-create-a-scene",
      children: "In Gladys, create a scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Create a new scene in Gladys, then add an \"send a Zigbee2Mqtt message\" action to it."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Specify the topic of your device."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Device topic",
        src: (__webpack_require__(84762)/* ["default"] */.A) + "",
        width: "1057",
        height: "169"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Specify the command to control your device. You can find your device's information on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.zigbee2mqtt.io/devices/R7051.html#warning-composite",
        children: "Zigbee2mqtt"
      }), " website."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Device message",
        src: (__webpack_require__(98530)/* ["default"] */.A) + "",
        width: "1035",
        height: "243"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Save the scene and launch it."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "inject-a-variable-into-a-message",
      children: "Inject a variable into a message"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You want to inject the duration value into the message, in order to know the current duration value."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To do this, you must add a \"retrieve the last state\" action to your scene and select the device you want to request."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Get device value",
        src: (__webpack_require__(9397)/* ["default"] */.A) + "",
        width: "776",
        height: "554"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Then, further in the scene, you can add a \"send a Zigbee2Mqtt message\" action, and in the message you type ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "{{"
      }), " and select the previously defined variable."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Send message with injected variable",
        src: (__webpack_require__(7826)/* ["default"] */.A) + "",
        width: "1168",
        height: "672"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When the scene runs, you should get the value in your message 🥳"
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
98530(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/device-message-723536bbcb9d1071e3c9a38c7a7d5e42.png");

},
84762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/device-topic-ec7c942244cfd1f3c3bcc2a3827709cc.png");

},
9397(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/get-device-value-d905a7c4d376f0f662ff14ee8eb186f7.png");

},
7826(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/send-a-zigbee2mqtt-message-with-injected-variable-5d34d2224e1b2c8cdfd65afb33a2b378.png");

},
10985(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/send-a-zigbee2mqtt-message-2bf5bf0c8c168b36558a6468b211cf02.png");

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
3629(module) {
module.exports = JSON.parse('{"id":"scenes/send-a-zigbee2mqtt-message-action","title":"Send a Zigbee2Mqtt message","description":"In scenes, it is sometimes useful to send an order to control zigbee2mqtt devices that are not managed by Gladys Assistant.","source":"@site/docs/scenes/send-a-zigbee2mqtt-message.md","sourceDirName":"scenes","slug":"/scenes/send-a-zigbee2mqtt-message-action","permalink":"/zh-Hans/docs/scenes/send-a-zigbee2mqtt-message-action","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/scenes/send-a-zigbee2mqtt-message.md","tags":[],"version":"current","frontMatter":{"id":"send-a-zigbee2mqtt-message-action","title":"Send a Zigbee2Mqtt message","sidebar_label":"Send a Zigbee2Mqtt message"},"sidebar":"docs","previous":{"title":"Send a message","permalink":"/zh-Hans/docs/scenes/send-a-message-action"},"next":{"title":"Turn the light on/off","permalink":"/zh-Hans/docs/scenes/turn-on-off-the-lights-action"}}')

},

};
;
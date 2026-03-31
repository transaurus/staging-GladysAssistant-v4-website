"use strict";
exports.ids = ["3994"];
exports.modules = {
3600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_zigbee_2_mqtt_md_a5e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_zigbee_2_mqtt_md_a5e_json__rspack_import_0 = __webpack_require__(56658);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'zigbee2mqtt',
	title: 'Connect Zigbee devices with an USB Zigbee dongle and Zigbee2mqtt',
	sidebar_label: 'Zigbee2Mqtt'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configure the USB dongle port",
  "id": "configure-the-usb-dongle-port",
  "level": 2
}, {
  "value": "Activate Zigbee2Mqtt",
  "id": "activate-zigbee2mqtt",
  "level": 2
}, {
  "value": "Allow device association",
  "id": "allow-device-association",
  "level": 2
}, {
  "value": "Add devices",
  "id": "add-devices",
  "level": 2
}, {
  "value": "Modify the devices",
  "id": "modify-the-devices",
  "level": 2
}, {
  "value": "Usage",
  "id": "usage",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
      children: ["In this tutorial we'll show you how to connect your Zigbee devices directly to Gladys, without needing any third-party bridges (just by using an USB Zigbee dongle and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.zigbee2mqtt.io/",
        children: "Zigbee2Mqtt"
      }), " project)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can check the list of compatible devices ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.zigbee2mqtt.io/supported-devices/",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Before you start, make sure you have a USB Zigbee adapter."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["An easy & affordable USB dongle we tested with Gladys is the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://amzn.to/3JZwzJy",
        children: "Sonoff Zigbee 3.0 USB dongle"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The full list of compatible adapters can be found on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.zigbee2mqtt.io/guide/adapters/",
        children: "Zigbee2mqtt supported adapters list"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configure-the-usb-dongle-port",
      children: "Configure the USB dongle port"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Connect your Zigbee USB dongle to your machine running Gladys (your Raspberry Pi, your NAS)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Sonoff USB Zigbee 3.0",
        src: (__webpack_require__(59019)/* ["default"] */.A) + "",
        width: "1600",
        height: "1200"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In Gladys, go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Integrations / Zigbee2Mqtt"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Then, click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Settings"
      }), " in the menu. Gladys will automatically scan the different USB ports to suggest a drop-down list."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Select the settings the USB port is to use in order to allow Gladys to communicate with Zigbee."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "USB dongle settings",
        src: (__webpack_require__(87087)/* ["default"] */.A) + "",
        width: "2424",
        height: "768"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "13 May 2023:"
      }), " You can now select the Zigbee dongle model you're using:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "USB dongle model",
        src: (__webpack_require__(38153)/* ["default"] */.A) + "",
        width: "1850",
        height: "434"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This tells Zigbee2mqtt which configuration to run."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "warning",
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["If you own an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.zigbee2mqtt.io/guide/adapters/emberznet.html",
          children: "EmberZNet"
        }), " based dongle (like for example the Sonoff Zigbee 3.0 ZBDongle-E), it's recommended to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.zigbee2mqtt.io/guide/adapters/emberznet.html#firmware-flashing",
          children: "update"
        }), " the firmware dongle. Otherwise, you should choose the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "(legacy ezsp)"
        }), " option in the list."]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.admonition, {
      type: "warning",
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "If you run Gladys on an external disk connected in USB, you may have power issues as your Pi can struggle to give enough power to both the disk and the Zigbee USB key."
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "We recommend you use a externaly powered USB charging tower."
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["You can read more about it on ZigbeeMQTT website: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.zigbee2mqtt.io/guide/installation/20_zigbee2mqtt-fails-to-start.html",
          children: "Zigbee2MQTT fails to start"
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "activate-zigbee2mqtt",
      children: "Activate Zigbee2Mqtt"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once your dongle is configured, Gladys needs to install two containers (MQTT and Zigbee2Mqtt) to use the dongle and communicate with all your devices. Don't worry, all this has been automated."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Go to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Setup"
      }), " section and click on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Enable Zigbee2mqtt"
      }), " button. After a few moments (the waiting time depends on your Raspberry Pi model and your bandwidth), you should see all the elements started and the links between each one green."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Zigbee2Mqtt services status",
        src: (__webpack_require__(27569)/* ["default"] */.A) + "",
        width: "2454",
        height: "1146"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "allow-device-association",
      children: "Allow device association"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To allow devices to be associated to your Zigbee network, you must allow ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "joining in"
      }), " the Zigbee configuration."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Click on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Discover"
      }), " menu, then click on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Permit joining"
      }), " button."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Authorize association",
        src: (__webpack_require__(73968)/* ["default"] */.A) + "",
        width: "1222",
        height: "378"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["⚠️", " Once your devices are associated, you will have to come back here to forbid the association, for security."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "add-devices",
      children: "Add devices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To make your device join the network, please refer to its manual. In most cases, a long press on the physical button allows this operation."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The devices already associated to your Zigbee network will automatically appear in the list with detected features. You can rename them and associate them to a room using the drop-down list."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a device",
        src: (__webpack_require__(14321)/* ["default"] */.A) + "",
        width: "1204",
        height: "572"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "modify-the-devices",
      children: "Modify the devices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If necessary, you can go to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Devices"
      }), " menu to modify/complete the configuration of your devices."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Click on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Edit"
      }), " button of a device. You can then edit its name, the room it belongs to and the name of each feature."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Edit a device",
        src: (__webpack_require__(75872)/* ["default"] */.A) + "",
        width: "2425",
        height: "1203"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can now use these Zigbee devices from the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/zh-Hans/docs/dashboard/devices",
        children: "Dashboard"
      }), " or from the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/zh-Hans/docs/scenes/intro",
        children: "Scenes"
      }), " automatically. Depending on the feature of each device, you will have access to measures, states or actions."]
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
14321(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/z2m_add_device_en-3222f08240453fae1f6fbbeec79b54a3.png");

},
73968(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/z2m_authorize_association_en-c346efa66c54844f60bf97a078a312f7.png");

},
75872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/z2m_edit_device_en-9b9cf36277d6c325d25e4c48f8d5878d.png");

},
87087(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/z2m_parameter_dongle_usb_en-99ca6745f9f2fbe73f5ab7de89630ab4.png");

},
27569(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/z2m_services_state_en-3b204ae2733a54e54ee085768c8290cd.png");

},
38153(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zigbee-dongle-c9312b406931ccc97d66e72cb2273a38.jpg");

},
59019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zigbee-raspberry-pi-usb-sonoff-1d32f4e53cc1b6573a6d9ea8b840204d.jpg");

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
56658(module) {
module.exports = JSON.parse('{"id":"integrations/zigbee2mqtt","title":"Connect Zigbee devices with an USB Zigbee dongle and Zigbee2mqtt","description":"In this tutorial we\'ll show you how to connect your Zigbee devices directly to Gladys, without needing any third-party bridges (just by using an USB Zigbee dongle and Zigbee2Mqtt project).","source":"@site/docs/integrations/zigbee2mqtt.md","sourceDirName":"integrations","slug":"/integrations/zigbee2mqtt","permalink":"/zh-Hans/docs/integrations/zigbee2mqtt","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/zigbee2mqtt.md","tags":[],"version":"current","frontMatter":{"id":"zigbee2mqtt","title":"Connect Zigbee devices with an USB Zigbee dongle and Zigbee2mqtt","sidebar_label":"Zigbee2Mqtt"},"sidebar":"docs","previous":{"title":"Xiaomi","permalink":"/zh-Hans/docs/integrations/xiaomi"},"next":{"title":"Z-Wave JS UI","permalink":"/zh-Hans/docs/integrations/zwavejs-ui"}}')

},

};
;
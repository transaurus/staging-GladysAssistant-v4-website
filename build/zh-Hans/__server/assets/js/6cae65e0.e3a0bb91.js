"use strict";
exports.ids = ["8849"];
exports.modules = {
19413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_matter_md_6ca_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_matter_md_6ca_json__rspack_import_0 = __webpack_require__(78732);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'matter',
	title: 'Integrate Matter Devices in Gladys Assistant',
	sidebar_label: 'Matter'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Compatibility",
  "id": "compatibility",
  "level": 2
}, {
  "value": "Matter vs Thread",
  "id": "matter-vs-thread",
  "level": 2
}, {
  "value": "If your device is already on your network",
  "id": "if-your-device-is-already-on-your-network",
  "level": 3
}, {
  "value": "Matterbridge",
  "id": "matterbridge",
  "level": 3
}, {
  "value": "If your device uses Thread only",
  "id": "if-your-device-uses-thread-only",
  "level": 3
}, {
  "value": "Configuration in Gladys Assistant",
  "id": "configuration-in-gladys-assistant",
  "level": 2
}, {
  "value": "Example: Control your air conditioner from the dashboard",
  "id": "example-control-your-air-conditioner-from-the-dashboard",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The Matter protocol is a small revolution in the world of smart homes: it finally allows unified communication between smart devices from different manufacturers."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Assistant is compatible with Matter, so you can integrate Matter devices into your setup."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "compatibility",
      children: "Compatibility"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys supports the following features:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "On/Off"
        }), ": plugs, lights, air conditioning, heating, fans, etc."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Lights"
        }), ": brightness and color control."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Roller shutters / curtains"
        }), ": open, close, pause + position control."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Thermostats"
        }), ": target temperature setting."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Air conditioners"
        }), ": target temperature setting."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Motion sensors"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Light sensors"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Temperature sensors"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Humidity sensors"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you have a device that is not yet supported, feel free to share it on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "forum"
      }), ", and we’ll work on adding support."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "matter-vs-thread",
      children: "Matter vs Thread"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Matter is an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "application protocol"
      }), ", meaning it defines how devices communicate in terms of exchanged messages: what kinds of commands are possible (e.g., turning on a light, getting the temperature), in what format those messages are sent, and how devices handle their state, pairing, or security."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In short, Matter focuses on the “what” and the “how” of smart device interactions."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Thread, on the other hand, is a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "low-level mesh network protocol"
      }), ", designed for communication between low-power wireless devices. It acts as an alternative to Zigbee or Wi-Fi, but unlike them, it is based on IP standards (IPv6), making it natively Internet-compatible."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thread handles the “how it travels” part — that is, transporting messages over a reliable, fast, and secure wireless network."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Some Matter devices use Thread as their network protocol, but not all! Matter devices can also use Wi-Fi, Ethernet, or even Bluetooth."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "if-your-device-is-already-on-your-network",
      children: "If your device is already on your network"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If your device is Matter-compatible and uses Wi-Fi or Ethernet, it's already on your network and can be used directly in Gladys!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is the case for all Matter bridges offered by manufacturers like Philips Hue, IKEA via their DIRIGERA hub, etc."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's also true for all Wi-Fi devices like smart plugs or bulbs directly connected to Wi-Fi."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "matterbridge",
      children: "Matterbridge"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/Luligu/matterbridge",
        children: "Matterbridge"
      }), " is an open-source project that aims to import into a Matter network devices that are not natively Matter-compatible."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "As of today, Matterbridge supports:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Luligu/matterbridge-shelly",
          children: "Shelly"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Luligu/matterbridge-somfy-tahoma",
          children: "Somfy Tahoma"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Luligu/matterbridge-zigbee2mqtt",
          children: "Zigbee2mqtt"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Luligu/matterbridge-homeassistant",
          children: "Home Assistant"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Luligu/matterbridge-webhooks",
          children: "Webhooks"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Luligu/matterbridge-bthome",
          children: "BTHome"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/andrasg/matterbridge-loxone",
          children: "Loxone"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "if-your-device-uses-thread-only",
      children: "If your device uses Thread only"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If your device uses Thread, you need to connect it to a Thread router before using it in Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A Thread router (or “Thread Border Router”) bridges your Thread devices to your home network."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Many commercial devices are Thread routers:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Apple TV 4K Ethernet 128 GB"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Apple HomePod"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Google Nest Hub Max"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Google Nest Hub (2nd generation)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Google Nest Wi-Fi Pro"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Google TV Streamer 4K"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Amazon Echo (4th generation)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Amazon Echo Hub"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Amazon Echo Studio"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Amazon Echo Show (21, 15, 10, and 8)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can also set up your own Thread router using a USB Thread dongle and OpenThread."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configuration-in-gladys-assistant",
      children: "Configuration in Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the \"Integrations\" tab, then \"Matter\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "First, enable Matter in the settings:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Enable Matter in Gladys settings",
        src: (__webpack_require__(86553)/* ["default"] */.A) + "",
        width: "2546",
        height: "954"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "Matter works with IPv6, so IPv6 must be enabled on your router and your machine.\nGladys lists the interfaces available on your machine. If no interface is found, it will display an error message."
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then, go to the \"Add a device\" tab to pair a new Matter device:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a Matter device",
        src: (__webpack_require__(91202)/* ["default"] */.A) + "",
        width: "2520",
        height: "1078"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To add a Matter device, you will need an 11-digit pairing code."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["If your device is already connected to another Matter controller, you will need a pairing code provided by that controller, not the device’s original code. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Example:"
        }), " I have an Eve smart plug connected to my Apple TV 4K Ethernet. The pairing code is available in the “Home” app on iOS."]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once the device is paired, go to the \"Devices\" tab to add it to Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In this tab, you’ll see all paired Matter devices and those already added to Gladys:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Save the Matter device in Gladys",
        src: (__webpack_require__(94783)/* ["default"] */.A) + "",
        width: "2552",
        height: "2274"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once added, you can use the device on your dashboard and in scenes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "example-control-your-air-conditioner-from-the-dashboard",
      children: "Example: Control your air conditioner from the dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On the dashboard, you can now add a “Devices” widget and select your Matter air conditioner:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a Matter air conditioner to the dashboard",
        src: (__webpack_require__(32549)/* ["default"] */.A) + "",
        width: "1110",
        height: "1020"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "After saving the dashboard, you can control this AC:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Control your Matter air conditioner in Gladys",
        src: (__webpack_require__(80947)/* ["default"] */.A) + "",
        width: "1218",
        height: "256"
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
32549(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/add-ac-to-dashboard-e30bbbdd1952589f03856412de797562.png");

},
91202(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/add-matter-device-f312575f9764e4be35b08b33bfc8bce0.png");

},
80947(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/control-ac-dashboard-f7d946e842828c05a0a48b3feb82d538.png");

},
86553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/enable-matter-settings-1b48a76ee672cbf96cfe7ad56831e0ef.png");

},
94783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/save-matter-device-to-gladys-dac171e95398e491c7dc07e0c216d30e.png");

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
78732(module) {
module.exports = JSON.parse('{"id":"integrations/matter","title":"Integrate Matter Devices in Gladys Assistant","description":"The Matter protocol is a small revolution in the world of smart homes: it finally allows unified communication between smart devices from different manufacturers.","source":"@site/docs/integrations/matter.md","sourceDirName":"integrations","slug":"/integrations/matter","permalink":"/zh-Hans/docs/integrations/matter","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/matter.md","tags":[],"version":"current","frontMatter":{"id":"matter","title":"Integrate Matter Devices in Gladys Assistant","sidebar_label":"Matter"},"sidebar":"docs","previous":{"title":"HomeKit","permalink":"/zh-Hans/docs/integrations/homekit"},"next":{"title":"Matterbridge","permalink":"/zh-Hans/docs/integrations/matterbridge"}}')

},

};
;
"use strict";
exports.ids = ["1816"];
exports.modules = {
69529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_zwavejs_ui_md_4bc_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_zwavejs_ui_md_4bc_json__rspack_import_0 = __webpack_require__(19977);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'zwavejs-ui',
	title: 'Integrate your Z-Wave devices with Z-Wave JS UI',
	sidebar_label: 'Z-Wave JS UI'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Installing Z-Wave JS UI",
  "id": "installing-z-wave-js-ui",
  "level": 2
}, {
  "value": "Configuring Z-Wave JS UI",
  "id": "configuring-z-wave-js-ui",
  "level": 2
}, {
  "value": "Connect Gladys to Z-Wave JS UI",
  "id": "connect-gladys-to-z-wave-js-ui",
  "level": 2
}, {
  "value": "Discover Z-Wave JS UI",
  "id": "discover-z-wave-js-ui",
  "level": 2
}, {
  "value": "Supported Features",
  "id": "supported-features",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Gladys Assistant offers integration with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://zwave-js.github.io/zwave-js-ui/#/",
        children: "Z-Wave JS UI"
      }), ", a software application for controlling Z-Wave devices."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys connects to the same MQTT broker as Z-Wave JS UI and receives MQTT messages whenever a device's status changes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "installing-z-wave-js-ui",
      children: "Installing Z-Wave JS UI"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Please visit the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://zwave-js.github.io/zwave-js-ui/#/",
        children: "Z-Wave JS UI"
      }), " website for Z-Wave JS UI installation instructions."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configuring-z-wave-js-ui",
      children: "Configuring Z-Wave JS UI"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For integration with Gladys to work properly, 2 settings are required."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "First, you need to set the MQTT parameters in the parameters, in particular the \"name\" field, which defines the MQTT topic to which messages will be sent."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Z-Wave JS UI Configuration MQTT",
        src: (__webpack_require__(67069)/* ["default"] */.A) + "",
        width: "1600",
        height: "658"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Next, configure the \"Gateway\" section as follows:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Z-Wave JS UI Configuration Gateway",
        src: (__webpack_require__(75471)/* ["default"] */.A) + "",
        width: "1600",
        height: "770"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "connect-gladys-to-z-wave-js-ui",
      children: "Connect Gladys to Z-Wave JS UI"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To enable Gladys to communicate with Z-Wave JS UI, you need to provide Gladys with the URL and connection information for the MQTT broker on which Z-Wave JS UI is published."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the \"Configuration\" tab to add this information."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "discover-z-wave-js-ui",
      children: "Discover Z-Wave JS UI"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the \"Discovered\" tab to see the devices your Z-Wave JS UI instance exposes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can then add them to Gladys with a single click!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "supported-features",
      children: "Supported Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Door/Window Sensors"
        }), " – Detect open/close status, such as the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.amazon.com/Fibaro-FGDW-002-1-Window-Temperature-Sensor/dp/B074FCG1PF?crid=AMCFKK427FRN&keywords=Fibaro+door+sensor+2&qid=1704977401&sprefix=fibaro+door+sensor+2%2Caps%2C164&sr=8-1&linkCode=ll1&tag=gladproj-20&linkId=3e61bb12444e6d8265e7440bd0174456&language=en_US&ref_=as_li_ss_tl",
          children: "Fibaro Door Opening Sensor"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Binary Switches"
        }), " – Control lights or power outlets (on/off). Supported devices include:", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://www.fibaro.com/en/products/wall-plug/",
              children: "Fibaro Wall Plug"
            })
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://www.fibaro.com/en/products/switches/",
              children: "Fibaro Switches"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Air Temperature Sensors"
        }), " – Monitor room temperature."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Power Metering"
        }), " – Track energy consumption analytics."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Curtain/Shutter Control"
        }), " – Open, close, and check curtain position. Supported devices include:", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://manuals.fibaro.com/fr/walli-roller-shutter/",
              children: "Fibaro Walli Roller Shutter"
            })
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://qubino.com/products/flush-shutter/",
              children: "Qubino Flush Shutter"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dimmers"
        }), " – Adjust brightness or control voltage-based devices. Supported devices include:", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://manuals.fibaro.com/fr/walli-dimmer/",
              children: "Fibaro Walli Dimmer"
            })
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://manuals.fibaro.com/fr/dimmer-2/",
              children: "Fibaro Dimmer 2"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Luminosity Sensors"
        }), " – Measure ambient light levels."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Alarm Sensors"
        }), " – Detect security threats."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Binary Sensors"
        }), " – Support various on/off detection scenarios."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If your device is not currently supported, let us know on the forum!"
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
75471(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zwavejs-ui-gateway-configuration-6fd4e602937357ca9b0080ffb1c7d744.jpg");

},
67069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zwavejs-ui-mqtt-configuration-8ed5ce6989078b954f6af75153100974.jpg");

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
19977(module) {
module.exports = JSON.parse('{"id":"integrations/zwavejs-ui","title":"Integrate your Z-Wave devices with Z-Wave JS UI","description":"Gladys Assistant offers integration with Z-Wave JS UI, a software application for controlling Z-Wave devices.","source":"@site/docs/integrations/zwavejs-ui.md","sourceDirName":"integrations","slug":"/integrations/zwavejs-ui","permalink":"/zh-Hans/docs/integrations/zwavejs-ui","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/zwavejs-ui.md","tags":[],"version":"current","frontMatter":{"id":"zwavejs-ui","title":"Integrate your Z-Wave devices with Z-Wave JS UI","sidebar_label":"Z-Wave JS UI"},"sidebar":"docs","previous":{"title":"Zigbee2Mqtt","permalink":"/zh-Hans/docs/integrations/zigbee2mqtt"},"next":{"title":"Introduction","permalink":"/zh-Hans/docs/scenes/intro"}}')

},

};
;
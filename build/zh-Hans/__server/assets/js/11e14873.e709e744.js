"use strict";
exports.ids = ["8066"];
exports.modules = {
38017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_tasmota_md_11e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_tasmota_md_11e_json__rspack_import_0 = __webpack_require__(65389);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'tasmota',
	title: 'Tasmota',
	sidebar_label: 'Tasmota'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Flash with Tasmota firmware",
  "id": "flash-with-tasmota-firmware",
  "level": 2
}, {
  "value": "Configure device",
  "id": "configure-device",
  "level": 2
}, {
  "value": "Add the device to Gladys",
  "id": "add-the-device-to-gladys",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Tasmota is an open source firmware for ESP8266 devices."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To connect them to Gladys:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "flash your device with Tamosta firmware"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "configure it"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Integrations / Tasmota"
        }), " in Gladys"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "flash-with-tasmota-firmware",
      children: "Flash with Tasmota firmware"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Follow instructions on ", (0,react_jsx_runtime__rspack_import_1.jsx)("a", {
        href: "https://tasmota.github.io/docs/Getting-Started/",
        target: "_blank",
        children: "Tasmota installation user guide"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There are many firmware installation guides online, depending on the device. You will be able to find the right guide for your device by browsing through the search results."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configure-device",
      children: "Configure device"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Once flashed with new firmare, go to the device web page and configure MQTT as describe at ", (0,react_jsx_runtime__rspack_import_1.jsx)("a", {
        href: "https://tasmota.github.io/docs/MQTT/",
        target: "_blank",
        children: "Tasmota MQTT configuration"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Enter your MQTT broken information and fill the ", (0,react_jsx_runtime__rspack_import_1.jsx)("i", {
        children: "Topic"
      }), " field with the expected unique device identifier."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Configuration"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Tasmota menu",
        src: (__webpack_require__(91335)/* ["default"] */.A) + "",
        width: "970",
        height: "1131"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Configure MQTT"
      }), " menu."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Tasmota configuration",
        src: (__webpack_require__(3654)/* ["default"] */.A) + "",
        width: "892",
        height: "1476"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then fill configuration form with your information:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Host"
        }), " : MQTT broker URL"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Port"
        }), " : MQTT broker port"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "User"
        }), " : user to connect to MOQTT broker"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Password"
        }), " : password to connect to MQTT broker"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Tasmota MQTT",
        src: (__webpack_require__(25844)/* ["default"] */.A) + "",
        width: "769",
        height: "1479"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "add-the-device-to-gladys",
      children: "Add the device to Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once saved, go back to Gladys:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Integration -> Tasmota"
        }), " page"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["select ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "MQTT discover"
        }), " menu"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Scan"
        }), "button (if device is not already listed)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["then ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Save"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "and voilà!"
      }), "\n"]
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
3654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/tasmota-configuration-8522871fd5336446fe4ae0fc66c996f0.png");

},
91335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/tasmota-home-5469556de90e2d27648cf1a7e529317e.png");

},
25844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/tasmota-mqtt-b8db9eba9aab47b0805b89c6748a7d71.png");

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
65389(module) {
module.exports = JSON.parse('{"id":"integrations/tasmota","title":"Tasmota","description":"Tasmota is an open source firmware for ESP8266 devices.","source":"@site/docs/integrations/tasmota.md","sourceDirName":"integrations","slug":"/integrations/tasmota","permalink":"/zh-Hans/docs/integrations/tasmota","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/tasmota.md","tags":[],"version":"current","frontMatter":{"id":"tasmota","title":"Tasmota","sidebar_label":"Tasmota"},"sidebar":"docs","previous":{"title":"Sonos","permalink":"/zh-Hans/docs/integrations/sonos"},"next":{"title":"Telegram","permalink":"/zh-Hans/docs/integrations/telegram"}}')

},

};
;
"use strict";
exports.ids = ["6276"];
exports.modules = {
68396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_bluetooth_md_6df_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_bluetooth_md_6df_json__rspack_import_0 = __webpack_require__(40971);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'bluetooth',
	title: 'Manage presence with Bluetooth detection',
	sidebar_label: 'Bluetooth'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configure your bluetooth device",
  "id": "configure-your-bluetooth-device",
  "level": 2
}, {
  "value": "Manage presence in scenes",
  "id": "manage-presence-in-scenes",
  "level": 2
}, {
  "value": "A &quot;homecoming&quot; scene",
  "id": "a-homecoming-scene",
  "level": 3
}, {
  "value": "A &quot;leaving home&quot; scene",
  "id": "a-leaving-home-scene",
  "level": 3
}, {
  "value": "Display presence on the dashboard",
  "id": "display-presence-on-the-dashboard",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Bluetooth integration is useful for presence detection."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["There are bluetooth key chains like the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.amazon.com/gp/product/B08K3124JR/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gladproj-20&creative=9325&linkCode=as2&creativeASIN=B08K3124JR&linkId=5688d18164e92becabd17c6d49fdd778",
        children: "NUT keychain"
      }), " which permanently broadcast their presence via Bluetooth."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "With this kind of key fob, Gladys can detect when you are (or are not) at home, simply by scanning for nearby bluetooth devices."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: ["This trick does not work with all Bluetooh devices. This only works with bluetooth devices that (1) transmit their signal continuously, and (2) which do not obfuscate their bluetooth address. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Most  phones do not broadcast their bluetooth signal continuously"
        }), "."]
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "In general, the \"dumber\" the device, the better it works! For example, I had a Fitbit Force 2 bracelet, and it worked. However, it does not work with an Apple Watch."
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configure-your-bluetooth-device",
      children: "Configure your bluetooth device"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the \"Bluetooth\" integration, \"Discovery\" tab. Scan the surrounding bluetooth devices, and find the device you want to add."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"Connect to Gladys\":"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Configure bluetooth device",
        src: (__webpack_require__(49782)/* ["default"] */.A) + "",
        width: "2880",
        height: "1800"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then activate the option \"Use this device as a presence sensor\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Give this device a unique name, and add it to Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You should land on this screen:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Configure bluetooth device",
        src: (__webpack_require__(20214)/* ["default"] */.A) + "",
        width: "2880",
        height: "1800"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now, go to the \"Presence scanner\" screen, and check that your configuration looks like this:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Configure bluetooth device",
        src: (__webpack_require__(51811)/* ["default"] */.A) + "",
        width: "2880",
        height: "1800"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's good, everything is configured on the Bluetooth side!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "manage-presence-in-scenes",
      children: "Manage presence in scenes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "a-homecoming-scene",
      children: "A \"homecoming\" scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["We are now going to create a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "scene"
      }), " that will mark a user as \"present at home\" when this Nut keychain (or any other compatible bluetooth device) is detected."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the \"Scenes\" tab, and create a scene like this:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Return home scene",
        src: (__webpack_require__(52721)/* ["default"] */.A) + "",
        width: "2880",
        height: "2874"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The scene is very simple."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "WHEN \"the key fob is detected\" THEN \"put user 'Tony' as present at home\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "a-leaving-home-scene",
      children: "A \"leaving home\" scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To manage the departure of the user from the house, we recommend you make a scene executed periodically, which will check if your NUT keychain has been detected recently at home."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If Gladys detects the device's presence, it won't do anything. If not, Gladys will mark the user as absent."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The scene should look like this:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene leaving home",
        src: (__webpack_require__(43107)/* ["default"] */.A) + "",
        width: "2880",
        height: "3428"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can play around with the settings to suit your home. If you feel that 10 minutes is too short to be put as absent, you can extend it to 20 minutes to avoid \"false positives\" 😀"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "display-presence-on-the-dashboard",
      children: "Display presence on the dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can display the presence of selected users on the dashboard. To do so, you can use the \"Users present\" widget:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Presence dashboard",
        src: (__webpack_require__(51067)/* ["default"] */.A) + "",
        width: "804",
        height: "484"
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
52721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/back-at-home-scene-38647432bc91fbab32e142c45537da3b.png");

},
49782(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/configure-device-80b62a46e5bb9ada55d6031170ce9dd4.png");

},
20214(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/device-list-0bf86d4db6e394167acc796993da32a1.png");

},
43107(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/left-home-scene-6f779b7ce3a7cf29ea33b6466c4bdc08.png");

},
51811(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/presence-scanner-8793ab46c7ff039b50f1f68256b171a8.png");

},
51067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/user-presence-dashboard-dd05f5eb0caa1b947be14e1c8c2053a2.png");

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
40971(module) {
module.exports = JSON.parse('{"id":"integrations/bluetooth","title":"Manage presence with Bluetooth detection","description":"Bluetooth integration is useful for presence detection.","source":"@site/docs/integrations/bluetooth.md","sourceDirName":"integrations","slug":"/integrations/bluetooth","permalink":"/zh-Hans/docs/integrations/bluetooth","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/bluetooth.md","tags":[],"version":"current","frontMatter":{"id":"bluetooth","title":"Manage presence with Bluetooth detection","sidebar_label":"Bluetooth"},"sidebar":"docs","previous":{"title":"Alexa","permalink":"/zh-Hans/docs/integrations/alexa"},"next":{"title":"Broadlink","permalink":"/zh-Hans/docs/integrations/broadlink"}}')

},

};
;
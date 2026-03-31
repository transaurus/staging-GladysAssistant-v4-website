"use strict";
exports.ids = ["3390"];
exports.modules = {
85059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_homekit_md_45a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_homekit_md_45a_json__rspack_import_0 = __webpack_require__(80632);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'homekit',
	title: 'Connect Gladys to HomeKit and use Siri',
	sidebar_label: 'HomeKit'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "On the Gladys Side",
  "id": "on-the-gladys-side",
  "level": 2
}, {
  "value": "Home App",
  "id": "home-app",
  "level": 2
}, {
  "value": "Supported Devices",
  "id": "supported-devices",
  "level": 2
}, {
  "value": "Adding New Devices After Initial Pairing",
  "id": "adding-new-devices-after-initial-pairing",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "on-the-gladys-side",
      children: "On the Gladys Side"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To connect your Gladys instance to HomeKit, go to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Integrations"
      }), " menu and click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "HomeKit"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You’ll find a QR code there that allows the Apple Home app to add Gladys as a HomeKit bridge."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "home-app",
      children: "Home App"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["On your iPhone, iPad, or iPod Touch, open the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Home"
      }), " app."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Tap the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "+"
        }), " icon at the top right, then select ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Add Accessory"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Scan the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "QR code"
        }), " displayed in the HomeKit integration page in Gladys."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["The app will detect Gladys as a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "HomeKit bridge"
        }), " and automatically import all compatible devices."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "During this initial setup, the app will ask you to assign each device to a room. You can either select an existing room or create a new one."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can now ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "control your devices via the Home app or with Siri voice commands"
      }), " 🗣️✨"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "supported-devices",
      children: "Supported Devices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Here is the list of currently supported devices:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "💡 Light bulbs (On/Off, color, temperature, brightness)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "🔌 Plugs (On/Off)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "🌡️ Temperature sensors"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "💧 Humidity sensors"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "🚪 Door/window sensors"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "🪟 Roller shutters and curtains"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["We regularly add support for new device types based on community feedback. Feel free to suggest yours on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "Gladys forum"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "adding-new-devices-after-initial-pairing",
      children: "Adding New Devices After Initial Pairing"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you add a new device in Gladys after you’ve already linked to HomeKit:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["If the device is ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "compatible"
        }), ", it will be automatically added to HomeKit in a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "default room"
        }), ". You can then move it to the correct room manually."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["If the new device ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "doesn’t appear"
        }), ", try restarting the HomeKit integration by clicking the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Restart"
        }), " button, then wait a few seconds for the bridge to reload."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["🛠️ Need help? Join us on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "Gladys community forum"
      }), " — we’re here to support you!"]
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
80632(module) {
module.exports = JSON.parse('{"id":"integrations/homekit","title":"Connect Gladys to HomeKit and use Siri","description":"On the Gladys Side","source":"@site/docs/integrations/homekit.md","sourceDirName":"integrations","slug":"/integrations/homekit","permalink":"/zh-Hans/docs/integrations/homekit","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/homekit.md","tags":[],"version":"current","frontMatter":{"id":"homekit","title":"Connect Gladys to HomeKit and use Siri","sidebar_label":"HomeKit"},"sidebar":"docs","previous":{"title":"Google Home","permalink":"/zh-Hans/docs/integrations/google-home"},"next":{"title":"Matter","permalink":"/zh-Hans/docs/integrations/matter"}}')

},

};
;
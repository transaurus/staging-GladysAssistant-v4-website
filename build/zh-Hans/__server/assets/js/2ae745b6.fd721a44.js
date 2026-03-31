"use strict";
exports.ids = ["4642"];
exports.modules = {
66366(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dashboard_alarm_md_2ae_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dashboard_alarm_md_2ae_json__rspack_import_0 = __webpack_require__(11463);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'alarm',
	title: 'How to set up your own alarm system with Gladys?',
	sidebar_label: 'Alarm'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configure dashboard",
  "id": "configure-dashboard",
  "level": 2
}, {
  "value": "Set arming delay and alarm code",
  "id": "set-arming-delay-and-alarm-code",
  "level": 2
}, {
  "value": "Setting up scenes",
  "id": "setting-up-scenes",
  "level": 2
}, {
  "value": "Tablet mode",
  "id": "tablet-mode",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys, you can configure a real alarm system."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configure-dashboard",
      children: "Configure dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On the dashboard, you can add an \"Alarm\" widget:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Dashboard alarm",
        src: (__webpack_require__(28434)/* ["default"] */.A) + "",
        width: "1600",
        height: "1580"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The alarm in Gladys has 4 modes:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Armed"
        }), ": The house is armed. Useful when you're away from home."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Disarmed"
        }), ": The house is disarmed, the alarm is not active."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Partial arming"
        }), ": This mode is useful for \"night mode\" or \"nap mode\". You're at home and want to monitor only the outside of the house, but not the inside, so you can continue moving around."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Panic mode"
        }), ": An intruder is in the house and you want to trigger the alarm, perhaps sending an automatic message to a loved one?"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now that you've understood the different modes, it's time to set up scenes to implement your alarm strategy."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "set-arming-delay-and-alarm-code",
      children: "Set arming delay and alarm code"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There are 2 parameters to set in the house parameters (\"Parameters\" -> \"Houses\")"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Alarm house settings",
        src: (__webpack_require__(34806)/* ["default"] */.A) + "",
        width: "1600",
        height: "641"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Alarm code"
        }), ": If you use \"tablet mode\", Gladys will display a numeric keypad on these tablets when the alarm is armed. The code defined here will be used to deactivate the alarm. We'll talk about this tablet mode later in this tutorial."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Delay before arming"
        }), ": If you want to leave a delay before the alarm is armed (between 5 seconds and 1 minute), you can set it here. This allows you to leave the house before the alarm is activated."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "setting-up-scenes",
      children: "Setting up scenes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now we need to tell Gladys what the alarm mode will do."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The first scene to create is one that will be triggered when the alarm is armed."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For example, you can send yourself a Telegram message when the alarm is arming, or make a sound signal in the house, make the lights flash - anything is possible!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Alarm arming...",
        src: (__webpack_require__(67458)/* ["default"] */.A) + "",
        width: "1600",
        height: "703"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Next, the most important scenario: what to do in the event of an intrusion?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can create a scene with several triggers:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "\"When motion is detected in the living room\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "\"When motion is detected in the kitchen\"."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "\"When the front door is opened\"."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene motion alarm",
        src: (__webpack_require__(50631)/* ["default"] */.A) + "",
        width: "1600",
        height: "673"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then add a condition \"AND that the alarm is in armed mode\" :"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Alarm scene condition",
        src: (__webpack_require__(97229)/* ["default"] */.A) + "",
        width: "1600",
        height: "797"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If this condition is met, the scene will continue and you can then send yourself a Telegram message, send yourself a camera image via Telegram, trigger an audible alarm in the house, etc..."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If someone breaks into your home, they may try to unlock Gladys via your wall-mounted tablets."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "They will be able to test 3 codes before the keypad locks for 5 minutes, and after 3 failed codes, this scene trigger will be called:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Alarm bad scene code",
        src: (__webpack_require__(26055)/* ["default"] */.A) + "",
        width: "1600",
        height: "722"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can create a scene on this trigger that will warn you by message."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "tablet-mode",
      children: "Tablet mode"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you have a tablet on the wall at home, you can declare it to Gladys via the \"Tablet mode\" button:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Tablet mode",
        src: (__webpack_require__(44861)/* ["default"] */.A) + "",
        width: "1600",
        height: "746"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When you click on this button, you'll see a form prompting you to enter the house in which this tablet is located."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys needs this information to know when to \"lock\" the tablet:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Tablet mode configuration",
        src: (__webpack_require__(20207)/* ["default"] */.A) + "",
        width: "1600",
        height: "467"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want your tablet to be full-screen (and the rest), you can add a parameter to the URL: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "?fullscreen=force"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This \"forced fullscreen\" has nothing to do with the tablet mode; both are entirely independent."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When the alarm is armed, Gladys will automatically fetch all the tablets in the house, and lock them."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "These tablets will display a numeric keypad that will enable you to unlock the alarm:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Tablet mode numeric code",
        src: (__webpack_require__(33191)/* ["default"] */.A) + "",
        width: "1233",
        height: "1600"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This keyboard is an alternative to physical keyboards, but you can also use a real physical Zigbee keyboard and create a scene that disarms the alarm when this keyboard is used."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can also dispense with these keypads altogether and disarm the alarm via your phone's \"Alarm\" widget."
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
67458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm-arming-0809d1004e2bf17fcbbb55f84b4ace39.jpg");

},
97229(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm-condition-f7e95cf3783e9f91da9f0f5e4a161cb9.jpg");

},
28434(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm-dashboard-73bbb151546e4c87ae6a45c0ab5dd496.jpg");

},
34806(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm-house-settings-00450a2a4500e31adb8af758c4be568d.jpg");

},
50631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm-scene-motion-7c31023f496f5d0750fd5cf8bd1b41e0.jpg");

},
44861(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm-tablet-mode-button-8010eead92587cff82804d4fa6f9f577.jpg");

},
20207(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm-tablet-mode-config-afe9b472deda868f2488ca200fa66d2e.jpg");

},
33191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm-tablet-mode-locked-7347ea0619108822be634df0a69643c3.jpg");

},
26055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/wrong-alarm-code-5b2a0a5cdc0f627af3318ec9456ea1df.jpg");

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
11463(module) {
module.exports = JSON.parse('{"id":"dashboard/alarm","title":"How to set up your own alarm system with Gladys?","description":"In Gladys, you can configure a real alarm system.","source":"@site/docs/dashboard/alarm.md","sourceDirName":"dashboard","slug":"/dashboard/alarm","permalink":"/zh-Hans/docs/dashboard/alarm","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/dashboard/alarm.md","tags":[],"version":"current","frontMatter":{"id":"alarm","title":"How to set up your own alarm system with Gladys?","sidebar_label":"Alarm"},"sidebar":"docs","previous":{"title":"Introduction","permalink":"/zh-Hans/docs/dashboard/intro"},"next":{"title":"Weather","permalink":"/zh-Hans/docs/dashboard/weather"}}')

},

};
;
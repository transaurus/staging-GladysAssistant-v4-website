"use strict";
exports.ids = ["3184"];
exports.modules = {
31884(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_sonos_md_ef9_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_sonos_md_ef9_json__rspack_import_0 = __webpack_require__(41121);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'sonos',
	title: 'How to connect a Sonos speaker to your smart home system',
	sidebar_label: 'Sonos'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Add a speaker in Gladys",
  "id": "add-a-speaker-in-gladys",
  "level": 2
}, {
  "value": "Rename / place a speaker in a room",
  "id": "rename--place-a-speaker-in-a-room",
  "level": 2
}, {
  "value": "Control music on the dashboard",
  "id": "control-music-on-the-dashboard",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
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
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You must have the Sonos application to connect your Sonos speakers (sonos Play 1, sonos One, sonos Playbar, sonos Sub, sonos Port, ...)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://play.google.com/store/apps/details?id=com.sonos.acr2&hl=fr&gl=US",
          children: "Sonos for Android"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://apps.apple.com/fr/app/sonos/id1488977981",
          children: "Sonos for Apple"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you create a group of speakers in the Sonos application, this group will be recognized as a single speaker in Gladys. If you have a Sonos Port, it will also be detected in the integration."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "add-a-speaker-in-gladys",
      children: "Add a speaker in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "After adding your speakers in the Sonos application, go back to Gladys:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["go to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Integration -> Sonos"
          }), " page in Gladys"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["select the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Sonos Discovery"
          }), " menu"]
        }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
            alt: "Sonos device discovery",
            src: (__webpack_require__(13880)/* ["default"] */.A) + "",
            width: "900",
            height: "443"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["click on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Scan"
          }), " button at top right (if the device is not already in the list)"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["finally, click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "Save"
          }), " for the speakers you want to integrate into Gladys"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: "and you're done!"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "rename--place-a-speaker-in-a-room",
      children: "Rename / place a speaker in a room"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If necessary, you can go to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Devices"
      }), " menu to modify / complete the configuration of your speakers by adding them to a room or renaming them."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Sonos devices tab",
        src: (__webpack_require__(42206)/* ["default"] */.A) + "",
        width: "898",
        height: "464"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "control-music-on-the-dashboard",
      children: "Control music on the dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Now you can add a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "music widget"
      }), " to your dashboard and control your Sonos speakers with the music player."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Go to the Gladys dashboard and click on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Edit"
      }), " button to modify the dashboard."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "edit dashboard",
        src: (__webpack_require__(14856)/* ["default"] */.A) + "",
        width: "1265",
        height: "728"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "add +"
      }), " then select the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Music"
      }), " widget - you can move it to a column."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Select your speaker, and click ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Save"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Edit Music widget",
        src: (__webpack_require__(53814)/* ["default"] */.A) + "",
        width: "382",
        height: "194"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "That's it! Your widget is visible on the dashboard."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Music widget",
        src: (__webpack_require__(15725)/* ["default"] */.A) + "",
        width: "393",
        height: "220"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Please post a message on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://en-community.gladysassistant.com",
        children: "the forum"
      }), ", if you need any help."]
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
42206(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/add_sonos_device-a9535d475121c65aac29558e8800a847.png");

},
14856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/edit_dashboard-c245aee3822fb39b8c9d5cb791301fc0.png");

},
53814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
15725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
13880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/sonos_discovery-baf3557d84e07545fb122d66c7b61a67.png");

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
41121(module) {
module.exports = JSON.parse('{"id":"integrations/sonos","title":"How to connect a Sonos speaker to your smart home system","description":"Prerequisites","source":"@site/docs/integrations/sonos.md","sourceDirName":"integrations","slug":"/integrations/sonos","permalink":"/zh-Hans/docs/integrations/sonos","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/sonos.md","tags":[],"version":"current","frontMatter":{"id":"sonos","title":"How to connect a Sonos speaker to your smart home system","sidebar_label":"Sonos"},"sidebar":"docs","previous":{"title":"Somfy","permalink":"/zh-Hans/docs/integrations/somfy-tahoma"},"next":{"title":"Tasmota","permalink":"/zh-Hans/docs/integrations/tasmota"}}')

},

};
;
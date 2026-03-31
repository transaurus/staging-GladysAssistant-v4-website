"use strict";
exports.ids = ["1998"];
exports.modules = {
96635(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_05_06_gladys_4_40_external_zigbee_md_d63_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_05_06_gladys_4_40_external_zigbee_md_d63_json__rspack_import_0 = __webpack_require__(47769);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Test Gladys Assistant with an existing Zigbee2mqtt instance!',
	description: 'Are you a Home Assistant user who wants to test Gladys without touching your installation? It\'s possible!',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-4-40.jpg',
	slug: 'gladys-4-40-external-zigbee'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Using Gladys with an existing Zigbee2mqtt instance",
  "id": "using-gladys-with-an-existing-zigbee2mqtt-instance",
  "level": 2
}, {
  "value": "Philips Hue: “Synchronize bridges” button added",
  "id": "philips-hue-synchronize-bridges-button-added",
  "level": 2
}, {
  "value": "Blink sockets in scenes",
  "id": "blink-sockets-in-scenes",
  "level": 2
}, {
  "value": "LAN Manager: timeout increased to 60 seconds",
  "id": "lan-manager-timeout-increased-to-60-seconds",
  "level": 2
}, {
  "value": "How to upgrade?",
  "id": "how-to-upgrade",
  "level": 2
}, {
  "value": "Support us",
  "id": "support-us",
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
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hi everyone!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today I'm releasing Gladys Assistant 4.40, an update to Gladys that brings a much-requested feature: the ability to use Gladys with an existing Zigbee2mqtt instance."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "using-gladys-with-an-existing-zigbee2mqtt-instance",
      children: "Using Gladys with an existing Zigbee2mqtt instance"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From now on, when you configure Zigbee2mqtt in Gladys, Gladys will offer you 2 choices:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys Zigbee2mqtt mode choice",
        src: (__webpack_require__(38478)/* ["default"] */.A) + "",
        width: "1822",
        height: "840"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Either you're a beginner starting from scratch, and Gladys can take care of all the Zigbee2mqtt configuration (that's what Gladys was doing until now)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Or you're an experienced user who already has an existing Zigbee2mqtt installation (for example, if you're using Home Assistant or any other home automation platform), in which case you can connect Gladys to an existing installation."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This second option lets you test Gladys without touching your installation, and you can even use 2 home automation systems at the same time!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "That's the power of open-source systems 😊"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you're a user of another home automation solution, I'd love to hear from you: come and test our Zigbee2mqtt integration, and tell us on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "our forum"
      }), " if there are any devices that aren't yet managed: it's a great help and helps us improve!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to AlexTrovato for his work on this development 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "philips-hue-synchronize-bridges-button-added",
      children: "Philips Hue: “Synchronize bridges” button added"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Philips Hue integration, in the past if you added a Philips Hue bulb to your bridge while Gladys was already running, Gladys was unaware of this new bulb."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The explanation comes from the library we use, which keeps a cache of available lights because synchronization with the bridge is a costly operation."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From now on, I've added a “Synchronize bridges” button that allows you to retrieve the latest version of the light bulb list in Gladys:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys synchronize Philips Hue bridge",
        src: (__webpack_require__(75177)/* ["default"] */.A) + "",
        width: "2484",
        height: "972"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "blink-sockets-in-scenes",
      children: "Blink sockets in scenes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The “Blink lights” scene action now lets you select connected sockets, or any switch, allowing you to blink a light that's connected to a socket."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Be careful, however, not to flicker a traditional light bulb, as it may snap. Only use LEDs!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For example, my bathroom mirror bulb is controlled by a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.domadoo.fr/fr/peripheriques/6619-sonoff-commutateur-intelligent-sans-neutre-zigbee-30-zbminil2.html?domid=17",
        children: "Zigbee switch ZBMINIL2"
      }), ", and therefore appears in this scene action:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Blink scene sockets",
        src: (__webpack_require__(66083)/* ["default"] */.A) + "",
        width: "1140",
        height: "868"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to Cicoub13 for this development 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "lan-manager-timeout-increased-to-60-seconds",
      children: "LAN Manager: timeout increased to 60 seconds"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I've had some feedback that the LAN Manager integration's network scan timeout wasn't sufficient: I've now increased it from 30 seconds to 60 seconds."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "how-to-upgrade",
      children: "How to upgrade?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you installed Gladys with the official Raspberry Pi OS image, your instance will update ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "automatically"
      }), " in the coming hours. It can take up to 24 hours, don't panic."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you installed Gladys with Docker, make sure you are using Watchtower. See the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/installation/docker#auto-upgrade-gladys-with-watchtower",
        children: "documentation"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "With Watchtower, Gladys will update automatically."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "support-us",
      children: "Support us"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you want to support us, there are many ways:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Answer posts on the forum, give your feedback."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Help us improve the documentation."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Develop new features/integrations on Gladys, we are 100% open-source."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Subscribe to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/plus",
          children: "Gladys Plus"
        })]
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
66083(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/blink-switch-03df21cf112ac775ab1e0f7c285e5091.png");

},
38478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/choose-zigbee-mode-8990adabf39a324a8cf8c4a7cce30e05.png");

},
75177(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/sync-hue-bridges-76db9665011b48a8c06bd32b6343e88d.png");

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
47769(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-4-40-external-zigbee","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2024-05-06-gladys-4-40-external-zigbee.md","source":"@site/blog/2024-05-06-gladys-4-40-external-zigbee.md","title":"Test Gladys Assistant with an existing Zigbee2mqtt instance!","description":"Are you a Home Assistant user who wants to test Gladys without touching your installation? It\'s possible!","date":"2024-05-06T00:00:00.000Z","tags":[],"readingTime":2.71,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Test Gladys Assistant with an existing Zigbee2mqtt instance!","description":"Are you a Home Assistant user who wants to test Gladys without touching your installation? It\'s possible!","authors":"pierregilles","image":"/img/presentation/gladys-4-40.jpg","slug":"gladys-4-40-external-zigbee"},"unlisted":false,"prevItem":{"title":"DuckDB: Extreme Performance and a 97% Lighter Database!","permalink":"/zh-Hans/blog/gladys-and-duckdb"},"nextItem":{"title":"Launch of the ULTIMATE guide to getting started in home automation 🚀","permalink":"/zh-Hans/blog/lancement-formation"}}')

},

};
;
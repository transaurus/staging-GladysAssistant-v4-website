"use strict";
exports.ids = ["3055"];
exports.modules = {
915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_nextcloud_talk_md_117_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_nextcloud_talk_md_117_json__rspack_import_0 = __webpack_require__(17043);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'nextcloud-talk',
	title: 'Nextcloud Talk',
	sidebar_label: 'Nextcloud Talk'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Nextcloud account for your bot",
  "id": "nextcloud-account-for-your-bot",
  "level": 2
}, {
  "value": "Get your conversation token",
  "id": "get-your-conversation-token",
  "level": 2
}, {
  "value": "Enter full Nextcloud Talk bot configuration in Gladys Assistant",
  "id": "enter-full-nextcloud-talk-bot-configuration-in-gladys-assistant",
  "level": 2
}, {
  "value": "First communication between Telegram and Gladys Assistant",
  "id": "first-communication-between-telegram-and-gladys-assistant",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This integration allows you to use Nextcloud ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://nextcloud.com/talk/",
        children: "Talk"
      }), " app to talk to Gladys."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Available on Android, iOS and web, it will allow you to communicate with Gladys Assistant by giving it instructions, receiving information or questions..."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "nextcloud-account-for-your-bot",
      children: "Nextcloud account for your bot"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Bots does not exist natively in Nextcloud Talk. It is necessary to create a Nextcloud account for your bot."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On Nextcloud, login with your bot account:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Go to config page, then click on Security tab"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "At the bottom enter \"Gladys\" and click on \"Create new app password\""
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Note the generated password"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Nextcloud Talk password",
        src: (__webpack_require__(5361)/* ["default"] */.A) + "",
        width: "908",
        height: "590"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "get-your-conversation-token",
      children: "Get your conversation token"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To indicate which Nextcloud Talk conversation Gladys should listen to:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["From a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "browser"
        }), ", with your ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "personnal account"
        }), " on Nextcloud"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Go to Talk application"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Start conversation with your bot account"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Nextcloud Talk start conversation",
        src: (__webpack_require__(42069)/* ["default"] */.A) + "",
        width: "2346",
        height: "968"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Write down the token, you can find it in conversation url"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Nextcloud Talk token",
        src: (__webpack_require__(80185)/* ["default"] */.A) + "",
        width: "2108",
        height: "586"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "enter-full-nextcloud-talk-bot-configuration-in-gladys-assistant",
      children: "Enter full Nextcloud Talk bot configuration in Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to \"Integrations\" -> \"Nextcloud Talk\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Integration Nextcloud Talk",
        src: (__webpack_require__(7324)/* ["default"] */.A) + "",
        width: "2452",
        height: "1098"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Enter your Nextcloud instance base url"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Enter the username of your bot's Nextcloud account"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Paste here previously generated password"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Paste conversation token"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"Save\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Enter bot configuration Gladys Assistant",
        src: (__webpack_require__(97618)/* ["default"] */.A) + "",
        width: "2372",
        height: "1228"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "first-communication-between-telegram-and-gladys-assistant",
      children: "First communication between Telegram and Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On Nextcloud web or mobile application, enter your first question for your Gladys Assistant, for example : what's the weather like?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Wait a bit and ......... magic !!!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Your assistant answers you ! Isn't fun ?"
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
5361(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nextcloud_talk_1_app_password-26e8198cde5172980d3a13f8506f51c2.png");

},
42069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nextcloud_talk_2_start_conversation-21952b641230aae72107b30040ee7cae.png");

},
80185(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nextcloud_talk_3_token-e82786568c2954377845cd345a0cdb21.png");

},
7324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nextcloud_talk_4_integration_list-59cdbd0c4cd29b18a1c9819c8173ecf2.png");

},
97618(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nextcloud_talk_5_configuration-7b25c295e414832a08f8fd722e08edfb.png");

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
17043(module) {
module.exports = JSON.parse('{"id":"integrations/nextcloud-talk","title":"Nextcloud Talk","description":"This integration allows you to use Nextcloud Talk app to talk to Gladys.","source":"@site/docs/integrations/nextcloud-talk.md","sourceDirName":"integrations","slug":"/integrations/nextcloud-talk","permalink":"/zh-Hans/docs/integrations/nextcloud-talk","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/nextcloud-talk.md","tags":[],"version":"current","frontMatter":{"id":"nextcloud-talk","title":"Nextcloud Talk","sidebar_label":"Nextcloud Talk"},"sidebar":"docs","previous":{"title":"Lan-Manager","permalink":"/zh-Hans/docs/integrations/lan-manager"},"next":{"title":"Netatmo","permalink":"/zh-Hans/docs/integrations/netatmo"}}')

},

};
;
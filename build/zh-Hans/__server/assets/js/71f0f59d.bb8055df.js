"use strict";
exports.ids = ["3418"];
exports.modules = {
37869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_callmebot_md_71f_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_callmebot_md_71f_json__rspack_import_0 = __webpack_require__(41514);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'callmebot',
	title: 'Send Gladys messages to WhatsApp and Signal with CallMeBot',
	sidebar_label: 'CallMeBot'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}, {
  "value": "Setup Instructions",
  "id": "setup-instructions",
  "level": 2
}, {
  "value": "1. Get Your API Key",
  "id": "1-get-your-api-key",
  "level": 3
}, {
  "value": "For WhatsApp:",
  "id": "for-whatsapp",
  "level": 4
}, {
  "value": "For Signal:",
  "id": "for-signal",
  "level": 4
}, {
  "value": "2. Configure Gladys",
  "id": "2-configure-gladys",
  "level": 3
}, {
  "value": "Usage",
  "id": "usage",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "CallMeBot is a service that allows Gladys to send messages to various messaging platforms like WhatsApp and Signal."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This integration is one-way only - Gladys can send messages but cannot receive replies."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "One-way messaging only (Gladys can send but not receive messages)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Does not support sending images"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Message rate limits apply (check CallMeBot website for current limits)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "setup-instructions",
      children: "Setup Instructions"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "1-get-your-api-key",
      children: "1. Get Your API Key"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "First, you'll need to get an API key from CallMeBot:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "for-whatsapp",
      children: "For WhatsApp:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Visit ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.callmebot.com/blog/free-api-whatsapp-messages/",
          children: "CallMeBot's WhatsApp page"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Follow their activation steps:", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Send a message to their WhatsApp number"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Wait for the confirmation message with your API key"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Save your API key for the next step"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "for-signal",
      children: "For Signal:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Visit ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.callmebot.com/blog/free-api-signal-send-messages/",
          children: "CallMeBot's Signal page"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Follow their activation steps:", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Start a chat with their Signal bot"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Follow the instructions to get your API key"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Save your API key for the next step"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "2-configure-gladys",
      children: "2. Configure Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "In Gladys, go to the \"Integrations\" list"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Find \"CallMeBot\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Choose your messaging platform:", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "For WhatsApp: Select \"WhatsApp\" and enter your phone number in international format (e.g., +1234567890)"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "For Signal: Select \"Signal\" and enter the UUID provided by CallMeBot (found in the URL they gave you)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Enter your API key"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Click \"Save\""
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once configured, you can use CallMeBot in scenes using the \"Send message\" action."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you're having issues:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Verify your API key is correct"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Check if you've completed the activation process"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Ensure you're within the rate limits"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Check your internet connection"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For more help, visit the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.callmebot.com/",
        children: "CallMeBot website"
      }), " or the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "Gladys community forum"
      }), "."]
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
41514(module) {
module.exports = JSON.parse('{"id":"integrations/callmebot","title":"Send Gladys messages to WhatsApp and Signal with CallMeBot","description":"CallMeBot is a service that allows Gladys to send messages to various messaging platforms like WhatsApp and Signal.","source":"@site/docs/integrations/callmebot.md","sourceDirName":"integrations","slug":"/integrations/callmebot","permalink":"/zh-Hans/docs/integrations/callmebot","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/callmebot.md","tags":[],"version":"current","frontMatter":{"id":"callmebot","title":"Send Gladys messages to WhatsApp and Signal with CallMeBot","sidebar_label":"CallMeBot"},"sidebar":"docs","previous":{"title":"Camera","permalink":"/zh-Hans/docs/integrations/camera"},"next":{"title":"Enedis","permalink":"/zh-Hans/docs/integrations/enedis"}}')

},

};
;
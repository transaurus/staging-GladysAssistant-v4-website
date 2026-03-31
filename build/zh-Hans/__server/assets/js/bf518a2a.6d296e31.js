"use strict";
exports.ids = ["1728"];
exports.modules = {
51003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2022_06_20_gladys_assistant_4_9_with_alexa_integration_md_bf5_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2022_06_20_gladys_assistant_4_9_with_alexa_integration_md_bf5_json__rspack_import_0 = __webpack_require__(82805);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Launching Gladys Assistant 4.9 with Amazon Alexa support',
	description: 'It\'s time to launch a new release, with a big new integration, Amazon Alexa.',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-assistant-4-9.jpg',
	slug: 'gladys-assistant-4-9-with-alexa-integration'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What&#39;s new in Gladys Assistant 4.9?",
  "id": "whats-new-in-gladys-assistant-49",
  "level": 2
}, {
  "value": "Amazon Alexa integration",
  "id": "amazon-alexa-integration",
  "level": 3
}, {
  "value": "Inject variables in the HTTP Request action in scenes",
  "id": "inject-variables-in-the-http-request-action-in-scenes",
  "level": 3
}, {
  "value": "Zigbee2Mqtt: Add support for Sonoff SNZB-01",
  "id": "zigbee2mqtt-add-support-for-sonoff-snzb-01",
  "level": 2
}, {
  "value": "How to upgrade?",
  "id": "how-to-upgrade",
  "level": 2
}, {
  "value": "Thanks to contributors",
  "id": "thanks-to-contributors",
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
      children: "Hi everyone!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today I'm launching a new release, Gladys Assistant v4.9."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In this version, I'm bringing a new major integration to Gladys: Amazon Alexa."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["It means we are now compatible with all voice assistant: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/integrations/google-home",
        children: "Google Home"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/integrations/alexa",
        children: "Amazon Alexa"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "whats-new-in-gladys-assistant-49",
      children: "What's new in Gladys Assistant 4.9?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "amazon-alexa-integration",
      children: "Amazon Alexa integration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's now possible to control your Gladys devices in Amazon Alexa."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We supports 3 types of control for now:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "On/Off (On lights, and switches)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Light Brightness"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Light color"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It means you can say:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "\"Alexa, Turn on the light in the living room.\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "\"Alexa, dim the bathroom light.\""
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Amazon Alexa Gladys",
        src: (__webpack_require__(12182)/* ["default"] */.A) + "",
        width: "1186",
        height: "1600"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To configure Amazon Alexa, it's just a few clicks."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can follow our documentation on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/integrations/alexa",
        children: "how to configure Amazon Alexa"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "inject-variables-in-the-http-request-action-in-scenes",
      children: "Inject variables in the HTTP Request action in scenes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now inject any variables from a scene in the HTTP Request action."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Inject variable in HTTP Request scene",
        src: (__webpack_require__(95243)/* ["default"] */.A) + "",
        width: "1600",
        height: "1127"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's super simple and it can help you build powerful scene, like calling Node-RED with a custom parameter!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "zigbee2mqtt-add-support-for-sonoff-snzb-01",
      children: "Zigbee2Mqtt: Add support for Sonoff SNZB-01"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We now support more clicks on the Sonoff SNZB-01 wireless switch."
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
      id: "thanks-to-contributors",
      children: "Thanks to contributors"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to everyone who contributed to this release and gave their feedback on the forum!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want to talk about this release, you're all welcome on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "forum"
      }), " !"]
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
        children: ["Make a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.buymeacoffee.com/gladysassistant",
          children: "one time donation"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Subscribe to our ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/plus",
          children: "monthly subscription to Gladys Plus"
        }), "."]
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
12182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alexa-b685b1b83444d749d89f56b02e94e11d.jpg");

},
95243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/inject-variables-http-request-d69800027513be2b5ec28e1165a939d2.jpg");

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
82805(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-assistant-4-9-with-alexa-integration","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2022-06-20-gladys-assistant-4-9-with-alexa-integration.md","source":"@site/blog/2022-06-20-gladys-assistant-4-9-with-alexa-integration.md","title":"Launching Gladys Assistant 4.9 with Amazon Alexa support","description":"It\'s time to launch a new release, with a big new integration, Amazon Alexa.","date":"2022-06-20T00:00:00.000Z","tags":[],"readingTime":1.82,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Launching Gladys Assistant 4.9 with Amazon Alexa support","description":"It\'s time to launch a new release, with a big new integration, Amazon Alexa.","authors":"pierregilles","image":"/img/presentation/gladys-assistant-4-9.jpg","slug":"gladys-assistant-4-9-with-alexa-integration"},"unlisted":false,"prevItem":{"title":"Gladys Assistant v4.10 is live, with Broadlink support!","permalink":"/zh-Hans/blog/gladys-assistant-4-10-broadlink-and-performances"},"nextItem":{"title":"Gladys Assistant is now compatible with Debian 11 & Ubuntu > 20.04","permalink":"/zh-Hans/blog/gladys-assistant-compatible-with-debian-11"}}')

},

};
;
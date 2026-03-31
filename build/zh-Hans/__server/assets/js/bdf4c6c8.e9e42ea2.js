"use strict";
exports.ids = ["3058"];
exports.modules = {
92914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_http_request_md_bdf_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_http_request_md_bdf_json__rspack_import_0 = __webpack_require__(10679);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'http-request',
	title: 'Make HTTP requests in a scene',
	sidebar_label: 'HTTP Request'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Send an HTTP request in a scene",
  "id": "send-an-http-request-in-a-scene",
  "level": 2
}, {
  "value": "Concrete example: Trigger an IFTTT action from a Gladys Assistant scene",
  "id": "concrete-example-trigger-an-ifttt-action-from-a-gladys-assistant-scene",
  "level": 2
}, {
  "value": "Configure Maker Webhooks in IFTTT",
  "id": "configure-maker-webhooks-in-ifttt",
  "level": 3
}, {
  "value": "Configure the Google Sheet service in IFTTT",
  "id": "configure-the-google-sheet-service-in-ifttt",
  "level": 3
}, {
  "value": "Create an applet",
  "id": "create-an-applet",
  "level": 3
}, {
  "value": "In Gladys, create a scene",
  "id": "in-gladys-create-a-scene",
  "level": 3
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}, {
  "value": "Using the response of an HTTP call in a scene",
  "id": "using-the-response-of-an-http-call-in-a-scene",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In scenes, it is sometimes useful to call an external API in order to control devices that are not managed by Gladys Assistant. You may also want to simply call an external service, without developing a service specifically for the occasion."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You must be in Gladys Assistant v4.0.3 (or over) to have this functionality."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "send-an-http-request-in-a-scene",
      children: "Send an HTTP request in a scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In scenes, you can create an \"Make HTTP Request\" action, which allows you to make an HTTP GET, POST, PATCH, PUT, or DELETE request."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can add headers if you need them for authentication for example."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "HTTP request action in Gladys scenes",
        src: (__webpack_require__(296)/* ["default"] */.A) + "",
        width: "1280",
        height: "854"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "concrete-example-trigger-an-ifttt-action-from-a-gladys-assistant-scene",
      children: "Concrete example: Trigger an IFTTT action from a Gladys Assistant scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You are probably familiar with [IFTTT] (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://ifttt.com/",
        children: "https://ifttt.com/"
      }), "), a service that allows different services to be connected to each other. Their business model having changed recently, it is only possible to create 3 actions per account, but this is more than enough if you want to use it only to compensate for a lack of Gladys functionality."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In this example, we'll use IFTTT to save a value to Google Sheet each time a scene is called."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The aim is to send a \"departure from home\" event to IFTTT and ask it to log this event in a Google Sheet. This will allow us to track our departures from home."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is of course an example that you can adapt according to your needs 😁"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "configure-maker-webhooks-in-ifttt",
      children: "Configure Maker Webhooks in IFTTT"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In IFTTT, go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://ifttt.com/maker_webhooks",
        children: "https://ifttt.com/maker_webhooks"
      }), " to configure Maker Webhooks."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Follow the IFTTT tutorial to configure the Maker Webhooks."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "After configuring the webhooks, you should find yourself on a page like this:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "IFTTT Maker Webhook",
        src: (__webpack_require__(7509)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Replace ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "{event}"
      }), " with the name of your event, in my example \"left_home\", then copy and paste the URL."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Save the URL for later."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "configure-the-google-sheet-service-in-ifttt",
      children: "Configure the Google Sheet service in IFTTT"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On the IFTTT \"Explore\" page, find the \"Google Sheet\" service, and connect your Google account. This will be used for the rest of the tutorial."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "create-an-applet",
      children: "Create an applet"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Look for the \"Webhooks\" service that you configured just before."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Look for Applet",
        src: (__webpack_require__(32130)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Select \"Receive a web request\":"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Receive a webhook request",
        src: (__webpack_require__(1357)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enter the name of the event you entered in the previous step, here \"left_home\":"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Enter the name of the event",
        src: (__webpack_require__(56464)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Select where you want IFTTT to save the data (in which spreadsheet on your Google Drive)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Select the Google drive folder or save the data",
        src: (__webpack_require__(75267)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"Save\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "End the IFTTT applet",
        src: (__webpack_require__(1510)/* ["default"] */.A) + "",
        width: "1600",
        height: "999"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then click on Finish."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "in-gladys-create-a-scene",
      children: "In Gladys, create a scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Create a new scene in Gladys, then add an \"make an HTTP request\" action to it."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Select \"method: POST\", then in URL enter the URL of the IFTTT webhook that you configured previously."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create HTTP request action",
        src: (__webpack_require__(296)/* ["default"] */.A) + "",
        width: "1280",
        height: "854"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Save the scene and launch it."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you go to Google Drive, you should see an \"IFTTT\" folder at the root, containing a \"MakerWebhook\" folder, as well as in this case a \"let_home\" folder."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Inside you'll find a spreadsheet with a line that recorded when you left the house:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Result in Google Sheet",
        src: (__webpack_require__(94377)/* ["default"] */.A) + "",
        width: "1600",
        height: "926"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This was just one example. You can use this action in the scenes to do millions of things:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Call the API of another home automation box"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Call IFTTT to control any API: Music through Sonos? Ring your phone? Send an email ? Send a tweet?"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Call [Zapier] API (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://zapier.com/",
          children: "https://zapier.com/"
        }), ") to call any API (Gmail, Calendar, Trello, and hundreds of others)"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In short, the possibilities are limitless."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "using-the-response-of-an-http-call-in-a-scene",
      children: "Using the response of an HTTP call in a scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can also use the response of an HTTP request in scenes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Example here querying Coinbase API to get Bitcoin price and send it to the user with Telegram:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("div", {
      class: "videoContainer",
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)("video", {
        width: "100%",
        controls: true,
        autoplay: true,
        loop: true,
        muted: true,
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)("source", {
          src: "/img/docs/en/scenes/http-request/bitcoin-price.mp4",
          type: "video/mp4"
        }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: "Your browser does not support the video tag."
        })]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can compare the value with a \"continue only if\":"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Continue only if",
        src: (__webpack_require__(44970)/* ["default"] */.A) + "",
        width: "2470",
        height: "1056"
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
44970(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/continue-only-if-7350fb6a488e91ca884addb88ee833ba.png");

},
296(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/gladys-scene-http-request-box-cf3c55d75091180987cb2e572fa037bb.jpg");

},
94377(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/google-sheet-result-8221534c66c4cc08a875ee6a4f37ae0c.jpg");

},
7509(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iftt-configure-maker-webhook-64c0ca3aa6381b95d2875a0297c6a4de.jpg");

},
32130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/ifttt-applet-1-e89f4f9e58af83cc36e3964919ea35ac.jpg");

},
1357(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/ifttt-applet-2-f2d4e2385d99bd9b2feca897f7f7b878.jpg");

},
56464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/ifttt-applet-3-9197f35b1f7b7e71c0c49dab12066c04.jpg");

},
75267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/ifttt-applet-4-72736a18b06f2372fcb8724d63051495.jpg");

},
1510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/ifttt-applet-5-e50576389c98fb049ccf6671ef56420b.jpg");

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
10679(module) {
module.exports = JSON.parse('{"id":"scenes/http-request","title":"Make HTTP requests in a scene","description":"In scenes, it is sometimes useful to call an external API in order to control devices that are not managed by Gladys Assistant. You may also want to simply call an external service, without developing a service specifically for the occasion.","source":"@site/docs/scenes/http-request.md","sourceDirName":"scenes","slug":"/scenes/http-request","permalink":"/zh-Hans/docs/scenes/http-request","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/scenes/http-request.md","tags":[],"version":"current","frontMatter":{"id":"http-request","title":"Make HTTP requests in a scene","sidebar_label":"HTTP Request"},"sidebar":"docs","previous":{"title":"Turn the light on/off","permalink":"/zh-Hans/docs/scenes/turn-on-off-the-lights-action"},"next":{"title":"User presence","permalink":"/zh-Hans/docs/scenes/user-presence"}}')

},

};
;
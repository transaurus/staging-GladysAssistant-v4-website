"use strict";
exports.ids = ["9812"];
exports.modules = {
34236(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_plus_open_api_md_857_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_plus_open_api_md_857_json__rspack_import_0 = __webpack_require__(72529);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'open-api',
	title: 'Open API',
	sidebar_label: 'Open API'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Generate a new API Key",
  "id": "generate-a-new-api-key",
  "level": 2
}, {
  "value": "Send a new sensor value",
  "id": "send-a-new-sensor-value",
  "level": 2
}, {
  "value": "Let&#39;s create a device in Gladys",
  "id": "lets-create-a-device-in-gladys",
  "level": 3
}, {
  "value": "Send an API request",
  "id": "send-an-api-request",
  "level": 3
}, {
  "value": "Create a scene in Gladys to put your user as &quot;at home&quot;/&quot;left home&quot;",
  "id": "create-a-scene-in-gladys-to-put-your-user-as-at-homeleft-home",
  "level": 3
}, {
  "value": "Use Tasker or iOS Shortcuts to trigger this API",
  "id": "use-tasker-or-ios-shortcuts-to-trigger-this-api",
  "level": 2
}, {
  "value": "First step, install Shortcuts and create a new shortcut",
  "id": "first-step-install-shortcuts-and-create-a-new-shortcut",
  "level": 3
}, {
  "value": "Send phone location using Owntracks",
  "id": "send-phone-location-using-owntracks",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We provide an Open API in Gladys that lets our user send data from outside their network."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Let's imagine I want to send data from my phone: my location, an event when I come home, my battery, an event when my phone is near a NFC tag, an event when I enter a zone, anything is possible with the Open API."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You need to be a paid Gladys Plus user to use the Open API."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can subscribe ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/plus",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "generate-a-new-api-key",
      children: "Generate a new API Key"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "First, you need to create a new API key in Gladys Plus."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://plus.gladysassistant.com/dashboard/settings/gateway-open-api",
        children: "https://plus.gladysassistant.com/dashboard/settings/gateway-open-api"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Type a name for the device that will use your API key."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Generate open api key",
        src: (__webpack_require__(24656)/* ["default"] */.A) + "",
        width: "1600",
        height: "734"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"Generate\", then copy-paste the API key and save it somewhere: it'll never be displayed again."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "send-a-new-sensor-value",
      children: "Send a new sensor value"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now, let's send a new sensor value."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Tutorial scenario:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Let's assume you want to send an event when your phone is home, and send another event when your phone has left home."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "lets-create-a-device-in-gladys",
      children: "Let's create a device in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can use the \"MQTT\" integration to create devices, even if you don't use the MQTT integration."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Let's create a device for your phone:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create device Gladys Assistant",
        src: (__webpack_require__(71475)/* ["default"] */.A) + "",
        width: "2880",
        height: "3020"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Note:"
      }), " Say that your phone is a motion sensor, because it's a great binary device for this use case. It doesn't really matter here, you'll see how we'll use this here :)"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can keep the feature \"external_id\" for later, we'll need it in the API."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "send-an-api-request",
      children: "Send an API request"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now, let's try to send an API request to the Open API to say \"my phone is home\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We'll send:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "POST https://api.gladysgateway.com/v1/api/device/state/YOUR_OPEN_API_KEY\n\nBody:\n{\n\t\"device_feature_external_id\": \"mqtt:my-phone-presence\",\n\t\"state\": 1\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can try the API using ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://insomnia.rest/",
        children: "Insomnia"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you want to say the opposite (my phone left home), you can send:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "POST https://api.gladysgateway.com/v1/api/device/state/YOUR_OPEN_API_KEY\n\nBody:\n{\n\t\"device_feature_external_id\": \"mqtt:my-phone-presence\",\n\t\"state\": 0\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "create-a-scene-in-gladys-to-put-your-user-as-at-homeleft-home",
      children: "Create a scene in Gladys to put your user as \"at home\"/\"left home\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can create 2 scenes in Gladys to set your user as \"left home\" or \"at home\" when your phone is near home:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Back at home scene",
        src: (__webpack_require__(81425)/* ["default"] */.A) + "",
        width: "2880",
        height: "2978"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Left home scene",
        src: (__webpack_require__(88605)/* ["default"] */.A) + "",
        width: "2880",
        height: "2978"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "use-tasker-or-ios-shortcuts-to-trigger-this-api",
      children: "Use Tasker or iOS Shortcuts to trigger this API"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["On Android you can use the Amazing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=fr&gl=US",
        children: "Tasker"
      }), " to send an API request when you enter/leave your house (based on anything: GPS location, NFC trigger, Wi-Fi detection, or anything in your imagination)"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On iOS, you can use Shortcuts."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Example with iOS:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "first-step-install-shortcuts-and-create-a-new-shortcut",
      children: "First step, install Shortcuts and create a new shortcut"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You need to install the \"Shortcuts\" app on the app store. It's made by Apple and it's free to use."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then, create a new shortcut, and add a new web action:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "iOS Shortcut Gladys Plus Open API",
        src: (__webpack_require__(75749)/* ["default"] */.A) + "",
        width: "1920",
        height: "1080"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Copy the URL of the Gateway, and add the JSON body."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "The \"device_feature_external_id\" attribute should be a text field"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "The \"state' attribute should be a number field"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "iOS Shortcut Gladys Plus Open API",
        src: (__webpack_require__(71546)/* ["default"] */.A) + "",
        width: "1920",
        height: "1080"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can create another shortcut for the \"left home\" event by duplicating the previous one, and changing 1 by 0."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "iOS Shortcut Gladys Plus Open API",
        src: (__webpack_require__(59063)/* ["default"] */.A) + "",
        width: "1920",
        height: "1080"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now, we can create an automation to make this shortcut run automatically when you arrive at home:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "iOS Shortcut Gladys Plus Open API",
        src: (__webpack_require__(52748)/* ["default"] */.A) + "",
        width: "1920",
        height: "1080"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can do the same for when you leave home."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can also add the shortcut to your home screen if you want to trigger it manually:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "iOS Shortcut Gladys Plus Open API",
        src: (__webpack_require__(8009)/* ["default"] */.A) + "",
        width: "1920",
        height: "1080"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "send-phone-location-using-owntracks",
      children: "Send phone location using Owntracks"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's also possible to send your phone location to Gladys using the Open API and Owntracks:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/integrations/owntracks",
        children: "Read the tutorial in the documentation"
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
75749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/1-a787923deeafd37c327ca36cff97495e.jpg");

},
71546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/2-681b080284bd40904397aa7c57739c60.jpg");

},
59063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/3-a1b5a3e615e819fde72d325f4512afdf.jpg");

},
52748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/4-c10aae415ab8efdc67c333bd749f4c1e.jpg");

},
8009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/5-27342f514ebc2aad7336c542b550c2d9.jpg");

},
81425(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/back-at-home-da47c05b38cfd1aa598f27b3f0eea4bf.png");

},
71475(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/create-device-4c02b07a861d8c4c8bf61f01d6ea27ee.png");

},
24656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/create-open-api-key-1bbe22ee9dbb20120d9a782e0fe829db.png");

},
88605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/left-home-a556484cf1e7a5d2a8fa8e33b2dd4d01.png");

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
72529(module) {
module.exports = JSON.parse('{"id":"plus/open-api","title":"Open API","description":"We provide an Open API in Gladys that lets our user send data from outside their network.","source":"@site/docs/plus/open-api.md","sourceDirName":"plus","slug":"/plus/open-api","permalink":"/zh-Hans/docs/plus/open-api","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/plus/open-api.md","tags":[],"version":"current","frontMatter":{"id":"open-api","title":"Open API","sidebar_label":"Open API"},"sidebar":"docs","previous":{"title":"Intro","permalink":"/zh-Hans/docs/plus/intro"}}')

},

};
;
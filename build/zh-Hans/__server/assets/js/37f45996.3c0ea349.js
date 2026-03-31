"use strict";
exports.ids = ["369"];
exports.modules = {
76511(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_camera_md_37f_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_camera_md_37f_json__rspack_import_0 = __webpack_require__(16404);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'camera',
	title: 'Camera',
	sidebar_label: 'Camera'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Trying to display the stream in VLC",
  "id": "trying-to-display-the-stream-in-vlc",
  "level": 2
}, {
  "value": "Connecting your RTSP camera to Gladys Assistant",
  "id": "connecting-your-rtsp-camera-to-gladys-assistant",
  "level": 2
}, {
  "value": "Add your camera to Gladys Assistant dashboard",
  "id": "add-your-camera-to-gladys-assistant-dashboard",
  "level": 2
}, {
  "value": "Send a message to Gladys Assistant to see a camera image",
  "id": "send-a-message-to-gladys-assistant-to-see-a-camera-image",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys supports cameras that expose a RTSP or HTTP stream."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You'll first need to find RTSP/HTTP URL of the stream."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "You will find the URL in your device's user manual or on the manufacturer's website"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Here is an example of a RTSP URL:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "rtsp://username:password@192.168.1.20/live/ch00_0\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Here is an example of an HTTP URL:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://user:password@192.168.1.20/video?profile=0\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you can't find this information on your camera manual, try using this website: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.ispyconnect.com/sources.aspx",
        children: "https://www.ispyconnect.com/sources.aspx"
      }), " (this is a database of cameras with their relevant connection information)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There is a even a built-in URL generator."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For example, this is for a Xiaomi camera:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "RTSP camera URL generator iSpyConnect",
        src: (__webpack_require__(41959)/* ["default"] */.A) + "",
        width: "1268",
        height: "1600"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you don't find the iformation you are looking for on this website, I suggest you to Google \"your camera name + RTSP\". This should bring up search results that you can use to see if there is an open stream available."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "trying-to-display-the-stream-in-vlc",
      children: "Trying to display the stream in VLC"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can connect to your camera's stream with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.videolan.org/vlc/",
        children: "VLC"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Open VLC and click on \"File\" -> \"Open a Network...\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "VLC open a network stream",
        src: (__webpack_require__(46804)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then, enter the URL of your RTSP or HTTP stream"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "VLC open a network stream",
        src: (__webpack_require__(92867)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Done!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If the URL is correct, you should see your camera stream in VLC."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "VLC open a network stream",
        src: (__webpack_require__(33382)/* ["default"] */.A) + "",
        width: "1600",
        height: "937"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "connecting-your-rtsp-camera-to-gladys-assistant",
      children: "Connecting your RTSP camera to Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you have managed to see your camera stream in VLC, it should work in Gladys Assistant as well."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the \"Integrations\" tab in Gladys, then click on the \"Camera\" integration:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a camera to Gladys Assistant",
        src: (__webpack_require__(70618)/* ["default"] */.A) + "",
        width: "1600",
        height: "936"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"New\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a camera to Gladys Assistant",
        src: (__webpack_require__(76869)/* ["default"] */.A) + "",
        width: "1600",
        height: "936"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Fill the form"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a camera to Gladys Assistant",
        src: (__webpack_require__(49704)/* ["default"] */.A) + "",
        width: "1600",
        height: "936"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can then try the stream by clicking on \"Test connection\". If it doesn't work, are you sure that your Gladys hardware is on the same network as your camera? Are credentials correct?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then, you can click on \"Save\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a camera to Gladys Assistant",
        src: (__webpack_require__(79707)/* ["default"] */.A) + "",
        width: "1600",
        height: "936"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "add-your-camera-to-gladys-assistant-dashboard",
      children: "Add your camera to Gladys Assistant dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the Gladys dashboard and click on \"Edit\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a camera to Gladys Assistant",
        src: (__webpack_require__(48222)/* ["default"] */.A) + "",
        width: "1600",
        height: "936"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"+\", then choose the camera box"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a camera to Gladys Assistant",
        src: (__webpack_require__(91305)/* ["default"] */.A) + "",
        width: "1600",
        height: "1047"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Select your camera, then click on \"Save\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a camera to Gladys Assistant",
        src: (__webpack_require__(53260)/* ["default"] */.A) + "",
        width: "1600",
        height: "936"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Voilà ! Your camera should be visible."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a camera to Gladys Assistant",
        src: (__webpack_require__(84975)/* ["default"] */.A) + "",
        width: "1600",
        height: "936"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "send-a-message-to-gladys-assistant-to-see-a-camera-image",
      children: "Send a message to Gladys Assistant to see a camera image"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the \"Chat\" tab, and ask Gladys \"Show me the camera in the XXXX\" (where XXXX is the room where the camera is)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And... magic!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Ask for a camera image in Gladys Assistant",
        src: (__webpack_require__(82099)/* ["default"] */.A) + "",
        width: "1429",
        height: "1600"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It should work in Telegram as well, if you have configured Telegram in Gladys."
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
41959(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-ispy-1916bcdb8b470f63b97491aa57fff07f.jpg");

},
70618(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-step-1-534a814a5c42605e107227c45a343f8b.jpg");

},
76869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-step-2-d7ddcfab97ea7af8c2cc8a91b0f0754e.jpg");

},
49704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-step-3-2fdc1ee76c655f69ef4dcb7673beab2f.jpg");

},
79707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-step-4-00c2166d6da0f11d447354ce62521abf.jpg");

},
48222(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-step-5-3e74bd1a02985544eff8abcd18b8504a.jpg");

},
91305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-step-6-f852ef7996d2b0b1b0d53df0e5b7fa87.jpg");

},
53260(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-step-7-9bb9a0dd5022fb7b53d2b14d5c936722.jpg");

},
84975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-step-8-60abc2896b97cf208045991476adc773.jpg");

},
46804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-vlc-step-1-cc43908706c245273de76cf43c23c77f.jpg");

},
92867(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-vlc-step-2-8cfb8bc714a8cf8f05d48b4c1190a133.jpg");

},
33382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-vlc-step-3-219c08d91aac46650ed216ca4acf8b56.jpg");

},
82099(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/chat-camera-en-df6b07e183e19bbba27a5b1aba1c3d68.jpg");

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
16404(module) {
module.exports = JSON.parse('{"id":"integrations/camera","title":"Camera","description":"Gladys supports cameras that expose a RTSP or HTTP stream.","source":"@site/docs/integrations/camera.md","sourceDirName":"integrations","slug":"/integrations/camera","permalink":"/zh-Hans/docs/integrations/camera","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/camera.md","tags":[],"version":"current","frontMatter":{"id":"camera","title":"Camera","sidebar_label":"Camera"},"sidebar":"docs","previous":{"title":"CalDAV","permalink":"/zh-Hans/docs/integrations/caldav"},"next":{"title":"CallMeBot","permalink":"/zh-Hans/docs/integrations/callmebot"}}')

},

};
;
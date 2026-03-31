"use strict";
exports.ids = ["8026"];
exports.modules = {
89311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_lan_manager_md_c8f_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_lan_manager_md_c8f_json__rspack_import_0 = __webpack_require__(82285);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'lan-manager',
	title: 'Manage presence by scanning your Wi-Fi network',
	sidebar_label: 'Lan-Manager'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Adding Your Phone",
  "id": "adding-your-phone",
  "level": 2
}, {
  "value": "Manage presence in scenes",
  "id": "manage-presence-in-scenes",
  "level": 2
}, {
  "value": "A &quot;homecoming&quot; scene",
  "id": "a-homecoming-scene",
  "level": 3
}, {
  "value": "A &quot;leaving home&quot; scene",
  "id": "a-leaving-home-scene",
  "level": 3
}, {
  "value": "Display presence on the dashboard",
  "id": "display-presence-on-the-dashboard",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
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
      children: "The LAN Manager integration lets you scan your network at regular intervals to determine whether you’re home or away by detecting the presence of your phone, tablet, or computer."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "This method may result in false negatives if your phone is not always connected to Wi-Fi (for instance, if it goes into sleep mode)."
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.admonition, {
      type: "warning",
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "This method does not work on iPhones."
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "For iPhone, I recommend using the “Shortcuts” app to send a request to Gladys when you leave home."
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "adding-your-phone",
      children: "Adding Your Phone"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the “LAN Manager” integration, then click “LAN Discovery” and select “Network Search.”"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then create the device by clicking on \"Save.\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If this search doesn’t yield any results, check the following:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "That your Gladys installation is on the correct network"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "That your Gladys container is running in “network=host” mode, which is the case if you launched Gladys using the official docker run command"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "That the CIDR range to scan is correct (this can be modified in the integration settings)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "manage-presence-in-scenes",
      children: "Manage presence in scenes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "a-homecoming-scene",
      children: "A \"homecoming\" scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["We are now going to create a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "scene"
      }), " that will mark a user as \"present at home\" when your phone is detected."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to the \"Scenes\" tab, and create a scene like this:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Return home scene",
        src: (__webpack_require__(52721)/* ["default"] */.A) + "",
        width: "2880",
        height: "2874"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The scene is very simple."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "WHEN \"Phone is detected\" THEN \"put user 'Tony' as present at home\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "a-leaving-home-scene",
      children: "A \"leaving home\" scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To manage the departure of the user from the house, we recommend you make a scene executed periodically, which will check if your phone has been detected recently at home."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If Gladys detects the device's presence, it won't do anything. If not, Gladys will mark the user as absent."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The scene should look like this:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene leaving home",
        src: (__webpack_require__(43107)/* ["default"] */.A) + "",
        width: "2880",
        height: "3428"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can play around with the settings to suit your home. If you feel that 10 minutes is too short to be put as absent, you can extend it to 20 minutes to avoid \"false positives\" 😀"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "display-presence-on-the-dashboard",
      children: "Display presence on the dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can display the presence of selected users on the dashboard. To do so, you can use the \"Users present\" widget:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Presence dashboard",
        src: (__webpack_require__(51067)/* ["default"] */.A) + "",
        width: "804",
        height: "484"
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
52721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/back-at-home-scene-38647432bc91fbab32e142c45537da3b.png");

},
43107(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/left-home-scene-6f779b7ce3a7cf29ea33b6466c4bdc08.png");

},
51067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/user-presence-dashboard-dd05f5eb0caa1b947be14e1c8c2053a2.png");

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
82285(module) {
module.exports = JSON.parse('{"id":"integrations/lan-manager","title":"Manage presence by scanning your Wi-Fi network","description":"The LAN Manager integration lets you scan your network at regular intervals to determine whether you’re home or away by detecting the presence of your phone, tablet, or computer.","source":"@site/docs/integrations/lan-manager.md","sourceDirName":"integrations","slug":"/integrations/lan-manager","permalink":"/zh-Hans/docs/integrations/lan-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/lan-manager.md","tags":[],"version":"current","frontMatter":{"id":"lan-manager","title":"Manage presence by scanning your Wi-Fi network","sidebar_label":"Lan-Manager"},"sidebar":"docs","previous":{"title":"MQTT","permalink":"/zh-Hans/docs/integrations/mqtt"},"next":{"title":"Nextcloud Talk","permalink":"/zh-Hans/docs/integrations/nextcloud-talk"}}')

},

};
;
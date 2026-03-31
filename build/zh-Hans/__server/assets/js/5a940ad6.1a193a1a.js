"use strict";
exports.ids = ["8330"];
exports.modules = {
61849(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_nuki_md_5a9_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_nuki_md_5a9_json__rspack_import_0 = __webpack_require__(97775);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'nuki',
	title: 'Connect your Nuki lock to your smart home',
	sidebar_label: 'Nuki'
};
const contentTitle = 'Integration of your Nuki smart lock with Gladys';

const assets = {

};



const toc = [{
  "value": "NukiWeb API token",
  "id": "nukiweb-api-token",
  "level": 2
}, {
  "value": "MQTT",
  "id": "mqtt",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "integration-of-your-nuki-smart-lock-with-gladys",
        children: "Integration of your Nuki smart lock with Gladys"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This integration adds the ability to:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "control Nuki brand smart locks: lock, unlock"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "send certain information to Gladys (battery level, lock status)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Integrations / Nuki"
      }), " in Gladys", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", "There are two types of integration available. It is recommended to choose only one of the two."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "nukiweb-api-token",
      children: "NukiWeb API token"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "Prerequisite: Gladys must have internet access at all times"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Activate and configure your Nuki Web account ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://help.nuki.io/hc/fr/articles/360016485718-Activer-et-d%C3%A9sactiver-un-compte-Nuki-Web#:~:text=Activez%20Nuki%20Web%20dans%20l,dans%20l'App%20de%20Nuki.",
          children: "Nuki Web Configuration"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "API Nuki",
        src: (__webpack_require__(74753)/* ["default"] */.A) + "",
        width: "3268",
        height: "1507"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "APIKey Nuki",
        src: (__webpack_require__(89792)/* ["default"] */.A) + "",
        width: "1081",
        height: "1048"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["Configure the Nuki service in Gladys by adding the API token", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
            alt: "Configure Nuki",
            src: (__webpack_require__(87039)/* ["default"] */.A) + "",
            width: "1861",
            height: "1095"
          })]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["Perform an HTTP scan", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
            alt: "Discover HTTP",
            src: (__webpack_require__(6423)/* ["default"] */.A) + "",
            width: "1819",
            height: "1300"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "mqtt",
      children: "MQTT"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "Prerequisite: Gladys MQTT is configured and functional"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["Configure MQTT in the Nuki app (use the local MQTT IP, not the domain name) ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
            href: "https://help.nuki.io/hc/fr/articles/14052016143249-Activation-et-configuration-via-l-App-Nuki",
            children: "Nuki MQTT Configuration"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
            alt: "App Nuki",
            src: (__webpack_require__(52857)/* ["default"] */.A) + "",
            width: "337",
            height: "750"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
            alt: "App Nuki MQTT",
            src: (__webpack_require__(45742)/* ["default"] */.A) + "",
            width: "1080",
            height: "2400"
          })]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["Go directly to the Nuki MQTT discovery section in Gladys to see your devices", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
            alt: "DiscoverNuki MQTT",
            src: (__webpack_require__(66489)/* ["default"] */.A) + "",
            width: "1845",
            height: "1378"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Now you just have to configure the dashboard:", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Nuki Dashboard",
        src: (__webpack_require__(49302)/* ["default"] */.A) + "",
        width: "1873",
        height: "870"
      })]
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
52857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nuki-app-mqtt1-104e217938472fc97e2815e598d15f27.jpg");

},
45742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nuki-app-mqtt2-e112255e6cdb155b14e177fd1e492b50.jpg");

},
49302(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nuki-dashboard-en-87bd024b7fe44f8c86acca05ac31d2ee.png");

},
87039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nuki-integration-configuration-en-ae828e005a6c0389da567c3ed1bb32f7.png");

},
6423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nuki-integration-discover-http-en-60d98303c0480b8d928803dd51c95540.png");

},
66489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nuki-integration-discover-mqtt-en-320c15a9211c4b0112be0b81d0e659d4.png");

},
89792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nukiweb-auth-en-0be3faedddfe6f06692154510bd32f13.png");

},
74753(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/nukiweb-en-921e560b154c8934add169b0272d6096.png");

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
97775(module) {
module.exports = JSON.parse('{"id":"integrations/nuki","title":"Connect your Nuki lock to your smart home","description":"This integration adds the ability to:","source":"@site/docs/integrations/nuki.md","sourceDirName":"integrations","slug":"/integrations/nuki","permalink":"/zh-Hans/docs/integrations/nuki","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/nuki.md","tags":[],"version":"current","frontMatter":{"id":"nuki","title":"Connect your Nuki lock to your smart home","sidebar_label":"Nuki"},"sidebar":"docs","previous":{"title":"Node-RED","permalink":"/zh-Hans/docs/integrations/node-red"},"next":{"title":"OpenWeather","permalink":"/zh-Hans/docs/integrations/openweather"}}')

},

};
;
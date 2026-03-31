"use strict";
exports.ids = ["2672"];
exports.modules = {
58105(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_6_unraid_md_8d6_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_6_unraid_md_8d6_json__rspack_import_0 = __webpack_require__(34110);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'unraid',
	title: 'Install Gladys Assistant on a Unraid NAS',
	sidebar_label: 'Install on an Unraid NAS'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Search for Gladys-Assistant",
  "id": "search-for-gladys-assistant",
  "level": 2
}, {
  "value": "Gladys configuration",
  "id": "gladys-configuration",
  "level": 2
}, {
  "value": "Gladys access",
  "id": "gladys-access",
  "level": 2
}, {
  "value": "Update Gladys",
  "id": "update-gladys",
  "level": 2
}, {
  "value": "Advanced Parameters",
  "id": "advanced-parameters",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In this tutorial, we go through the instructions for installing Gladys Assistant on an Unraid NAS with Docker"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "search-for-gladys-assistant",
      children: "Search for Gladys-Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You must install the docker app from the \"Apps Manager\":"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "From your Unraid admin dashboard, click on \"Apps\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Search for \"Gladys-Assistant\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Click on \"install\""
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "AppManager",
        src: (__webpack_require__(52296)/* ["default"] */.A) + "",
        width: "901",
        height: "560"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "gladys-configuration",
      children: "Gladys configuration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You will then be redirected to the configuration pages of Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Configuration",
        src: (__webpack_require__(56419)/* ["default"] */.A) + "",
        width: "1262",
        height: "719"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Here are the different parameters:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "The name of your App. If you don't have any other instance, you can leave it as Gladys-Assistant"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "The Docker Hub repository. Don't touch that unless you know what you are doing"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["The Network type MUST stay on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "HOST"
        }), ". This is needed for Gladys to be able to scan your network to find new smart devices"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Your time zone. Make sure to follow this ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",
          children: "format"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "The port on which Gladys's Dashboard will be displayed"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Caution: If you have/plan to have MQTT Devices, the port 1883 must be free. Same for Zigbee devices that need both 1884 and 8080 free."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "If you change the default port 8006, the WebUI button might redirect you to the wrong port address to change that, click on advanced view, find web UI and change the number."
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on apply and wait until the installation finishes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "gladys-access",
      children: "Gladys access"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Gladys will be accessible on your browser on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://YOUR_NAS_IP:PORT"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For example ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://192.168.1.2:8006"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can also access the Web UI by clicking on docker, then on the logo of Gladys, and finally web UI."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Welcome in Gladys Assistant!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "update-gladys",
      children: "Update Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Currently, Watchtower isn't available in Unraid (might change soon)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To update Gladys :"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      start: "0",
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Go to the docker"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Click Advanced view"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Click on force update"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Update",
        src: (__webpack_require__(58076)/* ["default"] */.A) + "",
        width: "1273",
        height: "170"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can see your current version in Gladys Dashboard, click on your profile on the top right, then parameters, and finally systems."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "advanced-parameters",
      children: "Advanced Parameters"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When configuring Gladys, you can see other parameters:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Gladys lib folder: folder on your NAS to store permanent files"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Gladys Dev Folder: folder where devices are represented as files"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Gladys uDev Folder: Udev is the device manager for the Linux kernel"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "DB File path: Docker path to the SQLite database"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Environment: production or development (Display Debug)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Gladys Docker Folder: Docker command file to create and manage docker from within Gladys"
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
52296(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/apps_manager-0050ff55702090bf047f88082c525164.jpg");

},
56419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/docker_config-3a16dd485ca71a5ecde117537d5b5731.jpg");

},
58076(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/gladys_update-a33dd6c725a78774bfb8b4fa001c12b7.jpg");

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
34110(module) {
module.exports = JSON.parse('{"id":"installation/unraid","title":"Install Gladys Assistant on a Unraid NAS","description":"In this tutorial, we go through the instructions for installing Gladys Assistant on an Unraid NAS with Docker","source":"@site/docs/installation/6_unraid.md","sourceDirName":"installation","slug":"/installation/unraid","permalink":"/zh-Hans/docs/installation/unraid","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/installation/6_unraid.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"unraid","title":"Install Gladys Assistant on a Unraid NAS","sidebar_label":"Install on an Unraid NAS"},"sidebar":"docs","previous":{"title":"Install on a Synology NAS","permalink":"/zh-Hans/docs/installation/synology"},"next":{"title":"Install on a Freebox Delta","permalink":"/zh-Hans/docs/installation/freebox-delta"}}')

},

};
;
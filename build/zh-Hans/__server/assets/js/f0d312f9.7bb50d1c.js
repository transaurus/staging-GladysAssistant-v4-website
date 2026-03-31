"use strict";
exports.ids = ["8069"];
exports.modules = {
46991(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_5_synology_md_f0d_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_5_synology_md_f0d_json__rspack_import_0 = __webpack_require__(34680);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'synology',
	title: 'Install Gladys Assistant on a Synology NAS',
	sidebar_label: 'Install on a Synology NAS'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Install Docker on your NAS",
  "id": "install-docker-on-your-nas",
  "level": 2
}, {
  "value": "Gladys deployment through Docker",
  "id": "gladys-deployment-through-docker",
  "level": 2
}, {
  "value": "Storage",
  "id": "storage",
  "level": 3
}, {
  "value": "Install Gladys via SSH",
  "id": "install-gladys-via-ssh",
  "level": 3
}, {
  "value": "Gladys access",
  "id": "gladys-access",
  "level": 3
}, {
  "value": "Automatic updates via Watchtower",
  "id": "automatic-updates-via-watchtower",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
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
      children: "In this tutorial, we go through the instructions for installing Gladys Assistant on a compatible Synology NAS with Docker"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "install-docker-on-your-nas",
      children: "Install Docker on your NAS"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You must install docker add-on from the 'Package Manager'\nTo fetch the list of compatible NAS, go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.synology.com/en-global/dsm/packages/Docker",
        children: "docker package page"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "gladys-deployment-through-docker",
      children: "Gladys deployment through Docker"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "storage",
      children: "Storage"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For data persistence, we need to create a folder mount on the volume."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If not exist, create a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "Shared folder"
      }), " named ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "docker"
      }), " via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
        children: "File Station"
      }), "\nIn this folder, create another one named ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "gladysassistant"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Warning"
      }), ": In command line, folder path contain the volume name : ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/volume1/docker/gladysassistant"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "install-gladys-via-ssh",
      children: "Install Gladys via SSH"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Connect to your NAS with SSH and run this command to create Gladys container."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "sudo \\\ndocker run -d \\\n--log-driver json-file \\\n--log-opt max-size=10m \\\n--restart=always \\\n--privileged \\\n--network=host \\\n--cgroupns=host \\\n--name \"gladys\" \\\n-e NODE_ENV=production \\\n-e SERVER_PORT=8420 \\\n-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \\\n-v /var/run/docker.sock:/var/run/docker.sock \\\n-v /volume1/docker/gladysassistant/:/var/lib/gladysassistant \\\n-v /etc/TZ:/etc/timezone:ro \\\n-v /etc/localtime:/etc/localtime:ro \\\n-v /dev:/dev \\\ngladysassistant/gladys:v4\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Notes:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "--name \"gladys\""
        }), " : Name of the container."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "-v /volume1/docker/gladysassistant:..."
        }), " : Path where datas will be persisted on your NAS."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "-e SERVER_PORT=8420"
        }), " : Port where Gladys will be exposed, you can change by any value not used by ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.em, {
          children: "Disk Station"
        }), " ( ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://kb.synology.com/en-global/DSM/tutorial/What_network_ports_are_used_by_Synology_services",
          children: "Reserved port on Synology website"
        }), " )"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "gladys-access",
      children: "Gladys access"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Gladys will be accessible on your browser on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://YOUR_NAS_IP:PORT"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For example ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://192.168.10.15:8420"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "automatic-updates-via-watchtower",
      children: "Automatic updates via Watchtower"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can use Watchtower to update Gladys when new version is released."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Run this command to create Watchtower container."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: " sudo docker run -d \\\n   --name watchtower \\\n   --log-opt max-size=10m \\\n   --restart=always \\\n   -v /var/run/docker.sock:/var/run/docker.sock \\\n   nickfedor/watchtower \\\n   --cleanup --include-restarting\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It will check every day if your containers need to be updated."
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
34680(module) {
module.exports = JSON.parse('{"id":"installation/synology","title":"Install Gladys Assistant on a Synology NAS","description":"In this tutorial, we go through the instructions for installing Gladys Assistant on a compatible Synology NAS with Docker","source":"@site/docs/installation/5_synology.md","sourceDirName":"installation","slug":"/installation/synology","permalink":"/zh-Hans/docs/installation/synology","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/installation/5_synology.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"synology","title":"Install Gladys Assistant on a Synology NAS","sidebar_label":"Install on a Synology NAS"},"sidebar":"docs","previous":{"title":"Install with Docker Compose","permalink":"/zh-Hans/docs/installation/docker-compose"},"next":{"title":"Install on an Unraid NAS","permalink":"/zh-Hans/docs/installation/unraid"}}')

},

};
;
"use strict";
exports.ids = ["7897"];
exports.modules = {
47966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_3_docker_compose_md_eae_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_3_docker_compose_md_eae_json__rspack_import_0 = __webpack_require__(45452);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'docker-compose',
	title: 'Install Gladys Assistant with Docker Compose',
	sidebar_label: 'Install with Docker Compose'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Create the Docker Compose Configuration File",
  "id": "create-the-docker-compose-configuration-file",
  "level": 2
}, {
  "value": "Configure Gladys Assistant",
  "id": "configure-gladys-assistant",
  "level": 2
}, {
  "value": "Start Gladys Assistant",
  "id": "start-gladys-assistant",
  "level": 2
}, {
  "value": "Access Gladys Assistant",
  "id": "access-gladys-assistant",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This tutorial explains how to manually install Gladys using Docker Compose, regardless of the machine you are running Gladys on: a mini-PC, a Synology NAS, a Linux VM, or any other setup."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To install Docker Compose, you just need to install Docker:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -sSL https://get.docker.com | sh\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you want to verify that Docker Compose is active on your system, type:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo docker compose version\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In my case, I see the following displayed:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "gladys@gladys:~$ docker compose version\nDocker Compose version v2.24.5\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "create-the-docker-compose-configuration-file",
      children: "Create the Docker Compose Configuration File"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"3\"\n\nservices:\n  gladys:\n    image: gladysassistant/gladys:v4\n    container_name: gladys\n    restart: always\n    privileged: true\n    network_mode: host\n    cgroup: host\n    logging:\n      driver: \"json-file\"\n      options:\n        max-size: 10m\n    environment:\n      NODE_ENV: production\n      SQLITE_FILE_PATH: /var/lib/gladysassistant/gladys-production.db\n      SERVER_PORT: 80\n      TZ: Europe/Paris\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /var/lib/gladysassistant:/var/lib/gladysassistant\n      - /dev:/dev\n      - /run/udev:/run/udev:ro\n  watchtower:\n    image: nickfedor/watchtower\n    restart: always\n    container_name: watchtower\n    command: --cleanup --include-restarting\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Save this file in a directory on your system."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configure-gladys-assistant",
      children: "Configure Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Some settings you can customize:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "SERVER_PORT: 80"
        }), " → You can change the default port of the Gladys interface."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "TZ: Europe/Paris"
        }), " → To change the container's time zone. You can find all possible values in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",
          children: "this list"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "start-gladys-assistant",
      children: "Start Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To start Gladys (and Watchtower), run the following command:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo docker compose up -d\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Note:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "-d"
        }), " => This option allows you to run the containers in detached mode. This way, you can disconnect, and the containers will continue to run."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "access-gladys-assistant",
      children: "Access Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can access Gladys by entering your machine's IP address in your browser."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "Note: You must be on the same network as the machine!"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To find your machine's IP address on your local network, you can use applications like:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner",
          children: "Network Scanner"
        }), " on Android"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://apps.apple.com/us/app/inet-network-scanner/id340793353",
          children: "iNet - Network Scanner"
        }), " on iOS"]
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
45452(module) {
module.exports = JSON.parse('{"id":"installation/docker-compose","title":"Install Gladys Assistant with Docker Compose","description":"This tutorial explains how to manually install Gladys using Docker Compose, regardless of the machine you are running Gladys on: a mini-PC, a Synology NAS, a Linux VM, or any other setup.","source":"@site/docs/installation/3_docker-compose.md","sourceDirName":"installation","slug":"/installation/docker-compose","permalink":"/zh-Hans/docs/installation/docker-compose","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/installation/3_docker-compose.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"docker-compose","title":"Install Gladys Assistant with Docker Compose","sidebar_label":"Install with Docker Compose"},"sidebar":"docs","previous":{"title":"Install with Docker","permalink":"/zh-Hans/docs/installation/docker"},"next":{"title":"Install on a Synology NAS","permalink":"/zh-Hans/docs/installation/synology"}}')

},

};
;
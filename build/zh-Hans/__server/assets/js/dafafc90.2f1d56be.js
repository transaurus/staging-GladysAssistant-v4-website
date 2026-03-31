"use strict";
exports.ids = ["5076"];
exports.modules = {
37594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_2_docker_md_daf_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_2_docker_md_daf_json__rspack_import_0 = __webpack_require__(20226);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'docker',
	title: 'Install Gladys Assistant with Docker',
	sidebar_label: 'Install with Docker'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Install Docker",
  "id": "install-docker",
  "level": 2
}, {
  "value": "Start Gladys",
  "id": "start-gladys",
  "level": 2
}, {
  "value": "Auto-Upgrade Gladys with Watchtower",
  "id": "auto-upgrade-gladys-with-watchtower",
  "level": 2
}, {
  "value": "Accessing Gladys",
  "id": "accessing-gladys",
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
      children: "In this tutorial, we go through the instructions for installing Gladys Assistant with Docker. This tutorial works for any system (Mini-PC, NAS, Linux Server, VM...)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "install-docker",
      children: "Install Docker"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To install Docker, simply run the command:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -sSL https://get.docker.com | sh\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To verify that Docker is working as expected, type:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo docker ps\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It should show an empty list of running containers."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you have any issues installing Docker, have a look at the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://docs.docker.com/",
        children: "docker documentation"
      }), ". Look for instructions pertaining to your system."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "start-gladys",
      children: "Start Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can start a Gladys container with the command:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo docker run -d \\\n--log-driver json-file \\\n--log-opt max-size=10m \\\n--cgroupns=host \\\n--restart=always \\\n--privileged \\\n--network=host \\\n--name gladys \\\n-e NODE_ENV=production \\\n-e SERVER_PORT=80 \\\n-e TZ=Europe/Paris \\\n-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \\\n-v /var/run/docker.sock:/var/run/docker.sock \\\n-v /var/lib/gladysassistant:/var/lib/gladysassistant \\\n-v /dev:/dev \\\n-v /run/udev:/run/udev:ro \\\ngladysassistant/gladys:v4\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Note:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "-d"
        }), " => Run container in background"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "--log-driver json-file"
        }), " => Configure container logging"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "--log-opt max-size=10m"
        }), " => Limit log file size to 10MB"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "--cgroupns=host"
        }), " => Use host's cgroup namespace"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "--restart=always"
        }), " => Automatically restart container"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "--privileged"
        }), " => Give extended privileges to container"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "--network=host"
        }), " => Use host network stack"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "-e"
        }), " => Set environment variables"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "-v"
        }), " => Mount volumes"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "TZ=Europe/Paris"
        }), " => Timezone used by container. Feel free to consult ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",
          children: "this list"
        }), " on wikipedia if you need to change this value."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "auto-upgrade-gladys-with-watchtower",
      children: "Auto-Upgrade Gladys with Watchtower"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can use Watchtower to upgrade automatically Gladys when a new version is available. To do so, start a Watchtower container:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo docker run -d \\\n  --name watchtower \\\n  --restart=always \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  nickfedor/watchtower \\\n  --cleanup --include-restarting\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "accessing-gladys",
      children: "Accessing Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can access Gladys by entering the machine's IP address in your browser."
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
20226(module) {
module.exports = JSON.parse('{"id":"installation/docker","title":"Install Gladys Assistant with Docker","description":"In this tutorial, we go through the instructions for installing Gladys Assistant with Docker. This tutorial works for any system (Mini-PC, NAS, Linux Server, VM...).","source":"@site/docs/installation/2_docker.md","sourceDirName":"installation","slug":"/installation/docker","permalink":"/zh-Hans/docs/installation/docker","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/installation/2_docker.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"docker","title":"Install Gladys Assistant with Docker","sidebar_label":"Install with Docker"},"sidebar":"docs","previous":{"title":"Install on a Mini-PC","permalink":"/zh-Hans/docs/installation/mini-pc"},"next":{"title":"Install with Docker Compose","permalink":"/zh-Hans/docs/installation/docker-compose"}}')

},

};
;
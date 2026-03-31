"use strict";
exports.ids = ["7805"];
exports.modules = {
62260(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dev_1_mac_linux_md_035_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dev_1_mac_linux_md_035_json__rspack_import_0 = __webpack_require__(55623);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'setup-development-environment-mac-linux',
	title: 'Setup a Mac/Linux development environment',
	sidebar_label: 'Mac/Linux'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Server",
  "id": "server",
  "level": 2
}, {
  "value": "Install system dependencies",
  "id": "install-system-dependencies",
  "level": 3
}, {
  "value": "Clone Gladys Git repo",
  "id": "clone-gladys-git-repo",
  "level": 3
}, {
  "value": "Install NPM dependencies",
  "id": "install-npm-dependencies",
  "level": 3
}, {
  "value": "Run DB migration",
  "id": "run-db-migration",
  "level": 3
}, {
  "value": "Start the server",
  "id": "start-the-server",
  "level": 3
}, {
  "value": "Frontend",
  "id": "frontend",
  "level": 2
}, {
  "value": "Install NPM dependencies",
  "id": "install-npm-dependencies-1",
  "level": 3
}, {
  "value": "Start the frontend",
  "id": "start-the-frontend",
  "level": 3
}, {
  "value": "Start server tests",
  "id": "start-server-tests",
  "level": 2
}, {
  "value": "Start server tests only for one service",
  "id": "start-server-tests-only-for-one-service",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You'll find below the instructions on how to setup a development environment for Gladys Assistant."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "server",
      children: "Server"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The server is a Node.js backend."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "install-system-dependencies",
      children: "Install system dependencies"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You'll need:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["Node.js 22 LTS (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
            href: "https://nodejs.org/en/download/",
            children: "Download"
          }), " on MacOs)."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: "Node.js 22 LTS on Ubuntu/Debian:"
        }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            className: "language-bash",
            children: "curl -sLO https://deb.nodesource.com/nsolid_setup_deb.sh\nsudo bash nsolid_setup_deb.sh 22\nsudo apt install nodejs -y\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Alternatively you can use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/nvm-sh/nvm",
        children: "nvm"
      }), " to install and manage nodejs version."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["sqlite3 (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://formulae.brew.sh/formula/sqlite",
          children: "sqlite in Homebrew"
        }), " on MacOS, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "sudo apt install sqlite3"
        }), " on Ubuntu/Debian)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Openssl (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://formulae.brew.sh/formula/openssl@3",
          children: "OpenSSL 3 in Homebrew"
        }), " on MacOS, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "sudo apt install openssl"
        }), " on Ubuntu/Debian)."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "clone-gladys-git-repo",
      children: "Clone Gladys Git repo"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "git clone https://github.com/GladysAssistant/Gladys gladys && cd gladys\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "install-npm-dependencies",
      children: "Install NPM dependencies"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "cd server\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["As you probaly don't need to run every single integration when developing, we recommend you create a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".env"
      }), " file in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "server"
      }), " folder with the following content:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "INSTALL_SERVICES_SILENT_FAIL=true\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To create the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".env"
      }), " file with the previous content:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "echo \"INSTALL_SERVICES_SILENT_FAIL=true\" > .env\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then you can install server dependencies:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm install\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "run-db-migration",
      children: "Run DB migration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm run db-migrate:dev\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "start-the-server",
      children: "Start the server"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm start\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The server should be accessible at ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://localhost:1443"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "frontend",
      children: "Frontend"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "At the root of the git repo, do:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "cd front\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "install-npm-dependencies-1",
      children: "Install NPM dependencies"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm install\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "start-the-frontend",
      children: "Start the frontend"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm start\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The frontend should be accessible at ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://localhost:1444"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "start-server-tests",
      children: "Start server tests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Go to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "server"
      }), " folder."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And run:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm test\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can run the linter with:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm run eslint\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "start-server-tests-only-for-one-service",
      children: "Start server tests only for one service"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To run the tests just for one service, go to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "server"
      }), " folder and run the command:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm run test-service --service=tasmota\n"
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
55623(module) {
module.exports = JSON.parse('{"id":"dev/setup-development-environment-mac-linux","title":"Setup a Mac/Linux development environment","description":"You\'ll find below the instructions on how to setup a development environment for Gladys Assistant.","source":"@site/docs/dev/1_mac-linux.md","sourceDirName":"dev","slug":"/dev/setup-development-environment-mac-linux","permalink":"/zh-Hans/docs/dev/setup-development-environment-mac-linux","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/dev/1_mac-linux.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"setup-development-environment-mac-linux","title":"Setup a Mac/Linux development environment","sidebar_label":"Mac/Linux"},"sidebar":"docs","previous":{"title":"Contributing on Gladys Assistant","permalink":"/zh-Hans/docs/dev/developing-a-service"},"next":{"title":"Windows","permalink":"/zh-Hans/docs/dev/setup-development-environment-windows"}}')

},

};
;
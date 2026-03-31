"use strict";
exports.ids = ["3688"];
exports.modules = {
51595(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dev_3_developing_a_service_md_ffc_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dev_3_developing_a_service_md_ffc_json__rspack_import_0 = __webpack_require__(82329);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'developing-a-service',
	title: 'Contributing on Gladys Assistant',
	sidebar_label: 'Contributing on Gladys Assistant'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Technologies Used",
  "id": "technologies-used",
  "level": 2
}, {
  "value": "Setting Up a Development Environment",
  "id": "setting-up-a-development-environment",
  "level": 2
}, {
  "value": "Directory Architecture",
  "id": "directory-architecture",
  "level": 2
}, {
  "value": "The Node.js Express Server",
  "id": "the-nodejs-express-server",
  "level": 3
}, {
  "value": "The Preact.js Frontend",
  "id": "the-preactjs-frontend",
  "level": 3
}, {
  "value": "How to Code a Gladys Assistant Integration?",
  "id": "how-to-code-a-gladys-assistant-integration",
  "level": 2
}, {
  "value": "Create a package.json",
  "id": "create-a-packagejson",
  "level": 3
}, {
  "value": "Create an index.js File",
  "id": "create-an-indexjs-file",
  "level": 3
}, {
  "value": "Link Your Integration to Gladys",
  "id": "link-your-integration-to-gladys",
  "level": 3
}, {
  "value": "Unit Tests",
  "id": "unit-tests",
  "level": 3
}, {
  "value": "Code Quality",
  "id": "code-quality",
  "level": 3
}, {
  "value": "Interface",
  "id": "interface",
  "level": 3
}, {
  "value": "Submitting Your Integration",
  "id": "submitting-your-integration",
  "level": 3
}, {
  "value": "Questions?",
  "id": "questions",
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
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Gladys Assistant is an open-source project, and all its code is available on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys",
        children: "Github"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Anyone can read and modify this code to add features, new integrations, or fix a bug."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "technologies-used",
      children: "Technologies Used"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys is a fairly standard Node.js project that uses:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://preactjs.com/",
          children: "Preact.js"
        }), " for the frontend (just like React, but lighter)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Node.js ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://expressjs.com/",
          children: "Express"
        }), " as a backend framework"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.sqlite.org/index.html",
          children: "SQLite"
        }), " for the database"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://duckdb.org/",
          children: "DuckDB"
        }), " for storing time-series data (sensors data)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://sequelize.org/",
          children: "Sequelize"
        }), " as an ORM for the database and migrations"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://mochajs.org/",
          children: "Mocha"
        }), " for backend tests"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.cypress.io/",
          children: "Cypress"
        }), " for frontend integration tests"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "setting-up-a-development-environment",
      children: "Setting Up a Development Environment"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We have two tutorials depending on your platform:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/dev/setup-development-environment-mac-linux/",
          children: "Set up a development environment on MacOS/Linux"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/dev/setup-development-environment-windows/",
          children: "Set up a development environment on Windows"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "directory-architecture",
      children: "Directory Architecture"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "the-nodejs-express-server",
      children: "The Node.js Express Server"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Here's a small explanation of all the backend project folders located in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "server"
      }), " directory."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Server architecture Gladys",
        src: (__webpack_require__(96237)/* ["default"] */.A) + "",
        width: "3248",
        height: "1952"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "the-preactjs-frontend",
      children: "The Preact.js Frontend"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The Preact application was generated by ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/preactjs/preact-cli",
        children: "preact-cli"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Frontend architecture Gladys",
        src: (__webpack_require__(44586)/* ["default"] */.A) + "",
        width: "3248",
        height: "1952"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "how-to-code-a-gladys-assistant-integration",
      children: "How to Code a Gladys Assistant Integration?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Integrations are located in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/tree/master/server/services",
        children: "server/services"
      }), " directory."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Create a new folder with the name of your service. The name should be alphanumeric, in lowercase, with dashes as separators if necessary."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Examples of good folder names:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "wemo"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "philips-hue"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "zwave"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "usb"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "create-a-packagejson",
      children: "Create a package.json"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The package.json describes your service's compatibility and the necessary dependencies."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can check out all the package.json files on Github, but here's an example of a good package.json:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"name\": \"gladys-darksky\",\n  \"main\": \"index.js\",\n  \"os\": [\"darwin\", \"linux\", \"win32\"],\n  \"cpu\": [\"x64\", \"arm\", \"arm64\"],\n  \"scripts\": {},\n  \"dependencies\": {\n    \"axios\": \"^0.18.0\"\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Note:"
      }), " The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "os"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "cpu"
      }), " fields are mandatory."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "create-an-indexjs-file",
      children: "Create an index.js File"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-jsx",
        children: "const logger = require(\"../../utils/logger\");\nconst ExampleLightHandler = require(\"./lib/light\");\n\nmodule.exports = function ExampleService(gladys) {\n  // here is an example module\n  const axios = require(\"axios\");\n\n  // @ts-ignore: TS doesn't know about the axios.create function\n  const client = axios.create({\n    timeout: 1000,\n  });\n  /**\n   * @public\n   * @description This function starts the ExampleService service\n   * @example\n   * gladys.services.example.start();\n   */\n  async function start() {\n    logger.log(\"starting example service\");\n  }\n\n  /**\n   * @public\n   * @description This function stops the ExampleService service\n   * @example\n   * gladys.services.example.stop();\n   */\n  async function stop() {\n    logger.log(\"stopping example service\");\n  }\n\n  return Object.freeze({\n    start,\n    stop,\n    device: new ExampleLightHandler(gladys, client),\n  });\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "index.js"
        }), " file must expose 2 functions: start and stop. These functions are mandatory and should respectively start or stop the service."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["All dependency requests listed in the package.json should be made ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "inside"
        }), " the function, not outside. This is because we want each service to be completely isolated and not crash if the NPM module crashes."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "gladys"
        }), " variable is the Gladys instance and gives you access to all the Gladys APIs. A service should not try to contact the database itself; it should only use the Gladys API. If a request is missing, feel free to code a new function in the Gladys API."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Comments on functions are mandatory and serve not only for documentation but also for type checking."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "link-your-integration-to-gladys",
      children: "Link Your Integration to Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When your integration is ready to be tested, you can edit the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/blob/master/server/services/index.js",
        children: "server/services/index.js"
      }), " file and add the require to your service."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "unit-tests",
      children: "Unit Tests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A main goal of Gladys Assistant is to be ultra-stable and reliable software."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Therefore, all Gladys code must be fully tested."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Service tests are located in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/tree/master/server/test/services",
        children: "server/test/services"
      }), " directory."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["I suggest taking a look at the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/tree/master/server/test/services/example",
        children: "example service tests"
      }), " to get an idea of what the tests look like."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To run the tests, in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "server"
      }), " directory, execute:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm test\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want to run only the tests related to your service, you can add ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".only"
      }), " to your tests, for example:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-jsx",
        children: "describe.only(\"ExampleService\", () => {\n  const exampleService = ExampleService();\n  it(\"should have start function\", () => {\n    expect(exampleService)\n      .to.have.property(\"start\")\n      .and.be.instanceOf(Function);\n  });\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["(Be sure to remove the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".only"
      }), " before committing)"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Note on Mocking:"
      }), " Your tests probably call a third-party NPM module. We recommend mocking all calls to the module using proxyquire like ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/blob/master/server/test/services/example/index.test.js#L5",
        children: "here"
      }), ". Your tests should not call real-world APIs!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "code-quality",
      children: "Code Quality"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["We use a fairly strict ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "eslint"
      }), " configuration."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "VSCode"
      }), " for development to see linting issues in real-time, or run ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm run eslint"
      }), " in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "server"
      }), " directory to see all linting errors."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "interface",
      children: "Interface"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The Gladys 4 interface is a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://preactjs.com/",
        children: "preact"
      }), " application."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want to add features to the frontend, you can edit the code in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "front"
      }), " directory."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["All code related to the user interface of services is located in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/tree/master/front/src/routes/integration/all",
        children: "front/src/routes/integration/all"
      }), " directory."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "submitting-your-integration",
      children: "Submitting Your Integration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you think your service is good enough to be published, congratulations!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can create a PR on GitHub."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Read: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request",
        children: "Creating a PR on Github"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "questions",
      children: "Questions?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Have questions? Come discuss them ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "on the forum"
      }), "!"]
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
44586(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/frontend_architecture-a182c0724dc42231a1d1bf641a97f188.png");

},
96237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/server_architecture-f01034c89657f614cab55a5714a33d9e.png");

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
82329(module) {
module.exports = JSON.parse('{"id":"dev/developing-a-service","title":"Contributing on Gladys Assistant","description":"Gladys Assistant is an open-source project, and all its code is available on Github.","source":"@site/docs/dev/3_developing_a_service.md","sourceDirName":"dev","slug":"/dev/developing-a-service","permalink":"/zh-Hans/docs/dev/developing-a-service","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/dev/3_developing_a_service.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"developing-a-service","title":"Contributing on Gladys Assistant","sidebar_label":"Contributing on Gladys Assistant"},"sidebar":"docs","previous":{"title":"MQTT API","permalink":"/zh-Hans/docs/api/mqtt-api"},"next":{"title":"Mac/Linux","permalink":"/zh-Hans/docs/dev/setup-development-environment-mac-linux"}}')

},

};
;
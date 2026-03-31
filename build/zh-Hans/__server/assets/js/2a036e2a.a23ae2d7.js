"use strict";
exports.ids = ["3800"];
exports.modules = {
49926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_openai_md_2a0_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_openai_md_2a0_json__rspack_import_0 = __webpack_require__(59976);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'openai',
	title: 'Using ChatGPT to control your connected home',
	sidebar_label: 'ChatGPT'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Configuration",
  "id": "configuration",
  "level": 2
}, {
  "value": "Available commands",
  "id": "available-commands",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    img: "img",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "OpenAI definitely revolutionized the world of artificial intelligence when it launched ChatGPT last year."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "What if you could use ChatGPT to control your connected home?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We wouldn't be far from having our very own Jarvis at home, just a quick message away!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "As the OpenAI API is not free, this integration is part of Gladys Plus. Start by creating your account to get access to ChatGPT 🙂"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configuration",
      children: "Configuration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's very simple, just activate ChatGPT in the OpenAI ChatGPT integration in \"Integrations\":"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Activate ChatGPT in Gladys",
        src: (__webpack_require__(49300)/* ["default"] */.A) + "",
        width: "1600",
        height: "649"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then you can chat with ChatGPT in the chat tab or via our Telegram integration."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "available-commands",
      children: "Available commands"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There are currently 9 available commands:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Action"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Display camera in a room"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Show me the living room camera"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Turn on the light"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Turn on the kitchen light"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Turn off the light"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Turn off the kitchen light"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Turn on a smart plug"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Turn on the \"washing machine\" plug"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Turn off a smart plug"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Turn off the \"washing machine\" plug"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Get the temperature"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "What’s the temperature in the garden?"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Get the humidity"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "What is the humidity level in the bathroom?"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Start a scene"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Start the \"Cinema Mode\" scene"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Retrieve general information"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Who is Jules Verne?"
          })]
        })]
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
49300(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/activate_chatgpt-ec831aeb587e97c9f220ff275c1519a1.jpg");

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
59976(module) {
module.exports = JSON.parse('{"id":"integrations/openai","title":"Using ChatGPT to control your connected home","description":"OpenAI definitely revolutionized the world of artificial intelligence when it launched ChatGPT last year.","source":"@site/docs/integrations/openai.md","sourceDirName":"integrations","slug":"/integrations/openai","permalink":"/zh-Hans/docs/integrations/openai","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/openai.md","tags":[],"version":"current","frontMatter":{"id":"openai","title":"Using ChatGPT to control your connected home","sidebar_label":"ChatGPT"},"sidebar":"docs","previous":{"title":"OpenWeather","permalink":"/zh-Hans/docs/integrations/openweather"},"next":{"title":"Owntracks","permalink":"/zh-Hans/docs/integrations/owntracks"}}')

},

};
;
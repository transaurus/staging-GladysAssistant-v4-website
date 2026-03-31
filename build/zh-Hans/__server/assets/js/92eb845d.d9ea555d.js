"use strict";
exports.ids = ["9033"];
exports.modules = {
35302(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_11_01_proactive_ai_md_92e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_11_01_proactive_ai_md_92e_json__rspack_import_0 = __webpack_require__(77617);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Proactive AI Arrives in Gladys Assistant!',
	description: 'Artificial intelligence is integrated even more deeply into Gladys to make your home smarter and more responsive.',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-4-48.jpg',
	slug: 'proactive-ai'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Imagine the possibilities",
  "id": "imagine-the-possibilities",
  "level": 2
}, {
  "value": "A concrete example",
  "id": "a-concrete-example",
  "level": 2
}, {
  "value": "Analyzing sensor values",
  "id": "analyzing-sensor-values",
  "level": 2
}, {
  "value": "Other updates",
  "id": "other-updates",
  "level": 2
}, {
  "value": "How to update?",
  "id": "how-to-update",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hello everyone!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today, I’m excited to introduce Gladys Assistant 4.48, a version where artificial intelligence is even more deeply integrated into Gladys to make your home smarter and more responsive."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Since January 2023, you could already ask ChatGPT questions through Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys with ChatGPT",
        src: (__webpack_require__(18780)/* ["default"] */.A) + "",
        width: "1170",
        height: "1072"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "That was a good start, but I want to take it further! What if AI could be proactive and make decisions for you?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "imagine-the-possibilities",
      children: "Imagine the possibilities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Imagine a car pulls up in front of your house. A dedicated security guard would watch, recognize your car—its shape, color, license plate—and know immediately that it’s you. But hiring a 24/7 guard isn’t within reach for everyone!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "What if AI could play that role?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys, you can now write a simple instruction, for example:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "“If a car is in front of the house, and it’s a red Tesla Model 3 with the license plate XXX, turn on the garage; otherwise, alert me that there’s an intruder.”"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "With Gladys 4.48, this scenario becomes a reality! You have a generalist AI ready to monitor and make decisions, just like a dedicated agent, but without the cost."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "a-concrete-example",
      children: "A concrete example"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This new feature is based on the OpenAI ChatGPT 4o-mini API, with its latest vision feature available to Gladys Plus subscribers."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In a scene, you can create an “Ask AI” action and, if desired, send it an image from a camera."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Take the car example:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Analyzing camera image",
        src: (__webpack_require__(72956)/* ["default"] */.A) + "",
        width: "766",
        height: "1294"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If movement is detected outside your house, Gladys will send the garage camera image to analyze the situation. Then, based on detection:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "If the correct car is recognized, the garage light turns on."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "If another car is detected, you receive an intruder alert on your phone."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "analyzing-sensor-values",
      children: "Analyzing sensor values"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The camera is just one example! You can also send sensor data to the AI and ask it to act based on the results."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For instance, you could send a CO2 sensor value and request an action if the level is abnormal:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Analyzing Co2 Level Gladys",
        src: (__webpack_require__(17251)/* ["default"] */.A) + "",
        width: "756",
        height: "1424"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "No need to look up recommended CO2 levels in a room—the AI draws on its extensive knowledge (essentially all of the internet!) to assess the situation and act intelligently."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It’s even possible to inject values retrieved from other APIs to:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Get a weather report first thing in the morning"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Track financial markets with a stock summary"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Check the news with an RSS feed"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Verify home security each day during your vacation (normal temperature, etc.)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The possibilities are endless! I can’t wait to see what you’ll create with this update. Share your trials on the forum to inspire others!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "other-updates",
      children: "Other updates"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "In scenes, filters by tag or title are now saved in the URL, so you can easily return to a filter after navigating."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Added support for pilot wire heaters in scenes."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Camera images are now retrieved via TCP (instead of UDP), avoiding display errors (like the green band bug)."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Fixed binary charts: the first value now displays correctly."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "DuckDB: connections are now properly closed when Gladys shuts down."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to everyone who contributed to this update! 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "how-to-update",
      children: "How to update?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Make sure to use Watchtower for automatic updates. Check the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/installation/docker#auto-upgrade-gladys-with-watchtower",
        children: "documentation"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "With Watchtower, Gladys will update automatically."
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
72956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/ask-ai-camera-3cd525313e7ab26c77c15c99f72836a2.png");

},
17251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/ask-ai-sensor-02902e8b18cdd6f2b729200f03a63f0a.png");

},
18780(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/chatgpt-gladys-414a09c74f497a9f87ce91b8b0662817.jpg");

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
77617(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/proactive-ai","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2024-11-01-proactive-ai.md","source":"@site/blog/2024-11-01-proactive-ai.md","title":"Proactive AI Arrives in Gladys Assistant!","description":"Artificial intelligence is integrated even more deeply into Gladys to make your home smarter and more responsive.","date":"2024-11-01T00:00:00.000Z","tags":[],"readingTime":2.86,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Proactive AI Arrives in Gladys Assistant!","description":"Artificial intelligence is integrated even more deeply into Gladys to make your home smarter and more responsive.","authors":"pierregilles","image":"/img/presentation/gladys-4-48.jpg","slug":"proactive-ai"},"unlisted":false,"prevItem":{"title":"Review, Growth & 2025 Projects 🚀","permalink":"/zh-Hans/blog/2024-year-in-review"},"nextItem":{"title":"DuckDB: Extreme Performance and a 97% Lighter Database!","permalink":"/zh-Hans/blog/gladys-and-duckdb"}}')

},

};
;
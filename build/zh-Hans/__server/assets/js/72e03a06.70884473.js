"use strict";
exports.ids = ["4474"];
exports.modules = {
20336(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_09_26_energy_monitoring_coming_soon_md_72e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_09_26_energy_monitoring_coming_soon_md_72e_json__rspack_import_0 = __webpack_require__(53691);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Energy Monitoring Coming Soon to Gladys',
	description: 'Discover Gladys\'s new \'Energy Monitoring\' integration: track your electricity consumption down to the cent and participate in testing!',
	authors: 'pierregilles',
	image: '/img/presentation/energy-monitoring-coming-soon-en.jpg',
	slug: 'energy-monitoring-coming-soon'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What has been developed so far",
  "id": "what-has-been-developed-so-far",
  "level": 2
}, {
  "value": "Configuration",
  "id": "configuration",
  "level": 3
}, {
  "value": "📊 <strong>Dashboard</strong>",
  "id": "-dashboard",
  "level": 3
}, {
  "value": "<strong>What&#39;s next</strong>",
  "id": "whats-next",
  "level": 2
}, {
  "value": "<strong>Thank you Thomas</strong>",
  "id": "thank-you-thomas",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hey everyone,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["At the end of May, I was chatting with Thomas Lemaistre (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/u/terdious/summary",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "@Terdious"
        })
      }), " on the forum), and he was explaining his electrical setup: multiple meters, solar panels, an electric car... and soon batteries to store his energy."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "His goal in Gladys:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["👉 Track his consumption directly in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "euros"
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", "👉 Visualize the different energy flows in his home", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", "👉 Measure the performance of his solar panels", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", "👉 And most importantly, know how close he is to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "energy self-sufficiency"
      }), " 🌞🔋"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I've been dreaming about these kinds of features for Gladys for a long time 😍 But it's a big project, difficult to start without funding."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In June, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "@Terdious offered to finance the development himself"
      }), ". Just like that! 🎉"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "He prepared a detailed specification, I proposed a quote, he accepted... and I was able to start this project this summer."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Today, I'm super happy to reveal the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "first part"
      }), " of this development!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "what-has-been-developed-so-far",
      children: "What has been developed so far"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "configuration",
      children: "Configuration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["A brand new integration has appeared in Gladys: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "\"Energy Monitoring\""
      }), " 🎉"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Energy monitoring integration",
        src: (__webpack_require__(68585)/* ["default"] */.A) + "",
        width: "1808",
        height: "1246"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is where you'll find all options related to energy monitoring in Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In the first tab, you can define the layout of your electrical installation by organizing your devices hierarchically. This allows Gladys to understand how electricity flows in your home."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Device features hierarchy",
        src: (__webpack_require__(28391)/* ["default"] */.A) + "",
        width: "2422",
        height: "1100"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "👉 Next, you can enter your electricity rates. And a major new feature: Gladys also manages rate history! Because unlike other home automation software, we all know that prices change over the years... and your calculations need to reflect reality, year after year."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Configure prices 1",
        src: (__webpack_require__(5806)/* ["default"] */.A) + "",
        width: "2472",
        height: "650"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Configure prices 2",
        src: (__webpack_require__(24581)/* ["default"] */.A) + "",
        width: "2454",
        height: "736"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Configure prices 3",
        src: (__webpack_require__(7068)/* ["default"] */.A) + "",
        width: "2420",
        height: "2128"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For now, entry is manual, but automatic import is already planned."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "3 types of contracts are already supported:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Basic rate"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Peak/Off-peak hours"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "EDF Tempo"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The first two are completely generic, so they can be used anywhere in the world. An American user with a peak/off-peak contract, for example, can use it without any problem."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "My ambition is clear: I want Gladys calculations to be as precise as those of your energy provider. Down to the cent."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "No approximations"
      }), ": reliability is key."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "That's actually where most of the work was: implementing an ultra-precise calculation engine. I've done tests with my own EDF Tempo contract, and the results match exactly with the values on the EDF portal ✅"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And good news: this integration is compatible both with data from the Enedis integration (via Gladys Plus) and with any custom consumption source:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "a Zigbee plug,"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "an MQTT sensor,"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "or any other measurement you send to Gladys."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "-dashboard",
      children: ["📊 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Dashboard"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I've added an \"Energy Monitoring\" widget."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It allows you to visualize your consumption by year, month, or day at a glance."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Energy monitoring widget",
        src: (__webpack_require__(88014)/* ["default"] */.A) + "",
        width: "1446",
        height: "908"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And this is just the beginning: more widgets will enhance the monitoring."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "whats-next",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "What's next"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is where I need your help:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I'm looking for users willing to help me test the algorithm."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Specifically: if you agree to share with me in a private message ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "on the forum"
      }), " your consumption data, I can compare it with Gladys calculations and ensure the results match perfectly."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The goal: quickly release a first beta of energy monitoring in Gladys, before moving on to the other features requested by @Terdious."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "thank-you-thomas",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Thank you Thomas"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I want to thank @Terdious enormously, without whom this development simply wouldn't have happened. It's thanks to his funding that I was able to start this project, and I think the entire community can say a big THANK YOU to him 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["And for those who sometimes wonder why certain requests aren't implemented quickly: it's never a question of unwillingness, but of resources. I work on Gladys according to the available funding, and contributions like this are a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "huge accelerator"
      }), " for the project 🚀"]
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
5806(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/configure-prices-1-9a701a38cf651ce17acedf60e4817342.png");

},
24581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/configure-prices-2-5664d9e59a373247de9cf40b7afb8dfa.png");

},
7068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/configure-prices-3-3634f06b178c37793fd770550c370e89.png");

},
88014(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/dashboard-widget-f3521f90e7e392c8e55220740d1e9bbd.png");

},
28391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/device-features-hierarchy-677e4803eee4d3ae3b8f0e05379c7192.png");

},
68585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/energy-monitoring-integration-ab212529480a5c320521b324afd67f5b.png");

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
53691(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/energy-monitoring-coming-soon","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2025-09-26-energy-monitoring-coming-soon.md","source":"@site/blog/2025-09-26-energy-monitoring-coming-soon.md","title":"Energy Monitoring Coming Soon to Gladys","description":"Discover Gladys\'s new \'Energy Monitoring\' integration: track your electricity consumption down to the cent and participate in testing!","date":"2025-09-26T00:00:00.000Z","tags":[],"readingTime":3.44,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Energy Monitoring Coming Soon to Gladys","description":"Discover Gladys\'s new \'Energy Monitoring\' integration: track your electricity consumption down to the cent and participate in testing!","authors":"pierregilles","image":"/img/presentation/energy-monitoring-coming-soon-en.jpg","slug":"energy-monitoring-coming-soon"},"unlisted":false,"prevItem":{"title":"Energy Monitoring is now live in Gladys Assistant 4.66 ⚡️","permalink":"/zh-Hans/blog/energy-monitoring-is-live"},"nextItem":{"title":"Gladys Assistant Now Compatible with Matter","permalink":"/zh-Hans/blog/gladys-assistant-4-58-with-matter-support"}}')

},

};
;
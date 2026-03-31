"use strict";
exports.ids = ["674"];
exports.modules = {
7914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2021_11_25_display_chart_and_major_zigbee_2_mqtt_upgrade_md_02a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2021_11_25_display_chart_and_major_zigbee_2_mqtt_upgrade_md_02a_json__rspack_import_0 = __webpack_require__(21060);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'New release: Display chart on Gladys dashboard & Major upgrade on Zigbee2mqtt',
	description: 'Big release today, it\'s now finally possible to display charts on the dashboard & to use any Zigbee2mqtt compatible device in Gladys Assistant.',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-assistant-4-7-chart.jpg',
	slug: 'display-chart-and-major-zigbee2mqtt-upgrade'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What&#39;s new in Gladys Assistant v4.7?",
  "id": "whats-new-in-gladys-assistant-v47",
  "level": 2
}, {
  "value": "Charts on dashboard",
  "id": "charts-on-dashboard",
  "level": 3
}, {
  "value": "Full Zigbee2mqtt compatibility",
  "id": "full-zigbee2mqtt-compatibility",
  "level": 3
}, {
  "value": "In Tasmota integration, be able to change a switch to a light",
  "id": "in-tasmota-integration-be-able-to-change-a-switch-to-a-light",
  "level": 3
}, {
  "value": "Add a new &quot;Device temperature&quot; category to monitor CPU temperature",
  "id": "add-a-new-device-temperature-category-to-monitor-cpu-temperature",
  "level": 3
}, {
  "value": "Lots of improvements/bugfixes",
  "id": "lots-of-improvementsbugfixes",
  "level": 3
}, {
  "value": "How to upgrade?",
  "id": "how-to-upgrade",
  "level": 2
}, {
  "value": "Thanks to contributors",
  "id": "thanks-to-contributors",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "Hi everyone!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This week I'm releasing a set of big features that have been asked for quite some time 🚀"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Everything is available in Gladys Assistant v4.7 🥳"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "whats-new-in-gladys-assistant-v47",
      children: "What's new in Gladys Assistant v4.7?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "charts-on-dashboard",
      children: "Charts on dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We now have a native way of displaying charts on the dashboard, entirely automatically and without having to setup a third-party database like InfluxDB."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Chart on dashboard on Gladys Assistant",
        src: (__webpack_require__(60010)/* ["default"] */.A) + "",
        width: "1600",
        height: "902"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To do this, Gladys is now aggregating all device data with 3 different levels of granulatity:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "hourly data: Gladys keeps max 100 values per device feature and per hour."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "daily data: Gladys keeps max 100 values per device feature and per day."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "monthly data: Gladys keeps max 100 values per device feature and per month."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When displaying a chart on the dashboard, Gladys will use one of the 3 sets of aggregated data to display the chart as fast as possible."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Our goal is to stay under 100ms request time no matter the amount of data your sensor is saving."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To read more about how to setup this feature, you can read ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/dashboard/chart",
        children: "the documentation"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "full-zigbee2mqtt-compatibility",
      children: "Full Zigbee2mqtt compatibility"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When releasing Zigbee2mqtt compatibility this year, we took a very prudent approach:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Each device needed to be classified manually by a developer before being able to be used in Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This approach was safer to start, because it allowed us to better integrate each device, understand a wide range of Zigbee peripherals and adapt Gladys for those devices."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "But after some time, it became very repetitive to write one PR for each new Zigbee device, so we took another approach:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Auto-detecting each device!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Thanks to Alexandre Trovato ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/pull/1302",
        children: "#1302 Pull Request"
      }), ", we are now able to parse the data sent by Zigbee2mqtt to automatically map those devices to Gladys capabilities."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It means that all Zigbee2mqtt compatible devices are now compatible with Gladys, natively!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "in-tasmota-integration-be-able-to-change-a-switch-to-a-light",
      children: "In Tasmota integration, be able to change a switch to a light"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It was a common feedback, some users plug a light on a switch, and therefore they want those switches to be considered as light in Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For example, if I say \"Turn on the light in the living room\", it should turn on those switches as well."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's now possible to change a switch to a light in the Tasmota integration."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "add-a-new-device-temperature-category-to-monitor-cpu-temperature",
      children: "Add a new \"Device temperature\" category to monitor CPU temperature"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Some device send a value for the temperature of their CPU."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys, we had only one \"temperature\" category, and the problem is that when asking for \"What's the temperature in the living room?\" it would answer with the temperature of the CPU of your living room computer..."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now, there is a separate \"Device temperature\" category to let you classify those CPU temperature clearly, without affecting the \"Room temperature\" feature in Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Developed in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/commit/94acaac8fd32c3c0e0c82c581f10904d5ed36f0d",
        children: "#1327"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "lots-of-improvementsbugfixes",
      children: "Lots of improvements/bugfixes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["In the MQTT integration, we now display if the broker is connected or not (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/commit/a5c95dcfbfc84b8ddde141a4e3680cae9fb659ce",
          children: "#1349"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["In the Caldav integration, the date is now correct for recurring events (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/commit/b6ab1c06e94f804c6077da7b99e5e258ef0cf475",
          children: "#1367"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["In the Telegram integration, temperature is now displayed in the correct user format (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/commit/bcbb1234b1590fb14a2af5eef87065c966297287",
          children: "#1363"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["In the scene tab, fix a bug that was preventing the user to edit scene name (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/commit/7ed2d520b8b5b6c03b539311903425393797aaa1",
          children: "#1318"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Lots of bugfixes/improvements on the Ewelink integration (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/commit/a755d55f2ebb70983111343018b3fd9a1590933b",
          children: "#1044"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "how-to-upgrade",
      children: "How to upgrade?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you installed Gladys with the official Raspberry Pi OS image, your instance will update ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "automatically"
      }), " in the coming hours. It can take up to 24 hours, don't panic."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you installed Gladys with Docker, make sure you are using Watchtower. See the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/installation/docker#auto-upgrade-gladys-with-watchtower",
        children: "documentation"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "With Watchtower, Gladys will update automatically."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "thanks-to-contributors",
      children: "Thanks to contributors"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to everyone who contributed to this release and gave their feedback on the forum!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want to talk about this release, you're all welcome on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "forum"
      }), " !"]
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
60010(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/chart-dashboard-cc8155a43023d000b81dd1e985d64641.jpg");

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
21060(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/display-chart-and-major-zigbee2mqtt-upgrade","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2021-11-25-display-chart-and-major-zigbee2mqtt-upgrade.md","source":"@site/blog/2021-11-25-display-chart-and-major-zigbee2mqtt-upgrade.md","title":"New release: Display chart on Gladys dashboard & Major upgrade on Zigbee2mqtt","description":"Big release today, it\'s now finally possible to display charts on the dashboard & to use any Zigbee2mqtt compatible device in Gladys Assistant.","date":"2021-11-25T00:00:00.000Z","tags":[],"readingTime":3.43,"hasTruncateMarker":false,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"New release: Display chart on Gladys dashboard & Major upgrade on Zigbee2mqtt","description":"Big release today, it\'s now finally possible to display charts on the dashboard & to use any Zigbee2mqtt compatible device in Gladys Assistant.","authors":"pierregilles","image":"/img/presentation/gladys-assistant-4-7-chart.jpg","slug":"display-chart-and-major-zigbee2mqtt-upgrade"},"unlisted":false,"prevItem":{"title":"Gladys Assistant\'s 2021 Year In Review","permalink":"/zh-Hans/blog/2021-year-in-review"},"nextItem":{"title":"Integrate Node-RED with Gladys Assistant in MQTT","permalink":"/zh-Hans/blog/integrate-node-red-with-gladys-assistant-in-mqtt"}}')

},

};
;
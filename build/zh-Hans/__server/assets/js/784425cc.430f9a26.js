"use strict";
exports.ids = ["1212"];
exports.modules = {
8183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2022_09_15_gladys_assistant_4_10_broadlink_md_784_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2022_09_15_gladys_assistant_4_10_broadlink_md_784_json__rspack_import_0 = __webpack_require__(59259);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys Assistant v4.10 is live, with Broadlink support!',
	description: 'Broadlink support, performance improvements and Zigbee2mqtt new capabilities',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-assistant-4-10.jpg',
	slug: 'gladys-assistant-4-10-broadlink-and-performances'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What&#39;s new in Gladys Assistant 4.10?",
  "id": "whats-new-in-gladys-assistant-410",
  "level": 2
}, {
  "value": "Broadlink compatibility",
  "id": "broadlink-compatibility",
  "level": 3
}, {
  "value": "Huge performance improvements on the dashboard",
  "id": "huge-performance-improvements-on-the-dashboard",
  "level": 3
}, {
  "value": "Select which device state history you want to keep",
  "id": "select-which-device-state-history-you-want-to-keep",
  "level": 3
}, {
  "value": "WebCal support",
  "id": "webcal-support",
  "level": 3
}, {
  "value": "Shutter/curtain support in the MQTT integration",
  "id": "shuttercurtain-support-in-the-mqtt-integration",
  "level": 3
}, {
  "value": "Zigbee2mqtt: Display signal quality (LQI) on the dashboard",
  "id": "zigbee2mqtt-display-signal-quality-lqi-on-the-dashboard",
  "level": 3
}, {
  "value": "Zigbee2mqtt: Add support for VOC sensors (air quality sensors)",
  "id": "zigbee2mqtt-add-support-for-voc-sensors-air-quality-sensors",
  "level": 3
}, {
  "value": "Tasmota: Add support for devices that sends array of values",
  "id": "tasmota-add-support-for-devices-that-sends-array-of-values",
  "level": 3
}, {
  "value": "Many bugfixes/UI improvements",
  "id": "many-bugfixesui-improvements",
  "level": 3
}, {
  "value": "How to upgrade?",
  "id": "how-to-upgrade",
  "level": 2
}, {
  "value": "Thanks to contributors",
  "id": "thanks-to-contributors",
  "level": 2
}, {
  "value": "Support us",
  "id": "support-us",
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
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hi everyone!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I hope everyone spent great summer holidays 🙂"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today I'm releasing Gladys Assistant v4.10, a big new release with amazing new features, both in integrations and in the core."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "whats-new-in-gladys-assistant-410",
      children: "What's new in Gladys Assistant 4.10?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "broadlink-compatibility",
      children: "Broadlink compatibility"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We have a new integration 🎉"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Broadlink devices are small IR emitter that acts as a remote control and can be controlled over Wi-Fi."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Broadlink integration Gladys",
        src: (__webpack_require__(51461)/* ["default"] */.A) + "",
        width: "1600",
        height: "1600"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys v4.10, you can now connect your Broadlink devices to Gladys, and therefore control devices that your Broadlink can control (in infrared for now only, not radiofrequencies)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "huge-performance-improvements-on-the-dashboard",
      children: "Huge performance improvements on the dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I've been having feedbacks that some user's dashboard were super slow to load when having multiple charts on the same dashboard."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "So I asked one user to send me his database, so I could see what was wrong."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Here is what I saw:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Slow dashboard",
        src: (__webpack_require__(70337)/* ["default"] */.A) + "",
        width: "1600",
        height: "959"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "His dashboard was taking up to 40 seconds to load: not normal at all !! 😅"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "So I tried running individually every single SQL query that are involved in displaying the dashboard."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I quickly found that some super simple queries were taking up to 6 seconds to run, just to finally return an empty result: not normal!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Slow SQL query",
        src: (__webpack_require__(61414)/* ["default"] */.A) + "",
        width: "1600",
        height: "804"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["I used ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "EXPLAIN QUERY PLAN"
      }), " to understand what SQLite was doing."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["I realized that while I had the correct indexes on both attributes used in the query (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "device_feature_id"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "created_at"
      }), "), SQLite was using only one index to do the first filter, and then had to sequentially scan all rows to filter on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "created_at"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The solution was simple: I created an index that covered both attributes:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX ix_device_feature_state_device_feature_id_created_at\nON t_device_feature_state (device_feature_id, created_at);\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And instantly, the request taking 6 seconds went to... 5 ms! ⚡"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "His dashboard load time went from 40 seconds to load to 100 ms! ⚡"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This performance improvement is available in Gladys Assistant v4.10."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Note that it can take some time to build the index, so Gladys might be taking longer to upgrade than usual."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "select-which-device-state-history-you-want-to-keep",
      children: "Select which device state history you want to keep"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's now possible to select which device state history you want to keep."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you have a device that is very verbose and that store tons of data in your database, you can now exclude it from the history feature, and Gladys will only keep the last value."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Keep state history",
        src: (__webpack_require__(7153)/* ["default"] */.A) + "",
        width: "1600",
        height: "1061"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "webcal-support",
      children: "WebCal support"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["WebCal is a standard for accessing iCalendar files (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: ".ics"
      }), " files)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Many organizations share WebCal calendars to share public dates: bank holidays, sporting events, TV shows, public meetings, and more."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The Caldav integration now supports syncing those WebCal calendars."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you follow some WebCal calendars in your calendar (iCloud, Nextcloud, ...), Gladys will be able to sync them!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "shuttercurtain-support-in-the-mqtt-integration",
      children: "Shutter/curtain support in the MQTT integration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We now support automatic shutters and curtains in the MQTT integration."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Shutters",
        src: (__webpack_require__(60583)/* ["default"] */.A) + "",
        width: "1600",
        height: "806"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can create a shutter in Gladys, and control 3 states:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "STOP: 0\nOPEN: 1\nCLOSE: -1\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can also control the position of the shutter (if you shutter supports it)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "zigbee2mqtt-display-signal-quality-lqi-on-the-dashboard",
      children: "Zigbee2mqtt: Display signal quality (LQI) on the dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "With Zigbee2mqtt, we receive a \"signal strength\" attribute that tells if the device is far away from the network or not."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We now support this attribute (LQI), and you can now display it on your dashboard:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Zigbee2mqtt LQI",
        src: (__webpack_require__(97773)/* ["default"] */.A) + "",
        width: "1600",
        height: "514"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "zigbee2mqtt-add-support-for-voc-sensors-air-quality-sensors",
      children: "Zigbee2mqtt: Add support for VOC sensors (air quality sensors)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "VOC, or \"Volatile Organic Compounds\" are chemicals emitted by a variety of products at home (paintings, furnitures, cosmetics)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Some levels of pollutants can be 2 to 5 times higher inside than outside the home."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Some sensors exists to measure the VOC level at home, and we now support them in Gladys !"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "tasmota-add-support-for-devices-that-sends-array-of-values",
      children: "Tasmota: Add support for devices that sends array of values"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Some devices like the Sonoff Dual R3 flashed with Tasmota were not properly handled by Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We now support them entirely!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "many-bugfixesui-improvements",
      children: "Many bugfixes/UI improvements"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I won't go into details of every single thing that changed, but we also fixed some little bugs, and improved the UI!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The full details can be read in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/releases/tag/v4.10.0",
        children: "CHANGELOG"
      }), "."]
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
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "support-us",
      children: "Support us"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you want to support us, there are many ways:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Answer posts on the forum, give your feedback."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Help us improve the documentation."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Develop new features/integrations on Gladys, we are 100% open-source."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Make a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.buymeacoffee.com/gladysassistant",
          children: "one time donation"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Subscribe to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/plus",
          children: "Gladys Plus"
        }), "."]
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
51461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/broadlink-dad17b1898754e488bdb8405b202614e.jpg");

},
7153(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/keep-state-history-5f734aebd99e4860a870bbd8698ad932.jpg");

},
60583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/shutters-ff91eaa5232a0224ea48faed29af0c87.jpg");

},
70337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/slow-dashboard-8dbc3ad1a8f0cf29668ffa32210b43ec.jpg");

},
61414(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/slow-sql-query-926fcc97a3425ce4c3e577850b7c842e.jpg");

},
97773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/z2m-lqi-2b919761751a62bddbd6070831a1a989.jpg");

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
59259(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-assistant-4-10-broadlink-and-performances","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2022-09-15-gladys-assistant-4-10-broadlink.md","source":"@site/blog/2022-09-15-gladys-assistant-4-10-broadlink.md","title":"Gladys Assistant v4.10 is live, with Broadlink support!","description":"Broadlink support, performance improvements and Zigbee2mqtt new capabilities","date":"2022-09-15T00:00:00.000Z","tags":[],"readingTime":4.38,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys Assistant v4.10 is live, with Broadlink support!","description":"Broadlink support, performance improvements and Zigbee2mqtt new capabilities","authors":"pierregilles","image":"/img/presentation/gladys-assistant-4-10.jpg","slug":"gladys-assistant-4-10-broadlink-and-performances"},"unlisted":false,"prevItem":{"title":"Gladys Assistant 4.12 with HomeKit support !","permalink":"/zh-Hans/blog/gladys-assistant-4-12-homekit"},"nextItem":{"title":"Launching Gladys Assistant 4.9 with Amazon Alexa support","permalink":"/zh-Hans/blog/gladys-assistant-4-9-with-alexa-integration"}}')

},

};
;
"use strict";
exports.ids = ["6956"];
exports.modules = {
12386(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2021_09_03_gladys_assistant_4_5_is_here_md_fd7_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2021_09_03_gladys_assistant_4_5_is_here_md_fd7_json__rspack_import_0 = __webpack_require__(68852);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys Assistant 4.5 is available, with the multi-dashboard feature!',
	description: 'It\'s a big update, and we really hope you will like it!',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-4-5-en-cover.jpg',
	slug: 'gladys-assistant-4-5-is-here'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What&#39;s new in Gladys Assistant 4.5?",
  "id": "whats-new-in-gladys-assistant-45",
  "level": 2
}, {
  "value": "Multi-dashboard",
  "id": "multi-dashboard",
  "level": 3
}, {
  "value": "Disabling a scene",
  "id": "disabling-a-scene",
  "level": 3
}, {
  "value": "New &quot;Set device value&quot; action in scenes",
  "id": "new-set-device-value-action-in-scenes",
  "level": 3
}, {
  "value": "Enhancing the user at home dashboard box",
  "id": "enhancing-the-user-at-home-dashboard-box",
  "level": 3
}, {
  "value": "Lots of performance improvements",
  "id": "lots-of-performance-improvements",
  "level": 3
}, {
  "value": "A first alpha for the Google Home integration in Gladys Plus",
  "id": "a-first-alpha-for-the-google-home-integration-in-gladys-plus",
  "level": 3
}, {
  "value": "New Zigbee2mqtt devices compatible",
  "id": "new-zigbee2mqtt-devices-compatible",
  "level": 3
}, {
  "value": "Fix Bluetooth bug",
  "id": "fix-bluetooth-bug",
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
    code: "code",
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
      children: "Hi all,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today we are releasing Gladys Assistant v4.5, a version that is bringing lots of new features to Gladys Assistant! Let me show you!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "whats-new-in-gladys-assistant-45",
      children: "What's new in Gladys Assistant 4.5?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "multi-dashboard",
      children: "Multi-dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's now possible to have multiples dashboards in Gladys Assistant."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Multi dashboard Gladys Assistant",
        src: (__webpack_require__(92475)/* ["default"] */.A) + "",
        width: "1600",
        height: "737"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can create several dashboards, and each of them have a unique URL, so you can add bookmarks on your browser to your favorite dashboards."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can select the dashboard you want to display:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Switch dashboard Gladys Assistant",
        src: (__webpack_require__(78596)/* ["default"] */.A) + "",
        width: "1600",
        height: "1131"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And it'll switch to another dashboard, easy!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Camera dashboard Gladys Assistant",
        src: (__webpack_require__(51205)/* ["default"] */.A) + "",
        width: "1600",
        height: "735"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "disabling-a-scene",
      children: "Disabling a scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It was a highly requested feature, it's now possible to disable a scene in Gladys Assistant! Finally!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you are prototyping a scene, going on holiday, or simply want to disable an annoying scene: you can do it now!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Disable scene Gladys Assistant",
        src: (__webpack_require__(23008)/* ["default"] */.A) + "",
        width: "1600",
        height: "789"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "new-set-device-value-action-in-scenes",
      children: "New \"Set device value\" action in scenes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's now possible to control any device in a scene:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "You can control the color of a lamp"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Control the temperature of a lamp"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Control any multilevel value"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Control device scene Gladys Assistant",
        src: (__webpack_require__(37920)/* ["default"] */.A) + "",
        width: "1600",
        height: "882"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's very powerful, and I hope you'll like it!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "enhancing-the-user-at-home-dashboard-box",
      children: "Enhancing the user at home dashboard box"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Small change, it's now possible to select which user to display in the \"user at home\" dashboard box."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Select users in user at home box Gladys Assistant",
        src: (__webpack_require__(34958)/* ["default"] */.A) + "",
        width: "1600",
        height: "1049"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "lots-of-performance-improvements",
      children: "Lots of performance improvements"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "As the forum was very quiet this summer, I took the time to work on some more long-term tasks."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I migrated preact-cli (the tool we use to build Gladys frontend) to their new release 3.x. It was not easy, but definitely worth it, as it reduced by a lot the size of the javascript bundle."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I did quite some work on removing some heavy library that were not necessarely needed in the frontend, to make it lighter and faster!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I hope you'll enjoy the new speed :)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "a-first-alpha-for-the-google-home-integration-in-gladys-plus",
      children: "A first alpha for the Google Home integration in Gladys Plus"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["I've been working on integrating ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/plus",
        children: "Gladys Plus"
      }), " with Google Home, the goal is to be able to control your devices:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "In the Google Home app"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Vocally with a Google Home device"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "With Google Assistant on your phone"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://twitter.com/pierregillesl/status/1405786308329365504",
        children: "Here a short demo of the integration on Twitter"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you are interested in testing this, please send me a message on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "the forum"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "new-zigbee2mqtt-devices-compatible",
      children: "New Zigbee2mqtt devices compatible"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A few new Zigbee2mqtt devices were added:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["TuYa TS0601 Air Quality Sensor and CO2 feature ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1247",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "#1247"
          })
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Philips Hue 929002241201 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1259",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "#1259"
          })
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Light color feature ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1203",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "#1203"
          })
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "fix-bluetooth-bug",
      children: "Fix Bluetooth bug"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There was a recurrent bug where Gladys was not be able to connect to the Bluetooth driver as the driver was not \"ready\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is now fixed in Gladys Assistant v4.5."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Read more on this commit: Bluetooth check state before scan + stop presence scanner ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/pull/1194",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "#1194"
        })
      })]
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
      children: ["If you want to talk about this release, you're all welcom on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
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
51205(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-dashboard-35f9cb735eb3876558c2d42529599b6a.jpg");

},
23008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/disable-scene-a99254d7cb93c48f418f4ba6651ce456.jpg");

},
92475(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/multi-dashboard-3c7d6a4f105586bd350e59f850cd882a.jpg");

},
37920(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/set-device-value-0d20ecf139911c26a701f9de9134d15c.jpg");

},
78596(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/switch-dashboard-27fd7450977483e23f6de87318d09fff.jpg");

},
34958(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/user-presence-e038c666adb23d9ae1e253c51cd31ef5.jpg");

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
68852(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-assistant-4-5-is-here","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2021-09-03-gladys-assistant-4-5-is-here.md","source":"@site/blog/2021-09-03-gladys-assistant-4-5-is-here.md","title":"Gladys Assistant 4.5 is available, with the multi-dashboard feature!","description":"It\'s a big update, and we really hope you will like it!","date":"2021-09-03T00:00:00.000Z","tags":[],"readingTime":3.24,"hasTruncateMarker":false,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys Assistant 4.5 is available, with the multi-dashboard feature!","description":"It\'s a big update, and we really hope you will like it!","authors":"pierregilles","image":"/img/presentation/gladys-4-5-en-cover.jpg","slug":"gladys-assistant-4-5-is-here"},"unlisted":false,"prevItem":{"title":"Integrate Node-RED with Gladys Assistant in MQTT","permalink":"/zh-Hans/blog/integrate-node-red-with-gladys-assistant-in-mqtt"},"nextItem":{"title":"Gladys Assistant 4.4 is available with zone detection","permalink":"/zh-Hans/blog/gladys-assistant-4-4-is-here"}}')

},

};
;
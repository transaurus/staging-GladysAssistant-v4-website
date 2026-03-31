"use strict";
exports.ids = ["2661"];
exports.modules = {
46161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_12_11_gladys_4_32_sonos_md_a9c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_12_11_gladys_4_32_sonos_md_a9c_json__rspack_import_0 = __webpack_require__(15251);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Sonos integration now available!',
	description: 'Following 7 hours of live coding on YouTube, the developed Sonos integration is now available!',
	authors: 'pierregilles',
	image: '/img/presentation/sonos-gladys-4-32.jpg',
	slug: 'gladys-4-32-sonos-integration'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Sonos integration in Gladys",
  "id": "sonos-integration-in-gladys",
  "level": 2
}, {
  "value": "Sending a message when the battery is low",
  "id": "sending-a-message-when-the-battery-is-low",
  "level": 2
}, {
  "value": "Zigbee2mqtt: Managing the IKEA Vindstyrka sensor",
  "id": "zigbee2mqtt-managing-the-ikea-vindstyrka-sensor",
  "level": 2
}, {
  "value": "Zigbee2mqtt: Complete management of the OWON PIR313-E sensor",
  "id": "zigbee2mqtt-complete-management-of-the-owon-pir313-e-sensor",
  "level": 2
}, {
  "value": "Dashboard: Add one &quot;Add&quot; button per column",
  "id": "dashboard-add-one-add-button-per-column",
  "level": 2
}, {
  "value": "Sending an MQTT message in scenes",
  "id": "sending-an-mqtt-message-in-scenes",
  "level": 2
}, {
  "value": "Fixes",
  "id": "fixes",
  "level": 2
}, {
  "value": "How to upgrade?",
  "id": "how-to-upgrade",
  "level": 2
}, {
  "value": "Support us",
  "id": "support-us",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
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
      children: "2 weeks ago, I was live on Youtube for a live coding session that lasted over 7 hours!!!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In this live, I developed from start to finish a Sonos integration for Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The live coding was in French, if you are interested, the live replay is available ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.youtube.com/watch?v=M4vOjQXMiZI",
        children: "here on YouTube"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today, I'm happy to release Gladys Assistant 4.32, which includes this Sonos integration 😁"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "sonos-integration-in-gladys",
      children: "Sonos integration in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now you can connect your Sonos speakers to Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Sonos integration",
        src: (__webpack_require__(89540)/* ["default"] */.A) + "",
        width: "1600",
        height: "767"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On the dashboard, you'll find a \"Music\" widget that lets you control a speaker:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Sonos music dashboard",
        src: (__webpack_require__(12681)/* ["default"] */.A) + "",
        width: "1600",
        height: "1481"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And that's all for now!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And yes, the goal of this development was to have a working MVP of a Sonos integration in Gladys, and I think the contract is fulfilled 😊"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now I'm looking for a maintainer who'd like to help move this integration forward."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want to lend a hand tomorrow, join us ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "on the forum"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "sending-a-message-when-the-battery-is-low",
      children: "Sending a message when the battery is low"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You've dreamed of it? Lokkye has done it for you!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From now on, every Saturday morning at 9am, if one or more devices in your connected home have a battery level below a certain threshold, Gladys will send you a message (on Telegram if you've set it up):"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Battery alert",
        src: (__webpack_require__(28467)/* ["default"] */.A) + "",
        width: "1600",
        height: "902"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks Lokkye for the development 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "zigbee2mqtt-managing-the-ikea-vindstyrka-sensor",
      children: "Zigbee2mqtt: Managing the IKEA Vindstyrka sensor"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.ikea.com/fr/fr/p/vindstyrka-capteur-qualite-de-lair-connecte-00498231/",
        children: "IKEA Vindstyrka Zigbee"
      }), " sensor returned a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "voc_index"
      }), " value that we didn't manage in Gladys for the moment. Unlike a \"raw\" VOC value, this one represents a variation:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "The index has a scale from 0 to 500, with a reference value of 100 representing average air quality over the last 24 hours.\nA reading below 100 indicates an improvement in air quality, and above 100 a deterioration."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Will_71 on the forum has looked into the subject and brought us the accounting! Thanks 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "zigbee2mqtt-complete-management-of-the-owon-pir313-e-sensor",
      children: "Zigbee2mqtt: Complete management of the OWON PIR313-E sensor"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This sensor exposes 2 features we didn't manage yet: \"low battery\" (we already manage the battery level), and \"tamper detection\" (if a thief tries to remove the motion sensor)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Will_71 has worked on this again, many thanks 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "dashboard-add-one-add-button-per-column",
      children: "Dashboard: Add one \"Add\" button per column"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A small UX fix that may seem simple but will greatly simplify our lives: there's now an \"Add +\" button per column on the dashboard!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Edit dashboard buttons",
        src: (__webpack_require__(57350)/* ["default"] */.A) + "",
        width: "1600",
        height: "860"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thank you Brisou for your first PR on Gladys, which I hope will be the first of many 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "sending-an-mqtt-message-in-scenes",
      children: "Sending an MQTT message in scenes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's now possible to send an MQTT message in scenes, to a custom topic and with a custom message."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Send MQTT message in scenes",
        src: (__webpack_require__(98546)/* ["default"] */.A) + "",
        width: "1600",
        height: "925"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks Lokkye for the great PR 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "fixes",
      children: "Fixes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A few fixes have crept into this release!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Some fixes on the new scene tag filtering feature by Lokkye 🙌"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "In scenes, some selectors were overlapping each other, this is no longer the case. Thanks Will_71 🙌"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "The Gladys container launches the Node process directly, which allows the database to be closed correctly when Gladys stops. Thanks cicoub13 for the fix 🙌"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The complete CHANGELOG is available ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/releases/tag/v4.32.0",
        children: "here"
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
        children: ["Subscribe to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/plus",
          children: "Gladys Plus"
        })]
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
28467(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/batter_level_alert-737f6a2f4a1f5f57acc8c134a95a2b31.jpg");

},
57350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/edit_dashboard_buttons-4e1036e53564b844101ae08eb7098c49.jpg");

},
12681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/music_dashboard-7146e42a4609f03937be8d10826b7030.jpg");

},
98546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/send_mqtt_message-3bad678aff7bb0864a55b46b80b83da5.jpg");

},
89540(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/sonos_integration-d092214eb589176e35965ad82dd5f464.jpg");

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
15251(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-4-32-sonos-integration","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2023-12-11-gladys-4-32-sonos.md","source":"@site/blog/2023-12-11-gladys-4-32-sonos.md","title":"Sonos integration now available!","description":"Following 7 hours of live coding on YouTube, the developed Sonos integration is now available!","date":"2023-12-11T00:00:00.000Z","tags":[],"readingTime":3.38,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Sonos integration now available!","description":"Following 7 hours of live coding on YouTube, the developed Sonos integration is now available!","authors":"pierregilles","image":"/img/presentation/sonos-gladys-4-32.jpg","slug":"gladys-4-32-sonos-integration"},"unlisted":false,"prevItem":{"title":"Gladys Assistant\'s 2023 Year In Review","permalink":"/zh-Hans/blog/2023-year-in-review"},"nextItem":{"title":"Tag filtering & MQTT in scenes in Gladys Assistant 4.31","permalink":"/zh-Hans/blog/gladys-4-31-tags-mqtt-scene"}}')

},

};
;
"use strict";
exports.ids = ["9175"];
exports.modules = {
3002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_08_26_gladys_4_27_dashboard_md_6b7_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_08_26_gladys_4_27_dashboard_md_6b7_json__rspack_import_0 = __webpack_require__(99744);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'IKEA TRÅDFRI Zigbee compatibility & dashboard device renaming',
	description: 'Even more personalized dashboards and Zigbee compatibility in Gladys Assistant 4.27',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-assistant-4-27.jpg',
	slug: 'gladys-4-27-dashboard-rename-and-zigbee'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Rename your devices on the dashboard",
  "id": "rename-your-devices-on-the-dashboard",
  "level": 2
}, {
  "value": "New Zigbee devices",
  "id": "new-zigbee-devices",
  "level": 2
}, {
  "value": "IKEA TRÅDFRI button with dimmer switch",
  "id": "ikea-trådfri-button-with-dimmer-switch",
  "level": 3
}, {
  "value": "IKEA STYRBAR button with intensity and color control",
  "id": "ikea-styrbar-button-with-intensity-and-color-control",
  "level": 3
}, {
  "value": "Xiaomi WXKG01LM button",
  "id": "xiaomi-wxkg01lm-button",
  "level": 3
}, {
  "value": "Missing Zigbee compatibility?",
  "id": "missing-zigbee-compatibility",
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
      children: "Hello everyone!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hope you spent good holidays ☀️"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["On the Gladys Assistant front, I returned last week with an update to v4.26.1, which introduced a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/t/gladys-assistant-v4-26-1-mosquitto-fixed-at-v2-0-15-google-home-graph-improved/118",
        children: "set of fixes"
      }), " in response to your feedback over the summer."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today I'm following up with a more important update in terms of features: Gladys Assistant 4.27."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "rename-your-devices-on-the-dashboard",
      children: "Rename your devices on the dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This was a feature that had long been the talk of the town: what should be displayed on the dashboard to properly \"define\" a feature: the device name? Device name and room? The feature name? Or both?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "After some thought, I realized that we'd never be able to please everyone, so I decided to let the user modify the name when displaying it on the dashboard."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In concrete terms, on the dashboard, in the \"Devices\" widget you can rename and move each device according to your preference:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("div", {
      class: "videoContainer",
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)("video", {
        width: "100%",
        controls: true,
        autoplay: true,
        loop: true,
        muted: true,
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)("source", {
          src: "https://gladysassistant-assets.b-cdn.net/gladys-4-27/gladys-rename-devices-en.mp4",
          type: "video/mp4"
        }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: "Your browser does not support the video tag."
        })]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "new-zigbee-devices",
      children: "New Zigbee devices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys is now fully compatible with 3 new Zigbee devices, including two from the IKEA connected range."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For those unfamiliar with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.ikea.com/us/en/cat/eclairage-connecte-36812/",
        children: "IKEA Zigbee connected lighting offering"
      }), ", it's very affordable (from €9.99 for a bulb, €6.99 for a switch), and of good quality. If you're new to home automation, this is a good way to start. What's more, it's available in all IKEA stores or by delivery on their website!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "ikea-trådfri-button-with-dimmer-switch",
      children: "IKEA TRÅDFRI button with dimmer switch"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "IKEA TRÅDFRI with dimmer switch",
        src: (__webpack_require__(14735)/* ["default"] */.A) + "",
        width: "900",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This button is a very inexpensive On/Off switch (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.ikea.com/us/en/p/tradfri-variateur-dintensite-sans-fil-connecte-blanc-70408595/",
        children: "6,99€ at IKEA"
      }), "), which also acts as a dimmer when pressed on or off."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I've added support for 5 actions:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "On"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Off"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Increase brightness"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Reduce brightness"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Stop brightness"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "These actions are available in scenes for your automations:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "IKEA button in Gladys scenes",
        src: (__webpack_require__(84131)/* ["default"] */.A) + "",
        width: "1334",
        height: "1046"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "ikea-styrbar-button-with-intensity-and-color-control",
      children: "IKEA STYRBAR button with intensity and color control"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "IKEA STYRBAR",
        src: (__webpack_require__(55496)/* ["default"] */.A) + "",
        width: "900",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This connected remote control allows you to control the On/Off, dimming and color of one or more bulbs. It's available for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.ikea.com/us/en/p/styrbar-remote-control-smart-white-80488370/",
        children: "9,99€ at IKEA"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I've added support for 11 actions:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "On"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Off"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Increase brightness"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Reduce brightness"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Stop brightness"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Left arrow click"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Right arrow click"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Left arrow hold"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Right arrow held"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Left arrow released"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Right arrow released"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "These actions are also available in scenes to automate whatever you wish."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Of course, when used in Gladys, these two buttons can control anything and everything."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For those who want more \"direct\" control, it's possible to use the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.zigbee2mqtt.io/guide/usage/binding.html",
        children: "Bindings Zigbee2mqtt"
      }), " to enable a direct association between the switch and the bulb, in direct Zigbee."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This allows you to have live control that works even if your home automation is inactive."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "xiaomi-wxkg01lm-button",
      children: "Xiaomi WXKG01LM button"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I've added a few actions that were missing for this button:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Triple click"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Quadruple click"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Release click"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Lots of clicks"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "missing-zigbee-compatibility",
      children: "Missing Zigbee compatibility?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you have a Zigbee device that is not fully supported by Gladys, don't hesitate to post a message ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "on the forum"
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
        }), ", at -40% right now!!"]
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
55496(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/ikea-styrbar-button-4d47809126e61536e3d2a622ce1e820c.jpg");

},
14735(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/ikea-tradfri-button-14150b790faaaa72ecf7ad299421bec5.jpg");

},
84131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scene-ikea-button-5e82e39602fb30b12ca6201f800f5fdc.jpg");

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
99744(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-4-27-dashboard-rename-and-zigbee","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2023-08-26-gladys-4-27-dashboard.md","source":"@site/blog/2023-08-26-gladys-4-27-dashboard.md","title":"IKEA TRÅDFRI Zigbee compatibility & dashboard device renaming","description":"Even more personalized dashboards and Zigbee compatibility in Gladys Assistant 4.27","date":"2023-08-26T00:00:00.000Z","tags":[],"readingTime":3.48,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"IKEA TRÅDFRI Zigbee compatibility & dashboard device renaming","description":"Even more personalized dashboards and Zigbee compatibility in Gladys Assistant 4.27","authors":"pierregilles","image":"/img/presentation/gladys-assistant-4-27.jpg","slug":"gladys-4-27-dashboard-rename-and-zigbee"},"unlisted":false,"prevItem":{"title":"MELCloud integration, full-screen tablet mode, Tuya shutters","permalink":"/zh-Hans/blog/gladys-4-29-melcloud-full-screen"},"nextItem":{"title":"Gladys Assistant is now compatible with Tuya devices!","permalink":"/zh-Hans/blog/gladys-assistant-tuya"}}')

},

};
;
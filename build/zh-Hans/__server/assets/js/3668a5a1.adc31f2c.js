"use strict";
exports.ids = ["2947"];
exports.modules = {
23907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_10_30_gladys_4_30_alarm_mode_md_366_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_10_30_gladys_4_30_alarm_mode_md_366_json__rspack_import_0 = __webpack_require__(16741);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys gets a full alarm!',
	description: 'Security is the basis of home automation. Today, Gladys includes a complete alarm to help you manage your home\'s security.',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-assistant-4-30-en.jpg',
	slug: 'gladys-4-30-alarm-mode'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "An alarm in Gladys",
  "id": "an-alarm-in-gladys",
  "level": 2
}, {
  "value": "Node-RED integration",
  "id": "node-red-integration",
  "level": 2
}, {
  "value": "Tuya: Power consumption management",
  "id": "tuya-power-consumption-management",
  "level": 2
}, {
  "value": "Launch a scene from chat",
  "id": "launch-a-scene-from-chat",
  "level": 2
}, {
  "value": "Launch a scene with MQTT",
  "id": "launch-a-scene-with-mqtt",
  "level": 2
}, {
  "value": "Launch a scene when Gladys starts up",
  "id": "launch-a-scene-when-gladys-starts-up",
  "level": 2
}, {
  "value": "Zigbee2mqtt: Interface enhancement",
  "id": "zigbee2mqtt-interface-enhancement",
  "level": 2
}, {
  "value": "Homekit: Humidity and leak sensors management",
  "id": "homekit-humidity-and-leak-sensors-management",
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
    code: "code",
    h2: "h2",
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
      children: "Gladys Assistant 4.30 has just been released, and it's a hell of a version!!! 🥳"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The main feature is the complete management of an Alarm mode that allows you to set up a complete home security system."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys iPad Alarm Mockup",
        src: (__webpack_require__(62121)/* ["default"] */.A) + "",
        width: "2400",
        height: "1800"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You've got to admit, it does make you want to 😎"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "an-alarm-in-gladys",
      children: "An alarm in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys can now replace a complete alarm system by managing the various states of any good alarm system:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys dashboard alarm",
        src: (__webpack_require__(43951)/* ["default"] */.A) + "",
        width: "1600",
        height: "1580"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you'd like to set up an alarm with Gladys, I've written ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/dashboard/alarm/",
        children: "a complete tutorial"
      }), " on the subject!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "node-red-integration",
      children: "Node-RED integration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["It was already possible to interface Node-RED with Gladys (with the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/integrations/mqtt",
        children: "MQTT integration"
      }), "), but this required some knowledge as you had to launch Node-RED yourself."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Lokkye has worked on a native integration so that anyone can launch a Node-RED instance alongside Gladys with a single click!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From now on, just go to the \"Node-RED\" integration and click on \"Activate\" to launch a Node-RED container:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Node-RED Gladys integration",
        src: (__webpack_require__(52316)/* ["default"] */.A) + "",
        width: "2564",
        height: "1126"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "tuya-power-consumption-management",
      children: "Tuya: Power consumption management"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Tuya integration now supports connected sockets that report electricity consumption data."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to Lokkye for the development 🙏"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "launch-a-scene-from-chat",
      children: "Launch a scene from chat"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This was already possible with the ChatGPT integration, but this command has just been added to the Gladys \"local\" chat model. You can now ask Gladys to launch a scene in the chat:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Launch chat scene",
        src: (__webpack_require__(54221)/* ["default"] */.A) + "",
        width: "1616",
        height: "576"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to Lokkye for the development 🙏"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "launch-a-scene-with-mqtt",
      children: "Launch a scene with MQTT"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now launch a scene using MQTT by posting a message on the topic:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "gladys/master/scene/SCENE_SELECTOR/start\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["By replacing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "SCENE_SELECTOR"
      }), " with the scene selector, which can be found in the scene edition URL."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For example, for the scene ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://192.168.1.10/dashboard/scene/cinema"
      }), ", you'll need to send a message to the topic:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "gladys/master/scene/cinema/start\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks Lokkye for the development 🙏"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "launch-a-scene-when-gladys-starts-up",
      children: "Launch a scene when Gladys starts up"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Want to receive a message when Gladys restarts? Perform an operation every time Gladys starts up?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now launch a scene when Gladys starts up:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene when Gladys starts",
        src: (__webpack_require__(78121)/* ["default"] */.A) + "",
        width: "2470",
        height: "892"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks Lokkye for the development 🙏"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "zigbee2mqtt-interface-enhancement",
      children: "Zigbee2mqtt: Interface enhancement"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Devices already added will no longer be displayed by default in the \"Zigbee network discovery\" page:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Zigbee2mqtt hide devices already added",
        src: (__webpack_require__(19296)/* ["default"] */.A) + "",
        width: "2464",
        height: "846"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And the Zigbee2mqtt URL is now displayed on the configuration page!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Bug correction"
      }), ": When changing the USB key port, Gladys restarts the Zigbee2mqtt container with the correct volume."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to AlexTrovato and Cicoub13 for these improvements 🙏"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "homekit-humidity-and-leak-sensors-management",
      children: "Homekit: Humidity and leak sensors management"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From now on, your leak and humidity sensors will be put back into Homekit!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks bertrandda for the development 🙏"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The complete CHANGELOG is available ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/releases/tag/v4.30.0",
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
43951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm-dashboard-73bbb151546e4c87ae6a45c0ab5dd496.jpg");

},
62121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm_ipad_mockup_en-7d8787174e0fcaaac9769462a2d758b8.png");

},
54221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cinema-scene-2b612b2cc96b021b7c59df5ab3ab2dc7.png");

},
78121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/gladys-start-trigger-cfadc33b1dceb75b9148a9d6ed934193.png");

},
52316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/node-red-integration-b48df8704c13ddbc6a8c6284d36e8f2a.png");

},
19296(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zigbee2mqtt-hide-already-added-devices-acc2dd3e27024d0a152e7cd43d524154.png");

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
16741(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-4-30-alarm-mode","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2023-10-30-gladys-4-30-alarm-mode.md","source":"@site/blog/2023-10-30-gladys-4-30-alarm-mode.md","title":"Gladys gets a full alarm!","description":"Security is the basis of home automation. Today, Gladys includes a complete alarm to help you manage your home\'s security.","date":"2023-10-30T00:00:00.000Z","tags":[],"readingTime":3.1,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys gets a full alarm!","description":"Security is the basis of home automation. Today, Gladys includes a complete alarm to help you manage your home\'s security.","authors":"pierregilles","image":"/img/presentation/gladys-assistant-4-30-en.jpg","slug":"gladys-4-30-alarm-mode"},"unlisted":false,"prevItem":{"title":"Tag filtering & MQTT in scenes in Gladys Assistant 4.31","permalink":"/zh-Hans/blog/gladys-4-31-tags-mqtt-scene"},"nextItem":{"title":"MELCloud integration, full-screen tablet mode, Tuya shutters","permalink":"/zh-Hans/blog/gladys-4-29-melcloud-full-screen"}}')

},

};
;
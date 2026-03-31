"use strict";
exports.ids = ["8620"];
exports.modules = {
44179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_10_09_gladys_4_29_md_296_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_10_09_gladys_4_29_md_296_json__rspack_import_0 = __webpack_require__(72973);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'MELCloud integration, full-screen tablet mode, Tuya shutters',
	description: 'New integrations, dashboard enhancements and much more in Gladys Assistant 4.29',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-4-29.jpg',
	slug: 'gladys-4-29-melcloud-full-screen'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Integrations with Mitsubishi air conditioners",
  "id": "integrations-with-mitsubishi-air-conditioners",
  "level": 3
}, {
  "value": "Full screen mode for Gladys tablets",
  "id": "full-screen-mode-for-gladys-tablets",
  "level": 3
}, {
  "value": "Set room temperature/humidity widget limits",
  "id": "set-room-temperaturehumidity-widget-limits",
  "level": 3
}, {
  "value": "Camera images expire",
  "id": "camera-images-expire",
  "level": 3
}, {
  "value": "Tuya roller shutter management",
  "id": "tuya-roller-shutter-management",
  "level": 3
}, {
  "value": "Lots of fixes",
  "id": "lots-of-fixes",
  "level": 3
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
      children: "Another Gladys update with lots of new features 🥳"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "integrations-with-mitsubishi-air-conditioners",
      children: "Integrations with Mitsubishi air conditioners"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's now possible to connect your Mitsubishi air conditioners (connected via MELCloud) to Gladys!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Mitsubishi air conditioner",
        src: (__webpack_require__(51895)/* ["default"] */.A) + "",
        width: "1600",
        height: "1555"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to @Lokkye for the development 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "full-screen-mode-for-gladys-tablets",
      children: "Full screen mode for Gladys tablets"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you're using Gladys on a touchscreen tablet somewhere in your home, it's likely that you'll want to display the Gladys dashboard full-screen, without the option of navigating away from that screen."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is now possible, thanks to a parameter to be added to the URL:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "?fullscreen=force\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To enable better use of \"tablet on the wall\" type devices, the duration of connection sessions has been increased to 1 year."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "(Sessions can still be revoked in Gladys settings at any time)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "set-room-temperaturehumidity-widget-limits",
      children: "Set room temperature/humidity widget limits"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's now possible to define at what limit the colors of the \"Temperature/Humidity\" widgets change."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A bedroom doesn't necessarily have the same limits as a bathroom, or a terrarium!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When editing a dashboard, you can now define customized thresholds:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Humidity widget limits",
        src: (__webpack_require__(59449)/* ["default"] */.A) + "",
        width: "1600",
        height: "1259"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Temperature widget limits",
        src: (__webpack_require__(51446)/* ["default"] */.A) + "",
        width: "1600",
        height: "1260"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks @Lokkye for this development 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "camera-images-expire",
      children: "Camera images expire"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From now on, expired camera images will no longer be displayed on the dashboard:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Camera image expiration",
        src: (__webpack_require__(63324)/* ["default"] */.A) + "",
        width: "1600",
        height: "662"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "tuya-roller-shutter-management",
      children: "Tuya roller shutter management"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The Tuya integration was released this summer, and a new type of device has just been added: roller shutters."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks @Lokkye for this development 🙌"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "lots-of-fixes",
      children: "Lots of fixes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["In MQTT, NextCloud Talk and Tasmota integration, password fields will no longer be automatically filled in by browsers (to avoid auto-fill bugs) (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1881",
          children: "#1881"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "On the dashboard, some devices no longer have value expiration dates (smoke detector, water leak detector, button, and text)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Improved translations in OpenWeather integration (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1897",
          children: "#1897"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["In scenes, in the \"Control a device\" action, binary devices are initialized to 0 by default instead of \"empty value\" (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1901",
          children: "#1901"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["In MQTT integration, an error message is added when a device is created with the same external ID as an existing device (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1902",
          children: "#1902"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Better validation of \"string\" states (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1894",
          children: "#1894"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Full CHANGELOG available ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/releases/tag/v4.29.0",
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
63324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-expiration-b0e1b896e8378a98e50a6b629d2b0269.jpg");

},
59449(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/humidity-thresholds-e51f253741a26dd8a945d0c3e6b35d80.jpg");

},
51895(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/mitsubishi-ac-231f3099800877d0104957a2b2097922.jpg");

},
51446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/temperature-thresholds-f1d0232ddb103e05341d120789195f6d.jpg");

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
72973(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-4-29-melcloud-full-screen","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2023-10-09-gladys-4-29.md","source":"@site/blog/2023-10-09-gladys-4-29.md","title":"MELCloud integration, full-screen tablet mode, Tuya shutters","description":"New integrations, dashboard enhancements and much more in Gladys Assistant 4.29","date":"2023-10-09T00:00:00.000Z","tags":[],"readingTime":2.58,"hasTruncateMarker":false,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"MELCloud integration, full-screen tablet mode, Tuya shutters","description":"New integrations, dashboard enhancements and much more in Gladys Assistant 4.29","authors":"pierregilles","image":"/img/presentation/gladys-4-29.jpg","slug":"gladys-4-29-melcloud-full-screen"},"unlisted":false,"prevItem":{"title":"Gladys gets a full alarm!","permalink":"/zh-Hans/blog/gladys-4-30-alarm-mode"},"nextItem":{"title":"IKEA TRÅDFRI Zigbee compatibility & dashboard device renaming","permalink":"/zh-Hans/blog/gladys-4-27-dashboard-rename-and-zigbee"}}')

},

};
;
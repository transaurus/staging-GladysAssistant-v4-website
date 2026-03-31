"use strict";
exports.ids = ["3440"];
exports.modules = {
85774(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_06_15_gladys_assistant_4_25_md_182_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_06_15_gladys_assistant_4_25_md_182_json__rspack_import_0 = __webpack_require__(20476);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys Assistant 4.25: Scene and dashboard enhancements',
	description: 'A new "Devices" widget, send a camera image in scenes, and more!',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-assistant-4-25-en.jpg',
	slug: 'gladys-assistant-4-25'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "New &quot;Devices&quot; widget",
  "id": "new-devices-widget",
  "level": 2
}, {
  "value": "Improved scene UX",
  "id": "improved-scene-ux",
  "level": 2
}, {
  "value": "Send camera image in scenes",
  "id": "send-camera-image-in-scenes",
  "level": 2
}, {
  "value": "Google Home: Fix brightness management bug",
  "id": "google-home-fix-brightness-management-bug",
  "level": 2
}, {
  "value": "Surface units added",
  "id": "surface-units-added",
  "level": 2
}, {
  "value": "HomeKit: Link reset button added",
  "id": "homekit-link-reset-button-added",
  "level": 2
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
      children: "New version of Gladys today with some really nice changes that improve the way Gladys is used on a daily basis."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Just before I get started, I wanted to tell you about a great deal I found on Amazon the other day, which I think is really worth it to get started in home automation with reliable, high-performance equipment:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Beelink mini-PCs are in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://amzn.to/3p9apPx",
        children: "flash promotion, at 159$ (-20%)"
      }), " for an 8GB RAM mini-PC, 128GB SSD, Intel Quad-Core processor, Gigabit Ethernet, USB 3.0, Wi-Fi and Bluetooth."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The 16GB RAM version is priced at ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://amzn.to/3JjuV6T",
        children: "179$"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Beelink mini-PC deal",
        src: (__webpack_require__(24186)/* ["default"] */.A) + "",
        width: "2418",
        height: "1358"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Some people in the community have even ordered several, so to speak 😂"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The community is pretty unanimous in saying that today, mini-PCs are a more than serious alternative to the Raspberry Pi, hard to find, and ultimately at a similar price when you take everything into account ( Board + SSD + power supply + case )."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "new-devices-widget",
      children: "New \"Devices\" widget"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It was a point of frustration for many, until now it wasn't possible to create a \"Devices\" widget mixing devices from different rooms."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "That's now fixed with this new widget developed by Lokkye, which is fully customizable: you can drag any device into it, and put any title you like :"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Devices widget",
        src: (__webpack_require__(83667)/* ["default"] */.A) + "",
        width: "1920",
        height: "1080"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "improved-scene-ux",
      children: "Improved scene UX"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The overall experience of creating and editing scenes has been greatly enhanced in this version."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "First of all, a scene now has an editable description, allowing you to better discern your scenes:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene description",
        src: (__webpack_require__(70800)/* ["default"] */.A) + "",
        width: "2372",
        height: "582"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This description can be edited super-simply by clicking on the description in the scene:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene header desktop",
        src: (__webpack_require__(4012)/* ["default"] */.A) + "",
        width: "2510",
        height: "1376"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You'll notice that the header at the top of the scene editing screen has been improved to be more functional and easier to read. Secondary functions (duplication and deletion) have been relegated to a \"More\" button, so as not to constantly overload the screen with buttons."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On mobile, responsive has been improved to keep the screen clear and legible even on small screens:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene header mobile",
        src: (__webpack_require__(27056)/* ["default"] */.A) + "",
        width: "1000",
        height: "1358"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Finally, Gladys now offers the most frequently requested feature: moving actions/blocks of actions within scenes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This selectable cross makes it possible to grab actions and drag & drop them to another point in the scene."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Move action-scene",
        src: (__webpack_require__(91344)/* ["default"] */.A) + "",
        width: "2418",
        height: "1076"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "send-camera-image-in-scenes",
      children: "Send camera image in scenes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Super PR from Lokkye, which now lets you send a camera image by message in scenes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The idea behind this feature is to be able to make \"If motion is detected THEN send me an image of the outside camera by message\" scenes:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Send camera image in scenes",
        src: (__webpack_require__(37733)/* ["default"] */.A) + "",
        width: "894",
        height: "868"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "google-home-fix-brightness-management-bug",
      children: "Google Home: Fix brightness management bug"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I got feedback from a Swedish Gladys user who explained that his IKEA Tradfi bulbs weren't working very well with Google Home integration."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When he set the brightness to 100% in Google Home, his bulbs were only at half their brightness in Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The reason for this bug was quite simple: IKEA Tradfi bulbs have a brightness range of 0-254 and not 0-100%, so a small conversion step is needed to go from the Google Home scale (0-100%) to the Tradfi scale (0-254), and back again."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The bug has been corrected ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/pull/1813",
        children: "in this PR"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "surface-units-added",
      children: "Surface units added"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This was a request from Hizo on the forum, so it's now possible to add surface MQTT devices."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Useful, for example, for a robot vacuum cleaner that returns the cleaned/cleaning surface."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Surface",
        src: (__webpack_require__(29920)/* ["default"] */.A) + "",
        width: "822",
        height: "270"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "homekit-link-reset-button-added",
      children: "HomeKit: Link reset button added"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to a PR from bertrandda, it is now possible to reset the link with Homekit in Gladys :"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "HomeKit reset",
        src: (__webpack_require__(19320)/* ["default"] */.A) + "",
        width: "994",
        height: "372"
      })
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
      children: "Thanks to everyone who contributed to this release and gave their feedback."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want to talk about this release, you're all welcome on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "forum"
      }), "!"]
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
24186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/beelink-deal-56e8f7f14343292de6b2e3088676c052.jpg");

},
83667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/devices-widget-d0836b502239782a4c052a478d11cca9.jpg");

},
19320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/homekit-reset-1714c301c9dd23ea3d67e0d80949b035.jpg");

},
91344(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/move-action-scene-94a2181abc98c32cf588041b9db0aac2.jpg");

},
37733(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scene-camera-image-a2fc7c1980e2f84131aecae36600f70e.jpg");

},
70800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scene-description-d948f61ecf17ec9fc6b7795d96168298.jpg");

},
4012(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scene-header-desktop-ee3c237fa5bbc9de01ab9d9d36fbfc77.jpg");

},
27056(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scene-header-mobile-524edc66cad491964d51bc71d902ada3.jpg");

},
29920(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/surface-9f40db994dc8152af7340b22ba47496f.jpg");

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
20476(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-assistant-4-25","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2023-06-15-gladys-assistant-4-25.md","source":"@site/blog/2023-06-15-gladys-assistant-4-25.md","title":"Gladys Assistant 4.25: Scene and dashboard enhancements","description":"A new \\"Devices\\" widget, send a camera image in scenes, and more!","date":"2023-06-15T00:00:00.000Z","tags":[],"readingTime":4.12,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys Assistant 4.25: Scene and dashboard enhancements","description":"A new \\"Devices\\" widget, send a camera image in scenes, and more!","authors":"pierregilles","image":"/img/presentation/gladys-assistant-4-25-en.jpg","slug":"gladys-assistant-4-25"},"unlisted":false,"prevItem":{"title":"Gladys Assistant is now compatible with Tuya devices!","permalink":"/zh-Hans/blog/gladys-assistant-tuya"},"nextItem":{"title":"Camera live streaming in Gladys Assistant 4.23","permalink":"/zh-Hans/blog/camera-live-streaming-gladys-assistant-4-23"}}')

},

};
;
"use strict";
exports.ids = ["6795"];
exports.modules = {
85872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2021_04_26_gladys_assistant_4_3_is_here_md_a62_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2021_04_26_gladys_assistant_4_3_is_here_md_a62_json__rspack_import_0 = __webpack_require__(42078);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys Assistant 4.3 is available with many new scenes features',
	description: 'It\'s now easier than ever to create complex scene in Gladys Assistant 4',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-4-3-en-cover.jpg',
	slug: 'gladys-assistant-4-3-is-here'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What&#39;s new in version 4.3",
  "id": "whats-new-in-version-43",
  "level": 2
}, {
  "value": "A new trigger &quot;When the house is empty&quot;",
  "id": "a-new-trigger-when-the-house-is-empty",
  "level": 3
}, {
  "value": "Its opposite, &quot;When the house is no longer empty&quot;",
  "id": "its-opposite-when-the-house-is-no-longer-empty",
  "level": 3
}, {
  "value": "More precise, the &quot;back home&quot; trigger",
  "id": "more-precise-the-back-home-trigger",
  "level": 3
}, {
  "value": "And its opposite, &quot;Left home&quot;",
  "id": "and-its-opposite-left-home",
  "level": 3
}, {
  "value": "Time condition",
  "id": "time-condition",
  "level": 3
}, {
  "value": "Get the result of an HTTP request",
  "id": "get-the-result-of-an-http-request",
  "level": 3
}, {
  "value": "Correction of bugs and typos in the interface",
  "id": "correction-of-bugs-and-typos-in-the-interface",
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
      children: "Today is the release of Gladys Assistant v4.3, a new update that puts the scenes in the spotlight!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Scenes are the backbone of home automation."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Having a connected home is not just to control it remotely: it is also to automate what is done regularly, to bring a share of magic to our home and make our daily lives easier."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "whats-new-in-version-43",
      children: "What's new in version 4.3"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "a-new-trigger-when-the-house-is-empty",
      children: "A new trigger \"When the house is empty\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Want to be sure everything is off when the last person leaves the house?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is now possible to make a scene that will be triggered when the last one leaves the house."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "House is empty Gladys Assistant",
        src: (__webpack_require__(89461)/* ["default"] */.A) + "",
        width: "2482",
        height: "1032"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In terms of presense detection, the feature is present from Gladys Assistant v4.1, and can work in different ways:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Via bluetooth: There are Bluetooth key fobs like the Nut which are very easily detectable by Gladys. The principle is simple: when you leave your home, Gladys will no longer \"see\" the bluetooth keychain and will mark you as absent, and when you come back, Gladys will detect the keychain and mark you as present."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "In the scenes: it is possible to create a scene which is triggered after a change of state of a sensor for example, which will mark you as present/absent from the house. So you can do more or less what you want to mark yourself as present/absent at home."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "its-opposite-when-the-house-is-no-longer-empty",
      children: "Its opposite, \"When the house is no longer empty\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Rather, you want to do another scene that will turn on everything when someone comes home and the house was empty before them."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is possible with the trigger \"when the house is no longer empty\":"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "House no longer empty Gladys Assistant",
        src: (__webpack_require__(10419)/* ["default"] */.A) + "",
        width: "2446",
        height: "1086"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "more-precise-the-back-home-trigger",
      children: "More precise, the \"back home\" trigger"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Want to trigger a scene only when a specific user comes home?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There is now a \"Back home\" trigger that will only fire when the selected user returns home."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Back at home Gladys Assistant",
        src: (__webpack_require__(52222)/* ["default"] */.A) + "",
        width: "2420",
        height: "1204"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Convenient to make a specific scene for each person in the house."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "and-its-opposite-left-home",
      children: "And its opposite, \"Left home\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Same concept but for the departure of the house."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Left home Gladys Assistant",
        src: (__webpack_require__(14588)/* ["default"] */.A) + "",
        width: "2516",
        height: "1190"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "time-condition",
      children: "Time condition"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["While it is possible to make a scene that is triggered with a certain recurrence (with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/scenes/scheduled-trigger",
        children: "scheduled scenes"
      }), "), it was not possible until then to add a time-based condition in the scene."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For example, let's say you want to make a scene:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "\"When the living room temperature is < 20°C\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "AND \"it is between 9h and 22h\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "THEN send me a message \"The temperature is too low\""
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is possible with the time-based condition!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Example of a scene that will only run between 8 a.m. and 12 p.m. on weekends:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Time condition Gladys Assistant",
        src: (__webpack_require__(53834)/* ["default"] */.A) + "",
        width: "2432",
        height: "1206"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "get-the-result-of-an-http-request",
      children: "Get the result of an HTTP request"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Since Gladys v4.0.3, it is possible to make HTTP requests in the scenes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Convenient for calling an external API in scenes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From now on, it is possible to retrieve the response of the HTTP call, and to use the result of the request in the scenes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For example, let's say you want to do a scene that will call Coinbase's API every morning to retrieve the price of Bitcoin, and send you a message with the price."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is now possible, and here is an example in video:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("div", {
      class: "videoContainer",
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)("video", {
        width: "100%",
        controls: true,
        autoplay: true,
        loop: true,
        muted: true,
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)("source", {
          src: "/img/articles/en/gladys-4-3/bitcoin-price.mp4",
          type: "video/mp4"
        }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: "Your browser does not support the video tag."
        })]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Of course this is just one example among many."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You could request a weather API, traffic API, a sensor at home, IFTTT, and many others..."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And that's not all! Variables retrieved in the HTTP call can be used in the \"continue only if\" condition, which allows you to verify that a condition is true."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Continue only if Gladys Assistant",
        src: (__webpack_require__(39815)/* ["default"] */.A) + "",
        width: "2470",
        height: "1056"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Receive a message only if the outside temperature is < 32°F."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Receive an alert if a company stock you follow drops by more than 20%"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "correction-of-bugs-and-typos-in-the-interface",
      children: "Correction of bugs and typos in the interface"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Many of you have reported small misspellings in the interface, or responsive bugs."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Without going into detail, here is the list of the various corrective commits for this update:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Fix #1147: make signup process more responsive ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/issues/1147",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "#1147"
          })
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Fix #1161: correct french typo ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/issues/1161",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "#1161"
          })
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Fix #1162: correct date format in french scheduled trigger ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/issues/1162",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "#1162"
          })
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Fix url in signup process ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/commit/8ee5793bfa1b3153c8c26bc1e4e2c9b8f2144a8a",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "8ee5793"
          })
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Add switch dimmer to supported feature types in dashboard box ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/commit/b7406570a9e96d4590f78c05bca97a84b8978001",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "b740657"
          })
        })]
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
      children: "Once again, thank you to everyone who contributed to this release: whether it's coding, suggesting new ideas on the forum, or testing new features, every help is invaluable and makes the product complete!"
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
52222(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/back-at-home-2afb34b05754323fa8e694f3a7abd9d8.png");

},
39815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/continue-only-if-7350fb6a488e91ca884addb88ee833ba.png");

},
89461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/house-empty-77d66849937857ca23209bbca1f2b635.png");

},
10419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/house-no-longer-empty-f18f5cf767a4d73094a11b8c0ba16493.png");

},
14588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/left-home-2a4689c4fea85e86a207bb9f6a48868a.png");

},
53834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/time-condition-4a9fc552b9c74a001939bdc3fb290b2c.png");

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
42078(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-assistant-4-3-is-here","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2021-04-26-gladys-assistant-4-3-is-here.md","source":"@site/blog/2021-04-26-gladys-assistant-4-3-is-here.md","title":"Gladys Assistant 4.3 is available with many new scenes features","description":"It\'s now easier than ever to create complex scene in Gladys Assistant 4","date":"2021-04-26T00:00:00.000Z","tags":[],"readingTime":4.68,"hasTruncateMarker":false,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys Assistant 4.3 is available with many new scenes features","description":"It\'s now easier than ever to create complex scene in Gladys Assistant 4","authors":"pierregilles","image":"/img/presentation/gladys-4-3-en-cover.jpg","slug":"gladys-assistant-4-3-is-here"},"unlisted":false,"prevItem":{"title":"Gladys Assistant 4.4 is available with zone detection","permalink":"/zh-Hans/blog/gladys-assistant-4-4-is-here"},"nextItem":{"title":"Gladys Assistant 4.2.0 is here, with Zigbee2mqtt support!","permalink":"/zh-Hans/blog/gladys-assistant-4-2-is-here"}}')

},

};
;
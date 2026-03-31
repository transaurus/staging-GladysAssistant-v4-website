"use strict";
exports.ids = ["9993"];
exports.modules = {
81631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2021_06_14_gladys_assistant_4_4_is_here_md_a0d_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2021_06_14_gladys_assistant_4_4_is_here_md_a0d_json__rspack_import_0 = __webpack_require__(94942);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys Assistant 4.4 is available with zone detection',
	description: 'Want to detect when you enter a zone? Exit a zone?',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-4-4-en-cover.jpg',
	slug: 'gladys-assistant-4-4-is-here'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What&#39;s new in Gladys Assistant 4.4?",
  "id": "whats-new-in-gladys-assistant-44",
  "level": 2
}, {
  "value": "Create zones in the map view",
  "id": "create-zones-in-the-map-view",
  "level": 3
}, {
  "value": "Start a scene when a user enters/leaves a zone",
  "id": "start-a-scene-when-a-user-entersleaves-a-zone",
  "level": 3
}, {
  "value": "An example: set your user as &quot;at home&quot; or &quot;left home&quot;",
  "id": "an-example-set-your-user-as-at-home-or-left-home",
  "level": 2
}, {
  "value": "House empty/not empty condition in scene",
  "id": "house-emptynot-empty-condition-in-scene",
  "level": 3
}, {
  "value": "Bugfixes",
  "id": "bugfixes",
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
      children: "Today we are releasing Gladys Assistant v4.4, a brand new version that is finally making the map view useful in Gladys !"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "whats-new-in-gladys-assistant-44",
      children: "What's new in Gladys Assistant 4.4?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "create-zones-in-the-map-view",
      children: "Create zones in the map view"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On the map, you can now create zones:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "For your home"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Your work"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "The school"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Literally anywhere on earth!"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create a zone",
        src: (__webpack_require__(45777)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You should see your created zone on the map"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Map",
        src: (__webpack_require__(93404)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can of course edit those zones:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Edit a zone",
        src: (__webpack_require__(69717)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "start-a-scene-when-a-user-entersleaves-a-zone",
      children: "Start a scene when a user enters/leaves a zone"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now, using the zones you previously created, you can now create a zone that will be trigger when a user enters the zone:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "User entered zone in scene",
        src: (__webpack_require__(60628)/* ["default"] */.A) + "",
        width: "1600",
        height: "721"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "or when the user leaves the zone:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "User left zone in scene",
        src: (__webpack_require__(76440)/* ["default"] */.A) + "",
        width: "1600",
        height: "720"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "an-example-set-your-user-as-at-home-or-left-home",
      children: "An example: set your user as \"at home\" or \"left home\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Imagine you want to set your user as \"at home\" when you enters a zone, and \"left home\" when you leaves a zone."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can do that by creating two scenes, at home:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "At home",
        src: (__webpack_require__(91311)/* ["default"] */.A) + "",
        width: "2880",
        height: "3208"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And left home:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Left home",
        src: (__webpack_require__(98879)/* ["default"] */.A) + "",
        width: "2880",
        height: "3208"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "house-emptynot-empty-condition-in-scene",
      children: "House empty/not empty condition in scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It was already possible to create a scene that triggers when a house is empty/not empty, but it was not possible to add a condition in a scene to continue only if the house is empty/not empty."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's now possible!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "House empty",
        src: (__webpack_require__(42594)/* ["default"] */.A) + "",
        width: "1600",
        height: "626"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "House not empty",
        src: (__webpack_require__(53214)/* ["default"] */.A) + "",
        width: "1600",
        height: "629"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "With this scene, you can add the presence card on the dashboard:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "User presence dashboard",
        src: (__webpack_require__(49112)/* ["default"] */.A) + "",
        width: "1600",
        height: "1009"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "bugfixes",
      children: "Bugfixes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We fixed a few bugfixes in this release:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Calling a scene from a scene should duplicate the scope object to avoid context pollution ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1205",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "#1205"
          })
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Fix log in scene continue-only-if action ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1201",
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "#1201"
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
91311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/at-home-be2af643448213b58219aa412154ff25.jpg");

},
45777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/create-zone-3e4da7e73083ad88855f00193c78daaa.jpg");

},
69717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/edit-zone-004892f52ed7e3c8e809a788e04f478a.jpg");

},
42594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/house-empty-b0f9e48dcc789eaea0b95045a0f7c390.jpg");

},
53214(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/house-not-empty-233f0948aa130bc070f8773e6d87bdf3.jpg");

},
98879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/left-home-4b23e8050f4338e7fbf8805ec6d5e43a.jpg");

},
93404(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/map-c31bfac85047ec809be6f01dbc000beb.jpg");

},
49112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/presence-dashboard-d48e1a11f9f9da50f20c8fb1710619f0.jpg");

},
60628(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/user-entered-zone-c3f0030f9b88300c933cd09d14beb9dc.jpg");

},
76440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/user-left-zone-a7d3ae75f88d3402b77583d4970056b7.jpg");

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
94942(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-assistant-4-4-is-here","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2021-06-14-gladys-assistant-4-4-is-here.md","source":"@site/blog/2021-06-14-gladys-assistant-4-4-is-here.md","title":"Gladys Assistant 4.4 is available with zone detection","description":"Want to detect when you enter a zone? Exit a zone?","date":"2021-06-14T00:00:00.000Z","tags":[],"readingTime":2.4,"hasTruncateMarker":false,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys Assistant 4.4 is available with zone detection","description":"Want to detect when you enter a zone? Exit a zone?","authors":"pierregilles","image":"/img/presentation/gladys-4-4-en-cover.jpg","slug":"gladys-assistant-4-4-is-here"},"unlisted":false,"prevItem":{"title":"Gladys Assistant 4.5 is available, with the multi-dashboard feature!","permalink":"/zh-Hans/blog/gladys-assistant-4-5-is-here"},"nextItem":{"title":"Gladys Assistant 4.3 is available with many new scenes features","permalink":"/zh-Hans/blog/gladys-assistant-4-3-is-here"}}')

},

};
;
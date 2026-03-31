"use strict";
exports.ids = ["4568"];
exports.modules = {
74071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_11_20_gladys_4_31_scene_tags_md_b63_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_11_20_gladys_4_31_scene_tags_md_b63_json__rspack_import_0 = __webpack_require__(66733);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Tag filtering & MQTT in scenes in Gladys Assistant 4.31',
	description: 'Gladys Assistant 4.31 brings new features to scenes, as well as fixes to the new alarm functionality.',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-assistant-4-31.jpg',
	slug: 'gladys-4-31-tags-mqtt-scene'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Tag filtering in scenes",
  "id": "tag-filtering-in-scenes",
  "level": 2
}, {
  "value": "New trigger: Receiving an MQTT message",
  "id": "new-trigger-receiving-an-mqtt-message",
  "level": 2
}, {
  "value": "Cleaning up sensor states in the database",
  "id": "cleaning-up-sensor-states-in-the-database",
  "level": 2
}, {
  "value": "New docker-compose.yml file",
  "id": "new-docker-composeyml-file",
  "level": 2
}, {
  "value": "Philips Hue: Adding a hybrid scan + manually adding a bridge",
  "id": "philips-hue-adding-a-hybrid-scan--manually-adding-a-bridge",
  "level": 2
}, {
  "value": "Chat: Display a camera by name",
  "id": "chat-display-a-camera-by-name",
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
      children: "Hello everyone,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["At the end of October I presented ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/blog/gladys-4-30-alarm-mode/",
        children: "Gladys Assistant 4.30"
      }), ", a version that brought a complete alarm to Gladys!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today I'm releasing Gladys Assistant 4.31, a version that brings a lot of new features and fixes following your feedback on the alarm mode 🎉🎉"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "tag-filtering-in-scenes",
      children: "Tag filtering in scenes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Many of you have been asking for a mechanism to filter the increasing number of scenes in your instances, and @Lokkye has done just that!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now add one or more tags to your scenes:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene add Gladys tag",
        src: (__webpack_require__(10090)/* ["default"] */.A) + "",
        width: "1600",
        height: "724"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And then you can filter your scenes by tag:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene filter by tag Gladys",
        src: (__webpack_require__(70725)/* ["default"] */.A) + "",
        width: "1600",
        height: "898"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This allows you to organize your scenes more easily (by room, by function)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "new-trigger-receiving-an-mqtt-message",
      children: "New trigger: Receiving an MQTT message"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's now possible to trigger a scene on receipt of a customized MQTT message!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The aim of this trigger is to enable simplified external integrations for advanced users, without necessarily going through Node-RED."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For example, if you're a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://docs.frigate.video/integrations/mqtt/",
        children: "Frigate"
      }), " user and want to receive an MQTT message in Gladys when motion is detected on a camera, you can!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys MQTT message reception scene",
        src: (__webpack_require__(73679)/* ["default"] */.A) + "",
        width: "1600",
        height: "992"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is just an example, but you'll want to go a lot further, and make scripts that call Gladys via this trigger, for example!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "cleaning-up-sensor-states-in-the-database",
      children: "Cleaning up sensor states in the database"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When you installed Gladys, you normally chose the retention time for sensor states."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today, I'm adding new durations to Gladys for this parameter:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys sensor state cleanup new duration",
        src: (__webpack_require__(77258)/* ["default"] */.A) + "",
        width: "1600",
        height: "785"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "And I've added a new parameter \"Keep aggregate states\" which lets you tell Gladys how long to keep the pre-calculated states for display on the dashboard:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys cleaning aggregate sensor states",
        src: (__webpack_require__(61167)/* ["default"] */.A) + "",
        width: "1600",
        height: "633"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The idea of this parameter is to be able to keep, for example, \"6 months of raw data\" + \"1 year of aggregated data\", so as not to keep the raw data for too long, while still having the last year displayed on the dashboard."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Note:"
      }), " If you have a large Gladys database, consider changing this setting. The next cleaning will take place at 4 a.m. the following day!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "new-docker-composeyml-file",
      children: "New docker-compose.yml file"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Cyril has been working on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/blob/master/docker/docker-compose.yml",
        children: "docker-compose.yml"
      }), " file we offer on the site for installing Gladys."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's now fully up to date!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "philips-hue-adding-a-hybrid-scan--manually-adding-a-bridge",
      children: "Philips Hue: Adding a hybrid scan + manually adding a bridge"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Some of you were having trouble using Philips Hue integration because your Philips Hue bridge wasn't being detected locally by Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Cyril has been working on a new \"hybrid\" scan that does an \"N-UpNp\" scan in addition to the \"UpNp\" scan we were doing."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If Gladys still doesn't detect your Philips Hue bridge, you can add it manually via its IP address."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "chat-display-a-camera-by-name",
      children: "Chat: Display a camera by name"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is now possible to display a camera in chat by calling it by its name (and not necessarily by the name of the room)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For example, if your camera is called \"Fridge camera\", you can ask Gladys to display it:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys retrieve camera image by name",
        src: (__webpack_require__(31019)/* ["default"] */.A) + "",
        width: "1600",
        height: "734"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you ask \"Show me the camera in the living room\" and there are several cameras in the living room, Gladys will now send you all the images."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "fixes",
      children: "Fixes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Inversion of door opening sensor labels in scenes. Open becomes closed and closed becomes open (this was an error!). There's nothing to change on your side on your existing scenes if these scenes were working, only the label has changed, not the value."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "The name of the \"Alarm\" widget is now optional. If left blank, the title bar will be hidden."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["In the alarm, when the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "?fullscreen=force"
        }), " parameter is supplied, it must be retained despite redirections on the locked screen, as well as after an alarm unlock."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The complete CHANGELOG is available ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/releases/tag/v4.31.0",
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
31019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/camera-by-name-f90be419ebe198ce8dd274d99c67ba87.jpg");

},
73679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scene-mqtt-trigger-4dce5bcc5611df64a840926859cd8d54.jpg");

},
10090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scene-set-tag-6ce40aa2face4bb18c5f6f569fa6d290.jpg");

},
70725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scene-tags-list-d6df9ed96166710ab0a8fc515d809db2.jpg");

},
61167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/state-history-agregate-f80bb15bf0606b4fe03069d1a50015f4.jpg");

},
77258(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/state-history-0729de2b98864be052df0f79887f6e7e.jpg");

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
66733(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-4-31-tags-mqtt-scene","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2023-11-20-gladys-4-31-scene-tags.md","source":"@site/blog/2023-11-20-gladys-4-31-scene-tags.md","title":"Tag filtering & MQTT in scenes in Gladys Assistant 4.31","description":"Gladys Assistant 4.31 brings new features to scenes, as well as fixes to the new alarm functionality.","date":"2023-11-20T00:00:00.000Z","tags":[],"readingTime":4.07,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Tag filtering & MQTT in scenes in Gladys Assistant 4.31","description":"Gladys Assistant 4.31 brings new features to scenes, as well as fixes to the new alarm functionality.","authors":"pierregilles","image":"/img/presentation/gladys-assistant-4-31.jpg","slug":"gladys-4-31-tags-mqtt-scene"},"unlisted":false,"prevItem":{"title":"Sonos integration now available!","permalink":"/zh-Hans/blog/gladys-4-32-sonos-integration"},"nextItem":{"title":"Gladys gets a full alarm!","permalink":"/zh-Hans/blog/gladys-4-30-alarm-mode"}}')

},

};
;
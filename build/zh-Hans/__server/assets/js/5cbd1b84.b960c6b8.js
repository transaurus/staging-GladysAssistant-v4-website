"use strict";
exports.ids = ["5765"];
exports.modules = {
33806(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_scheduled_trigger_md_5cb_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_scheduled_trigger_md_5cb_json__rspack_import_0 = __webpack_require__(8423);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'scheduled-trigger',
	title: 'Scheduled Trigger',
	sidebar_label: 'Scheduled Trigger'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Every month",
  "id": "every-month",
  "level": 2
}, {
  "value": "Every week",
  "id": "every-week",
  "level": 2
}, {
  "value": "Everyday",
  "id": "everyday",
  "level": 2
}, {
  "value": "Interval",
  "id": "interval",
  "level": 2
}, {
  "value": "On a specific date",
  "id": "on-a-specific-date",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is common in home automation to want to schedule a scene: every day? Once a day? once a week? Once a month? Every 15 minutes?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys offers a trigger that allows you to schedule the execution of a scene."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There are 5 types of scheduling possible:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Every month"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Every week"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Everyday"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "At intervals"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "On a specific day"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Let's run throug the different options available:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "every-month",
      children: "Every month"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This trigger allows you to schedule the execution of a scene, every month on a specific day of the month."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is useful if, for example, you want to run a scene every 1st of the month."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene scheduled every month",
        src: (__webpack_require__(15965)/* ["default"] */.A) + "",
        width: "1600",
        height: "593"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "every-week",
      children: "Every week"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This trigger lets you schedule a scene to run on certain days of the week at a specific time."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is probably the most used trigger because it allows you to set any \"daily routine\" elements up."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you want to wake up to a custom scene, every day of the week (Monday-Friday) at 7am, this is what your scene will look like:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene scheduled every week",
        src: (__webpack_require__(84315)/* ["default"] */.A) + "",
        width: "1600",
        height: "1119"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "everyday",
      children: "Everyday"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This trigger allows you to trigger a scene every day at a specific time."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Useful for all recurring tasks that occur every day of the week."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene scheduled every day",
        src: (__webpack_require__(28737)/* ["default"] */.A) + "",
        width: "1600",
        height: "591"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "interval",
      children: "Interval"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This trigger is special. It allows you to program a scene, not by \"day\" but at a particular interval (ie: every 30 seconds, every 15 minutes, every hour)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene scheduled at interval",
        src: (__webpack_require__(91730)/* ["default"] */.A) + "",
        width: "1600",
        height: "597"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "on-a-specific-date",
      children: "On a specific date"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This trigger allows you to schedule your scene on a specific day and at a specific time."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Example: June 4, 2020 at 2:00 p.m."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Scene scheduled every day",
        src: (__webpack_require__(73944)/* ["default"] */.A) + "",
        width: "1600",
        height: "1137"
      })
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
28737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scheduled-trigger-every-day-6e3accc612f4592afcc2dbc51b33cbeb.jpg");

},
15965(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scheduled-trigger-every-month-c56a1f9b10ee8db39765e9b5cdc50de9.jpg");

},
84315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scheduled-trigger-every-week-8ce86c84e3ecc9738db28b850ab298f7.jpg");

},
91730(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scheduled-trigger-interval-c8e1902a5aa0789a84d640b2b8093241.jpg");

},
73944(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scheduled-trigger-specific-day-6e578f760b83c54a305ccfc6fa605fe1.jpg");

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
8423(module) {
module.exports = JSON.parse('{"id":"scenes/scheduled-trigger","title":"Scheduled Trigger","description":"It is common in home automation to want to schedule a scene: every day? Once a day? once a week? Once a month? Every 15 minutes?","source":"@site/docs/scenes/scheduled-trigger.md","sourceDirName":"scenes","slug":"/scenes/scheduled-trigger","permalink":"/zh-Hans/docs/scenes/scheduled-trigger","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/scenes/scheduled-trigger.md","tags":[],"version":"current","frontMatter":{"id":"scheduled-trigger","title":"Scheduled Trigger","sidebar_label":"Scheduled Trigger"},"sidebar":"docs","previous":{"title":"Device state change","permalink":"/zh-Hans/docs/scenes/device-state-changed-trigger"},"next":{"title":"Calendar event is coming","permalink":"/zh-Hans/docs/scenes/calendar-event-is-coming-trigger"}}')

},

};
;
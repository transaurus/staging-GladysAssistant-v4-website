"use strict";
exports.ids = ["4255"];
exports.modules = {
77797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_turn_on_off_the_switches_action_md_a2a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_turn_on_off_the_switches_action_md_a2a_json__rspack_import_0 = __webpack_require__(12726);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'turn-on-off-the-switches-action',
	title: 'Switch remote control sockets on/off in a scene',
	sidebar_label: 'Switch sockets on/off'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Make coffee automatically every morning of the week with Gladys",
  "id": "make-coffee-automatically-every-morning-of-the-week-with-gladys",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Whether it is to control a simple bedside lamp, an LED strip, or even a coffee machine, remote-controlled sockets are widely used in home automation."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys, you can control your remote-controlled outlets, whether on the dashboard or in the stages."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We will find a concrete example below."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Take the very basic filter coffee makers that can be found on the market for around ten euros. These coffee makers have the advantage of having a physical on / off button, which can remain in the permanent \"on\" position."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "With a remote-controlled socket in front, it becomes possible to control the appliance, and therefore to make coffee on demand!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "make-coffee-automatically-every-morning-of-the-week-with-gladys",
      children: "Make coffee automatically every morning of the week with Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We can therefore imagine the following scene:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Trigger: \"Monday to Friday at 7 a.m.\"\n\nActions:\n  - Switch on the \"coffee machine\" socket\n  - Wait 30 seconds (for the coffee to be prepared)\n  - Switch off the \"coffee machine\" socket\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys, the scene will look like this:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Make coffee automatically every morning of the week with Gladys",
        src: (__webpack_require__(93117)/* ["default"] */.A) + "",
        width: "2880",
        height: "4918"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "As you can see, first there is a trigger that goes off every day of the week except weekends (Monday to Friday)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then the scene turns on the outlet, waits 30 seconds, then turns off the outlet."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Super simple, right?"
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
93117(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/screenshot-74afc5d3e41f85a9f021c7c3e10b4d5f.png");

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
12726(module) {
module.exports = JSON.parse('{"id":"scenes/turn-on-off-the-switches-action","title":"Switch remote control sockets on/off in a scene","description":"Whether it is to control a simple bedside lamp, an LED strip, or even a coffee machine, remote-controlled sockets are widely used in home automation.","source":"@site/docs/scenes/turn-on-off-the-switches-action.md","sourceDirName":"scenes","slug":"/scenes/turn-on-off-the-switches-action","permalink":"/zh-Hans/docs/scenes/turn-on-off-the-switches-action","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/scenes/turn-on-off-the-switches-action.md","tags":[],"version":"current","frontMatter":{"id":"turn-on-off-the-switches-action","title":"Switch remote control sockets on/off in a scene","sidebar_label":"Switch sockets on/off"},"sidebar":"docs","previous":{"title":"EDF Tempo","permalink":"/zh-Hans/docs/scenes/edf-tempo"},"next":{"title":"Retrieve the last state","permalink":"/zh-Hans/docs/scenes/get-last-device-state-action"}}')

},

};
;
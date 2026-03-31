"use strict";
exports.ids = ["680"];
exports.modules = {
39858(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_intro_md_6ac_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_intro_md_6ac_json__rspack_import_0 = __webpack_require__(38095);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'intro',
	title: 'Scenes in Gladys Assistant',
	sidebar_label: 'Introduction'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Create a scene",
  "id": "create-a-scene",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can create ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "scenes"
      }), " in Gladys Assistant. These are a set of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "actions"
      }), " executed consecutively or in parallel."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The scenes are entirely customisable: the users create their own action suites in the Gladys ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "scene editor"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["These scenes can be triggered manually, automatically (via a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "trigger"
      }), ") or from another scene."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Some examples:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "A \"turn off the whole house\" scene, which would turn off all the lights in the house. This scene can also be manually triggered, to turn all the lights off, at home, remotely."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "An \"Intrusion alert\" scene, which sends a Telegram message to the user. This scene would be configured to run after an \"If motion is detected\" trigger."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "create-a-scene",
      children: "Create a scene"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To create a scene, go to the \"Scenes\" tab of your Gladys interface, and click on the \"New +\" button."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create a scene",
        src: (__webpack_require__(34438)/* ["default"] */.A) + "",
        width: "1600",
        height: "761"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Choose a name for your scene, as well as an icon. This icon is only used in the Gladys interface."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create a scene",
        src: (__webpack_require__(75857)/* ["default"] */.A) + "",
        width: "1600",
        height: "760"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You are now in the scene editor. Let's go through each part of the editor together:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create a scene",
        src: (__webpack_require__(78484)/* ["default"] */.A) + "",
        width: "1600",
        height: "761"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Triggers: If you add triggers to your scene (this is optional), they will appear here. The same scene can be triggered by several different triggers. These triggers are all independent."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "Adding several triggers simply means: \"When this event occurs OR When this event occurs OR ...\""
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "An action block: a scene is split into one or more action blocks. When you add actions to this action block, all actions in the block will run in parallel. If you add actions to the next action block (not visible in this screenshot), the scene will wait until action block # 1 is finished before moving on to the next one. You can therefore run actions in parallel and in a sequence.Pretty powerful, right?"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Execute: This button allows you to test the execution of the scene. This button does not take triggers into account, it only executes action blocks."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Save: This button saves the scene."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Delete: This button deletes the scene."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Add trigger: This button allows you to add a trigger to the scene. You can add as many triggers as you want."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Add action: This button adds an action to the action block."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Click on the scene title to edit it."
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
34438(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scenes-intro-1-a0ec48aeff9eca18afbe2462aeb2fd01.jpg");

},
75857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scenes-intro-2-09f56a060de37e10e036dfa36c2c22df.jpg");

},
78484(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scenes-intro-3-da88ccff1d389073818334976b768803.jpg");

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
38095(module) {
module.exports = JSON.parse('{"id":"scenes/intro","title":"Scenes in Gladys Assistant","description":"You can create scenes in Gladys Assistant. These are a set of actions executed consecutively or in parallel.","source":"@site/docs/scenes/intro.md","sourceDirName":"scenes","slug":"/scenes/intro","permalink":"/zh-Hans/docs/scenes/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/scenes/intro.md","tags":[],"version":"current","frontMatter":{"id":"intro","title":"Scenes in Gladys Assistant","sidebar_label":"Introduction"},"sidebar":"docs","previous":{"title":"Z-Wave JS UI","permalink":"/zh-Hans/docs/integrations/zwavejs-ui"},"next":{"title":"Math functions","permalink":"/zh-Hans/docs/scenes/math-functions"}}')

},

};
;
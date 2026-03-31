"use strict";
exports.ids = ["6003"];
exports.modules = {
67143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_edf_tempo_md_02d_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_scenes_edf_tempo_md_02d_json__rspack_import_0 = __webpack_require__(92292);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'edf-tempo',
	title: 'Save on your electricity bill with EDF Tempo and Gladys',
	sidebar_label: 'EDF Tempo'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Automatic scenarios with Gladys",
  "id": "automatic-scenarios-with-gladys",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In France, EDF provides a service ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://particulier.edf.fr/fr/accueil/gestion-contrat/options/tempo.html",
        children: "EDF Tempo"
      }), " where the cost of electricity is generally cheaper all year round, except on certain \"white\" and \"red\" days when the price of electricity is much higher.\nIn 2024, there are 301 blue days, 43 white days and 22 red days.\nThis type of contract is practical for users who can easily shift their usage."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "automatic-scenarios-with-gladys",
      children: "Automatic scenarios with Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys, you can retrieve the current status of the Tempo day in a scene, and find out whether we're in peak/off-peak mode.\nTo do this, create a \"Condition on EDF-Tempo\" scene action:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "EDF Tempo scenes",
        src: (__webpack_require__(40218)/* ["default"] */.A) + "",
        width: "2444",
        height: "1286"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This condition may block execution of the scene if the condition is not met."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This condition allows you to create all types of smart scenes:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Start the washing machine ONLY if it's a blue day"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "In the morning at 8 a.m., if it's a red day, send me a message on Telegram"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "In the evening at 7pm, if the next day is a red day, send me a message to warn me to start the dishwasher this evening.\nIn short, the possibilities are endless!"
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
40218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/edf-tempo-scenes-ce906c5973b732c26ccc8e373ce0945b.png");

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
92292(module) {
module.exports = JSON.parse('{"id":"scenes/edf-tempo","title":"Save on your electricity bill with EDF Tempo and Gladys","description":"In France, EDF provides a service EDF Tempo where the cost of electricity is generally cheaper all year round, except on certain \\"white\\" and \\"red\\" days when the price of electricity is much higher.","source":"@site/docs/scenes/edf-tempo.md","sourceDirName":"scenes","slug":"/scenes/edf-tempo","permalink":"/zh-Hans/docs/scenes/edf-tempo","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/scenes/edf-tempo.md","tags":[],"version":"current","frontMatter":{"id":"edf-tempo","title":"Save on your electricity bill with EDF Tempo and Gladys","sidebar_label":"EDF Tempo"},"sidebar":"docs","previous":{"title":"Calendar event is running","permalink":"/zh-Hans/docs/scenes/calendar-event-is-running-condition"},"next":{"title":"Switch sockets on/off","permalink":"/zh-Hans/docs/scenes/turn-on-off-the-switches-action"}}')

},

};
;
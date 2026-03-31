"use strict";
exports.ids = ["4558"];
exports.modules = {
25492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dashboard_edf_tempo_md_4a7_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_dashboard_edf_tempo_md_4a7_json__rspack_import_0 = __webpack_require__(84697);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'edf-tempo',
	title: 'Display EDF Tempo days on your dashboard',
	sidebar_label: 'EDF Tempo'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "EDF Tempo and home automation",
  "id": "edf-tempo-and-home-automation",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    p: "p",
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
      id: "edf-tempo-and-home-automation",
      children: "EDF Tempo and home automation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys, you can view the current status of the Tempo option on your dashboard: full hour / off-peak hour and the color of the current day / next day."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Off-peak time :"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Off-peak time",
        src: (__webpack_require__(6517)/* ["default"] */.A) + "",
        width: "822",
        height: "568"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Peak time :"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Peak time",
        src: (__webpack_require__(72721)/* ["default"] */.A) + "",
        width: "846",
        height: "568"
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
6517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/off-peak-time-3acfca118096366a90a7a420c70c58ef.png");

},
72721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/peak-time-25b0c98f9d3d9b3456718b2377d4bc90.png");

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
84697(module) {
module.exports = JSON.parse('{"id":"dashboard/edf-tempo","title":"Display EDF Tempo days on your dashboard","description":"In France, EDF provides a service EDF Tempo where the cost of electricity is generally cheaper all year round, except on certain \\"white\\" and \\"red\\" days when the price of electricity is much higher.","source":"@site/docs/dashboard/edf-tempo.md","sourceDirName":"dashboard","slug":"/dashboard/edf-tempo","permalink":"/zh-Hans/docs/dashboard/edf-tempo","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/dashboard/edf-tempo.md","tags":[],"version":"current","frontMatter":{"id":"edf-tempo","title":"Display EDF Tempo days on your dashboard","sidebar_label":"EDF Tempo"},"sidebar":"docs","previous":{"title":"Devices","permalink":"/zh-Hans/docs/dashboard/devices"},"next":{"title":"Data model","permalink":"/zh-Hans/docs/api/data-model"}}')

},

};
;
"use strict";
exports.ids = ["161"];
exports.modules = {
412(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_philips_hue_md_96a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_philips_hue_md_96a_json__rspack_import_0 = __webpack_require__(2621);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'philips-hue',
	title: 'Philips Hue',
	sidebar_label: 'Philips Hue'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Press the button on your bridge",
  "id": "press-the-button-on-your-bridge",
  "level": 2
}, {
  "value": "Connect your bridge in Gladys",
  "id": "connect-your-bridge-in-gladys",
  "level": 2
}, {
  "value": "Add your lights in Gladys",
  "id": "add-your-lights-in-gladys",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To connect your Philips Hue to Gladys, go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Integrations / Philips Hue"
      }), " (in Gladys)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "press-the-button-on-your-bridge",
      children: "Press the button on your bridge"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Press the physical button on the top of your bridge."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "connect-your-bridge-in-gladys",
      children: "Connect your bridge in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Configure bridge"
      }), ", click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Connect"
      }), " on your bridge."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you don't see your bridge, make sure it's on the same network as your machine running Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you still don't see your bridge, you can add it manually by filling its IP Address."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Manual Bridge IP Configuration",
        src: (__webpack_require__(24977)/* ["default"] */.A) + "",
        width: "2434",
        height: "1070"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "Make sure you have the Hue Bridge v2 (the square one). The integration will not work with the original Hue Bridge (round bridge)."
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "add-your-lights-in-gladys",
      children: "Add your lights in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Devices"
      }), ", click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Connect"
      }), " on each lamp you want to control in Gladys."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Success!"
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
24977(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/philips_hue_manual_ip_configuration-06fbe9d5ce93ae064c5b508c8c079d34.png");

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
2621(module) {
module.exports = JSON.parse('{"id":"integrations/philips-hue","title":"Philips Hue","description":"To connect your Philips Hue to Gladys, go to Integrations / Philips Hue (in Gladys).","source":"@site/docs/integrations/philips-hue.md","sourceDirName":"integrations","slug":"/integrations/philips-hue","permalink":"/zh-Hans/docs/integrations/philips-hue","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/philips-hue.md","tags":[],"version":"current","frontMatter":{"id":"philips-hue","title":"Philips Hue","sidebar_label":"Philips Hue"},"sidebar":"docs","previous":{"title":"Owntracks","permalink":"/zh-Hans/docs/integrations/owntracks"},"next":{"title":"Shelly","permalink":"/zh-Hans/docs/integrations/shelly"}}')

},

};
;
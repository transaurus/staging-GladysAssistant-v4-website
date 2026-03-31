"use strict";
exports.ids = ["265"];
exports.modules = {
70130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    p: "p",
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
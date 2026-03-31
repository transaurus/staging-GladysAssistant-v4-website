"use strict";
exports.ids = ["705"];
exports.modules = {
40661(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_10_30_gladys_4_30_alarm_mode_md_366_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_10_30_gladys_4_30_alarm_mode_md_366_json__rspack_import_0 = __webpack_require__(16741);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys gets a full alarm!',
	description: 'Security is the basis of home automation. Today, Gladys includes a complete alarm to help you manage your home\'s security.',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-assistant-4-30-en.jpg',
	slug: 'gladys-4-30-alarm-mode'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "An alarm in Gladys",
  "id": "an-alarm-in-gladys",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
      children: "Gladys Assistant 4.30 has just been released, and it's a hell of a version!!! 🥳"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The main feature is the complete management of an Alarm mode that allows you to set up a complete home security system."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys iPad Alarm Mockup",
        src: (__webpack_require__(62121)/* ["default"] */.A) + "",
        width: "2400",
        height: "1800"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You've got to admit, it does make you want to 😎"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "an-alarm-in-gladys",
      children: "An alarm in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys can now replace a complete alarm system by managing the various states of any good alarm system:"
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
62121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm_ipad_mockup_en-7d8787174e0fcaaac9769462a2d758b8.png");

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
16741(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-4-30-alarm-mode","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2023-10-30-gladys-4-30-alarm-mode.md","source":"@site/blog/2023-10-30-gladys-4-30-alarm-mode.md","title":"Gladys gets a full alarm!","description":"Security is the basis of home automation. Today, Gladys includes a complete alarm to help you manage your home\'s security.","date":"2023-10-30T00:00:00.000Z","tags":[],"readingTime":3.1,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys gets a full alarm!","description":"Security is the basis of home automation. Today, Gladys includes a complete alarm to help you manage your home\'s security.","authors":"pierregilles","image":"/img/presentation/gladys-assistant-4-30-en.jpg","slug":"gladys-4-30-alarm-mode"},"unlisted":false,"prevItem":{"title":"Tag filtering & MQTT in scenes in Gladys Assistant 4.31","permalink":"/zh-Hans/blog/gladys-4-31-tags-mqtt-scene"},"nextItem":{"title":"MELCloud integration, full-screen tablet mode, Tuya shutters","permalink":"/zh-Hans/blog/gladys-4-29-melcloud-full-screen"}}')

},

};
;
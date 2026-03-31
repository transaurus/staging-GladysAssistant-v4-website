"use strict";
exports.ids = ["2151"];
exports.modules = {
72303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2020_11_06_launching_gladys_assistant_4_md_e96_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2020_11_06_launching_gladys_assistant_4_md_e96_json__rspack_import_0 = __webpack_require__(79018);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'The new major version Gladys Assistant 4 is available, rewritten from scratch!',
	description: 'It\'s a big day, after almost 2 years of work by the whole community, Gladys Assistant 4 is available, for free download as usual!',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-4-launch.jpg',
	slug: 'lancement-gladys-assistant-4'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hi all,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's a big day, after almost 2 years of work by the whole community, Gladys Assistant 4 is available, for free download as usual!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys 4 devices",
        src: (__webpack_require__(24266)/* ["default"] */.A) + "",
        width: "3000",
        height: "2000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can embark on the adventure by following the tutorials:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/",
          children: "Raspberry Pi Tutorial"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/installation/docker/",
          children: "Manual installation with Docker"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://demo.gladysassistant.com",
          children: "Test Gladys Assistant on the demo site"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now let's go back to the decisions that led to this fourth version of Gladys Assistant 🙂"
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
24266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/gladys-4-mockup-devices-8c4c388d8fbaffe67e819b6dcb4bd808.jpg");

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
79018(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/lancement-gladys-assistant-4","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2020-11-06-launching-gladys-assistant-4.md","source":"@site/blog/2020-11-06-launching-gladys-assistant-4.md","title":"The new major version Gladys Assistant 4 is available, rewritten from scratch!","description":"It\'s a big day, after almost 2 years of work by the whole community, Gladys Assistant 4 is available, for free download as usual!","date":"2020-11-06T00:00:00.000Z","tags":[],"readingTime":8.19,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"The new major version Gladys Assistant 4 is available, rewritten from scratch!","description":"It\'s a big day, after almost 2 years of work by the whole community, Gladys Assistant 4 is available, for free download as usual!","authors":"pierregilles","image":"/img/presentation/gladys-4-launch.jpg","slug":"lancement-gladys-assistant-4"},"unlisted":false,"prevItem":{"title":"Gladys Assistant\'s 2020 Year In Review","permalink":"/zh-Hans/blog/bilan-2020-gladys-assistant"}}')

},

};
;
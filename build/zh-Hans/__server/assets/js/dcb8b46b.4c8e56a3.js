"use strict";
exports.ids = ["1301"];
exports.modules = {
90429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_02_01_lancement_formation_md_1fb_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_02_01_lancement_formation_md_1fb_json__rspack_import_0 = __webpack_require__(65781);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Launch of the ULTIMATE guide to getting started in home automation 🚀',
	description: 'I\'ve been wanting to tell you about this project for ages, and here it is at last!',
	authors: 'pierregilles',
	image: '/img/presentation/formation-lancement.jpg',
	slug: 'lancement-formation'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "I&#39;m buying an apartment",
  "id": "im-buying-an-apartment",
  "level": 2
}, {
  "value": "I&#39;ll show you my personal setup",
  "id": "ill-show-you-my-personal-setup",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hi everyone!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I've been wanting to tell you about this project for so long, so here it is at last 😁"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For those who missed the launch, the replay is available on YouTube (in French):"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("div", {
      class: "youtubeVideoContainerInBlog",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)("iframe", {
        src: "https://www.youtube.com/embed/60hu25gmTYA",
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: true
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("br", {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Order your training now (French only for now): ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://formation.gladysassistant.com",
        children: "formation.gladysassistant.com"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "im-buying-an-apartment",
      children: "I'm buying an apartment"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The first news of this launch is that I'm buying an apartment in the south of France: my first main residence!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Obviously, I'm going to connect this apartment entirely with Gladys and make it a real showcase for what's possible in home automation in 2024 😎"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I'm going to push the cursors to the max on all subjects: lighting, presence detection, security, music, etc...."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The aim of this apartment is also to turn it into a real laboratory for home automation experiments."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This will allow me to be at the forefront in terms of Gladys use, and to be able to test all the new features at home."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "ill-show-you-my-personal-setup",
      children: "I'll show you my personal setup"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For the moment, the apartment is empty."
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
65781(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/lancement-formation","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2024-02-01-lancement-formation.md","source":"@site/blog/2024-02-01-lancement-formation.md","title":"Launch of the ULTIMATE guide to getting started in home automation 🚀","description":"I\'ve been wanting to tell you about this project for ages, and here it is at last!","date":"2024-02-01T00:00:00.000Z","tags":[],"readingTime":2.99,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Launch of the ULTIMATE guide to getting started in home automation 🚀","description":"I\'ve been wanting to tell you about this project for ages, and here it is at last!","authors":"pierregilles","image":"/img/presentation/formation-lancement.jpg","slug":"lancement-formation"},"unlisted":false,"prevItem":{"title":"Test Gladys Assistant with an existing Zigbee2mqtt instance!","permalink":"/zh-Hans/blog/gladys-4-40-external-zigbee"},"nextItem":{"title":"Gladys Assistant\'s 2023 Year In Review","permalink":"/zh-Hans/blog/2023-year-in-review"}}')

},

};
;
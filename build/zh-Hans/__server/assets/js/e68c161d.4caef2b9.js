"use strict";
exports.ids = ["5608"];
exports.modules = {
15932(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_09_26_energy_monitoring_coming_soon_md_72e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_09_26_energy_monitoring_coming_soon_md_72e_json__rspack_import_0 = __webpack_require__(53691);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Energy Monitoring Coming Soon to Gladys',
	description: 'Discover Gladys\'s new \'Energy Monitoring\' integration: track your electricity consumption down to the cent and participate in testing!',
	authors: 'pierregilles',
	image: '/img/presentation/energy-monitoring-coming-soon-en.jpg',
	slug: 'energy-monitoring-coming-soon'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hey everyone,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["At the end of May, I was chatting with Thomas Lemaistre (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/u/terdious/summary",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "@Terdious"
        })
      }), " on the forum), and he was explaining his electrical setup: multiple meters, solar panels, an electric car... and soon batteries to store his energy."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "His goal in Gladys:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["👉 Track his consumption directly in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "euros"
      }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", "👉 Visualize the different energy flows in his home", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", "👉 Measure the performance of his solar panels", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", "👉 And most importantly, know how close he is to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "energy self-sufficiency"
      }), " 🌞🔋"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I've been dreaming about these kinds of features for Gladys for a long time 😍 But it's a big project, difficult to start without funding."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In June, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "@Terdious offered to finance the development himself"
      }), ". Just like that! 🎉"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "He prepared a detailed specification, I proposed a quote, he accepted... and I was able to start this project this summer."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Today, I'm super happy to reveal the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "first part"
      }), " of this development!"]
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
53691(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/energy-monitoring-coming-soon","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2025-09-26-energy-monitoring-coming-soon.md","source":"@site/blog/2025-09-26-energy-monitoring-coming-soon.md","title":"Energy Monitoring Coming Soon to Gladys","description":"Discover Gladys\'s new \'Energy Monitoring\' integration: track your electricity consumption down to the cent and participate in testing!","date":"2025-09-26T00:00:00.000Z","tags":[],"readingTime":3.44,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Energy Monitoring Coming Soon to Gladys","description":"Discover Gladys\'s new \'Energy Monitoring\' integration: track your electricity consumption down to the cent and participate in testing!","authors":"pierregilles","image":"/img/presentation/energy-monitoring-coming-soon-en.jpg","slug":"energy-monitoring-coming-soon"},"unlisted":false,"prevItem":{"title":"Energy Monitoring is now live in Gladys Assistant 4.66 ⚡️","permalink":"/zh-Hans/blog/energy-monitoring-is-live"},"nextItem":{"title":"Gladys Assistant Now Compatible with Matter","permalink":"/zh-Hans/blog/gladys-assistant-4-58-with-matter-support"}}')

},

};
;
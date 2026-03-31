"use strict";
exports.ids = ["5519"];
exports.modules = {
44482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_enedis_md_392_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_enedis_md_392_json__rspack_import_0 = __webpack_require__(21801);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'enedis',
	title: 'View your electricity consumption in Gladys with Enedis',
	sidebar_label: 'Enedis'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Connect to Enedis in Gladys",
  "id": "connect-to-enedis-in-gladys",
  "level": 2
}, {
  "value": "View your electricity consumption",
  "id": "view-your-electricity-consumption",
  "level": 2
}, {
  "value": "FAQ",
  "id": "faq",
  "level": 2
}, {
  "value": "I can not make the Enedis consent?",
  "id": "i-can-not-make-the-enedis-consent",
  "level": 3
}, {
  "value": "I don&#39;t have any more data on the previous days ?",
  "id": "i-dont-have-any-more-data-on-the-previous-days-",
  "level": 3
}, {
  "value": "Synchronization is not done anymore?",
  "id": "synchronization-is-not-done-anymore",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enedis is a french electricity provider, and offers an API that allows to retrieve the electricity consumption data from a Linky meter of a household."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This API is only proposed to companies, after signing a contract and a certification process."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For Gladys, we have a legal structure, \"Gladys Assistant SAS\", which allows us to have access to this API and authorizes us to make it available to individuals."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This API is available via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/plus",
        children: "Gladys Plus"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "This integration is only usable in France as it connects to the french electricity provider API."
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "connect-to-enedis-in-gladys",
      children: "Connect to Enedis in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://plus.gladysassistant.com",
        children: "plus.gladysassistant.com"
      }), ", and click on the \"Enedis\" integration:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Enedis icon",
        src: (__webpack_require__(38315)/* ["default"] */.A) + "",
        width: "1600",
        height: "561"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on the button \"I access my Enedis customer area\":"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Enedis integration Gladys consent",
        src: (__webpack_require__(41882)/* ["default"] */.A) + "",
        width: "1600",
        height: "869"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On the Enedis side, accept the consent and click on \"Validate\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Enedis consent",
        src: (__webpack_require__(51755)/* ["default"] */.A) + "",
        width: "1600",
        height: "1019"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You should arrive on Gladys, which will synchronize with your Enedis account."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The first synchronization may take some time depending on the load on the Enedis API, I advise you to quit Gladys and come back later 🙂"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "view-your-electricity-consumption",
      children: "View your electricity consumption"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys, you find your electricity meter in \"Meters\" :"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Enedis Gladys integration, my meters",
        src: (__webpack_require__(10669)/* ["default"] */.A) + "",
        width: "1600",
        height: "788"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On the dashboard, you can create a new graph, and select \"Daily consumption\" :"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Enedis Gladys integration, daily consumption",
        src: (__webpack_require__(701)/* ["default"] */.A) + "",
        width: "1600",
        height: "836"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Choose \"Histogram\", and you should see this graph on your dashboard :"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Enedis Gladys integration, graph",
        src: (__webpack_require__(82642)/* ["default"] */.A) + "",
        width: "1600",
        height: "914"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "faq",
      children: "FAQ"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "i-can-not-make-the-enedis-consent",
      children: "I can not make the Enedis consent?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The Enedis platform is sometimes offline for updates on the Enedis side. Often the best thing to do is to try again later."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If it still doesn't work, check that your Enedis account is working: are you able to see your electricity consumption data in Enedis? If not, the problem is probably with Enedis."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "i-dont-have-any-more-data-on-the-previous-days-",
      children: "I don't have any more data on the previous days ?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The Enedis API is updated every morning in theory."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "However, in practice the data is not always available at the same time, and on some days (public holidays for example), the data is not available."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If however, you observe holes on your dashboard, which persist over time, please post a message on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "the forum"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "synchronization-is-not-done-anymore",
      children: "Synchronization is not done anymore?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Your consent is valid for 2 years, and must be renewed if you want Gladys to continue retrieving your data."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If your account does not synchronize anymore, in case of doubt I advise you to renew your consent by clicking on the blue button \"I access my Enedis customer space\"."
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
10669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/enedis-compteur-5cf07b82c8ed2a482d314796ce1705d7.jpg");

},
51755(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/enedis-consentement-5221a34b4f350443fe2d18d5f3d5f535.jpg");

},
82642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/enedis-graphique-7371bce4d3e8599228266affe593a63d.jpg");

},
41882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/enedis-integration-clic-3be439b7a919813090dc4e452f36ed19.jpg");

},
38315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/enedis-integration-icone-c20e02a7cd8078efe398ed2e13ce1958.jpg");

},
701(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/graphique-consommation-quotidienne-125866a9ff86ca77b5401672345d4720.jpg");

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
21801(module) {
module.exports = JSON.parse('{"id":"integrations/enedis","title":"View your electricity consumption in Gladys with Enedis","description":"Enedis is a french electricity provider, and offers an API that allows to retrieve the electricity consumption data from a Linky meter of a household.","source":"@site/docs/integrations/enedis.md","sourceDirName":"integrations","slug":"/integrations/enedis","permalink":"/zh-Hans/docs/integrations/enedis","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/enedis.md","tags":[],"version":"current","frontMatter":{"id":"enedis","title":"View your electricity consumption in Gladys with Enedis","sidebar_label":"Enedis"},"sidebar":"docs","previous":{"title":"CallMeBot","permalink":"/zh-Hans/docs/integrations/callmebot"},"next":{"title":"Energy Monitoring","permalink":"/zh-Hans/docs/integrations/energy-monitoring"}}')

},

};
;
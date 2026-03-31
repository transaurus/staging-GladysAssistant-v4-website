"use strict";
exports.ids = ["2211"];
exports.modules = {
91810(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_owntracks_md_29e_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_owntracks_md_29e_json__rspack_import_0 = __webpack_require__(66913);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'owntracks',
	title: 'Owntracks',
	sidebar_label: 'Owntracks'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Download Owntracks",
  "id": "download-owntracks",
  "level": 3
}, {
  "value": "Create an API key in Gladys Plus",
  "id": "create-an-api-key-in-gladys-plus",
  "level": 3
}, {
  "value": "Go to Owntracks",
  "id": "go-to-owntracks",
  "level": 3
}, {
  "value": "See your location in Gladys",
  "id": "see-your-location-in-gladys",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://owntracks.org/",
        children: "Owntracks"
      }), " is an open-source mobile app which sends the phone location to a server, periodically."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Plus allows you to receive Owntracks message and create location in Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "download-owntracks",
      children: "Download Owntracks"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "First download Owntracks on iOS or Android."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "create-an-api-key-in-gladys-plus",
      children: "Create an API key in Gladys Plus"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://plus.gladysassistant.com/",
        children: "plus.gladysassistant.com"
      }), ", connect."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then go to \"settings\" => \"Open API\", and create a key."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "go-to-owntracks",
      children: "Go to Owntracks"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on the button in the top-left corner:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Open API owntracks Gladys",
        src: (__webpack_require__(89674)/* ["default"] */.A) + "",
        width: "750",
        height: "1334"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on settings:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Open API owntracks Gladys",
        src: (__webpack_require__(28679)/* ["default"] */.A) + "",
        width: "750",
        height: "1334"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Select \"HTTP\", and in the \"URL\" input, enter:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "https://api.gladysgateway.com/v1/api/owntracks/[YOUR-API-KEY]\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Fill in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "UserID"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DeviceID"
      }), " field with the terms of your choice (they are mandatory)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["I put \"iphone\" for the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "DeviceID"
      }), ", and \"pierre-gilles\" for the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "UserID"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys uses the API key to identify who is making the request."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Open API owntracks Gladys",
        src: (__webpack_require__(49752)/* ["default"] */.A) + "",
        width: "750",
        height: "1334"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "see-your-location-in-gladys",
      children: "See your location in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You should see your location in Gladys in the \"Maps\" tab."
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
89674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/open-api-owntracks-0-7488c77853736b360669cc72d318cefd.jpg");

},
28679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/open-api-owntracks-1-b1997b4150d37d5e048219a74728a3f7.jpg");

},
49752(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/open-api-owntracks-2-a026a3487128ed0cd442317503195c5e.jpg");

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
66913(module) {
module.exports = JSON.parse('{"id":"integrations/owntracks","title":"Owntracks","description":"Owntracks is an open-source mobile app which sends the phone location to a server, periodically.","source":"@site/docs/integrations/owntracks.md","sourceDirName":"integrations","slug":"/integrations/owntracks","permalink":"/zh-Hans/docs/integrations/owntracks","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/owntracks.md","tags":[],"version":"current","frontMatter":{"id":"owntracks","title":"Owntracks","sidebar_label":"Owntracks"},"sidebar":"docs","previous":{"title":"ChatGPT","permalink":"/zh-Hans/docs/integrations/openai"},"next":{"title":"Philips Hue","permalink":"/zh-Hans/docs/integrations/philips-hue"}}')

},

};
;
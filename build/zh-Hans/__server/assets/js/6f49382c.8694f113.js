"use strict";
exports.ids = ["8827"];
exports.modules = {
71825(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_free_mobile_md_6f4_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_free_mobile_md_6f4_json__rspack_import_0 = __webpack_require__(66016);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'free-mobile',
	title: 'How to configure Free Mobile with Gladys Assistant',
	sidebar_label: 'Free Mobile'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "<strong>Prerequisites</strong>",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Enter this key in Gladys Assistant",
  "id": "enter-this-key-in-gladys-assistant",
  "level": 2
}, {
  "value": "Send your first SMS",
  "id": "send-your-first-sms",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This integration allows you to send SMS to your cell phone with the french mobile operator ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://mobile.free.fr",
        children: "Free Mobile"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "free-mobile integration",
        src: (__webpack_require__(87819)/* ["default"] */.A) + "",
        width: "270",
        height: "199"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "prerequisites",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Prerequisites"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You must go to the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://mobile.free.fr",
        children: "Free Mobile"
      }), " page and click on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://mobile.free.fr/account/v2/login",
        children: "Subscriber Area"
      }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Subscriber Area",
        src: (__webpack_require__(10248)/* ["default"] */.A) + "",
        width: "176",
        height: "46"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You must then to click to the option page.\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "my-account",
        src: (__webpack_require__(49018)/* ["default"] */.A) + "",
        width: "1617",
        height: "921"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Enable the option ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Notifications par SMS"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "options",
        src: (__webpack_require__(71894)/* ["default"] */.A) + "",
        width: "1617",
        height: "921"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "If you disable and re-enable the SMS notification option, please be sure to update your API key in your configuration."
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "enter-this-key-in-gladys-assistant",
      children: "Enter this key in Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to \"Integrations\" -> \"Free-Mobile\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Enter this key in Gladys Assistant",
        src: (__webpack_require__(17978)/* ["default"] */.A) + "",
        width: "1304",
        height: "881"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enter your Customer ID and API key then click \"Save\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys configuration",
        src: (__webpack_require__(95394)/* ["default"] */.A) + "",
        width: "1217",
        height: "525"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "send-your-first-sms",
      children: "Send your first SMS"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can now use these integration from the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/zh-Hans/docs/scenes/intro",
        children: "Scenes"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys scene",
        src: (__webpack_require__(35733)/* ["default"] */.A) + "",
        width: "561",
        height: "240"
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
95394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/free-mobile-configuration-76de0bfaabce45f617040f1faf15132f.jpg");

},
17978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/free-mobile-integration-9a72ee9140073c0997b9a9f1efc8ad10.jpg");

},
49018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/free-mobile-my-account-fe1b603a29a9baec4e3de3b2af2cfcd7.jpg");

},
71894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/free-mobile-options-9925ded592531b70361d083a6a849e40.jpg");

},
35733(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/free-mobile-scene-action-5f39a0b40d89b784c61107d54de56250.jpg");

},
10248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCuRXhpZgAASUkqAAgAAAAHABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAADEBAgANAAAAcgAAADIBAgAUAAAAgAAAAGmHBAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABAAAAR0lNUCAyLjEwLjM4AAAyMDI0OjExOjIyIDIyOjQ4OjA4AAEAAaADAAEAAAABAAAAAAAAAP/hDM9odHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDo4OTViNzJiMS05YzMwLTQyZjMtYjUxNS0wNTBkZTEyZTA1M2MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDcyMTRmMTYtNzRmNi00ODcyLWFhYmItOGU5YjAxYzgyN2YwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODVlMWIzYmYtMGQwYS00NGYxLWFhNmItNDQ2ZWQwODEyMzVjIiBkYzpGb3JtYXQ9ImltYWdlL2pwZWciIEdJTVA6QVBJPSIyLjAiIEdJTVA6UGxhdGZvcm09IkxpbnV4IiBHSU1QOlRpbWVTdGFtcD0iMTczMjMxMjA5MzMwMzE5NCIgR0lNUDpWZXJzaW9uPSIyLjEwLjM4IiB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNDoxMToyMlQyMjo0ODowOCswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQ6MTE6MjJUMjI6NDg6MDgrMDE6MDAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6Y2hhbmdlZD0iLyIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMjQwMGQ2Ny1iYTQyLTQyNjUtYWVhMi04OWJkNTJhOTBkMTQiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTGludXgpIiBzdEV2dDp3aGVuPSIyMDI0LTExLTIyVDIyOjQ4OjEzKzAxOjAwIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+ICsElDQ19QUk9GSUxFAAEBAAACoGxjbXMEQAAAbW50clJHQiBYWVogB+gACwAWABUALwAfYWNzcEFQUEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1sY21zAAAAAAAAAAAAAAAAAAAAAAAAAAAA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");

},
87819(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/free-mobile-c88a5a352b706b687317ae2c622a4ed5.jpg");

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
66016(module) {
module.exports = JSON.parse('{"id":"integrations/free-mobile","title":"How to configure Free Mobile with Gladys Assistant","description":"This integration allows you to send SMS to your cell phone with the french mobile operator Free Mobile.","source":"@site/docs/integrations/free-mobile.md","sourceDirName":"integrations","slug":"/integrations/free-mobile","permalink":"/zh-Hans/docs/integrations/free-mobile","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/free-mobile.md","tags":[],"version":"current","frontMatter":{"id":"free-mobile","title":"How to configure Free Mobile with Gladys Assistant","sidebar_label":"Free Mobile"},"sidebar":"docs","previous":{"title":"Energy Monitoring","permalink":"/zh-Hans/docs/integrations/energy-monitoring"},"next":{"title":"Google Cast","permalink":"/zh-Hans/docs/integrations/google-cast"}}')

},

};
;
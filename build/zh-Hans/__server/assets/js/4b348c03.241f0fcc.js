"use strict";
exports.ids = ["7269"];
exports.modules = {
43239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2022_03_21_gladys_assistant_is_now_compatible_with_debian_11_md_4b3_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2022_03_21_gladys_assistant_is_now_compatible_with_debian_11_md_4b3_json__rspack_import_0 = __webpack_require__(15457);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys Assistant is now compatible with Debian 11 & Ubuntu > 20.04',
	description: 'As Gladys runs in Docker, it could seems that it should be compatible with any system by default, but it\'s not as simple!',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-debian-11.jpg',
	slug: 'gladys-assistant-compatible-with-debian-11'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What&#39;s new in Gladys Assistant 4.8.1?",
  "id": "whats-new-in-gladys-assistant-481",
  "level": 2
}, {
  "value": "CGgroup v1 to v2",
  "id": "cggroup-v1-to-v2",
  "level": 3
}, {
  "value": "Custom volumes are now used by integrations",
  "id": "custom-volumes-are-now-used-by-integrations",
  "level": 3
}, {
  "value": "Lots of bugfixes",
  "id": "lots-of-bugfixes",
  "level": 3
}, {
  "value": "How to upgrade?",
  "id": "how-to-upgrade",
  "level": 2
}, {
  "value": "Thanks to contributors",
  "id": "thanks-to-contributors",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hi everyone,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I'm excited to announce that we just released the compatibility with Debian 11 and Ubuntu > 20.04."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We also released a bunch of improvement that will make it more easy to install Gladys on a NAS (Synology/Unraid)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "No new features were added in this release, it's a lot of long-term work & bugfixes 🙂"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "whats-new-in-gladys-assistant-481",
      children: "What's new in Gladys Assistant 4.8.1?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "cggroup-v1-to-v2",
      children: "CGgroup v1 to v2"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "As Gladys runs entirely in Docker, it could seem easy: Gladys should be able to run smoothly on any system, right?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "But Gladys works with the Docker daemon and start new containers for 2 integrations: MQTT & Zigbee2mqtt."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "So it's a bit tied to the host on this part."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys, we need to get the container ID of the currently running Gladys container."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We were using CGroup v1 in Debian 10 to get the currently running container ID."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["What we would do is that we would read the file ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/proc/self/cgroup"
      }), ", and we would get something like this:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "3:rdma:/\n12:cpuset:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350\n11:cpu,cpuacct:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350\n10:freezer:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350\n9:devices:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350\n8:blkio:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350\n7:perf_event:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350\n6:net_cls,net_prio:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350\n5:hugetlb:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350\n4:pids:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350\n2:memory:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350\n1:name=systemd:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350\n0::/system.slice/containerd.service\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Then, we would parse this file to extract the container ID (the part after ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/docker/"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Debian 11, CGroups are now in v2, and works a bit differently, the same file looks like this:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "3:rdma:/\n0::/system.slice/docker-2bb2c94b0c395fc8fdff9fa4ce364a3be0dd05792145ffc93ce8d665d06521f1.scope\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "So the parsing is a bit different to get the container ID, but it still there!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We wrote some custom code for Cgroup v1 & v2, and now support both."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "custom-volumes-are-now-used-by-integrations",
      children: "Custom volumes are now used by integrations"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Let's imagine you start Gladys in a customer Docker volume:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "-v /my_special_folder:/var/lib/gladysassistant\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys, you might want to start Zigbee2mqtt/MQTT in the same folder, and it's now possible."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys will take the same the folder on host, and use it for the Zigbee2mqtt & MQTT integration."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "lots-of-bugfixes",
      children: "Lots of bugfixes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Fix a bug where updating a camera device would result in the device being polled several times at its poll frequency (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1463",
          children: "#1463"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Fix a bug in scene: The \"Try\" HTTP Request button was not taking headers into account. (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1475",
          children: "#1475"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Fix a bug on the dashboard: the dashboard name was not updated in the list when updated. (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1463",
          children: "#1463"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Add missing translations for the vibration sensor. (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/GladysAssistant/Gladys/pull/1461",
          children: "#1461"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "how-to-upgrade",
      children: "How to upgrade?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you installed Gladys with the official Raspberry Pi OS image, your instance will update ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "automatically"
      }), " in the coming hours. It can take up to 24 hours, don't panic."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you installed Gladys with Docker, make sure you are using Watchtower. See the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/installation/docker#auto-upgrade-gladys-with-watchtower",
        children: "documentation"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "With Watchtower, Gladys will update automatically."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "thanks-to-contributors",
      children: "Thanks to contributors"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to everyone who contributed to this release and gave their feedback on the forum!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want to talk about this release, you're all welcome on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "forum"
      }), " !"]
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
15457(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-assistant-compatible-with-debian-11","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2022-03-21-gladys-assistant-is-now-compatible-with-debian-11.md","source":"@site/blog/2022-03-21-gladys-assistant-is-now-compatible-with-debian-11.md","title":"Gladys Assistant is now compatible with Debian 11 & Ubuntu > 20.04","description":"As Gladys runs in Docker, it could seems that it should be compatible with any system by default, but it\'s not as simple!","date":"2022-03-21T00:00:00.000Z","tags":[],"readingTime":2.65,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys Assistant is now compatible with Debian 11 & Ubuntu > 20.04","description":"As Gladys runs in Docker, it could seems that it should be compatible with any system by default, but it\'s not as simple!","authors":"pierregilles","image":"/img/presentation/gladys-debian-11.jpg","slug":"gladys-assistant-compatible-with-debian-11"},"unlisted":false,"prevItem":{"title":"Launching Gladys Assistant 4.9 with Amazon Alexa support","permalink":"/zh-Hans/blog/gladys-assistant-4-9-with-alexa-integration"},"nextItem":{"title":"Gladys Assistant 4.8 is available, with calendar based triggers and conditions in scenes!","permalink":"/zh-Hans/blog/gladys-assistant-4-8-with-calendar-in-scenes"}}')

},

};
;
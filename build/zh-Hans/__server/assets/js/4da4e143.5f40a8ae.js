"use strict";
exports.ids = ["7138"];
exports.modules = {
5038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_4_freebox_delta_md_4da_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_4_freebox_delta_md_4da_json__rspack_import_0 = __webpack_require__(23488);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'freebox-delta',
	title: 'Install Gladys Assistant on a Freebox Delta',
	sidebar_label: 'Install on a Freebox Delta'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "On a Freebox Delta",
  "id": "on-a-freebox-delta",
  "level": 2
}, {
  "value": "Create a virtual machine on the Freebox Delta",
  "id": "create-a-virtual-machine-on-the-freebox-delta",
  "level": 3
}, {
  "value": "Install Docker on the Freebox Delta",
  "id": "install-docker-on-the-freebox-delta",
  "level": 3
}, {
  "value": "Start Gladys",
  "id": "start-gladys",
  "level": 3
}, {
  "value": "Auto-Upgrade Gladys with Watchtower",
  "id": "auto-upgrade-gladys-with-watchtower",
  "level": 2
}, {
  "value": "Accessing Gladys",
  "id": "accessing-gladys",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "on-a-freebox-delta",
      children: "On a Freebox Delta"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This tutorial explains how to install Gladys on a Freebox Delta (this is done with Docker)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "create-a-virtual-machine-on-the-freebox-delta",
      children: "Create a virtual machine on the Freebox Delta"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "First, go to the Freebox interface at the following address: mafreebox.free.fr."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "FreeboxOS",
        src: (__webpack_require__(1710)/* ["default"] */.A) + "",
        width: "1400",
        height: "978"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"VMs\". This window appears:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a VM",
        src: (__webpack_require__(60380)/* ["default"] */.A) + "",
        width: "1600",
        height: "1146"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Choose a name for the VM, for example ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Gladys"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Select the option \"Choose a pre-installed operating system from a list\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"Next\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a VM",
        src: (__webpack_require__(93485)/* ["default"] */.A) + "",
        width: "1600",
        height: "1124"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Select the system to install, for example ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Ubuntu"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enter a public SSH key or password."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Choose a username, for example ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "gladys"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"Next\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a VM",
        src: (__webpack_require__(92560)/* ["default"] */.A) + "",
        width: "1600",
        height: "1133"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"Finish\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The virtual machine (VM) is ready, click on \"Switch on\" to start the VM."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Add a VM",
        src: (__webpack_require__(30143)/* ["default"] */.A) + "",
        width: "1600",
        height: "490"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "SSH into your VM and update the system:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt update\nsudo apt upgrade\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "install-docker-on-the-freebox-delta",
      children: "Install Docker on the Freebox Delta"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Type in the following commands, one by one, to install Docker on the Freebox Delta."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt install docker.io\nsudo systemctl enable --now docker\nsudo usermod -aG docker gladys\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then exit your SSH session, and login again to ensure the changes are applied."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "start-gladys",
      children: "Start Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To launch Gladys, run the following command on your VM:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "docker run -d \\\n--log-driver json-file \\\n--log-opt max-size=10m \\\n--cgroupns=host \\\n--restart=always \\\n--privileged \\\n--network=host \\\n--name gladys \\\n-e NODE_ENV=production \\\n-e SERVER_PORT=80 \\\n-e TZ=Europe/Paris \\\n-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \\\n-v /var/run/docker.sock:/var/run/docker.sock \\\n-v /var/lib/gladysassistant:/var/lib/gladysassistant \\\n-v /dev:/dev \\\n-v /run/udev:/run/udev:ro \\\ngladysassistant/gladys:v4\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "auto-upgrade-gladys-with-watchtower",
      children: "Auto-Upgrade Gladys with Watchtower"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can use Watchtower to upgrade automatically Gladys when a new version is available. To do so, start a Watchtower container:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "docker run -d \\\n  --name watchtower \\\n  --restart=always \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  nickfedor/watchtower \\\n  --cleanup --include-restarting\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "accessing-gladys",
      children: "Accessing Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can access Gladys directly by typing the IP of your VM in your browser."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Accessing Gladys",
        src: (__webpack_require__(72170)/* ["default"] */.A) + "",
        width: "1600",
        height: "873"
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
93485(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/add-vm-2-679602e91ee8af73b3055fd90a8ecd86.jpg");

},
92560(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/add-vm-3-12256e32ad5f1f8fda978455499ef8c7.jpg");

},
60380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/add-vm-f62d650eda75f31198bd107b666eb760.jpg");

},
72170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/freebox-vm-success-2e983b108e6b63486aa69e4635a1d3e4.jpg");

},
1710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/freeboxos-a54c6c214df19864ad2d5b4de88be4fd.jpg");

},
30143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/start-vm-08baf19bf0327fe8b64059b580909d38.jpg");

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
23488(module) {
module.exports = JSON.parse('{"id":"installation/freebox-delta","title":"Install Gladys Assistant on a Freebox Delta","description":"On a Freebox Delta","source":"@site/docs/installation/4_freebox-delta.md","sourceDirName":"installation","slug":"/installation/freebox-delta","permalink":"/zh-Hans/docs/installation/freebox-delta","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/installation/4_freebox-delta.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"freebox-delta","title":"Install Gladys Assistant on a Freebox Delta","sidebar_label":"Install on a Freebox Delta"},"sidebar":"docs","previous":{"title":"Install on an Unraid NAS","permalink":"/zh-Hans/docs/installation/unraid"},"next":{"title":"Install on a Raspberry Pi","permalink":"/zh-Hans/docs/installation/raspberry-pi"}}')

},

};
;
"use strict";
exports.ids = ["1715"];
exports.modules = {
12268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_0_hardware_md_c39_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_installation_0_hardware_md_c39_json__rspack_import_0 = __webpack_require__(57318);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'hardware',
	title: 'Getting started with Gladys Assistant',
	sidebar_label: 'Getting started',
	slug: '/'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Choose Your Home Automation Hub",
  "id": "choose-your-home-automation-hub",
  "level": 2
}, {
  "value": "Option 1: Official Starter Kit (Europe Only for now 🇪🇺)",
  "id": "option-1-official-starter-kit-europe-only-for-now-",
  "level": 3
}, {
  "value": "Option 2: DIY Installation on Mini-PC",
  "id": "option-2-diy-installation-on-mini-pc",
  "level": 3
}, {
  "value": "Option 3: Existing Hardware",
  "id": "option-3-existing-hardware",
  "level": 3
}, {
  "value": "Option 4: Raspberry Pi (Not Recommended)",
  "id": "option-4-raspberry-pi-not-recommended",
  "level": 3
}, {
  "value": "Installing Gladys Assistant",
  "id": "installing-gladys-assistant",
  "level": 2
}, {
  "value": "Define Your Smart Home Project",
  "id": "define-your-smart-home-project",
  "level": 2
}, {
  "value": "Example: Living Room",
  "id": "example-living-room",
  "level": 3
}, {
  "value": "Configuring Your Smart Home",
  "id": "configuring-your-smart-home",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It can be difficult to know where to start when you're new to home automation."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "choose-your-home-automation-hub",
      children: "Choose Your Home Automation Hub"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Assistant is a self-hosted software, which means everything works locally on a home automation hub. This is one of its main strengths!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You have several options to run Gladys:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "option-1-official-starter-kit-europe-only-for-now-",
      children: "Option 1: Official Starter Kit (Europe Only for now 🇪🇺)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The easiest way to get started is with our ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "official starter kit"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Gladys pre-installed"
        }), " on a powerful Beelink mini-PC"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Plug & play"
        }), ": Receive it, plug it in, and you're ready in 5 minutes"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "6 months of Gladys Plus included"
        }), " for remote access"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Official training included"
        }), " with hours of video tutorials"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Support included"
        }), ": I'm here to help if you have questions"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["👉 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://gladysassistant.com/fr/starter-kit/",
        children: "Discover the starter kit"
      }), " (Ships to Europe only for now)"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Note:"
      }), " The starter kit currently ships only to European countries. If you're outside Europe, see the options below."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "option-2-diy-installation-on-mini-pc",
      children: "Option 2: DIY Installation on Mini-PC"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you're outside Europe or prefer to install Gladys yourself:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Beelink Mini S13"
        }), " or similar mini-PC", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Powerful and stable hardware (Intel N150, 16GB RAM, 500GB NVMe SSD)"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Install Ubuntu Server via bootable USB + Gladys via Docker"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["Available on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://amzn.to/4gKDV2E",
              children: "Amazon US"
            }), " or your local retailer"]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Best price/performance ratio for a long-term setup"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "option-3-existing-hardware",
      children: "Option 3: Existing Hardware"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you already have compatible hardware:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Synology NAS, Intel NUC, or any Docker-compatible Linux server"
        }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Reuse your existing hardware"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Follow our installation guides below"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "option-4-raspberry-pi-not-recommended",
      children: "Option 4: Raspberry Pi (Not Recommended)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "If you already own a Raspberry Pi, you can test Gladys on it"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["However, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "I do not recommend this option in the long term"
        }), ":", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Total cost is relatively high (Pi + power supply + case + SSD)"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["Micro-SD cards are ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "strongly discouraged"
            }), " (high risk of data corruption)"]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Power supply instability makes Zigbee/Z-Wave dongles unreliable"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "installing-gladys-assistant",
      children: "Installing Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Depending on the hardware chosen, you can follow one of the following tutorials:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/installation/mini-pc/",
          children: "Install Gladys Assistant on a Mini-PC"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/installation/synology/",
          children: "Install Gladys Assistant on a Synology NAS"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/installation/unraid/",
          children: "Install Gladys Assistant on an Unraid NAS"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/installation/raspberry-pi/",
          children: "Install Gladys Assistant on a Raspberry Pi"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "define-your-smart-home-project",
      children: "Define Your Smart Home Project"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The most important thing is to define the automations you want to implement in your home: connected lights, an alarm to secure your home, energy savings by turning off unused devices or heating?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A good way to organize is to create a table (in Excel, Google Sheets, or Notion) where you list all the devices you want to integrate, room by room."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Notion Table Connected Home",
        src: (__webpack_require__(17651)/* ["default"] */.A) + "",
        width: "1600",
        height: "1137"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "example-living-room",
      children: "Example: Living Room"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Name"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Price"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Link"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Zigbee Temperature/Humidity Sensor with Display"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "$19,99"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://amzn.to/4i3oRP1",
              children: "Amazon US"
            })
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "ZigBee Smart Plug 4 Pack with Real-time Energy Monitoring"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "€16.99"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://amzn.to/3CRoBne",
              children: "Amazon US"
            })
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "IKEA TRÅDFRI E27 Bulb (Ceiling Light)"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "$13,99"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://www.ikea.com/us/en/p/tradfri-led-bulb-e26-1100-lumen-smart-wireless-dimmable-white-spectrum-globe-50545678/",
              children: "IKEA US"
            })
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "IKEA STYRBAR Remote (Brightness)"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "$13,99"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://www.ikea.com/us/en/p/styrbar-remote-control-smart-white-80488370/",
              children: "IKEA US"
            })
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Zigbee Motion Sensor 4 Pack"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "$75,99"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://amzn.to/4k2hb0X",
              children: "Amazon US"
            })
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The idea is not necessarily to buy everything at once, but rather to plan and gradually equip your home, unless you have just moved in and want to install everything immediately."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configuring-your-smart-home",
      children: "Configuring Your Smart Home"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once Gladys is running at your home, you can access it via your web browser and start configuring your home."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys Installation",
        src: (__webpack_require__(32578)/* ["default"] */.A) + "",
        width: "1600",
        height: "890"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Simply follow the steps here."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We will first create the main administrator account for your smart home:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create Local Gladys Account",
        src: (__webpack_require__(32197)/* ["default"] */.A) + "",
        width: "1600",
        height: "1036"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Next, Gladys will ask you for some preferences:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Set Local Gladys Account Preferences",
        src: (__webpack_require__(35375)/* ["default"] */.A) + "",
        width: "1600",
        height: "766"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Finally, you can name your house:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create House in Gladys",
        src: (__webpack_require__(90138)/* ["default"] */.A) + "",
        width: "1600",
        height: "1016"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There you go! You now have a Gladys smart home system at your place."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now set up the various integrations available in Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you have any questions, join us now ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "on the forum"
      }), "!"]
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
90138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/configure-house-b0dcd52312cb1ad5aa9fdbb605ffb79a.jpg");

},
32197(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/create-local-account-ae62e1f3e57b3d8e9662d4600496322d.jpg");

},
17651(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/notion-table-connected-f087d796f3bb7504dfb80dd54ccddfb1.jpg");

},
35375(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/preferences-975d4b1cba56b8def8e1e2bde3e85bab.jpg");

},
32578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/welcome-gladys-f5bf803fc0baaa8b0adbbbc9a2f0c818.jpg");

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
57318(module) {
module.exports = JSON.parse('{"id":"installation/hardware","title":"Getting started with Gladys Assistant","description":"It can be difficult to know where to start when you\'re new to home automation.","source":"@site/docs/installation/0_hardware.md","sourceDirName":"installation","slug":"/","permalink":"/zh-Hans/docs/","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/installation/0_hardware.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"hardware","title":"Getting started with Gladys Assistant","sidebar_label":"Getting started","slug":"/"},"sidebar":"docs","next":{"title":"Install on a Mini-PC","permalink":"/zh-Hans/docs/installation/mini-pc"}}')

},

};
;
"use strict";
exports.ids = ["5233"];
exports.modules = {
82151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_telegram_md_b7c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_telegram_md_b7c_json__rspack_import_0 = __webpack_require__(12412);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'telegram',
	title: 'Send Gladys notifications to Telegram',
	sidebar_label: 'Telegram'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Create a Telegram account",
  "id": "create-a-telegram-account",
  "level": 2
}, {
  "value": "Create the Telegram Bot API key",
  "id": "create-the-telegram-bot-api-key",
  "level": 2
}, {
  "value": "Enter this key in Gladys Assistant",
  "id": "enter-this-key-in-gladys-assistant",
  "level": 2
}, {
  "value": "Create the link between Gladys Assistant and Telegram",
  "id": "create-the-link-between-gladys-assistant-and-telegram",
  "level": 2
}, {
  "value": "First communication between Telegram and Gladys Assistant",
  "id": "first-communication-between-telegram-and-gladys-assistant",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This integration allows you to use the Telegram messaging app."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Créez un compte Telegram",
        src: (__webpack_require__(72675)/* ["default"] */.A) + "",
        width: "245",
        height: "164"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Telegram is a messaging service focused on the speed and security of data transfer."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Available on many platforms (Android, IOs, Windows Phone, website, PC, Mac, Linux), it will allow you to communicate with Gladys Assistant by giving it instructions, receiving information or questions..."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "create-a-telegram-account",
      children: "Create a Telegram account"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Go to the Telegram website: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://telegram.org/",
        children: "https://telegram.org/"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Choose the device you want to use Telegram on."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Créez un compte Telegram",
        src: (__webpack_require__(7030)/* ["default"] */.A) + "",
        width: "907",
        height: "833"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: "on Android, click on the \"Telegram for Android\" section, log into your account, optionally choose the device you want to install it on, then click \"Install\"."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: "on IOs, go to the App Store of your device (IPhone or IPad), search for Telegram and install it."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: "on PC, click on the \"Telegram for PC / Mac / Linux\" section, optionally click on \"Show all platforms\", download the software, then install it."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Start the app or software."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Créez un compte Telegram",
        src: (__webpack_require__(75634)/* ["default"] */.A) + "",
        width: "797",
        height: "599"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enter your mobile phone number, and activate your account using the code received by SMS."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then enter the information to create your account."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "create-the-telegram-bot-api-key",
      children: "Create the Telegram Bot API key"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "When launching Telegram for the first time, you get this window (on Windows):"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Créez un compte Telegram",
        src: (__webpack_require__(28051)/* ["default"] */.A) + "",
        width: "798",
        height: "600"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In the \"Search\" box, type ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@BotFather"
      }), " and then press the Enter key."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on the BotFather icon (the first in the list)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Créez un compte Telegram",
        src: (__webpack_require__(61006)/* ["default"] */.A) + "",
        width: "732",
        height: "694"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on the \"Start\" button at the bottom of the message viewing window..."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Créez un compte Telegram",
        src: (__webpack_require__(39051)/* ["default"] */.A) + "",
        width: "732",
        height: "694"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["...and type ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/newbot"
      }), " to ask Telegram Bot to create a new Bot for you."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Créez un compte Telegram",
        src: (__webpack_require__(61098)/* ["default"] */.A) + "",
        width: "800",
        height: "600"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "BotFather asks you for the name you want to give to your bot. This will be the name displayed in your chats."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then, you will have to indicate a \"public\" name, which will make it possible to find it in the directory. We have to chose a unique name."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Please note that the name must end with \"bot\", to clearly identify that it is a robot."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Créez un compte Telegram",
        src: (__webpack_require__(30133)/* ["default"] */.A) + "",
        width: "837",
        height: "766"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In the message sent to you by BotFather, there is the API key under the line \"Use this token to access the HTTP API:\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "enter-this-key-in-gladys-assistant",
      children: "Enter this key in Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Go to \"Integrations\" -> \"Telegram\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Entrer une clé dans Gladys Assistant",
        src: (__webpack_require__(43612)/* ["default"] */.A) + "",
        width: "1088",
        height: "1008"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enter your API key then click \"Save\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Entrer une clé dans Gladys Assistant",
        src: (__webpack_require__(54857)/* ["default"] */.A) + "",
        width: "1264",
        height: "526"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "create-the-link-between-gladys-assistant-and-telegram",
      children: "Create the link between Gladys Assistant and Telegram"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"this link\" to communicate with Gladys Assistant in Telegram."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Entrer une clé dans Gladys Assistant",
        src: (__webpack_require__(49059)/* ["default"] */.A) + "",
        width: "1264",
        height: "526"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"Send message\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Entrer une clé dans Gladys Assistant",
        src: (__webpack_require__(15948)/* ["default"] */.A) + "",
        width: "1279",
        height: "444"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A window asking you to open this link in the Telegram Desktop app may appear."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In this window, click on \"Telegram Desktop\", then check the box \"Remember my choice for tg links.\" This will hide this window for the next times."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Entrer une clé dans Gladys Assistant",
        src: (__webpack_require__(67587)/* ["default"] */.A) + "",
        width: "1277",
        height: "575"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then click on \"Open link\" to open the Telegram app."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Entrer une clé dans Gladys Assistant",
        src: (__webpack_require__(95757)/* ["default"] */.A) + "",
        width: "736",
        height: "697"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click on \"Start\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "first-communication-between-telegram-and-gladys-assistant",
      children: "First communication between Telegram and Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enter your first question for your Gladys Assistant, for example : \"What's the weather like?\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Wait a bit and ......... magic!!!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Your assistant answers you!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Entrer une clé dans Gladys Assistant",
        src: (__webpack_require__(72098)/* ["default"] */.A) + "",
        width: "736",
        height: "701"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Check on the Gladys Assistant home page:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Entrer une clé dans Gladys Assistant",
        src: (__webpack_require__(49545)/* ["default"] */.A) + "",
        width: "1245",
        height: "819"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can also view the conversations in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Discussion"
      }), " tab of Gladys Assistant."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Entrer une clé dans Gladys Assistant",
        src: (__webpack_require__(65130)/* ["default"] */.A) + "",
        width: "1261",
        height: "376"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Let's see what it looks like on a smartphone:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Entrer une clé dans Gladys Assistant",
        src: (__webpack_require__(87295)/* ["default"] */.A) + "",
        width: "332",
        height: "545"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enjoy !"
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
72675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
7030(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_01_creer_compte_Site-b6f53331bb812a546ba3e5e999ee8857.jpg");

},
75634(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_02_creer_compte_Desktop-17c6ad6a38d67f79f29d5853a0267001.jpg");

},
28051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_03_creer_API_premier-435badfde41d4babe41c43942df533c5.jpg");

},
61006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_04_creer_API_BotFather-0-81b34de291dc68edae2409e0fadffcae.jpg");

},
39051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_04_creer_API_BotFather-1-f7e7909259c0df3d6cf8436ca423e99f.jpg");

},
61098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_05_creer_API_Bot_Name-d79ac14fceda2ef8ff48417f7dd8a01e.jpg");

},
30133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_06_creer_API_Bot_config_ok-1-6aeab6f95f8a892abfe06225c941830b.jpg");

},
43612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_07_Integration_Gladys-0-0df2bdcb1b35980dac8b918952a6a3a4.jpg");

},
49059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_08_Integration_Gladys_ok-1-3161164bea74892f333b8ab9ff335473.jpg");

},
54857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_08_Integration_Gladys_ok-dfc0066b602d68a7089783090c004e7f.jpg");

},
15948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_09_Communiquer_Gladys-5e536497f2d5eb851e1d039000c87a3b.jpg");

},
67587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_10_Communiquer_Gladys_lancement_appli-6511319595022479a5f7e865f5c05a46.jpg");

},
95757(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_11_Communiquer_Gladys_lancement_1ere_com-c7be747b3d92aac627195dcbceeb09ab.jpg");

},
72098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_12_Communiquer_Gladys_1ere_com-5202064ebc152b335e1a6097dfb61031.jpg");

},
49545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_13_Communiquer_Gladys_Gladys_Accueil-29a4f49eea6e0ffff2a562378fd97c6b.jpg");

},
65130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_14_Communiquer_Gladys_Gladys_Discussion-48e569f0cc96154c40fa919ee29aa810.jpg");

},
87295(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/telegram_15_Communiquer_Gladys_Smartphone-85c74905602c8f2b0791c84218c9b398.jpg");

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
12412(module) {
module.exports = JSON.parse('{"id":"integrations/telegram","title":"Send Gladys notifications to Telegram","description":"This integration allows you to use the Telegram messaging app.","source":"@site/docs/integrations/telegram.md","sourceDirName":"integrations","slug":"/integrations/telegram","permalink":"/zh-Hans/docs/integrations/telegram","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/telegram.md","tags":[],"version":"current","frontMatter":{"id":"telegram","title":"Send Gladys notifications to Telegram","sidebar_label":"Telegram"},"sidebar":"docs","previous":{"title":"Tasmota","permalink":"/zh-Hans/docs/integrations/tasmota"},"next":{"title":"TP-Link","permalink":"/zh-Hans/docs/integrations/tp-link"}}')

},

};
;
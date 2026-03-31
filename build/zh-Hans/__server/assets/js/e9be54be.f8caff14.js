"use strict";
exports.ids = ["8787"];
exports.modules = {
15006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_mqtt_md_e9b_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_mqtt_md_e9b_json__rspack_import_0 = __webpack_require__(38403);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'mqtt',
	title: 'MQTT',
	sidebar_label: 'MQTT'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configure an MQTT broker in Gladys Assistant",
  "id": "configure-an-mqtt-broker-in-gladys-assistant",
  "level": 2
}, {
  "value": "Declare an MQTT device in Gladys",
  "id": "declare-an-mqtt-device-in-gladys",
  "level": 2
}, {
  "value": "Test the MQTT device",
  "id": "test-the-mqtt-device",
  "level": 2
}, {
  "value": "To go further",
  "id": "to-go-further",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The goal of this tutorial is to explain how MQTT works in Gladys Assistant."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "MQTT is a \"publish / subscribe\" protocol which is widely used in home automation. It is popular because it is very light and is implemented on many DIY platforms (Arduino, ESP8266 NodeMCU). It consists mainly of programming languages (Javascript / Node.js, Python, PHP, C / C ++, Java,...)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["MQTT allows you to send a value ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "to"
      }), " Gladys from a connected device (e.g. a temperature sensor taking temperature readings every 10 minutes). You can also use MQTT to send a home automation command ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "from"
      }), " Gladys to a actuator (e.g.: send the command to a rolling handwheel to open)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys therefore implements a MQTT API in both directions:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "\"Peripheral -> Gladys\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "\"Gladys -> Peripheral\""
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The MQTT API is described in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/api/mqtt-api",
        children: "the MQTT documentation"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configure-an-mqtt-broker-in-gladys-assistant",
      children: "Configure an MQTT broker in Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The following tutorial assumes that you have either (1) installed Gladys Assistant 4 with the official Rasbian image as ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/",
        children: "explained here"
      }), ", or (2) that you have Gladys installed witg Docker."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["First, go to Gladys, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Integrations"
      }), " section, and open the MQTT integration:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Configure a MQTT broker in Gladys Assistant",
        src: (__webpack_require__(61394)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Then, go to the \"Configuration\" tab to configure your MQTT broker."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Configure a MQTT broker in Gladys Assistant",
        src: (__webpack_require__(71293)/* ["default"] */.A) + "",
        width: "1600",
        height: "733"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There are 2 optionsat this step:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "EITHER you let Gladys launch an MQTT broker all alone (via Docker). This is the preferred option as it is the easiest way to use MQTT in Gladys."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "OR you configure an MQTT broker yourself (locally or remotely). This option can be useful if you already have an MQTT broker running on a server, or if you want to use an online MQTT broker."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In this tutorial, we will go through option #1 (letting Gladys launch the MQTT broker)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can therefore launch the creation of the MQTT broker automatically with Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Depending on your internet connection, and the power of your machine, this can take a few seconds and a few minutes."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Configure a MQTT broker in Gladys Assistant",
        src: (__webpack_require__(15712)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can click on the little eye to see the password that Gladys generated for your MQTT broker."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We recommend that you write this password down somewhere."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Configure a MQTT broker in Gladys Assistant",
        src: (__webpack_require__(9024)/* ["default"] */.A) + "",
        width: "1600",
        height: "841"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We therefore have a running MQTT broker which is connected to Gladys!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "declare-an-mqtt-device-in-gladys",
      children: "Declare an MQTT device in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In this tutorial, we will use the example of a temperature sensor placed in the kitchen which returns temperature values every 10 minutes to Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "First, go to the \"Devices\" tab of the MQTT integration, then click on the \"New +\" button:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create a MQTT device in Gladys Assistant",
        src: (__webpack_require__(74383)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Fill out the form with your device information."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For example, let's fill it in with the following information:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Name: \"Temperature sensor\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["External ID: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "mqtt:kitchen:temperature-sensor"
        }), ". This must not have spaces and must start with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "mqtt:"
        }), ". We recommend that you keep a convention throughout your Gladys installation, such as ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "mqtt:room_name:device_name"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Room: \"Kitchen\"."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create a MQTT device in Gladys Assistant",
        src: (__webpack_require__(91392)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Next, we are going to add features to this device."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Indeed, in Gladys, a \"physical\" device can have several \"features\". Some manufacturers offer \"multi-sensor\" peripherals (temperature/humidity/brightness is a classic)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In the search bar, search for \"temperature\" and select \"Temperature / temperature sensor\". Click on \"Add feature\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can then fill out the form with the following information:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Name: \"Temperature\". It is this name that will be displayed on the dashboard."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["External feature ID: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "mqtt:kitchen:temperature-sensor:temperature"
        }), ". We advise you here to also keep a convention, such as for example ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "mqtt:room_name:device_name:feature_name"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Unit: \"° C\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Minimum value: -50 (Let's assume your temperature sensor goes down to -50°C)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Maximum value: 200 (Let's assume your temperature sensor goes that high!)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Is it a sensor ?: This box is used to indicate if your peripheral works in the direction \"Peripheral -> Gladys\" or \"Gladys -> Peripheral\". If you put \"Yes\", then this device is \"read-only\", it just returns values to Gladys. This is the case with our temperature sensor. If you put \"no\", this device is an actuator which can be controlled by Gladys."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "MQTT Topic: This is the topic in which Gladys will \"listen\" to the new values for this device. We advise you to copy it somewhere for later."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create a MQTT device in Gladys Assistant",
        src: (__webpack_require__(16957)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Click \"Save\", you should on a screen like this:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Create a MQTT device in Gladys Assistant",
        src: (__webpack_require__(76438)/* ["default"] */.A) + "",
        width: "1600",
        height: "1000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "test-the-mqtt-device",
      children: "Test the MQTT device"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We suggest you use an MQTT client to test this MQTT device."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can use the MQTT client ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://mqttx.app/",
        children: "MQTT X"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "After installing and launching the software, click on \"New connection\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Fill out the form with the following information:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Name: \"MQTTGladys\". This name is only useful for display in the software."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Host: The IP address of your Rasperry Pi on the network. You must be on the same network as your Raspberry Pi for this tutorial."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Port: 1883"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Username: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "gladys"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Password: The password that Gladys generated in the first part of this tutorial."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Test the MQTT device",
        src: (__webpack_require__(9237)/* ["default"] */.A) + "",
        width: "1600",
        height: "1211"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "If you had not kept the password, you can still find it by going back to the configuration of the MQTT module and clicking on the little eye on the password field."
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Save the configuration by clicking on \"Connect\"."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In the bar at the bottom, put the MQTT topic that you had copied when creating the feature earlier."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In the bottom field, enter a temperature, in this case \"21.2\", then click on \"Publish\":"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Test the MQTT device",
        src: (__webpack_require__(68746)/* ["default"] */.A) + "",
        width: "1600",
        height: "1211"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On the dashboard, add a new \"devices in room\" box and select your room."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You should see your device with the temperature we just sent:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Test the MQTT device",
        src: (__webpack_require__(80903)/* ["default"] */.A) + "",
        width: "1600",
        height: "587"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Bravo !"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "to-go-further",
      children: "To go further"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you want to write a program that sends data to your MQTT broker, there are MQTT libraries in all languages."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For example, in Node.js, you can use the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.npmjs.com/package/mqtt",
        children: "npm mqtt package"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There are plenty of tutorials on the internet for all platforms :)"
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
61394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/configure-mqtt-broker-1-86855a50d4d5f9a5ef21b8a8e3b6b974.jpg");

},
71293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/configure-mqtt-broker-2-2bf1ddcf318fe434fa315da338b5ac21.jpg");

},
15712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/configure-mqtt-broker-3-744d57b653f65aa3f1a830c0df0dd42c.jpg");

},
9024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/configure-mqtt-broker-4-3fd1ccc733cb315d345c43e7e66bdcd0.jpg");

},
74383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/create-mqtt-device-1-15153e43cf23f773a9ac578d1e0d1181.jpg");

},
91392(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/create-mqtt-device-2-e43e0c808cde14f7199b50f34adaa141.jpg");

},
16957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/create-mqtt-device-3-b46ea3df349309739ab4f07de8ce8735.jpg");

},
76438(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/create-mqtt-device-4-717aa4657fc0184f9503dfe2a4d5c96a.jpg");

},
9237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/send-test-message-mqtt-1-68d10aa9ad87c045d3d60f4229196cf7.jpg");

},
68746(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/send-test-message-mqtt-2-64121aeae1587169d9c5385e1f2d70f6.jpg");

},
80903(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/send-test-message-mqtt-3-d4e67e38d746df12e32ffc86a90ab653.jpg");

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
38403(module) {
module.exports = JSON.parse('{"id":"integrations/mqtt","title":"MQTT","description":"The goal of this tutorial is to explain how MQTT works in Gladys Assistant.","source":"@site/docs/integrations/mqtt.md","sourceDirName":"integrations","slug":"/integrations/mqtt","permalink":"/zh-Hans/docs/integrations/mqtt","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/mqtt.md","tags":[],"version":"current","frontMatter":{"id":"mqtt","title":"MQTT","sidebar_label":"MQTT"},"sidebar":"docs","previous":{"title":"MCP","permalink":"/zh-Hans/docs/integrations/mcp"},"next":{"title":"Lan-Manager","permalink":"/zh-Hans/docs/integrations/lan-manager"}}')

},

};
;
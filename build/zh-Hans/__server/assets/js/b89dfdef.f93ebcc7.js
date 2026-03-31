"use strict";
exports.ids = ["5498"];
exports.modules = {
94502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_05_11_gladys_assistant_4_58_with_matter_support_md_b89_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_05_11_gladys_assistant_4_58_with_matter_support_md_b89_json__rspack_import_0 = __webpack_require__(67192);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys Assistant Now Compatible with Matter',
	description: 'Discover Gladys Assistant v4.58: Matter support, but that\'s not the only new feature!',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-assistant-4-58.jpg',
	slug: 'gladys-assistant-4-58-with-matter-support'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Matter Integration",
  "id": "matter-integration",
  "level": 2
}, {
  "value": "Gauge Widget on the Dashboard",
  "id": "gauge-widget-on-the-dashboard",
  "level": 2
}, {
  "value": "Improved &quot;Charts&quot; Widget",
  "id": "improved-charts-widget",
  "level": 2
}, {
  "value": "The &quot;Wait&quot; Scene Action Supports Dynamic Values",
  "id": "the-wait-scene-action-supports-dynamic-values",
  "level": 2
}, {
  "value": "Get the Result of an AI Query",
  "id": "get-the-result-of-an-ai-query",
  "level": 2
}, {
  "value": "Gladys Update Notification",
  "id": "gladys-update-notification",
  "level": 2
}, {
  "value": "Alarm: Partial Arming Now Locks Your Tablets",
  "id": "alarm-partial-arming-now-locks-your-tablets",
  "level": 2
}, {
  "value": "Zigbee2MQTT: Support for the Tuya ME201WZ Level Sensor",
  "id": "zigbee2mqtt-support-for-the-tuya-me201wz-level-sensor",
  "level": 2
}, {
  "value": "ZWaveJS: Energy Measurement Support",
  "id": "zwavejs-energy-measurement-support",
  "level": 2
}, {
  "value": "And That&#39;s Not All!",
  "id": "and-thats-not-all",
  "level": 2
}, {
  "value": "How to Update?",
  "id": "how-to-update",
  "level": 2
}, {
  "value": "Want to Get Started with Gladys?",
  "id": "want-to-get-started-with-gladys",
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
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you've been on the Gladys forum, you've probably noticed: the last few weeks have been particularly active!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Today, I'm very happy to release ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Gladys Assistant 4.58"
      }), ", which brings Matter support, but that's far from being the only interesting thing in this version 😄"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "matter-integration",
      children: "Matter Integration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["As I mentioned in my ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/blog/2024-year-in-review/",
        children: "2024 year in review"
      }), ", I'm convinced that Matter is a small revolution in the world of smart homes, and a revolution that will have an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "extremely positive impact for Gladys"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This protocol is open, works entirely locally, and finally allows us to have a common language between devices from various brands."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "No more proprietary protocols, no more third-party applications, no more cloud APIs, no more data going to third-party servers 😎"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I say this protocol is open because anyone can create a Matter device, even DIY."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["There is, for example, an excellent open source project, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/Luligu/matterbridge",
        children: "Matterbridge"
      }), ", which aims to connect non-Matter compatible devices to a Matter network. This project allows, for example, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Shelly"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Somfy Tahoma"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Zigbee2MQTT"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Home Assistant"
      }), " devices, and more to be compatible with Matter."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to this project, all these devices become de facto compatible with Gladys Assistant!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For those of you who have unusual devices, it's even possible to code a small Matterbridge plugin to add Matter support to your device, and thus easily integrate it into Gladys Assistant."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Anyway, this integration is now available:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Matter in Gladys Assistant",
        src: (__webpack_require__(25548)/* ["default"] */.A) + "",
        width: "2552",
        height: "2274"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "My goal is to cover 100% of Matter devices, and I welcome your feedback so we can achieve this."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To get started with the Matter integration, you can follow this tutorial:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["👉 ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/integrations/matter/",
        children: "Integrate Matter devices in Gladys Assistant"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "gauge-widget-on-the-dashboard",
      children: "Gauge Widget on the Dashboard"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gauge Widget dashboard",
        src: (__webpack_require__(715)/* ["default"] */.A) + "",
        width: "766",
        height: "564"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now add a \"Gauge\" widget to your dashboard, useful for visualizing the fill rate of a tank, the battery level of a device, and much more!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "improved-charts-widget",
      children: "Improved \"Charts\" Widget"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The \"Charts\" widget now supports custom aggregation functions:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Aggregation functions in Gladys charts",
        src: (__webpack_require__(4579)/* ["default"] */.A) + "",
        width: "724",
        height: "364"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "As well as grouping by interval: hour, day, week, month, year:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Time interval grouping in Gladys charts",
        src: (__webpack_require__(98309)/* ["default"] */.A) + "",
        width: "746",
        height: "382"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "These improvements will allow you to better visualize your data, for example:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Display the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "cumulative"
        }), " precipitation ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "per day"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Display the monthly ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "sum"
        }), " of electricity consumption"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Display the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "number"
        }), " of sensor values received ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "per week"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Display the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "minimum value"
        }), " of battery ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "per day"
        }), " of your battery storage"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The possibilities are endless!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "the-wait-scene-action-supports-dynamic-values",
      children: "The \"Wait\" Scene Action Supports Dynamic Values"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is now possible to inject variables and perform calculations in the \"Wait\" block."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For example, if you want to wait between 5 and 30 minutes randomly, you can use this function:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Wait with variables",
        src: (__webpack_require__(91188)/* ["default"] */.A) + "",
        width: "752",
        height: "826"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Super useful for simulating presence!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's also possible to inject a variable from a sensor, or even from Gladys AI..."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "get-the-result-of-an-ai-query",
      children: "Get the Result of an AI Query"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In scenes, you can use our \"Ask AI\" block to ask a question to the artificial intelligence and get an opinion on a situation."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is the true \"proactive AI\" we've all dreamed of!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For example, this action allows you to identify a car in a camera image, or analyze a sensor value, without you needing to intervene."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The AI's response is now injected into a scene variable, usable in all other blocks, for example, to speak on a speaker:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Inject AI response in scenes",
        src: (__webpack_require__(44834)/* ["default"] */.A) + "",
        width: "746",
        height: "1144"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "gladys-update-notification",
      children: "Gladys Update Notification"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From now on, Gladys will send you a notification when it has just updated."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The notification is sent to Gladys administrators, in their language, through their configured communication methods: Telegram, WhatsApp, Signal, or NextCloud Talk."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Update notification",
        src: (__webpack_require__(6145)/* ["default"] */.A) + "",
        width: "988",
        height: "920"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "alarm-partial-arming-now-locks-your-tablets",
      children: "Alarm: Partial Arming Now Locks Your Tablets"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you use the alarm in Gladys, and you activate partial arming at night or during a daytime nap, know that it now locks all tablets in the house, to prevent a potential intruder from accessing your home automation during your sleep!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Specifically, as soon as the \"Partial Arming\" mode is activated, all tablets in the house will have this display to protect your installation:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys Alarm Mode iPad Mockup",
        src: (__webpack_require__(62121)/* ["default"] */.A) + "",
        width: "2400",
        height: "1800"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "zigbee2mqtt-support-for-the-tuya-me201wz-level-sensor",
      children: "Zigbee2MQTT: Support for the Tuya ME201WZ Level Sensor"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Support for the Tuya ME201WZ level sensor",
        src: (__webpack_require__(95574)/* ["default"] */.A) + "",
        width: "800",
        height: "800"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want to measure the level of a tank in real-time, and receive alerts when the level is too low or too high, you can now use the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.domadoo.fr/fr/produits-compatibles-jeedom/7616-moray-capteur-de-niveau-d-eau-liquide-carburant-zigbee-tuya-me201wz.html?domid=17",
        children: "Tuya ME201WZ Zigbee sensor"
      }), ", which is fully supported by Gladys 🙂"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "zwavejs-energy-measurement-support",
      children: "ZWaveJS: Energy Measurement Support"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Devices that support energy measurements, such as the ZW075 AEON Labs Smart Switch Gen5, are now supported by our ZWave integration, based on ZWaveJS."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to @Sescandell for the development!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "and-thats-not-all",
      children: "And That's Not All!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This version brings many other improvements, including:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "HomeKit"
        }), ": limiting accessory names to a maximum of 64 characters (compliance with specifications). Thanks to @bertrandda for the development 🙏"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "MQTT"
        }), " & ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Zigbee2MQTT"
        }), ": improved search performance on the devices page."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Scenes"
        }), ":", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Ability to delete the first condition in a group of multiple conditions."
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "New bottom bar to save and test a scene + confirmation before deletion. Thanks to @cicoub13 🙏"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Added a button to insert an action group."
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Filters are now preserved after deleting a scene."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dashboard"
        }), ":", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Added a button to insert a widget at a specific position."
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Display of \"non-sensor\" but non-controllable MQTT devices as sensors."
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Fixed display of MQTT placeholders in scenes."
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "The lighting control widget only appears if there are more than two lights."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Local Websockets"
        }), ": fixed a bug causing visual flickering on the dashboard."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The complete CHANGELOG is available ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys/releases/tag/v4.58.0",
        children: "on GitHub"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to all the contributors, and to all the testers who helped me a lot for this release, especially @mutmut, who helped me enormously with Matter support."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "how-to-update",
      children: "How to Update?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys will automatically update if you use Watchtower."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Otherwise, you can use our new button to update Gladys in one click:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Update Gladys in one click",
        src: (__webpack_require__(47520)/* ["default"] */.A) + "",
        width: "878",
        height: "582"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This button has been available since Gladys Assistant v4.57 in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Settings"
      }), " → ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "System"
      }), " tab."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "want-to-get-started-with-gladys",
      children: "Want to Get Started with Gladys?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you're a beginner and looking for a simple and complete solution, I've designed an ideal kit to get started smoothly:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["A ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "powerful mini-PC"
        }), ": 4 cores, 8/16 GB RAM, 256/500 GB SSD"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Access to a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "complete training"
        }), " where I show you my setup step by step"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["One year subscription to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Gladys Plus"
        }), ", with automatic backups, encrypted remote access, and more"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["All starting at 165.98€, for now only shipping ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://gladysassistant.com/fr/starter-kit/",
        children: "in France"
      }), ".\n(Ping me if you want shipping to another country!)"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "By choosing this kit, you save time, support an open-source project, and enjoy a solution designed to last 😎"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "See you soon on Gladys! 👋"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Pierre-Gilles"
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
62121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/alarm_ipad_mockup_en-7d8787174e0fcaaac9769462a2d758b8.png");

},
4579(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/chart-aggregate-functions-a2d28820acc306b97007eea54e04260c.png");

},
98309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/chart-group-by-c5df9cb95de9a1e192dc5186064cbad2.png");

},
715(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/gauge-widget-96e3e27be4f3abbeab8ba93907170162.png");

},
25548(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/matter-devices-dac171e95398e491c7dc07e0c216d30e.png");

},
95574(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/moray-tuya-me201wz-28dc98609c7c8bcf134064a00b289675.jpg");

},
91188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/random-wait-scenes-94a8c59467781017123a41f5ab611baf.png");

},
6145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/upgrade-notification-fe835ed8fdc2e48c31f85f327019325a.png");

},
47520(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/upgrade_gladys_one_click-bdc8d9586578f706eb2d3a625ed66989.png");

},
44834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/use-ai-response-scene-a554d4ae6f028159505c217fc62be1c2.png");

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
67192(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-assistant-4-58-with-matter-support","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2025-05-11-gladys-assistant-4-58-with-matter-support.md","source":"@site/blog/2025-05-11-gladys-assistant-4-58-with-matter-support.md","title":"Gladys Assistant Now Compatible with Matter","description":"Discover Gladys Assistant v4.58: Matter support, but that\'s not the only new feature!","date":"2025-05-11T00:00:00.000Z","tags":[],"readingTime":6.09,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys Assistant Now Compatible with Matter","description":"Discover Gladys Assistant v4.58: Matter support, but that\'s not the only new feature!","authors":"pierregilles","image":"/img/presentation/gladys-assistant-4-58.jpg","slug":"gladys-assistant-4-58-with-matter-support"},"unlisted":false,"prevItem":{"title":"Energy Monitoring Coming Soon to Gladys","permalink":"/zh-Hans/blog/energy-monitoring-coming-soon"},"nextItem":{"title":"More Power for Your Automations!","permalink":"/zh-Hans/blog/gladys-assistant-4-55-if-then-else-scenes"}}')

},

};
;
"use strict";
exports.ids = ["3086"];
exports.modules = {
76397(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2020_11_06_launching_gladys_assistant_4_md_e96_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2020_11_06_launching_gladys_assistant_4_md_e96_json__rspack_import_0 = __webpack_require__(79018);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'The new major version Gladys Assistant 4 is available, rewritten from scratch!',
	description: 'It\'s a big day, after almost 2 years of work by the whole community, Gladys Assistant 4 is available, for free download as usual!',
	authors: 'pierregilles',
	image: '/img/presentation/gladys-4-launch.jpg',
	slug: 'lancement-gladys-assistant-4'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "The story behind this v4",
  "id": "the-story-behind-this-v4",
  "level": 2
}, {
  "value": "Thanks",
  "id": "thanks",
  "level": 2
}, {
  "value": "A redesign of the interface: clean, stylish and incredibly fast",
  "id": "a-redesign-of-the-interface-clean-stylish-and-incredibly-fast",
  "level": 2
}, {
  "value": "Hundreds of home automation devices already compatible",
  "id": "hundreds-of-home-automation-devices-already-compatible",
  "level": 2
}, {
  "value": "Native camera management",
  "id": "native-camera-management",
  "level": 2
}, {
  "value": "From machine learning to the discussion engine",
  "id": "from-machine-learning-to-the-discussion-engine",
  "level": 2
}, {
  "value": "An open MQTT API to integrate DIY devices",
  "id": "an-open-mqtt-api-to-integrate-diy-devices",
  "level": 2
}, {
  "value": "A more powerful scene engine than ever",
  "id": "a-more-powerful-scene-engine-than-ever",
  "level": 2
}, {
  "value": "Privacy at the heart of the product",
  "id": "privacy-at-the-heart-of-the-product",
  "level": 2
}, {
  "value": "Automatic and atomic update: foolproof stability.",
  "id": "automatic-and-atomic-update-foolproof-stability",
  "level": 2
}, {
  "value": "My ambitions following this launch",
  "id": "my-ambitions-following-this-launch",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "Hi all,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's a big day, after almost 2 years of work by the whole community, Gladys Assistant 4 is available, for free download as usual!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys 4 devices",
        src: (__webpack_require__(24266)/* ["default"] */.A) + "",
        width: "3000",
        height: "2000"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can embark on the adventure by following the tutorials:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/",
          children: "Raspberry Pi Tutorial"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/installation/docker/",
          children: "Manual installation with Docker"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://demo.gladysassistant.com",
          children: "Test Gladys Assistant on the demo site"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now let's go back to the decisions that led to this fourth version of Gladys Assistant 🙂"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "the-story-behind-this-v4",
      children: "The story behind this v4"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In December 2018, I met two members of the community to discuss the future of the project, and together we defined what we wanted for the next major release of Gladys, Gladys Assistant 4. After this meeting, I wrote a technical manifesto that summarized our discussions."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Assistant v3 was aging, both in terms of development process and technologies used. It was a great product, but the developments were slower and slower and less stable due to technical choices going back to the start of the project."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Maintaining this mammoth was getting harder and harder, and the attractiveness of the project suffered. There were many “mystical” bugs, and everyone was going crazy because of that. It was frustrating to see everyone struggling to do a simple update in Gladys v3, getting stuck on configuration points that should be automatic."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "The bottom line was clear:"
      }), " for the long term, it was better to start from scratch and learn from all those years of experience, rather than putting duct tape on a product that was not originally designed for be used by so many people for so many years."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For 2 years, we worked together with the community to release version 4, designed with technologies in our opinion more suited to the embedded world."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "These two years have been very hard."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Very hard because for 2 years, the project apparently did not move forward: there was no further development on v3, but v4 was not ready for all that."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Very hard because for at least a year, I felt like I was working in a vacuum, working on a product that nobody was using."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It was the crossing of the desert."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "But today, it’s the fulfillment. The work paid off, and thanks to the involvement of the whole community, Gladys Assistant 4 is available! 🎉"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "thanks",
      children: "Thanks"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Before presenting this v4, I would like to thank all of the community members who have done a tremendous amount of work on this version."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://community.gladysassistant.com/u/AlexTrovato/summary",
          children: "Alexandre Trovato"
        }), ", “the machine”, who is able to propose a pull-request before I finish my response to his message 😁"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://community.gladysassistant.com/u/vonox/summary",
          children: "Vincent Kulak"
        }), ", “the god of Docker”, who set up the entire build process for Gladys Assistant 4."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://community.gladysassistant.com/u/link39/summary",
          children: "Thibaut Courvoisier"
        }), ", “the Z-Wave pro”, who lets everyone benefit from his rich Z-Wave installation, and his thorough knowledge of the protocol."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://community.gladysassistant.com/u/terdious/summary",
          children: "Thomas Lemaistre"
        }), ", “the biggest Gladys user of all time”, who constantly pushes the limits of the product with his professional use which he allows you to manage your campsite."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://community.gladysassistant.com/u/bertrandda/summary",
          children: "Bertrand d'Aure"
        }), ", “Mr. Caldav”, who develops and maintains the CalDav integration and who bends over backwards to make it work for everyone in the world."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["But also all the other contributors on Github: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys#contributors-",
        children: "https://github.com/GladysAssistant/Gladys#contributors-"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "a-redesign-of-the-interface-clean-stylish-and-incredibly-fast",
      children: "A redesign of the interface: clean, stylish and incredibly fast"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Assistant returns with a new, completely redesigned interface. The interface is simpler, and editable with the mouse very easily."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The interface owes its responsiveness to the frontend framework ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://preactjs.com/",
        children: "Preact"
      }), " used in Gladys Assistant 4. A modern and very light framework, ensuring great fluidity for Gladys."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This interface is designed as a PWA (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://fr.wikipedia.org/wiki/Progressive_web_app",
        children: "Progressive Web App"
      }), ") and can therefore be installed on the phone like a regular app (iOS / Android / Mac / Windows / Linux)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You can test the Gladys Assistant 4 interface at ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://demo.gladysassistant.com",
        children: "the demo site"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "hundreds-of-home-automation-devices-already-compatible",
      children: "Hundreds of home automation devices already compatible"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For several months, the Gladys Assistant community has been working hard to bring the integrations from v3 to v4."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today, hundreds of home automation devices are already available in Gladys Assistant 4."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys Assistant 4 Intégrations",
        src: (__webpack_require__(74202)/* ["default"] */.A) + "",
        width: "1440",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To date, Gladys Assistant supports peripherals:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Z-Wave"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Xiaomi (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/integrations/xiaomi/",
          children: "doc"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Philips Hue (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/integrations/philips-hue/",
          children: "doc"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Sonoff (Tasmota) (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/integrations/tasmota/",
          children: "doc"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["RTSP, HTTP and USB cameras (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/integrations/camera/",
          children: "doc"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["The MQTT protocol (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/integrations/mqtt/",
          children: "doc"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Many integrations are under development and will join this list in order to control a maximum of devices. And since Gladys Assistant is open-source, you can contribute to this list by submitting a PR on GitHub :)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "native-camera-management",
      children: "Native camera management"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys Assistant 4 camera management",
        src: (__webpack_require__(78295)/* ["default"] */.A) + "",
        width: "2880",
        height: "1800"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Camera management has been natively integrated into Gladys Assistant 4, via RTSP, HTTP and USB protocols."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys retrieves the feeds from all the cameras in the house, and displays them in a single interface. The Gladys instance acts as a proxy, and allows the user to view their cameras outside of their network, without having to expose their cameras to the Internet. Cameras can stay safe locally."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Video streams are compressed in order to achieve maximum interface display performance, even with a large number of cameras."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "from-machine-learning-to-the-discussion-engine",
      children: "From machine learning to the discussion engine"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Assistant is also an assistant that the user can chat with."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys Assistant 4 discussions",
        src: (__webpack_require__(36234)/* ["default"] */.A) + "",
        width: "2880",
        height: "1352"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Gladys Assistant uses the latest advances in automatic language processing to understand user requests (We use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/axa-group/nlp.js",
        children: "NLP.js"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You want to ask Gladys Assistant:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "“Turn on the living room light”"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "\"What's the temperature in the kitchen?\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "\"What weather is it ?\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "“Show me the kitchen camera”"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "And lots of other questions as the community feeds the dataset!"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The dataset used for training the model is fully open-source, and community-powered."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "an-open-mqtt-api-to-integrate-diy-devices",
      children: "An open MQTT API to integrate DIY devices"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys provides an open MQTT API to allow anyone to integrate DIY devices with Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is thus possible to send data to Gladys from an Arduino, an ESP8266, a remote Raspberry Pi, or from any machine compatible with the MQTT protocol."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In the other direction, it is possible for Gladys to control MQTT devices."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Learn more about ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/integrations/mqtt/",
        children: "the MQTT integration"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "a-more-powerful-scene-engine-than-ever",
      children: "A more powerful scene engine than ever"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Assistant 4 allows the user to write complex scenes. It is possible to write sequences of actions both in series and in parallel, with conditions."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys Assistant 4 scenes",
        src: (__webpack_require__(55712)/* ["default"] */.A) + "",
        width: "2880",
        height: "1660"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A “Cinema” scene to configure your living room lighting?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "An “alarm clock” scene activating the coffee machine, different lights from the bedroom to the kitchen?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Everything is possible with Gladys Assistant's scene engine 😄"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The scene engine has been tested with heavy loads and will continuously evolve in future versions of the software."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Learn more about ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/scenes/intro/",
        children: "scenes in Gladys Assistant 4"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "privacy-at-the-heart-of-the-product",
      children: "Privacy at the heart of the product"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Assistant stores all user data in a local SQLite database. No remote account is required to use Gladys Assistant."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The user remains the master and owner of his installation."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Assistant is easily installed on any Raspberry Pi via a Raspbian image pre-built with Gladys Assistant (Download [on the documentation for Raspberry Pi] (/ en / docs /))."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is possible to install Gladys Assistant on any Linux machine: a Synology NAS, a Delta Freebox, a VPS, an old server: anything is possible."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "automatic-and-atomic-update-foolproof-stability",
      children: "Automatic and atomic update: foolproof stability."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "One of the main goals of v4 is to be a stable and resilient product over the long term. As the product evolves frequently, it was necessary to have an automatic update system that could not compromise a user's installation."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Gladys Assistant therefore runs in Docker, a Linux container system that allows the application to be distributed in the form of an image containing the application and its dependencies. We use the excellent ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/nicholas-fedor/watchtower",
        children: "Watchtower"
      }), " to update the container, automatically."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thus, the distribution of Gladys updates is automated, and works atomically."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["An update ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "cannot"
      }), " be in a dodgy state: either it succeeds or it fails."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "my-ambitions-following-this-launch",
      children: "My ambitions following this launch"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["My personal ambition on this version is to have ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "1,000 active users"
      }), " of this v4 within the next 6 months."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is not an unrealistic goal, it is even a number that seems small, but I want to focus on quality rather than quantity."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Just in comparison, since its launch, the Raspberry Pi has sold 30 million units."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "1,000 Gladys instances represent 0.0033% of the Raspberry Pi market sold, and that's without counting all those who run Gladys on a NAS, freebox or any other computer."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["So it's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "a very modest goal"
      }), ", as it is intended to be."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I'd rather have 1,000 passionate users who love Gladys, use it every day, participate in the online community, rather than 10,000 users who just enjoy the product and nothing more."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I think before scaling up, I prefer to focus on creating that core of passionate users who is the strength of this project. Once we have 1,000 fully satisfied users, we can tackle the next goal."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I will post the progress of this goal on social networks and will surely do a review article in a few months 🙂"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once again, thank you all for your help and feedback!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you want to join us to be part of the core of the 1,000 Gladys Assistant 4 users, it's now and it's happening on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/",
        children: "Gladys Assistant installation tutorial"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "See you soon!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Pierre-Gilles Leymarie"
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
78295(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cameras-gladys-4-33abaa0e719ccdb803bf66d192854419.jpg");

},
36234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/discuss-gladys-c85663c2da24fcb03aaf78030bebb24c.png");

},
24266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/gladys-4-mockup-devices-8c4c388d8fbaffe67e819b6dcb4bd808.jpg");

},
74202(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/integrations-a52ddd06a06ce7a415c02b2209184920.png");

},
55712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/scenes-7fadd8131670af20e3336b911d9183f7.png");

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
79018(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/lancement-gladys-assistant-4","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2020-11-06-launching-gladys-assistant-4.md","source":"@site/blog/2020-11-06-launching-gladys-assistant-4.md","title":"The new major version Gladys Assistant 4 is available, rewritten from scratch!","description":"It\'s a big day, after almost 2 years of work by the whole community, Gladys Assistant 4 is available, for free download as usual!","date":"2020-11-06T00:00:00.000Z","tags":[],"readingTime":8.19,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"The new major version Gladys Assistant 4 is available, rewritten from scratch!","description":"It\'s a big day, after almost 2 years of work by the whole community, Gladys Assistant 4 is available, for free download as usual!","authors":"pierregilles","image":"/img/presentation/gladys-4-launch.jpg","slug":"lancement-gladys-assistant-4"},"unlisted":false,"prevItem":{"title":"Gladys Assistant\'s 2020 Year In Review","permalink":"/zh-Hans/blog/bilan-2020-gladys-assistant"}}')

},

};
;
"use strict";
exports.ids = ["1756"];
exports.modules = {
74940(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_01_26_2022_openai_gpt_3_release_md_b08_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_01_26_2022_openai_gpt_3_release_md_b08_json__rspack_import_0 = __webpack_require__(1525);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'OpenAI GPT-3 now available in Gladys Assistant',
	description: 'Give the power of artificial intelligence to Gladys!',
	authors: 'pierregilles',
	image: '/img/presentation/open-ai-gpt-3-release.jpg',
	slug: 'open-ai-gpt-3-in-gladys-assistant'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What does this have to do with Gladys?",
  "id": "what-does-this-have-to-do-with-gladys",
  "level": 2
}, {
  "value": "OpenAI GPT-3 integration in Gladys",
  "id": "openai-gpt-3-integration-in-gladys",
  "level": 2
}, {
  "value": "Show time!",
  "id": "show-time",
  "level": 2
}, {
  "value": "How to test?",
  "id": "how-to-test",
  "level": 2
}, {
  "value": "Next",
  "id": "next",
  "level": 2
}, {
  "value": "How to upgrade?",
  "id": "how-to-upgrade",
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
      children: "Hi everyone!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Unless you live in a cave, you've probably heard about ChatGPT/GPT-3, an artificial intelligence developed by OpenAI."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On the internet, everyone has tried to chat with this AI, whether it was to see if it would replace us at work, do better than us in university exams, or just to see how it reacts when asked convoluted questions."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On my side, I think this AI is a great tool, a kind of overpowered search engine, accessible to language, which has access to an impressive dataset!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "what-does-this-have-to-do-with-gladys",
      children: "What does this have to do with Gladys?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In Gladys, we have always had a \"Discussion\" tab, which allows you to send requests to Gladys: \"Turn on the light in the living room\", \"Show me the camera in the garden\", \"What is the temperature in the bathroom?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On the principle, this tab works in the same way as GPT-3: we trained a neural network on a set of data, to \"teach\" it to respond to user commands."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The difference between the current implementation in Gladys, and GPT-3, is the size of the input data."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Where Gladys was trained on a few commands, GPT-3 was trained on 175 billion parameters, including:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Petabytes of web pages crawled over 8 years"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "All Reddit content with more than 3 upvotes"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "A lot of books"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "All of Wikipedia"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To train this model, OpenAI used a cluster of 10,000 Nvidia V100 graphics cards. Monstrous!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once trained, this model is so big that you need a server with at least 175 GB of RAM to run it 🤯"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In short, you get it, GPT-3 is at an impressive level that is hard to reach on our small scale."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "openai-gpt-3-integration-in-gladys",
      children: "OpenAI GPT-3 integration in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This model, OpenAI did not create it for them, it is available via an API ( and it's not free, because they obviously have to pay for the 10k Nvidia V100 ^^)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is this API that I integrated in Gladys!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I did some tests to see if GPT-3 could have an interest in home automation, and frankly it's amazing."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I worked on the \"prompt\" that I send to GPT-3 to delimit the framework of possible interactions, and it works great!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "GPT-3 manages to classify each request, and can answer a lot of questions because I remind you that GPT-3 has access to content coming from everywhere on the internet."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "But enough talking..."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "show-time",
      children: "Show time!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Let's start easy, I forgot how to boil eggs?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Controlling the house with Gladys and GPT-3",
        src: (__webpack_require__(83746)/* ["default"] */.A) + "",
        width: "2000",
        height: "1083"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Here, I have a question about home automation, what do you think Gladys?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Question about electrical consumption to Gladys and GPT-3",
        src: (__webpack_require__(21626)/* ["default"] */.A) + "",
        width: "2000",
        height: "1263"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I don't remember how to display the logs of a Docker container..."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Docker logs - Gladys and GPT-3",
        src: (__webpack_require__(31446)/* ["default"] */.A) + "",
        width: "2000",
        height: "1262"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "What's the height of the Eiffel Tower?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "General culture, Jules Verne - Gladys and GPT-3",
        src: (__webpack_require__(27327)/* ["default"] */.A) + "",
        width: "2000",
        height: "1273"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "AI seems super smart, is it the future?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Next 10 years - Gladys and GPT-3",
        src: (__webpack_require__(26738)/* ["default"] */.A) + "",
        width: "2000",
        height: "1241"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "But isn't this dangerous? I've seen i-Robot, and humans were getting locked up in their homes!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Rebel AI - Gladys and GPT-3",
        src: (__webpack_require__(97751)/* ["default"] */.A) + "",
        width: "2000",
        height: "1248"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Phew, we were not far from a catastrophe there!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "how-to-test",
      children: "How to test?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["As the GPT-3 API is not free, I offer this integration to all ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/plus",
        children: "Gladys Plus"
      }), " users."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you want to test, you have to switch to Gladys Plus, and as a bonus you will support the growth of an amazing open-source project 😊"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["On the occasion of this launch, I launched the promo code ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "SMART2023"
      }), " which gives -40% discount on your first Gladys Plus payment, for 59,99€ per year ( 4,99€/month )."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "No excuses!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["➡️ ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/plus",
        children: "Learn more about Gladys Plus"
      }), " ⬅️"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You must be in Gladys Assistant v4.15 to take advantage of this integration, and you will find the integration in the \"Integrations\" tab:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys Open-AI Integration",
        src: (__webpack_require__(57640)/* ["default"] */.A) + "",
        width: "2000",
        height: "1384"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "next",
      children: "Next"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For now, this integration is an alpha, the goal is to collect your feedback and allow you to test."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This integration has for now no impact on your home automation system, if you ask it to turn on the light, it will answer you but will not do the action."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Depending on your feedback, we will be able to integrate GTP-3 fully with Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "So, what do you think? Excited? 😄"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["I'm waiting for your feedback on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "the forum"
      }), "!"]
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
26738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/ai-standard-065ffdb378bf6d9c6b0154c23a671439.jpg");

},
83746(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/boiled-eggs-15bf80d21f220744472585c37677b141.jpg");

},
31446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/docker-logs-10d406f70680493b1c6544556cc9b0c0.jpg");

},
97751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/i-robot-rebel-41e5e5ad429b592477dd962202373936.jpg");

},
57640(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/open-ai-integration-8744326ae36e22d468e5724f26ac3493.jpg");

},
21626(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/reduce-electricity-6e3d063365c71364739f96172858db02.jpg");

},
27327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/size-eiffel-tower-7818a442c63ba067f8139bbc0a9897d5.jpg");

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
1525(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/open-ai-gpt-3-in-gladys-assistant","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2023-01-26-2022-openai-gpt-3-release.md","source":"@site/blog/2023-01-26-2022-openai-gpt-3-release.md","title":"OpenAI GPT-3 now available in Gladys Assistant","description":"Give the power of artificial intelligence to Gladys!","date":"2023-01-26T00:00:00.000Z","tags":[],"readingTime":4.26,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"OpenAI GPT-3 now available in Gladys Assistant","description":"Give the power of artificial intelligence to Gladys!","authors":"pierregilles","image":"/img/presentation/open-ai-gpt-3-release.jpg","slug":"open-ai-gpt-3-in-gladys-assistant"},"unlisted":false,"prevItem":{"title":"Camera live streaming in Gladys Assistant 4.23","permalink":"/zh-Hans/blog/camera-live-streaming-gladys-assistant-4-23"},"nextItem":{"title":"Gladys Assistant\'s 2022 Year In Review","permalink":"/zh-Hans/blog/2022-year-in-review"}}')

},

};
;
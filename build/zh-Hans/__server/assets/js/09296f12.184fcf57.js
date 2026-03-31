"use strict";
exports.ids = ["8197"];
exports.modules = {
39281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2022_01_03_2021_year_in_review_md_092_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2022_01_03_2021_year_in_review_md_092_json__rspack_import_0 = __webpack_require__(59007);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Gladys Assistant\'s 2021 Year In Review',
	description: '2021 is over, so let\'s see what happened during this year, and what\'s the perspective for 2022!',
	authors: 'pierregilles',
	image: '/img/presentation/2021-year-in-review-en.jpg',
	slug: '2021-year-in-review'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What happened in 2021?",
  "id": "what-happened-in-2021",
  "level": 2
}, {
  "value": "Some statistics",
  "id": "some-statistics",
  "level": 2
}, {
  "value": "Usage",
  "id": "usage",
  "level": 3
}, {
  "value": "The YouTube channel",
  "id": "the-youtube-channel",
  "level": 3
}, {
  "value": "Social networks",
  "id": "social-networks",
  "level": 3
}, {
  "value": "The newsletter",
  "id": "the-newsletter",
  "level": 3
}, {
  "value": "The GitHub Gladys Assistant",
  "id": "the-github-gladys-assistant",
  "level": 3
}, {
  "value": "Projects and objectives for 2022",
  "id": "projects-and-objectives-for-2022",
  "level": 2
}, {
  "value": "A technically sound product",
  "id": "a-technically-sound-product",
  "level": 3
}, {
  "value": "But usage does not follow yet",
  "id": "but-usage-does-not-follow-yet",
  "level": 3
}, {
  "value": "A little optimism",
  "id": "a-little-optimism",
  "level": 3
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
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hello everyone, and happy new year!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's the tradition, every year I write an article to recap everything that has happened over the last year for Gladys Assistant."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Welcome to the 2021's version of this article 😄"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "what-happened-in-2021",
      children: "What happened in 2021?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["2021 was the most productive year on the project, as ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "we released 23 updates"
      }), ", or one update every 2.2 weeks on average!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This productivity is the result of all the work done upstream in 2019 and 2020 to set up this new version of Gladys (Gladys 4) with a more recent tech stack, a stack that allows us to be more confident on the code that we release, to test more easily, and therefore to release features and fixes faster."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["And it is above all ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "the involvement of the whole community"
      }), " that has allowed the project to be so swift."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Without the PRs of all the contributors, it is impossible to have such rich compatibility, to have such a complete product, and to respond to bugfixes so quickly."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "THANKS to all the contributors: Alexandre Trovato, Vincent Kulak, Bertrand D'Aure, Cyril Beslay, Corentin Allemand, NickDub, Sescandell, Terdious, Frédéric Le Barzic, Rob McCann, Thibaud Roudier and Nicolas Geissel! 🙏"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To come back to the features that were developed this year, we can quote:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Zigbee2mqtt integration, sunrise/sunset detection, dashboard brightness control in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/blog/gladys-assistant-4-2-is-here",
          children: "Gladys Assistant 4.2"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Presence managment in scenes, time-based condition in scenes, HTTP requests in scenes in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/blog/gladys-assistant-4-3-is-here",
          children: "Gladys Assistant 4.3"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Zone entry and exit detection, empty house condition / no longer empty in the scenes in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/blog/gladys-assistant-4-4-is-here",
          children: "Gladys Assistant v4.4"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Multiple dashboards, Google Home integration, possibility to deactivate a scene, control any device in a scene in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/blog/gladys-assistant-4-5-is-here",
          children: "Gladys Assistant v4.5"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Display of sensor graph on the dashboard, full compatibility with all Zigbee2mqtt devices in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/blog/display-chart-and-major-zigbee2mqtt-upgrade",
          children: "Gladys Assistant v4.6 and v4.7"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "As you can see, we were able to document and write blog posts for each new feature developed."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is also the result of all the work done upstream on the site to make it easier to publish articles. I hope to continue this momentum in 2022 and write even more content."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "some-statistics",
      children: "Some statistics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/open/",
        children: "/open"
      }), " page has returned to the site, and allows you to follow in real time the number of Gladys instances running, and the number of Gladys Plus users (and thus the income of the project)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Since v4, we estimate the number of active instances by counting the number of update request requests made on our infrastructure."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Here is the number of active installations per month since the start of v4 (alpha included):"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys number of instances per month",
        src: (__webpack_require__(56248)/* ["default"] */.A) + "",
        width: "1600",
        height: "530"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Here is the number of new instances per month:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Gladys number of new instances per month",
        src: (__webpack_require__(14950)/* ["default"] */.A) + "",
        width: "1600",
        height: "314"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In November 2020, Gladys v4 was released and there were a lot of articles on specialist sites, which boosted downloads in the months that followed."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The summer of 2021 was very low in terms of use and new users, which is not surprising because France has deconfined during this period and no one was simply in front of their computer."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Fortunately in September, growth resumed and we finally had ** 372 active instances ** at the end of December 2021."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's a nice number, but it's below what I expected."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "My goal was 1000 active instances, we are far from it for the moment 😄"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "the-youtube-channel",
      children: "The YouTube channel"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "From May 2021, I got serious about the YouTube Game 😎"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I released 5 videos and did 5 live YouTube."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's a lot of work because each video / live takes me about 1 full day of work, between preparation, communication before the live, filming, editing, publication (thumbnail, description, timestamp, social media posts, newsletter)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "10 videos therefore represent 10 days of work, knowing that I only work part-time on Gladys, this therefore represents approximately 1 month of work cumulatively over the year. It doesn't appear, but it's a huge job 😅"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "My video are all in french as I'm french, if you are intersted here are my top videos:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.youtube.com/watch?v=yP-umEMVcro",
          children: "Demonstration of Gladys Assistant 4"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.youtube.com/watch?v=t6mVCZ5Y9SU",
          children: "Live: Technical presentation of Gladys 4"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.youtube.com/watch?v=bpmHzR8_S5g",
          children: "Integrate Node-RED with Gladys Assistant in MQTT"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.youtube.com/watch?v=TmjrBeufjyo",
          children: "Demonstration & technical presentation of Gladys Plus"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In 2021, the channel had 9.3k views and 883 hours of viewing."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Youtube stats 2021",
        src: (__webpack_require__(30963)/* ["default"] */.A) + "",
        width: "1600",
        height: "916"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's a good start, and I will continue in this direction in 2022 because for me the videos are a real plus for the project:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Thanks to the YouTube algorithm, the videos are presented to YouTube visitors who do not know Gladys but are interested in home automation / the Raspberry Pi / all the tech topics that I discuss on video. These viewers discover the project via YouTube and potentially come to install Gladys afterwards."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "YouTube even allows me to see statistics on these users:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Youtube stats 2021 new viewers",
        src: (__webpack_require__(63870)/* ["default"] */.A) + "",
        width: "1600",
        height: "968"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Videos are good complements to written tutorials, because it is often easier to reproduce what we see on video rather than what we see in a written article. Users project themselves better!"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you want me to tackle a specific topic in video, don't hesitate to tell me about it on the forum or on Twitter, I'm into any video topic."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "social-networks",
      children: "Social networks"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On social networks:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://twitter.com/gladysassistant",
          children: "@gladysassistant on Twitter"
        }), " has 2,744 followers"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.facebook.com/gladysassistant",
          children: "Gladys Assistant Facebook"
        }), " counts 756 likes"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.instagram.com/gladysassistant",
          children: "@gladysassistant on instagram"
        }), " brings together 573 subscribers"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["And finally 1,874 followers on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://twitter.com/pierregillesl",
        children: "my personal Twitter"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "the-newsletter",
      children: "The newsletter"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In terms of the newsletter, 3,508 of you follow the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://email-list.gladysassistant.com/subscription/haflMsWmU",
        children: "Gladys Assistant newsletter"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "3016 subscribers in French"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "492 subscribers in English"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It is a regression compared to last year, but it is normal! I implemented bounce detection rules, which purged the list of old emails that no longer existed."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A \"bounce\" email when the recipient is no longer reachable: the domain no longer exists or the email no longer exists. This often happens in the Gladys audience, because some of you use a personal domain as email (ex: firstname_at_last_name_of_family.com), and end up giving up this address / not renewing the domain."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "the-github-gladys-assistant",
      children: "The GitHub Gladys Assistant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["We are at 1,879 stars ⭐ on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/GladysAssistant/Gladys",
        children: "Gladys Assistant repo"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "It's + 21% compared to last year!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Another double-digit growth on the Github 😍"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I am counting on you to support us on GitHub by putting a star ⭐ on the project."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "projects-and-objectives-for-2022",
      children: "Projects and objectives for 2022"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "a-technically-sound-product",
      children: "A technically sound product"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For me, the last 2 years have served to lay the foundations for a robust, stable and easy-to-use home automation software."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Now that the basics have been laid, we are moving at cruising speed: developments are frequent, the site evolves with each new feature, articles are published on the blog regularly, I make YouTube videos to explain each new feature in Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In other words: no more experimentation and proofs of concepts, v4 is indeed stable and the processes that we have set up with the community are working well."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "but-usage-does-not-follow-yet",
      children: "But usage does not follow yet"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "However, usage does not yet reflect all the work done. For me, we have not yet reached the critical point that we have reached on the tech side where the processes are well established and where we have a good pace."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is not the case when it comes to acquiring new users."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There is unfortunately not yet a steady growth on the product. As we have seen on the annual usage curve, during the launch the number of installations was immediately very high (the result of the various articles published on home automation sites with a large audience), but once the launch effect passed, there was nothing more."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Growth came back very slowly in September, but it is clearly not enough."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There are several reasons for this in my opinion:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: "During the launch, integrations and critical functionalities were missing (Zigbee2mqtt for example / Zone management / Multi-users / Multi-dashboard / Graphic view). I imagine some new users must have tested Gladys the month of launch, then put it aside. These features are now present but I'm not sure that outside of the community people are aware of all these developments."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: "Our Z-Wave integration was not maintained for lack of maintainer and is clearly not up to date. Z-Wave remains a protocol that is still quite widely used, especially among the \"pros\" in home automation 😄. A specialized tester (YouTuber, blogger) who wants to write an article on Gladys will test with what he has at home: often Z-Wave."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In the long term, I am not sure that Z-Wave will keep those market shares when we see the new technologies: Zigbee devices at 8$ for a nice sensor and 8$ a USB stick vs Z-Wave device at 60$ for a single sensor and 25$ the USB stick. Matter future home automation standard that is coming, in full open-source. Bluetooth Low energy."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "But in the short term home automation users for whom Z-Wave is the main technology have trouble with Gladys and that doesn't necessarily give the software a good publicity."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Probably not enough communications outside the project. I'm trying via YouTube to reach a new population, but in my opinion I should rely more on existing media: participate as a guest on live (Twitch / YouTube)? Contact more home automation media? More presence on third-party forums?"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you have any ideas / have feedback / have a blog / know someone who could help us spread the word about Gladys, don't hesitate!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "a-little-optimism",
      children: "A little optimism"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Don't worry, I'm not complaining 😄"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is the reality of any product launch: nothing falls from the sky and it can sometimes take years before a product gets a steady growth. I have friends whose growth was flat for months, then vertical growth, even often without necessarily knowing why ... The main thing is to stay consistent in the work and not to let go 💪"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In any case, thank you to the entire Gladys community which allows this product to exist."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Thank you to all the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/plus",
        children: "Gladys Plus"
      }), " contributors who provide financial support to the project while benefiting from great features: Google Home, backups, end-to-end encrypted remote access, open API."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Happy New Year 2022 to all, and we'll meet up on the forum to talk about all this 🙂"
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
56248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/monthly-instances-stats-e4a50380608ec18bd8954d8bf4c1ccbb.jpg");

},
14950(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/new-installations-stats-7f2bd7ec374a0f8f4e4f6f1686ad52f7.jpg");

},
63870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/youtube-new-viewers-d0ef0e8dbd9de72b04f6d3f1eb4ed907.jpg");

},
30963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/youtube-stats-e6981c6a3ff21ac0eaf958afb8d7deec.jpg");

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
59007(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/2021-year-in-review","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2022-01-03-2021-year-in-review.md","source":"@site/blog/2022-01-03-2021-year-in-review.md","title":"Gladys Assistant\'s 2021 Year In Review","description":"2021 is over, so let\'s see what happened during this year, and what\'s the perspective for 2022!","date":"2022-01-03T00:00:00.000Z","tags":[],"readingTime":9.03,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"Gladys Assistant\'s 2021 Year In Review","description":"2021 is over, so let\'s see what happened during this year, and what\'s the perspective for 2022!","authors":"pierregilles","image":"/img/presentation/2021-year-in-review-en.jpg","slug":"2021-year-in-review"},"unlisted":false,"prevItem":{"title":"Gladys Assistant 4.8 is available, with calendar based triggers and conditions in scenes!","permalink":"/zh-Hans/blog/gladys-assistant-4-8-with-calendar-in-scenes"},"nextItem":{"title":"New release: Display chart on Gladys dashboard & Major upgrade on Zigbee2mqtt","permalink":"/zh-Hans/blog/display-chart-and-major-zigbee2mqtt-upgrade"}}')

},

};
;
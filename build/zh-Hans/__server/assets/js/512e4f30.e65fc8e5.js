exports.ids = ["8278"];
exports.modules = {
60799(module) {
// Exports
module.exports = {
	"heroBanner": `heroBanner_MZnD`,
	"buttons": `buttons_Kv2X`,
	"heroText": `heroText_vP5N`,
	"filtersSidebar": `filtersSidebar_m2PC`,
	"filterSearchInput": `filterSearchInput_OlNz`,
	"filterSearch": `filterSearch_mZUW`,
	"integrationFilterCheckbox": `integrationFilterCheckbox_owvq`,
	"filterBlock": `filterBlock__O_z`,
	"filterTitle": `filterTitle_ghTm`,
	"integrationImage": `integrationImage_uKgM`,
	"integrationCard": `integrationCard_OU5q`,
	"buttonsIntegration": `buttonsIntegration_WnEH`,
	"buttonIntegrationLeft": `buttonIntegrationLeft_rP5J`,
	"buttonIntegrationRight": `buttonIntegrationRight_rVmA`,
	"featureImage": `featureImage_TH3f`,
	"listUnstyled": `listUnstyled_zh7Q`,
	"checkIcons": `checkIcons_MuqE`,
	"videoContainer": `videoContainer_PTY5`,
	"videoContainerPadding": `videoContainerPadding_K0hY`,
	"imgContainer": `imgContainer_XHl7`,
	"youtubeVideoContainer": `youtubeVideoContainer_XCjY`,
	"youtubeVideo": `youtubeVideo_nMQc`,
	"playButton": `playButton_rUPK`,
	"section": `section_nB9V`,
	"sectionAlt": `sectionAlt_tk5j`,
	"testimonialsSection": `testimonialsSection_Mlvb`,
	"testimonial": `testimonial_ycP7`,
	"testimonialMeta": `testimonialMeta_oj7k`
};


},
33721(module) {
// Exports
module.exports = {
	"heroBanner": `heroBanner_UJJx`,
	"heroText": `heroText_yE6R`,
	"buttons": `buttons_pzbO`,
	"features": `features_keug`,
	"featureImage": `featureImage_yA8i`,
	"openPageChartRow": `openPageChartRow_I0yq`,
	"openPageCard": `openPageCard_knse`,
	"openPageList": `openPageList_wCSq`,
	"inputField": `inputField_lNhU`,
	"contactTextAreaField": `contactTextAreaField_iwDP`,
	"plusForm": `plusForm_aUHR`,
	"plusTitle": `plusTitle_KeJ6`,
	"plusInput": `plusInput_N1Ul`,
	"plusInputButton": `plusInputButton_ApkP`,
	"plusFeatureTitle": `plusFeatureTitle_uHc5`,
	"plusTooExpensiveTitle": `plusTooExpensiveTitle_nvwS`,
	"tableContainer": `tableContainer_k1MD`,
	"priceTable": `priceTable_wP_l`,
	"invertImageColor": `invertImageColor_xngk`,
	"plusRow": `plusRow_RFh9`,
	"listUnstyled": `listUnstyled_oQI_`,
	"checkIcons": `checkIcons_TCZL`,
	"plusPricingTitle": `plusPricingTitle_VCGp`,
	"plusPricingTitleMonth": `plusPricingTitleMonth_fvbv`,
	"plusImage": `plusImage_PzL7`,
	"skeletonCard": `skeletonCard_shRl`,
	"skeletonTitle": `skeletonTitle_Q38H`,
	"shimmer": `shimmer_cgRB`,
	"skeletonNumber": `skeletonNumber_csW_`,
	"skeletonChart": `skeletonChart_AI4L`,
	"loadingText": `loadingText_zhpB`,
	"fadeInOut": `fadeInOut_lof1`,
	"starterKitInputButton": `starterKitInputButton_P1JH`,
	"starterKitImage": `starterKitImage_OQXY`,
	"starterKitRow": `starterKitRow_ddA4`,
	"specImage": `specImage_Ggrg`,
	"flexColumnFirstOnMobile": `flexColumnFirstOnMobile_vXXc`,
	"flexColumnSecondOnMobile": `flexColumnSecondOnMobile_w4_N`,
	"progressContainer": `progressContainer_RGQw`,
	"progressBarBackground": `progressBarBackground_aWEl`,
	"progressBar": `progressBar_QOb2`,
	"loadingAnimation": `loadingAnimation_REXu`,
	"pulse": `pulse_Rhyu`,
	"kitsRemainingText": `kitsRemainingText_rS2g`,
	"blackFridayBanner": `blackFridayBanner_yFat`
};


},
24104(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  KF: () => (TestimonialHomeSection),
  n4: () => (TestimonialSection)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var classnames__rspack_import_2 = __webpack_require__(46942);
/* import */ var classnames__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(classnames__rspack_import_2);
/* import */ var _docusaurus_Translate__rspack_import_3 = __webpack_require__(91785);
/* import */ var _docusaurus_useBaseUrl__rspack_import_4 = __webpack_require__(14748);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(60799);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}







function Testimonial(param) {
    var username = param.username, content = param.content, url = param.url, date = param.date;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: classnames__rspack_import_2_default()("card", (_styles_module_css__rspack_import_5_default().testimonial)),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "card__header",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "avatar",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                            alt: username,
                            className: "avatar__photo",
                            src: (0,_docusaurus_useBaseUrl__rspack_import_4/* ["default"] */.Ay)("img/testimonials/".concat(username, ".png")),
                            width: "48",
                            height: "48",
                            loading: "lazy"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: classnames__rspack_import_2_default()("avatar__intro", (_styles_module_css__rspack_import_5_default().testimonialMeta)),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                    className: "avatar__name",
                                    children: username
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                                    children: [
                                        "@",
                                        username
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: classnames__rspack_import_2_default()("card__body", (_styles_module_css__rspack_import_5_default().testimonial)),
                children: content
            })
        ]
    });
}
function TestimonialSection(param) {
    var lang = param.lang, testimonials = param.testimonials;
    var testimonialsColumn = [
        [],
        [],
        []
    ];
    testimonials[lang].forEach(function(testimonial, i) {
        return testimonialsColumn[i % 3].push(testimonial);
    });
    if (testimonials[lang].length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        id: "testimonial",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                    className: classnames__rspack_import_2_default()("margin-bottom--lg", "text--center"),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_3/* ["default"] */.A, {
                        id: "gladysPlusPage.testimonialTitle",
                        description: "Gladys Plus testimonial title",
                        children: "Loved by many users"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: classnames__rspack_import_2_default()("row", (_styles_module_css__rspack_import_5_default().testimonialsSection)),
                    children: testimonialsColumn.map(function(testimonialsItem, i) {
                        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "col col--4",
                            children: testimonialsItem.map(function(testimonial) {
                                return /*#__PURE__*/ (0,react__rspack_import_1.createElement)(Testimonial, _object_spread_props(_object_spread({}, testimonial), {
                                    key: testimonial.url,
                                    lang: lang
                                }));
                            })
                        }, i);
                    })
                })
            ]
        })
    });
}
function TestimonialHomeSection(param) {
    var lang = param.lang, testimonials = param.testimonials;
    var testimonialsColumn = [
        [],
        [],
        []
    ];
    testimonials[lang].forEach(function(testimonial, i) {
        return testimonialsColumn[i % 3].push(testimonial);
    });
    if (testimonials[lang].length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: classnames__rspack_import_2_default()("row", (_styles_module_css__rspack_import_5_default().testimonialsSection)),
        children: testimonialsColumn.map(function(testimonialsItem, i) {
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "col col--4",
                children: testimonialsItem.map(function(testimonial) {
                    return /*#__PURE__*/ (0,react__rspack_import_1.createElement)(Testimonial, _object_spread_props(_object_spread({}, testimonial), {
                        key: testimonial.url,
                        lang: lang
                    }));
                })
            }, i);
        })
    });
}



},
39798(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(60799);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);
/* import */ var classnames__rspack_import_3 = __webpack_require__(46942);
/* import */ var classnames__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(classnames__rspack_import_3);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}




function YoutubeEmbedVideo(param) {
    var id = param.id, disablePadding = param.disablePadding;
    var _React_useState = _sliced_to_array(react__rspack_import_1.useState(false), 2), videoOpened = _React_useState[0], setVideoOpened = _React_useState[1];
    if (!videoOpened) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            "class": classnames__rspack_import_3_default()((_styles_module_css__rspack_import_2_default().videoContainer), {
                videoContainerPadding: !disablePadding
            }),
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                "class": (_styles_module_css__rspack_import_2_default().imgContainer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                        src: "https://i.ytimg.com/vi/".concat(id, "/maxresdefault.jpg"),
                        "class": ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        "class": (_styles_module_css__rspack_import_2_default().playButton),
                        onClick: function() {
                            return setVideoOpened(true);
                        }
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        "class": (_styles_module_css__rspack_import_2_default().youtubeVideoContainer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("iframe", {
            "class": (_styles_module_css__rspack_import_2_default().youtubeVideo),
            src: "https://www.youtube.com/embed/".concat(id, "?autoplay=1"),
            title: "YouTube video player",
            frameborder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowfullscreen: true
        })
    });
}
/* export default */ const __rspack_default_export = (YoutubeEmbedVideo);


},
80419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}


var dataEn = [
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Why should I subscribe to the Gladys Plus?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "You want to Access Gladys from anywhere in the world securely? Interact with a passionnate home automation community? Support open-source and a passionate indie maker? This package is made for you!"
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Can I unsuscribe at any time?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Of course! Gladys is an open-source project, not a creepy organization \uD83D\uDE04 If you want to unsubscribe, you can do it in one click from Gladys Plus. If only all subscriptions were like that..."
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Satisfied or reimbursed?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Of course! If you are not satisfied with the service, just email me and I'll reimburse you without any questions. Feel free to explain what you didn't like so I can improve the service \uD83D\uDE42"
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Can you explain how end-to-end encryption works here?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
            children: [
                "I took a lot of time to read about state of the art End-To-End Encryption. I read",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://manuals.info.apple.com/MANUALS/1000/MA1902/en_US/apple-platform-security-guide.pdf",
                    children: "Apple Security White Paper"
                }),
                " ",
                "about iMessage E2E encryption feature. I read",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://www.dashlane.com/download/Dashlane_SecurityWhitePaper_March2021.pdf",
                    children: "Dashlane"
                }),
                " ",
                "White paper, read and talked with",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://support.insomnia.rest/article/159-end-to-end-encryption",
                    children: "Insomnia"
                }),
                " ",
                "Founder, and read about ProtonMail implementation of the",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol",
                    children: "Remote Secure Password"
                }),
                " ",
                "protocol. Gladys Plus encrypts all your messages using AES-GCM 256bits algorithm and a unique key generated at each message. This key is then encrypted using RSA-OAEP 2048bits algorithm and the public key of your Gladys instance. Finally, the message is signed with the ECDSA P-256 Algorithm and bundled with an expiry date to avoid",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://en.wikipedia.org/wiki/Replay_attack",
                    children: "Replay Attack"
                }),
                ". On Gladys side, the user has to validate each new user public key to avoid",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://en.wikipedia.org/wiki/Man-in-the-middle_attack",
                    children: "Man In The Middle attack"
                }),
                ". With those securities, even if Gladys Plus is compromised, the attacker cannot control your Gladys instance because he doesn't have your private key."
            ]
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Why is Gladys Plus not free?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Gladys and all its services, including this website: everything is 100% open-source and free to use. But open-source doesn't mean that I don't have any recurring costs on my side: servers, domains, community, email services, subscriptions, hardwares... Without counting my time on the project now that Gladys is my main activity. This project respects your privacy, and therefore can live only from theses contributions. Each subscription helps me make the project even better, and prove the world that a privacy-first and open-source alternative is possible! \uD83D\uDE80"
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Are you developing more features for Gladys and Gladys Plus?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Of course! The more contributors there are on this package, the more I'm able to invest on Gladys. For example, I paid a professional designer to work on the brand identity of Gladys. We all agree that the work he did is incredible, and it's only thanks to contributions that I was able to pay this designer. In fact, Gladys it's a little bit like a decentralized company, where the boss, it's you! Thanks to this business model, all decisions are made in order to favorize users, not investor or advertisers."
        })
    }
];
function Question(param) {
    var title = param.title, description = param.description;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                children: description
            })
        ]
    });
}
var dataFr = [
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Pourquoi s'inscrire \xe0 Gladys Plus ?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Tu as envie d'acc\xe9der simplement et de fa\xe7on s\xe9curis\xe9e \xe0 ton instance Gladys de n'importe o\xf9 dans le monde ? Avoir des sauvegardes quotidiennes de ton instance Gladys ? Soutenir un projet open-source fran\xe7ais en pleine croissance ? Gladys Plus est fait pour toi !"
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Est-ce que je peux me d\xe9sabonner \xe0 tout moment ?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Bien-s\xfbr! Gladys c'est un projet open-source, pas une grosse entreprise sans scrupule \uD83D\uDE04 Tu peux \xe0 tout moment annuler ton abonnement en un clic depuis l'interface de Gladys Plus (il y a un bouton pour se d\xe9sabonner, il n'est pas cach\xe9, tu as juste \xe0 cliquer et hop tu es d\xe9sabonn\xe9). Si seulement tous les abonnements \xe9taient comme \xe7a..."
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Satisfait ou rembours\xe9 ?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Bien entendu ! Si Gladys Plus ne te donne pas enti\xe8re satisfaction, envoie moi un email et je te rembourserai directement, sans discussion. N'h\xe9site pas \xe0 me donner ton retour dans le mail pour que je puisse am\xe9liorer le service \uD83D\uDE42"
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Peux-tu parler du chiffrement de bout en bout ?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                "J'ai pass\xe9 beaucoup de temps \xe0 lire sur l'\xe9tat de l'art en mati\xe8re de chiffrement de bout en bout. J'ai notamment lu le",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://manuals.info.apple.com/MANUALS/1000/MA1902/en_US/apple-platform-security-guide.pdf",
                    children: "Security White Paper d'Apple"
                }),
                " ",
                "sur le chiffrement de bout en bout d'iMessage, le white paper de",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://www.dashlane.com/download/Dashlane_SecurityWhitePaper_March2021.pdf",
                    children: "Dashlane"
                }),
                ", j'ai lu la documentation et discut\xe9 avec le fondateur d'",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://support.insomnia.rest/article/159-end-to-end-encryption",
                    children: "Insomnia"
                }),
                " ",
                "et j'ai lu la documentation de ProtonMail \xe0 propos de leur impl\xe9mentation du protocole",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol",
                    children: "Remote Secure Password"
                }),
                ". Gladys Plus chiffre vos commandes Gladys gr\xe2ce \xe0 l'algorithme AES-GCM 256bits et une cl\xe9 unique g\xe9n\xe9r\xe9e \xe0 chaque message. Cette cl\xe9 est ensuite chiffr\xe9e gr\xe2ce \xe0 la cl\xe9 publique de l'instance Gladys et l'algorithme RSA-OAEP 2048bits. Enfin, chaque message est sign\xe9 gr\xe2ce \xe0 l'algorithme ECDSA P-256, et accompagn\xe9 d'une date d'expiration afin d'\xe9viter les",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://en.wikipedia.org/wiki/Replay_attack",
                    children: "Replay Attack"
                }),
                ". C\xf4t\xe9 Gladys, l'utilisateur doit valider manuellement chaque cl\xe9 publique afin d'\xe9viter qu'un attaquant puisse prendre contr\xf4le de votre Gladys gr\xe2ce \xe0 une attaque",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                    href: "https://en.wikipedia.org/wiki/Man-in-the-middle_attack",
                    children: "Man In The Middle"
                }),
                ". Ainsi, si Gladys Plus est compromis, l'attaquant ne pourra absolument rien faire car sans cl\xe9 priv\xe9e il n'a pas contr\xf4le sur votre Gladys."
            ]
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Pourquoi Gladys Plus est-il payant ?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                "Gladys, tous ses services, m\xeame le code de Gladys Plus, le site web: tout est 100% open-source et gratuit \xe0 utiliser. Mais open-source ne veut pas dire que de mon c\xf4t\xe9 je n'ai pas des frais r\xe9currents: serveurs, domaines, communaut\xe9 en ligne, services d'emails, abonnements, mat\xe9riel, etc... Et c'est sans compter tout le temps que je passe sur le projet car je travaille \xe0 temps partiel sur Gladys ! \uD83D\uDE42 Ce projet respecte votre vie priv\xe9e, et par cons\xe9quent",
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                    children: "ne vit que de ces contributions"
                }),
                ". Chaque contribution permet au projet d'aller plus loin, et montre qu'une alternative libre et respectueuse de la vie priv\xe9e de ses utilisateurs est possible \uD83D\uDE80"
            ]
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Est-ce qu'il va y avoir plus de fonctionnalit\xe9s sur Gladys et Gladys Plus ?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "De plus en plus! Plus il y a de contributeurs \xe0 Gladys Plus, plus il est possible pour moi d'investir dans le projet, de passer du temps dessus, et de fournir un service professionnel. Par exemple, j'ai pu payer un designer professionnel pour refaire toute la charte graphique du projet: logo, illustrations, couleurs, il a tout refait. Et la communaut\xe9 est unanime: son travail a totalement chang\xe9 l'apparence du projet. Payer ce designer n'a uniquement \xe9t\xe9 possible que gr\xe2ce aux contributions de la communaut\xe9, et c'est \xe7a qui est g\xe9nial ! En fait, Gladys c'est un peu comme une entreprise d\xe9centralis\xe9e ou les patrons, c'est vous. Ainsi, toutes les d\xe9cisions dans le projet sont faites de mani\xe8re \xe0 favoriser les utilisateurs, pas un investisseur, une banque ou un publicitaire."
        })
    }
];
function FAQ(param) {
    var lang = param.lang;
    var data = lang === "en" ? dataEn : dataFr;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        id: "faq",
        style: {
            marginTop: "15px"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "col col--6",
                        children: data.slice(0, 4).map(function(oneElement) {
                            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Question, _object_spread({}, oneElement));
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "col col--6",
                        children: data.slice(4).map(function(oneElement) {
                            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Question, _object_spread({}, oneElement));
                        })
                    })
                ]
            })
        })
    });
}
/* export default */ const __rspack_default_export = (FAQ);


},
19969(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  h: () => (BLACK_FRIDAY_CONFIG)
});
/**
 * Black Friday configuration
 * Set ENABLED to false to disable all Black Friday deals across the site
 */ var BLACK_FRIDAY_CONFIG = {
    ENABLED: false,
    END_DATE: new Date(1764633600000)
};


},
18453(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(54617);
/* import */ var _docusaurus_Head__rspack_import_3 = __webpack_require__(83405);
/* import */ var classnames__rspack_import_4 = __webpack_require__(46942);
/* import */ var classnames__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(classnames__rspack_import_4);
/* import */ var _docusaurus_theme_common__rspack_import_15 = __webpack_require__(5414);
/* import */ var _docusaurus_useBaseUrl__rspack_import_5 = __webpack_require__(14748);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_6 = __webpack_require__(19087);
/* import */ var _docusaurus_Translate__rspack_import_7 = __webpack_require__(91785);
/* import */ var _components_home_FAQ__rspack_import_8 = __webpack_require__(80419);
/* import */ var _components_YoutubeEmbedVideo__rspack_import_9 = __webpack_require__(39798);
/* import */ var _components_Testimonial__rspack_import_10 = __webpack_require__(24104);
/* import */ var _components_testimonials_testimonial_plus_fr_json__rspack_import_11 = __webpack_require__(91338);
/* import */ var _components_testimonials_testimonial_plus_en_json__rspack_import_12 = __webpack_require__(65201);
/* import */ var _styles_module_css__rspack_import_13 = __webpack_require__(33721);
/* import */ var _styles_module_css__rspack_import_13_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_13);
/* import */ var _config_blackFriday__rspack_import_14 = __webpack_require__(19969);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

















var YEARLY_PLAN_ACTIVATED = false;
var PRICING_TABLE_ACTIVATED = true;
var BLACK_FRIDAY_ACTIVE = _config_blackFriday__rspack_import_14/* .BLACK_FRIDAY_CONFIG.ENABLED */.h.ENABLED;
var blackFridayEndDate = _config_blackFriday__rspack_import_14/* .BLACK_FRIDAY_CONFIG.END_DATE */.h.END_DATE;
var testimonials = {
    fr: _components_testimonials_testimonial_plus_fr_json__rspack_import_11,
    en: _components_testimonials_testimonial_plus_en_json__rspack_import_12
};
var Check = function() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#06a404",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        className: (_styles_module_css__rspack_import_13_default().checkIcons),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
            points: "20 6 9 17 4 12"
        })
    });
};
var STATUS = {
    INITIAL: "INITIAL",
    SENDING: "SENDING",
    NETWORK_ERROR: "NETWORK_ERROR",
    VALIDATION_ERROR: "VALIDATION_ERROR",
    SUCCESS: "SUCCESS"
};
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function Plus() {
    var context = (0,_docusaurus_useDocusaurusContext__rspack_import_6/* ["default"] */.A)();
    var isDarkTheme = (0,_docusaurus_theme_common__rspack_import_15/* .useColorMode */.G)().colorMode === "dark";
    var _useState = _sliced_to_array((0,react__rspack_import_1.useState)(""), 2), email = _useState[0], setEmail = _useState[1];
    var _useState1 = _sliced_to_array((0,react__rspack_import_1.useState)(STATUS.INITIAL), 2), status = _useState1[0], setStatus = _useState1[1];
    var _useState2 = _sliced_to_array((0,react__rspack_import_1.useState)(BLACK_FRIDAY_ACTIVE), 2), isBlackFridayActive = _useState2[0], setIsBlackFridayActive = _useState2[1];
    var _useState3 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), blackFridayTimeLeft = _useState3[0], setBlackFridayTimeLeft = _useState3[1];
    var i18n = context.i18n;
    var language = i18n.currentLocale;
    var scrollTopTop = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    var updateEmail = function(e) {
        setEmail(e.target.value);
    };
    var subscribe = function(e) {
        return _async_to_generator(function() {
            var e1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        if (!validateEmail(email)) {
                            setStatus(STATUS.VALIDATION_ERROR);
                            return [
                                2
                            ];
                        }
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        setStatus(STATUS.SENDING);
                        return [
                            4,
                            fetch("https://subscribe-gladys-plus.gladysassistant.workers.dev", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    email: email,
                                    language: language
                                })
                            })
                        ];
                    case 2:
                        _state.sent();
                        setEmail("");
                        setStatus(STATUS.SUCCESS);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        e1 = _state.sent();
                        console.error(e1);
                        setStatus(STATUS.NETWORK_ERROR);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var isFr = function() {
        if (language === "fr") {
            return true;
        }
        try {
            var fr = false;
            navigator.languages.forEach(function(oneLang) {
                if (oneLang.indexOf("fr") !== -1) {
                    fr = true;
                }
            });
            return fr;
        } catch (e) {
            console.error(e);
            return true;
        }
    };
    var subscribeDiscount = function(e) {
        e.preventDefault();
        var locale = isFr() ? "fr" : "en";
        window.location.href = "https://direct-pay-gladys-plus.gladysassistant.workers.dev?locale=".concat(locale);
    };
    var submitButtonInitialState = (0,_docusaurus_Translate__rspack_import_7/* .translate */.T)({
        id: "gladysPlusPage.submit",
        description: "Gladys Plus submit",
        message: "Start free trial"
    });
    var submitButtonSending = (0,_docusaurus_Translate__rspack_import_7/* .translate */.T)({
        id: "gladysPlusPage.creatingAccount",
        description: "Gladys Plus page waiting message",
        message: "Creating account..."
    });
    var subscribeButtonDiscount = (0,_docusaurus_Translate__rspack_import_7/* .translate */.T)({
        id: "gladysPlusPage.subscribeButtonDiscount",
        description: "Gladys Plus suscribe button discount",
        message: "Subscribe now"
    });
    (0,react__rspack_import_1.useEffect)(function() {
        // Black Friday countdown
        var updateBlackFridayCountdown = function() {
            var now = new Date();
            var distance = blackFridayEndDate - now;
            if (distance < 0) {
                setIsBlackFridayActive(false);
                return;
            }
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(distance % (1000 * 60) / 1000);
            setBlackFridayTimeLeft({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });
        };
        updateBlackFridayCountdown();
        var interval = setInterval(updateBlackFridayCountdown, 1000);
        return function() {
            return clearInterval(interval);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("main", {
        children: [
            isBlackFridayActive && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                style: {
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    padding: "1.5rem 1rem",
                    textAlign: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "container",
                    style: {
                        maxWidth: "1200px"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            style: {
                                fontSize: "2rem",
                                fontWeight: "bold",
                                margin: "0 0 0.5rem 0",
                                color: "white"
                            },
                            children: [
                                "\uD83C\uDF81",
                                " ",
                                language === "fr" ? "BLACK FRIDAY : -30% sur la première année !" : "BLACK FRIDAY: -30% off the first year!"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            style: {
                                fontSize: "1.2rem",
                                margin: "0 0 0.5rem 0",
                                opacity: 0.95
                            },
                            children: language === "fr" ? "Utilisez le code promo BLACK-FRIDAY-2025 lors de votre inscription" : "Use promo code BLACK-FRIDAY-2025 when subscribing"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            style: {
                                fontSize: "0.95rem",
                                margin: "0 0 1rem 0",
                                opacity: 0.85
                            },
                            children: language === "fr" ? "(Offre réservée aux nouveaux clients)" : "(Offer for new customers only)"
                        }),
                        blackFridayTimeLeft && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                gap: "1rem",
                                flexWrap: "wrap",
                                marginTop: "1rem"
                            },
                            children: [
                                blackFridayTimeLeft.days > 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    style: {
                                        background: "rgba(255,255,255,0.2)",
                                        padding: "0.75rem 1.25rem",
                                        borderRadius: "8px",
                                        backdropFilter: "blur(10px)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                fontSize: "1.8rem",
                                                fontWeight: "bold"
                                            },
                                            children: blackFridayTimeLeft.days
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                fontSize: "0.85rem",
                                                opacity: 0.9
                                            },
                                            children: language === "fr" ? "jours" : "days"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    style: {
                                        background: "rgba(255,255,255,0.2)",
                                        padding: "0.75rem 1.25rem",
                                        borderRadius: "8px",
                                        backdropFilter: "blur(10px)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                fontSize: "1.8rem",
                                                fontWeight: "bold"
                                            },
                                            children: blackFridayTimeLeft.hours
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                fontSize: "0.85rem",
                                                opacity: 0.9
                                            },
                                            children: language === "fr" ? "heures" : "hours"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    style: {
                                        background: "rgba(255,255,255,0.2)",
                                        padding: "0.75rem 1.25rem",
                                        borderRadius: "8px",
                                        backdropFilter: "blur(10px)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                fontSize: "1.8rem",
                                                fontWeight: "bold"
                                            },
                                            children: blackFridayTimeLeft.minutes
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                fontSize: "0.85rem",
                                                opacity: 0.9
                                            },
                                            children: language === "fr" ? "minutes" : "minutes"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    style: {
                                        background: "rgba(255,255,255,0.2)",
                                        padding: "0.75rem 1.25rem",
                                        borderRadius: "8px",
                                        backdropFilter: "blur(10px)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                fontSize: "1.8rem",
                                                fontWeight: "bold"
                                            },
                                            children: blackFridayTimeLeft.seconds
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                fontSize: "0.85rem",
                                                opacity: 0.9
                                            },
                                            children: language === "fr" ? "secondes" : "seconds"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "margin-top--xl margin-bottom--lg",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "container",
                        style: {
                            maxWidth: "72rem",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginBottom: "5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "col col--6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("form", {
                                            className: classnames__rspack_import_4_default()("margin-left--md", (_styles_module_css__rspack_import_13_default().plusForm)),
                                            children: [
                                                isBlackFridayActive && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    style: {
                                                        display: "inline-block",
                                                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                        color: "white",
                                                        padding: "0.5rem 1rem",
                                                        borderRadius: "6px",
                                                        fontSize: "0.9rem",
                                                        fontWeight: "bold",
                                                        marginBottom: "1rem"
                                                    },
                                                    children: "\uD83C\uDF81 BLACK FRIDAY -30%"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                                    className: (_styles_module_css__rspack_import_13_default().plusTitle),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                        id: "gladysPlusPage.title",
                                                        description: "Gladys Plus page title",
                                                        children: "Gladys Plus"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                            id: "gladysPlusPage.description1",
                                                            description: "Gladys Plus description 1",
                                                            children: "Gladys Assistant is free and open-source, forever."
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                            id: "gladysPlusPage.description2",
                                                            description: "Gladys Plus description 2",
                                                            children: "We provide Gladys Plus for cool additionnal features!"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    children: [
                                                        status === STATUS.SUCCESS && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "alert alert--success margin-bottom--md",
                                                            role: "alert",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                id: "gladysPlusPage.subscribeSuccess",
                                                                description: "Gladys Plus page success message",
                                                                children: "Thanks for subscribing to Gladys Plus! You'll receive an email soon to activate your acccount. If you don't receive anything, please contact us on the contact page or on the forum."
                                                            })
                                                        }),
                                                        status === STATUS.VALIDATION_ERROR && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "alert alert--warning margin-bottom--md",
                                                            role: "alert",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                id: "gladysPlusPage.validationError",
                                                                description: "Gladys plus page validation error",
                                                                children: "Please enter a valid email."
                                                            })
                                                        }),
                                                        status === STATUS.NETWORK_ERROR && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "alert alert--danger margin-bottom--md",
                                                            role: "alert",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                id: "gladysPlusPage.networkError",
                                                                description: "Gladys plus page network error",
                                                                children: "Network error: Are you connected to the internet? Please retry. If the problem persist, you can contact us on the contact page, on Twitter, or on the forum."
                                                            })
                                                        }),
                                                        !YEARLY_PLAN_ACTIVATED && !PRICING_TABLE_ACTIVATED && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                                    style: {
                                                                        display: "block"
                                                                    },
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                        id: "gladysPlusPage.startFreeTrial",
                                                                        description: "Gladys Plus free trial input",
                                                                        children: "Start free trial (14 days)"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                    type: "text",
                                                                    className: classnames__rspack_import_4_default()((_styles_module_css__rspack_import_13_default().inputField), (_styles_module_css__rspack_import_13_default().plusInput), "margin-top--sm margin-bottom--sm margin-right--md"),
                                                                    style: {
                                                                        display: "inline-block"
                                                                    },
                                                                    onChange: updateEmail,
                                                                    value: email,
                                                                    placeholder: (0,_docusaurus_Translate__rspack_import_7/* .translate */.T)({
                                                                        id: "gladysPlusPage.emailPlaceholder",
                                                                        description: "Gladys Plus email placeholder",
                                                                        message: "Enter your email"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                    type: "submit",
                                                                    onClick: subscribe,
                                                                    disabled: status === STATUS.SENDING,
                                                                    value: status === STATUS.SENDING ? submitButtonSending : submitButtonInitialState,
                                                                    className: classnames__rspack_import_4_default()((_styles_module_css__rspack_import_13_default().plusInput), (_styles_module_css__rspack_import_13_default().plusInputButton), "button button--primary"),
                                                                    "data-track": "plus_click_start_free_trial"
                                                                })
                                                            ]
                                                        }),
                                                        YEARLY_PLAN_ACTIVATED && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                                    style: {
                                                                        display: "block",
                                                                        marginBottom: "10px"
                                                                    },
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                        id: "gladysPlusPage.subscribe",
                                                                        description: "Gladys Plus subscribe",
                                                                        children: "Exlusive deal for a limited time!"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                                                    onClick: subscribeDiscount,
                                                                    className: classnames__rspack_import_4_default()((_styles_module_css__rspack_import_13_default().plusInput), (_styles_module_css__rspack_import_13_default().plusInputButton), "button button--primary"),
                                                                    "data-track": "plus_click_subscribe_discount",
                                                                    children: subscribeButtonDiscount
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    style: {
                                                                        marginTop: "10px"
                                                                    },
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("small", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                            id: "gladysPlusPage.unsuscribeAtAnytime",
                                                                            description: "Pricing unsubscribe at anytime text",
                                                                            children: "(Unsuscribe at anytime)"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        PRICING_TABLE_ACTIVATED && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                                                            children: [
                                                                isBlackFridayActive && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                    style: {
                                                                        textAlign: "center",
                                                                        marginBottom: "1rem",
                                                                        padding: "1rem",
                                                                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                                        borderRadius: "12px",
                                                                        color: "white",
                                                                        border: "3px dashed rgba(255,255,255,0.5)",
                                                                        boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                            style: {
                                                                                fontSize: "0.85rem",
                                                                                marginBottom: "0.5rem",
                                                                                textTransform: "uppercase",
                                                                                letterSpacing: "1px",
                                                                                opacity: 0.9
                                                                            },
                                                                            children: [
                                                                                "\uD83C\uDF81",
                                                                                " ",
                                                                                language === "fr" ? "Code promo Black Friday" : "Black Friday Promo Code"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                            style: {
                                                                                fontSize: "1.5rem",
                                                                                fontWeight: "bold",
                                                                                fontFamily: "monospace",
                                                                                letterSpacing: "3px",
                                                                                background: "rgba(255,255,255,0.2)",
                                                                                padding: "0.5rem 1rem",
                                                                                borderRadius: "6px",
                                                                                display: "inline-block",
                                                                                marginBottom: "0.5rem"
                                                                            },
                                                                            children: "BLACK-FRIDAY-2025"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                            style: {
                                                                                fontSize: "0.9rem",
                                                                                fontWeight: "600"
                                                                            },
                                                                            children: [
                                                                                "-30% ",
                                                                                language === "fr" ? "de réduction" : "off"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                                    href: "#pricing-table",
                                                                    className: classnames__rspack_import_4_default()((_styles_module_css__rspack_import_13_default().plusInput), (_styles_module_css__rspack_import_13_default().plusInputButton), "button button--primary"),
                                                                    style: {
                                                                        paddingTop: "9px",
                                                                        background: isBlackFridayActive ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : undefined,
                                                                        border: isBlackFridayActive ? "none" : undefined
                                                                    },
                                                                    "data-track": "plus_click_view_pricing_table",
                                                                    children: isBlackFridayActive ? language === "fr" ? "🎁 Profiter de -30%" : "🎁 Get -30% off" : subscribeButtonDiscount
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    style: {
                                                                        marginTop: "10px"
                                                                    },
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("small", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                            id: "gladysPlusPage.unsuscribeAtAnytime",
                                                                            description: "Pricing unsubscribe at anytime text",
                                                                            children: "(Unsuscribe at anytime)"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "col col--6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            src: (0,_docusaurus_useBaseUrl__rspack_import_5/* ["default"] */.Ay)("img/plus/mockup-1x.png"),
                                            srcSet: "".concat((0,_docusaurus_useBaseUrl__rspack_import_5/* ["default"] */.Ay)("img/plus/mockup-1x.png"), " 1x, ").concat((0,_docusaurus_useBaseUrl__rspack_import_5/* ["default"] */.Ay)("img/plus/mockup-2x.png"), " 2x"),
                                            className: classnames__rspack_import_4_default()(isDarkTheme ? "" : (_styles_module_css__rspack_import_13_default().invertImageColor), (_styles_module_css__rspack_import_13_default().plusImage))
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: classnames__rspack_import_4_default()("row", (_styles_module_css__rspack_import_13_default().plusRow)),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "col col--6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            className: classnames__rspack_import_4_default()(isDarkTheme ? "" : (_styles_module_css__rspack_import_13_default().invertImageColor)),
                                            src: (0,_docusaurus_useBaseUrl__rspack_import_5/* ["default"] */.Ay)("/img/plus/plus-e2e-white.png"),
                                            style: {
                                                width: "80%",
                                                marginLeft: "10%"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "col col--6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                className: classnames__rspack_import_4_default()((_styles_module_css__rspack_import_13_default().plusFeatureTitle)),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                    id: "gladysPlusPage.endToEndEncryptedRemoteAccess",
                                                    description: "Gladys Plus page title",
                                                    children: "End-to-End Encrypted remote access"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                    id: "gladysPlusPage.endToEndEncryptedRemoteAccessText",
                                                    description: "Gladys Plus page title",
                                                    children: "Access your local Gladys instance from your phone or any browser, from anywhere in the world, without configuration."
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                    id: "gladysPlusPage.endToEndEncryptedRemoteAccessText2",
                                                    description: "Gladys Plus page title",
                                                    children: "The data is end-to-end encrypted using modern cryptography algorithm, we don't have access to your instance."
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: classnames__rspack_import_4_default()("row", (_styles_module_css__rspack_import_13_default().plusRow)),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "col col--6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                className: classnames__rspack_import_4_default()((_styles_module_css__rspack_import_13_default().plusFeatureTitle)),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                    id: "gladysPlusPage.automatedBackups",
                                                    description: "Gladys Plus page title",
                                                    children: "Automatic & encrypted backups"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                    id: "gladysPlusPage.automatedBackupsText",
                                                    description: "Gladys Plus page title",
                                                    children: "Gladys Plus backup your local instance once every day, so you don't have to worry about losing your local data again."
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                    id: "gladysPlusPage.automatedBackupsText2",
                                                    description: "Gladys Plus page title",
                                                    children: "Your data is encrypted with a key you own, we are not able to read your data."
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "col col--6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            src: (0,_docusaurus_useBaseUrl__rspack_import_5/* ["default"] */.Ay)("/img/plus/plus-backup-white.png"),
                                            className: classnames__rspack_import_4_default()(isDarkTheme ? "" : (_styles_module_css__rspack_import_13_default().invertImageColor)),
                                            style: {
                                                width: "80%",
                                                marginLeft: "10%"
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: classnames__rspack_import_4_default()("row", (_styles_module_css__rspack_import_13_default().plusRow)),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "col col--6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("pre", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                children: 'POST https://api.gladysgateway.com/v1/api/device/state\n\n{\n    "device_feature_external_id": "temperature",\n    "state": 30\n}'
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "col col--6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                className: classnames__rspack_import_4_default()((_styles_module_css__rspack_import_13_default().plusFeatureTitle)),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                    id: "gladysPlusPage.restApi",
                                                    description: "Gladys Plus page title",
                                                    children: "Remote REST API, from anywhere"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                    id: "gladysPlusPage.restApiText",
                                                    description: "Gladys Plus page title",
                                                    children: "Send HTTP request from anywhere in the world, safely proxied to your local instance."
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: classnames__rspack_import_4_default()("row", (_styles_module_css__rspack_import_13_default().plusRow)),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "col col--6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                className: classnames__rspack_import_4_default()((_styles_module_css__rspack_import_13_default().plusFeatureTitle)),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                    id: "gladysPlusPage.voiceAssistant",
                                                    description: "Gladys Plus page title",
                                                    children: "Voice assistant"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                    id: "gladysPlusPage.voiceAssistantText",
                                                    description: "Gladys Plus page title",
                                                    children: "Send requests to any Gladys devices from Google Assistant or Amazon Alexa by voice, or from your phone on the Google Home / Alexa app."
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "col col--6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            src: (0,_docusaurus_useBaseUrl__rspack_import_5/* ["default"] */.Ay)("/img/plus/google-assistant.svg"),
                                            style: {
                                                width: "40%",
                                                marginLeft: "30%"
                                            }
                                        })
                                    })
                                ]
                            }),
                            language === "fr" && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: classnames__rspack_import_4_default()("container", (_styles_module_css__rspack_import_13_default().plusRow)),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_YoutubeEmbedVideo__rspack_import_9/* ["default"] */.A, {
                                    id: "TmjrBeufjyo"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                id: "pricing-table"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: classnames__rspack_import_4_default()("row", (_styles_module_css__rspack_import_13_default().plusRow)),
                                children: [
                                    PRICING_TABLE_ACTIVATED && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "col col--12",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("stripe-pricing-table", {
                                            "pricing-table-id": language === "fr" ? "prctbl_1MRqJdKgPjCBPRbMrhGDD5c6" : "prctbl_1MRrSZKgPjCBPRbMkqwI347j",
                                            "publishable-key": "pk_live_zY5TGhpZHlH65hSEB4PmBeIe"
                                        })
                                    }),
                                    !PRICING_TABLE_ACTIVATED && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "col col--6  col--offset-3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            "class": "card-demo",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                "class": "card",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        "class": "card__header",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: "text--center",
                                                            children: [
                                                                YEARLY_PLAN_ACTIVATED && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                                    className: classnames__rspack_import_4_default()("text--center", (_styles_module_css__rspack_import_13_default().plusPricingTitle)),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                        id: "gladysPlusPage.pricingTitleDiscount",
                                                                        description: "Pricing title discount",
                                                                        children: "Discount: 59,99€ for one year"
                                                                    })
                                                                }),
                                                                !YEARLY_PLAN_ACTIVATED && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                                    className: classnames__rspack_import_4_default()("text--center", (_styles_module_css__rspack_import_13_default().plusPricingTitle)),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                        id: "gladysPlusPage.pricingTitle",
                                                                        description: "Pricing title",
                                                                        children: "9.99€"
                                                                    })
                                                                }),
                                                                !YEARLY_PLAN_ACTIVATED && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("small", {
                                                                    className: (_styles_module_css__rspack_import_13_default().plusPricingTitleMonth),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                        id: "gladysPlusPage.pricingPerMonth",
                                                                        description: "Pricing per month",
                                                                        children: "/month"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        "class": "card__body",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                                className: (_styles_module_css__rspack_import_13_default().listUnstyled),
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Check, {}),
                                                                            " ",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                                id: "gladysPlusPage.unlimitedFamilyMembers",
                                                                                description: "Pricing open-source software",
                                                                                children: "Unlimited family members"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Check, {}),
                                                                            " ",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                                id: "gladysPlusPage.unlimitedRemoteAccess",
                                                                                description: "Pricing end-to-end encrypted remote access",
                                                                                children: "Unlimited Remote Access requests"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Check, {}),
                                                                            " ",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                                id: "gladysPlusPage.unlimitedOpenApiRequests",
                                                                                description: "Pricing daily backups",
                                                                                children: "Unlimited Open API requests"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Check, {}),
                                                                            " ",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                                id: "gladysPlusPage.unlimitedVoiceAssistant",
                                                                                description: "Pricing one-click restore",
                                                                                children: "Unlimited voice assistants requests"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Check, {}),
                                                                            " ",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                                id: "gladysPlusPage.supportOpenSource",
                                                                                description: "Pricing support open-source",
                                                                                children: "Support independant Open-Source Software"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        "class": "card__footer",
                                                        children: [
                                                            isBlackFridayActive && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                style: {
                                                                    textAlign: "center",
                                                                    marginBottom: "1rem",
                                                                    padding: "1rem",
                                                                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                                    borderRadius: "12px",
                                                                    color: "white",
                                                                    border: "3px dashed rgba(255,255,255,0.5)",
                                                                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                        style: {
                                                                            fontSize: "0.85rem",
                                                                            marginBottom: "0.5rem",
                                                                            textTransform: "uppercase",
                                                                            letterSpacing: "1px",
                                                                            opacity: 0.9
                                                                        },
                                                                        children: [
                                                                            "\uD83C\uDF81",
                                                                            " ",
                                                                            language === "fr" ? "Code promo Black Friday" : "Black Friday Promo Code"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                        style: {
                                                                            fontSize: "1.5rem",
                                                                            fontWeight: "bold",
                                                                            fontFamily: "monospace",
                                                                            letterSpacing: "3px",
                                                                            background: "rgba(255,255,255,0.2)",
                                                                            padding: "0.5rem 1rem",
                                                                            borderRadius: "6px",
                                                                            display: "inline-block",
                                                                            marginBottom: "0.5rem"
                                                                        },
                                                                        children: "BLACK-FRIDAY-2025"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                        style: {
                                                                            fontSize: "0.9rem",
                                                                            fontWeight: "600"
                                                                        },
                                                                        children: [
                                                                            "-30% ",
                                                                            language === "fr" ? "de réduction" : "off"
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                                                onClick: YEARLY_PLAN_ACTIVATED ? subscribeDiscount : scrollTopTop,
                                                                "class": "button button--primary button--block",
                                                                "data-track": "plus_click_pricing_card_button",
                                                                children: YEARLY_PLAN_ACTIVATED ? subscribeButtonDiscount : submitButtonInitialState
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                style: {
                                                                    textAlign: "center",
                                                                    marginTop: "10px"
                                                                },
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("small", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_7/* ["default"] */.A, {
                                                                        id: "gladysPlusPage.unsuscribeAtAnytime",
                                                                        description: "Pricing unsubscribe at anytime text",
                                                                        children: "(Unsuscribe at anytime)"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    language === "fr" && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            marginBottom: "5rem"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_Testimonial__rspack_import_10/* .TestimonialSection */.n4, {
                            lang: language,
                            testimonials: testimonials
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_home_FAQ__rspack_import_8/* ["default"] */.A, {
                        lang: language
                    })
                ]
            })
        ]
    });
}
function PlusParent() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
        title: (0,_docusaurus_Translate__rspack_import_7/* .translate */.T)({
            id: "gladysgladysPlusPage.title",
            description: "gladys plus page title",
            message: "Gladys Plus"
        }),
        description: (0,_docusaurus_Translate__rspack_import_7/* .translate */.T)({
            id: "gladysgladysPlusPage.metaDescription",
            description: "gladys plus meta description",
            message: "Add more features to Gladys Assistant with Gladys Plus"
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Head__rspack_import_3/* ["default"] */.A, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                    async: true,
                    src: "https://js.stripe.com/v3/pricing-table.js"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Plus, {})
        ]
    });
}
/* export default */ const __rspack_default_export = (PlusParent);


},
46942(module) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());


},
65201(module) {
"use strict";
module.exports = JSON.parse('[{"username":"tiboys","url":"https://community.gladysassistant.com/t/offre-limitee-gladys-plus-a-50-pendant-1-an/7212/6?u=pierre-gilles","date":"April 25, 2022, 4:58 pm","content":"Personally, I couldn\'t do without the benefits of Gladys Plus anymore. The remote visual to manage my home automation even when I\'m away (camera, security monitoring, shutter closing, etc.). No more Lets Encrypt certificate renewal. The backup to restore immediately in a few seconds. I haven\'t tested the API access yet, but it perfectly meets my wish to lock and secure access from outside to my home automation in all simplicity. For a price equivalent to a small mobile phone plan, I recommend it."},{"username":"jparbel","url":"https://community.gladysassistant.com/t/offre-limitee-gladys-plus-a-50-pendant-1-an/7212/17?u=pierre-gilles","date":"April 25, 2022, 10:25 pm","content":"As a Gladys Plus user from the beginning, I confirm the flawless operation and the convenience of being able to remotely monitor and monitor your equipment without compromising the security of your home network. Gladys Plus offers real possibilities to implement a high-performance alarm system. To sum up, I couldn\'t do without it anymore."},{"username":"Psoy","url":"https://community.gladysassistant.com/t/offre-limitee-gladys-plus-a-50-pendant-1-an/7212/22?u=pierre-gilles","date":"April 26, 2022, 4:14 pm","content":"Same for me, Gladys Plus works very well, no latency for commands, I checked it with my cameras transmitted by Gladys Plus, I paired Gladys with Google, everything installs itself, the devices are directly assigned to the right rooms, and the Google voice command works very well with Gladys. And finally, the regular backup that is done automatically, and the restore is great, you just have to install the blank Gladys image and connect, and Gladys Plus offers the backup made and everything installs itself, no more messing around to recover files to back up Gladys. And on top of that, it supports the project. Don\'t hesitate 😉, and at the same time there is no commitment. (I wish all operators were like that 😆)"},{"username":"VonOx","url":"https://community.gladysassistant.com/t/offre-limitee-gladys-plus-a-50-pendant-1-an/7212/8?u=pierre-gilles","date":"April 25, 2022, 5:24 pm","content":"Yes, take advantage of it, it\'s robust (never had any problems) and in PWA on all my devices. Often on the move, I leave with peace of mind because there\'s nothing to manage on my side."},{"username":"Legw4nn","url":"https://community.gladysassistant.com/t/offre-limitee-gladys-plus-a-50-pendant-1-an/7212/17?u=pierre-gilles","date":"April 26, 2022, 09:18","content":"For my part, I started by subscribing without needing it, but more as support for the project which I find fabulous. And since then, I have been using Owntracks (now NextTracks due to Android updates ^^) and using Gladys outside with PWA installed on all my devices as well, it\'s really awesome 🔥 I linked it to my Google Home and as soon as I add a controllable Zigbee device, it works perfectly, there\'s no latency. So, there\'s no need to hesitate, you have to go for Gladys Plus !!!"}]')

},
91338(module) {
"use strict";
module.exports = JSON.parse('[{"username":"tiboys","url":"https://community.gladysassistant.com/t/offre-limitee-gladys-plus-a-50-pendant-1-an/7212/6?u=pierre-gilles","date":"25 Avril 2022, 16:58","content":"Personnellement je ne me passerais plus des avantages Gladys Plus. Le visuel à distance pour gérer ma domotique même hors du domicile (caméra, surveillance de sécurité, fermeture de volets...). Fini le renouvellement de certificat Lets Encrypt. La sauvegarde pour restaurer immédiatement en quelques secondes. Je n\'ai pas encore testé les accès via API mais ça réponds parfaitement à mon souhait de verrouiller et sécuriser les accès depuis l\'extérieurs à ma domotique en toute simplicité. Pour un prix équivalent à un tout petit forfait téléphone, je le recommande."},{"username":"jparbel","url":"https://community.gladysassistant.com/t/offre-limitee-gladys-plus-a-50-pendant-1-an/7212/17?u=pierre-gilles","date":"25 Avril 2022, 22:25","content":"Utilisateur de Gladys plus depuis le début, je confirme le fonctionnement sans faute et le confort de pouvoir surveiller et monitorer à distance ses équipements sans compromettre la sécurité de son réseau domestique. Gladys plus offre de réelles possibilités pour mettre en oeuvre un système d\'alarme performant. Pour résumer, je ne pourrais plus m\'en passer."},{"username":"Psoy","url":"https://community.gladysassistant.com/t/offre-limitee-gladys-plus-a-50-pendant-1-an/7212/22?u=pierre-gilles","date":"26 Avril 2022, 16:14","content":"Pareil pour moi, Gladys plus fonctionne très bien, pas de latence pour les commandes je l\'ai vérifié avec mes caméras retransmises par Gladys plus, j\'ai couplé Gladys avec Google, tout s\'installe tout seul les devices sont directement affectés aux bonnes pièces, et la commande vocale de Google fonctionne très bien avec Gladys. Et pour finir la sauvegarde régulière qui se fait tout seule, et la restauration c\'est super il suffit d\'installer l\'image vierge de Gladys puis de se connecter et Gladys plus propose la sauvegarde effectuée et tout s\'installe, finit de bidouiller pour récupérer les fichiers pour sauvegarder Gladys. Et en plus ça soutien le projet. N\'hésitez plus 😉, et en même temps il n\'y a pas d\'engagement. (J\'aimerai bien que tout les opérateurs soient comme ça 😆)"},{"username":"VonOx","url":"https://community.gladysassistant.com/t/offre-limitee-gladys-plus-a-50-pendant-1-an/7212/8?u=pierre-gilles","date":"25 Avril 2022, 17:24","content":"Yes profitez en, c\'est robuste ( jamais eu de soucis) et en PWA sur tous mes devices. Souvent en déplacement, je pars l\'esprit tranquille car rien à gérer de mon côté."},{"username":"Legw4nn","url":"https://community.gladysassistant.com/t/offre-limitee-gladys-plus-a-50-pendant-1-an/7212/17?u=pierre-gilles","date":"26 Avril 2022, 09:18","content":"Pour ma part j\'ai commencé par souscrire sans en avoir besoin mais plus comme un soutien au projet que je trouve fabuleux. Et depuis, utilisation de Owntracks ( enfin NextTracks maintenant à cause des MAJ Android ^^) et utilisation depuis l\'extérieur avec gladys en PWA installée sur tous mes devices également, c\'est vraiment le feu 🔥 Je l\'ai reliée à ma google home et dès que j\'ajoute un device zigbee controllable, ça fonctionne parfaitement, y a 0 latence. Donc y a pas à tortiller il faut foncer pour utiliser Gladys Plus !!!"}]')

},

};
;
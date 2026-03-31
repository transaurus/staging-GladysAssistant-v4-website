exports.ids = ["5739"];
exports.modules = {
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
95839(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(54617);
/* import */ var classnames__rspack_import_3 = __webpack_require__(46942);
/* import */ var classnames__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(classnames__rspack_import_3);
/* import */ var _docusaurus_theme_common__rspack_import_10 = __webpack_require__(5414);
/* import */ var _docusaurus_useBaseUrl__rspack_import_4 = __webpack_require__(14748);
/* import */ var _docusaurus_useIsBrowser__rspack_import_5 = __webpack_require__(88094);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_6 = __webpack_require__(19087);
/* import */ var _styles_module_css__rspack_import_7 = __webpack_require__(33721);
/* import */ var _styles_module_css__rspack_import_7_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_7);
/* import */ var _docusaurus_Translate__rspack_import_8 = __webpack_require__(91785);
/* import */ var _config_blackFriday__rspack_import_9 = __webpack_require__(19969);
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











var SHOW_BEELINK_T5 = false;
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
function FAQ(param) {
    var data = param.data;
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
                        children: data.slice(0, 2).map(function(oneElement) {
                            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Question, _object_spread({}, oneElement));
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "col col--6",
                        children: data.slice(2).map(function(oneElement) {
                            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Question, _object_spread({}, oneElement));
                        })
                    })
                ]
            })
        })
    });
}
var faqData = [
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Est-ce que Gladys est install\xe9e sur les mini-PC ?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                "Oui ! Que tu choisisses ",
                SHOW_BEELINK_T5 ? "le Beelink T5, " : "",
                "le Beelink mini S12 ou le Beelink S13, ton mini-PC arrive chez toi avec Gladys d\xe9j\xe0 install\xe9e et configur\xe9e. Tu n'as qu'\xe0 le brancher en Ethernet \xe0 ta box internet, suivre le guide de d\xe9marrage rapide, et tu es pr\xeat \xe0 utiliser Gladys. Plus besoin d'installer un OS ou de configurer quoi que ce soit, tout est d\xe9j\xe0 fait ! Si tu as la moindre question, je suis toujours disponible pour t'aider \uD83D\uDE04"
            ]
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Satisfait ou rembours\xe9 ?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Si jamais ce kit ne te donnait pas satisfaction, tu peux retourner ton mini-PC sous 14 jours. Comme Gladys est d\xe9j\xe0 install\xe9e, tu peux tester le syst\xe8me complet d\xe8s r\xe9ception. Si tu as la moindre question, n'h\xe9site pas \xe0 me contacter, je suis tr\xe8s disponible et toujours pr\xeat \xe0 aider."
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Pourquoi proposer ces kits avec Gladys pr\xe9-install\xe9e ?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Je propose ces kits pour d\xe9mocratiser l'acc\xe8s \xe0 Gladys en rendant la premi\xe8re marche la plus basse possible. Avec Gladys pr\xe9-install\xe9e, tu n'as plus besoin de te soucier de l'installation technique. La domotique est une jungle, et je veux que tu puisses te concentrer sur l'essentiel : profiter de ta maison connect\xe9e !"
        })
    },
    {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Est-ce que l'abonnement Gladys Plus continue ensuite ?"
        }),
        description: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "Si tu es satisfait et que tu continues d'utiliser Gladys, l'abonnement continuera au bout de 6 mois. N\xe9anmoins, Gladys Plus est totalement sans engagement et tu peux annuler l'abonnement en un clic s'il ne te donne pas satisfaction."
        })
    }
];
var targetDate = new Date(1733104800000);
var blackFridayEndDate = _config_blackFriday__rspack_import_9/* .BLACK_FRIDAY_CONFIG.END_DATE */.h.END_DATE;
function Plus() {
    var context = (0,_docusaurus_useDocusaurusContext__rspack_import_6/* ["default"] */.A)();
    var isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_5/* ["default"] */.A)();
    var isDarkTheme = (0,_docusaurus_theme_common__rspack_import_10/* .useColorMode */.G)().colorMode === "dark";
    var i18n = context.i18n;
    var language = i18n.currentLocale;
    var _useState = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), isUnavailable = _useState[0], setIsUnavailable = _useState[1];
    var _useState1 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), unavailableMessage = _useState1[0], setUnavailableMessage = _useState1[1];
    var _useState2 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), price = _useState2[0], setPrice = _useState2[1];
    var _useState3 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), priceCheaperKit = _useState3[0], setPriceCheaperKit = _useState3[1];
    var _useState4 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), kitsRemaining = _useState4[0], setKitsRemaining = _useState4[1];
    var _useState5 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), progressPercentage = _useState5[0], setProgressPercentage = _useState5[1];
    var _useState6 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), isLowStock = _useState6[0], setIsLowStock = _useState6[1];
    var _useState7 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), priceS13 = _useState7[0], setPriceS13 = _useState7[1];
    var _useState8 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), s13Url = _useState8[0], setS13Url = _useState8[1];
    var _useState9 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), priceT5 = _useState9[0], setPriceT5 = _useState9[1];
    var _useState10 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), t5Url = _useState10[0], setT5Url = _useState10[1];
    var _useState11 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), priceMiniS = _useState11[0], setPriceMiniS = _useState11[1];
    var _useState12 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), miniSUrl = _useState12[0], setMiniSUrl = _useState12[1];
    var _useState13 = _sliced_to_array((0,react__rspack_import_1.useState)(true), 2), loading = _useState13[0], setLoading = _useState13[1];
    var _useState14 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), blackFridayTimeLeft = _useState14[0], setBlackFridayTimeLeft = _useState14[1];
    var _useState15 = _sliced_to_array((0,react__rspack_import_1.useState)(_config_blackFriday__rspack_import_9/* .BLACK_FRIDAY_CONFIG.ENABLED */.h.ENABLED), 2), isBlackFridayActive = _useState15[0], setIsBlackFridayActive = _useState15[1];
    console.log("isBlackFridayActive", isBlackFridayActive);
    var scrollTopTop = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    function fetchData() {
        return _async_to_generator(function() {
            var response, data, progressPercentage1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            fetch("https://black-friday-discount.gladysassistant.workers.dev/")
                        ];
                    case 1:
                        response = _state.sent();
                        return [
                            4,
                            response.json()
                        ];
                    case 2:
                        data = _state.sent();
                        if (data.unavailable === true) {
                            setIsUnavailable(true);
                            setUnavailableMessage(data.message);
                        } else {
                            if (data.beelink_s13) {
                                setPriceS13(data.beelink_s13.price);
                                setS13Url(data.beelink_s13.url);
                            }
                            if (data.beelink_t5) {
                                setPriceT5(data.beelink_t5.price);
                                setT5Url(data.beelink_t5.url);
                            }
                            if (data.beelink_mini_s12) {
                                setPriceMiniS(data.beelink_mini_s12.price);
                                setMiniSUrl(data.beelink_mini_s12.url);
                            }
                            setIsLowStock(progressPercentage >= 50 || data.remaining <= 5);
                            if (data.total !== undefined && data.remaining !== undefined) {
                                progressPercentage1 = (data.total - data.remaining) / data.total * 100;
                                setProgressPercentage(progressPercentage1);
                            }
                        }
                        setLoading(false);
                        return [
                            2
                        ];
                }
            });
        })();
    }
    var _useState16 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), timeLeft = _useState16[0], setTimeLeft = _useState16[1];
    (0,react__rspack_import_1.useEffect)(function() {
        fetchData();
        // Black Friday countdown
        var updateBlackFridayCountdown = function() {
            var now = new Date();
            var distance = blackFridayEndDate - now;
            console.log("distance", distance);
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
    var dntActive = false;
    if (isBrowser) {
        dntActive = parseInt(navigator.msDoNotTrack || window.doNotTrack || navigator.doNotTrack, 10) === 1;
    }
    var subscribeS13 = function(e) {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        if (!isBrowser) return [
                            3,
                            3
                        ];
                        if (!(window.op && !dntActive)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            window.op.track("starter_kit_click_buy_mini_s13")
                        ];
                    case 1:
                        _state.sent();
                        _state.label = 2;
                    case 2:
                        window.location.href = s13Url;
                        _state.label = 3;
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var subscribeT5 = function(e) {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        if (!isBrowser) return [
                            3,
                            3
                        ];
                        if (!(window.op && !dntActive)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            window.op.track("starter_kit_click_buy_mini_t5")
                        ];
                    case 1:
                        _state.sent();
                        _state.label = 2;
                    case 2:
                        window.location.href = t5Url;
                        _state.label = 3;
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var subscribeMiniS = function(e) {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        if (!isBrowser) return [
                            3,
                            3
                        ];
                        if (!(window.op && !dntActive)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            window.op.track("starter_kit_click_buy_mini_s")
                        ];
                    case 1:
                        _state.sent();
                        _state.label = 2;
                    case 2:
                        window.location.href = miniSUrl;
                        _state.label = 3;
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var updateEmail = function(e) {
        setEmail(e.target.value);
    };
    var submitButtonInitialState = (0,_docusaurus_Translate__rspack_import_8/* .translate */.T)({
        id: "gladysPlusPage.submit",
        description: "Gladys Plus submit",
        message: "Start free trial"
    });
    var submitButtonSending = (0,_docusaurus_Translate__rspack_import_8/* .translate */.T)({
        id: "gladysPlusPage.creatingAccount",
        description: "Gladys Plus page waiting message",
        message: "Creating account..."
    });
    var subscribeButtonDiscount = (0,_docusaurus_Translate__rspack_import_8/* .translate */.T)({
        id: "gladysPlusPage.subscribeButtonDiscount",
        description: "Gladys Plus suscribe button discount",
        message: "Subscribe now"
    });
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
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                            style: {
                                fontSize: "2rem",
                                fontWeight: "bold",
                                margin: "0 0 0.5rem 0",
                                color: "white"
                            },
                            children: "\uD83C\uDF81 BLACK FRIDAY : Offre Exceptionnelle !"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            style: {
                                fontSize: "1.2rem",
                                margin: "0 0 1rem 0",
                                opacity: 0.95
                            },
                            children: "Mini-PC avec Gladys pr\xe9-install\xe9e + Formation + 6 mois Gladys Plus offerts"
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
                                            children: "jours"
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
                                            children: "heures"
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
                                            children: "minutes"
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
                                            children: "secondes"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "margin-top--xl margin-bottom--lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "container",
                    style: {
                        maxWidth: "1400px",
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
                                        className: classnames__rspack_import_3_default()("margin-left--md", (_styles_module_css__rspack_import_7_default().plusForm)),
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
                                                children: "BLACK FRIDAY"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                                className: (_styles_module_css__rspack_import_7_default().plusTitle),
                                                children: "Kit de d\xe9marrage Gladys"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                                children: [
                                                    "Un mini-PC surpuissant avec ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                        children: "Gladys pr\xe9-install\xe9e"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                    "+ la formation officielle Gladys",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                    "+ 6 mois de Gladys Plus offerts",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                    "+ support personnalis\xe9 par le cr\xe9ateur de Gladys"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                                children: [
                                                    "Livraison en ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                        children: "Mondial Relay"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("small", {
                                                        children: "(Retour sous 14 jours si insatisfait)"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "col col--6 docusaurus-hide-md",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        src: (0,_docusaurus_useBaseUrl__rspack_import_4/* ["default"] */.Ay)("img/starter-kit/beelink_without_bg.png"),
                                        srcSet: "".concat((0,_docusaurus_useBaseUrl__rspack_import_4/* ["default"] */.Ay)("img/starter-kit/beelink_without_bg.png"), " 1x, ").concat((0,_docusaurus_useBaseUrl__rspack_import_4/* ["default"] */.Ay)("img/starter-kit/beelink_without_bg.png"), " 2x"),
                                        className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().starterKitImage), (_styles_module_css__rspack_import_7_default().specImageLeft))
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "col col--12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            style: {
                                                fontSize: "28px",
                                                marginTop: "2rem",
                                                marginBottom: "3rem",
                                                textAlign: "center"
                                            },
                                            children: "Choisis ton kit de d\xe9marrage Gladys :"
                                        }),
                                        isUnavailable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                marginBottom: "20px",
                                                textAlign: "center"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                style: {
                                                    fontSize: "24px",
                                                    fontWeight: "bold",
                                                    color: "var(--ifm-color-danger)"
                                                },
                                                children: unavailableMessage || "Kits actuellement indisponibles"
                                            })
                                        }),
                                        !isUnavailable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "row",
                                            style: {
                                                justifyContent: "center"
                                            },
                                            children: [
                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "col col--4",
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        style: {
                                                            border: "2px solid #ddd",
                                                            padding: "30px",
                                                            paddingTop: "50px",
                                                            borderRadius: "12px",
                                                            textAlign: "center",
                                                            marginBottom: "15px",
                                                            position: "relative",
                                                            flexGrow: 1,
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            justifyContent: "space-between",
                                                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                                                        },
                                                        children: [
                                                            isBlackFridayActive ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-15px",
                                                                    left: "50%",
                                                                    transform: "translateX(-50%)",
                                                                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                                    color: "white",
                                                                    padding: "8px 20px",
                                                                    borderRadius: "25px",
                                                                    fontSize: "1em",
                                                                    fontWeight: "bold",
                                                                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)"
                                                                },
                                                                children: "\uD83C\uDF81 BLACK FRIDAY"
                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-15px",
                                                                    left: "50%",
                                                                    transform: "translateX(-50%)",
                                                                    backgroundColor: "var(--ifm-color-success)",
                                                                    color: "white",
                                                                    padding: "8px 20px",
                                                                    borderRadius: "25px",
                                                                    fontSize: "1em",
                                                                    fontWeight: "bold"
                                                                },
                                                                children: "✓ Gladys Pr\xe9-install\xe9e"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                                        style: {
                                                                            fontSize: "32px",
                                                                            marginBottom: "20px"
                                                                        },
                                                                        children: "Beelink T5"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                                                        style: {
                                                                            fontSize: "1.1em",
                                                                            marginBottom: "20px"
                                                                        },
                                                                        children: [
                                                                            "Le mini-PC compact et \xe9conomique avec",
                                                                            " ",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                                                children: "Gladys d\xe9j\xe0 install\xe9e"
                                                                            }),
                                                                            ". Id\xe9al pour d\xe9buter !"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                                        style: {
                                                                            textAlign: "left",
                                                                            marginBottom: "20px",
                                                                            fontSize: "0.95em"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ Processeur Intel N4020"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ 4 Go de RAM LPDDR4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ 64 Go eMMC"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ WiFi 5 & Bluetooth 5.0"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ Ethernet Gigabit"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                        style: {
                                                                            fontSize: "36px",
                                                                            fontWeight: "bold",
                                                                            margin: "20px 0",
                                                                            marginBottom: "5px",
                                                                            color: "var(--ifm-color-primary)"
                                                                        },
                                                                        children: priceT5 ? priceT5 + "€" : "..."
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                        style: {
                                                                            fontSize: "0.9em",
                                                                            marginTop: "0",
                                                                            marginBottom: "20px",
                                                                            color: "var(--ifm-color-emphasis-600)"
                                                                        },
                                                                        children: "+ frais de ports"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                                                onClick: subscribeT5,
                                                                disabled: loading || !priceT5,
                                                                className: classnames__rspack_import_3_default()("button button--primary button--lg", (_styles_module_css__rspack_import_7_default().starterKitInputButton)),
                                                                style: {
                                                                    width: "100%",
                                                                    marginTop: "20px",
                                                                    fontSize: "1.2rem",
                                                                    padding: "15px",
                                                                    background: isBlackFridayActive ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : undefined,
                                                                    border: "none"
                                                                },
                                                                children: isBlackFridayActive ? "🎁 Profiter de l'offre" : "Commander le Kit T5"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "col col--4",
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        style: {
                                                            border: "2px solid #ddd",
                                                            padding: "30px",
                                                            paddingTop: "50px",
                                                            borderRadius: "12px",
                                                            textAlign: "center",
                                                            marginBottom: "15px",
                                                            position: "relative",
                                                            flexGrow: 1,
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            justifyContent: "space-between",
                                                            boxShadow: "0 8px 16px rgba(0,0,0,0.15)"
                                                        },
                                                        children: [
                                                            isBlackFridayActive ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-15px",
                                                                    left: "50%",
                                                                    transform: "translateX(-50%)",
                                                                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                                    color: "white",
                                                                    padding: "8px 20px",
                                                                    borderRadius: "25px",
                                                                    fontSize: "1em",
                                                                    fontWeight: "bold",
                                                                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)"
                                                                },
                                                                children: "\uD83C\uDF81 BLACK FRIDAY"
                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-15px",
                                                                    left: "50%",
                                                                    transform: "translateX(-50%)",
                                                                    backgroundColor: "var(--ifm-color-success)",
                                                                    color: "white",
                                                                    padding: "8px 20px",
                                                                    borderRadius: "25px",
                                                                    fontSize: "1em",
                                                                    fontWeight: "bold"
                                                                },
                                                                children: "✓ Gladys Pr\xe9-install\xe9e"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                                        style: {
                                                                            fontSize: "32px",
                                                                            marginBottom: "20px"
                                                                        },
                                                                        children: "Beelink mini S12"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                                                        style: {
                                                                            fontSize: "1.1em",
                                                                            marginBottom: "20px"
                                                                        },
                                                                        children: [
                                                                            "Le mini-PC \xe9quilibr\xe9 avec",
                                                                            " ",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                                                children: "Gladys d\xe9j\xe0 install\xe9e"
                                                                            }),
                                                                            ". Bon rapport qualit\xe9/prix."
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                                        style: {
                                                                            textAlign: "left",
                                                                            marginBottom: "20px",
                                                                            fontSize: "0.95em"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ Processeur Intel N95"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ 8 Go de RAM DDR4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ 256 Go SSD"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ WiFi 5 & Bluetooth 4.2"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ Ethernet Gigabit"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                        style: {
                                                                            fontSize: "36px",
                                                                            fontWeight: "bold",
                                                                            margin: "20px 0",
                                                                            marginBottom: "5px",
                                                                            color: "var(--ifm-color-primary)"
                                                                        },
                                                                        children: priceMiniS ? priceMiniS + "€" : "..."
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                        style: {
                                                                            fontSize: "0.9em",
                                                                            marginTop: "0",
                                                                            marginBottom: "20px",
                                                                            color: "var(--ifm-color-emphasis-600)"
                                                                        },
                                                                        children: "+ frais de ports"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                                                onClick: subscribeMiniS,
                                                                disabled: loading || !priceMiniS,
                                                                className: classnames__rspack_import_3_default()("button button--primary button--lg", (_styles_module_css__rspack_import_7_default().starterKitInputButton)),
                                                                style: {
                                                                    width: "100%",
                                                                    marginTop: "20px",
                                                                    fontSize: "1.2rem",
                                                                    padding: "15px",
                                                                    background: isBlackFridayActive ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : undefined,
                                                                    border: "none"
                                                                },
                                                                children: isBlackFridayActive ? "🎁 Profiter de l'offre" : "Commander le kit mini S12"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "col col--4",
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        style: {
                                                            border: "3px solid var(--ifm-color-primary)",
                                                            padding: "30px",
                                                            paddingTop: "50px",
                                                            borderRadius: "12px",
                                                            textAlign: "center",
                                                            marginBottom: "15px",
                                                            position: "relative",
                                                            flexGrow: 1,
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            justifyContent: "space-between",
                                                            boxShadow: "0 8px 16px rgba(0,0,0,0.15)"
                                                        },
                                                        children: [
                                                            isBlackFridayActive ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-15px",
                                                                    left: "50%",
                                                                    transform: "translateX(-50%)",
                                                                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                                    color: "white",
                                                                    padding: "8px 20px",
                                                                    borderRadius: "25px",
                                                                    fontSize: "1em",
                                                                    fontWeight: "bold",
                                                                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)"
                                                                },
                                                                children: "\uD83C\uDF81 BLACK FRIDAY"
                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-15px",
                                                                    left: "50%",
                                                                    transform: "translateX(-50%)",
                                                                    backgroundColor: "var(--ifm-color-success)",
                                                                    color: "white",
                                                                    padding: "8px 20px",
                                                                    borderRadius: "25px",
                                                                    fontSize: "1em",
                                                                    fontWeight: "bold"
                                                                },
                                                                children: "⭐ Meilleur choix"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                                        style: {
                                                                            fontSize: "32px",
                                                                            marginBottom: "20px"
                                                                        },
                                                                        children: "Beelink S13"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                                                        style: {
                                                                            fontSize: "1.1em",
                                                                            marginBottom: "20px"
                                                                        },
                                                                        children: [
                                                                            "Le mini-PC haute performance avec",
                                                                            " ",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                                                children: "Gladys d\xe9j\xe0 install\xe9e"
                                                                            }),
                                                                            ". Le meilleur choix !"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                                        style: {
                                                                            textAlign: "left",
                                                                            marginBottom: "20px",
                                                                            fontSize: "0.95em"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ Processeur Intel N150 (derni\xe8re g\xe9n\xe9ration)"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ 16 Go de RAM DDR4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ 500 Go SSD M.2 NVMe"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ WiFi 6 & Bluetooth 5.2"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                                                children: "✓ Ethernet Gigabit"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                        style: {
                                                                            fontSize: "36px",
                                                                            fontWeight: "bold",
                                                                            margin: "20px 0",
                                                                            marginBottom: "5px",
                                                                            color: "var(--ifm-color-primary)"
                                                                        },
                                                                        children: priceS13 ? priceS13 + "€" : "..."
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                        style: {
                                                                            fontSize: "0.9em",
                                                                            marginTop: "0",
                                                                            marginBottom: "20px",
                                                                            color: "var(--ifm-color-emphasis-600)"
                                                                        },
                                                                        children: "+ frais de ports"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                                                onClick: subscribeS13,
                                                                disabled: loading || !priceS13,
                                                                className: classnames__rspack_import_3_default()("button button--primary button--lg", (_styles_module_css__rspack_import_7_default().starterKitInputButton)),
                                                                style: {
                                                                    width: "100%",
                                                                    marginTop: "20px",
                                                                    fontSize: "1.2rem",
                                                                    padding: "15px",
                                                                    background: isBlackFridayActive ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : undefined,
                                                                    border: "none"
                                                                },
                                                                children: isBlackFridayActive ? "🎁 Profiter de l'offre" : "Commander le kit S13"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        kitsRemaining !== null && typeof progressPercentage === "number" && !isUnavailable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().progressContainer), _define_property({}, (_styles_module_css__rspack_import_7_default().loadingAnimation), loading)),
                                            style: {
                                                marginTop: "30px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: (_styles_module_css__rspack_import_7_default().progressBarBackground),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: (_styles_module_css__rspack_import_7_default().progressBar),
                                                        style: {
                                                            width: "".concat(progressPercentage, "%")
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                                    className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().kitsRemainingText), _define_property({}, (_styles_module_css__rspack_import_7_default().pulse), isLowStock)),
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("b", {
                                                            children: [
                                                                kitsRemaining,
                                                                " ",
                                                                kitsRemaining === 1 ? "kit" : "kits",
                                                                " ",
                                                                "de d\xe9marrage au total",
                                                                " ",
                                                                kitsRemaining === 1 ? "restant" : "restants",
                                                                " !"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        timeLeft && !isUnavailable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                            style: {
                                                textAlign: "center",
                                                marginTop: "10px",
                                                fontSize: "0.9em"
                                            },
                                            children: [
                                                "Temps restant pour profiter de l'offre :",
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                    children: new Intl.DurationFormat("fr", {
                                                        style: "long"
                                                    }).format(timeLeft)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: classnames__rspack_import_3_default()("row", (_styles_module_css__rspack_import_7_default().starterKitRow)),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: classnames__rspack_import_3_default()("col col--6", (_styles_module_css__rspack_import_7_default().flexColumnSecondOnMobile)),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        src: (0,_docusaurus_useBaseUrl__rspack_import_4/* ["default"] */.Ay)("/img/starter-kit/beelink_t5.jpg"),
                                        className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().specImage))
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: classnames__rspack_import_3_default()("col col--6", (_styles_module_css__rspack_import_7_default().flexColumnFirstOnMobile)),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().plusFeatureTitle)),
                                            children: "Beelink T5 - Gladys Pr\xe9-install\xe9e"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Un mini-PC compact et \xe9conomique, parfait pour d\xe9buter :"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Processeur Intel Celeron N4020 dual-core (jusqu'\xe0 2,8 GHz)"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "4 Go de RAM LPDDR4"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "64 Go eMMC"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Wi-Fi 5, Bluetooth 5.0 et LAN Gigabit"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Double HDMI 4K"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                            children: "Gladys d\xe9j\xe0 install\xe9e et configur\xe9e !"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                    children: "Note de Pierre-Gilles :"
                                                }),
                                                " Le Beelink T5 est l'option id\xe9ale pour d\xe9buter avec Gladys sans se ruiner. Parfait pour d\xe9couvrir la domotique avec Gladys sans investir trop au d\xe9part."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: classnames__rspack_import_3_default()("row", (_styles_module_css__rspack_import_7_default().starterKitRow)),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: classnames__rspack_import_3_default()("col col--6", (_styles_module_css__rspack_import_7_default().flexColumnFirstOnMobile)),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().plusFeatureTitle)),
                                            children: "Beelink mini S12 - Gladys Pr\xe9-install\xe9e"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Le mini-PC \xe9quilibr\xe9, un bon rapport qualit\xe9/prix :"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Processeur Intel N95 quad-core"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "8 Go de RAM DDR4"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "256 Go SSD"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Wi-Fi 5, Bluetooth 4.2 et LAN Gigabit"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Double HDMI 4K"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                            children: "Gladys d\xe9j\xe0 install\xe9e et configur\xe9e !"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                    children: "Note de Pierre-Gilles :"
                                                }),
                                                " Le Beelink mini S12 offre un bon \xe9quilibre entre performance et prix, avec suffisamment de puissance pour faire tourner Gladys et ses int\xe9grations de base."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: classnames__rspack_import_3_default()("col col--6", (_styles_module_css__rspack_import_7_default().flexColumnSecondOnMobile)),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        src: (0,_docusaurus_useBaseUrl__rspack_import_4/* ["default"] */.Ay)("/img/starter-kit/beelink_mini_s12.jpg"),
                                        className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().specImage))
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: classnames__rspack_import_3_default()("row", (_styles_module_css__rspack_import_7_default().starterKitRow)),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: classnames__rspack_import_3_default()("col col--6", (_styles_module_css__rspack_import_7_default().flexColumnSecondOnMobile)),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        src: (0,_docusaurus_useBaseUrl__rspack_import_4/* ["default"] */.Ay)("/img/starter-kit/beelink_s13_spec.jpg"),
                                        className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().specImage))
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: classnames__rspack_import_3_default()("col col--6", (_styles_module_css__rspack_import_7_default().flexColumnFirstOnMobile)),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().plusFeatureTitle)),
                                            children: "Beelink S13 - Gladys Pr\xe9-install\xe9e"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Le meilleur choix ! Un mini-PC de derni\xe8re g\xe9n\xe9ration, pr\xeat \xe0 l'emploi :"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Processeur Intel N150 quad-core (Twin Lake) - Derni\xe8re g\xe9n\xe9ration"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "16 Go de RAM DDR4 3200MHz"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Disque SSD M.2 SATA3 500Go + slot M.2 PCIe disponible"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Wi-Fi 6, Bluetooth 5.2 et LAN Gigabit"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Double HDMI 4K@60Hz"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                    children: "Note de Pierre-Gilles :"
                                                }),
                                                " Le Beelink S13 est mon choix recommand\xe9 ! Il repr\xe9sente le meilleur \xe9quilibre entre performance, fiabilit\xe9 et \xe9volutivit\xe9. C'est le mini-PC id\xe9al pour faire tourner Gladys avec toutes ses int\xe9grations, m\xeame les plus gourmandes."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: classnames__rspack_import_3_default()("row", (_styles_module_css__rspack_import_7_default().starterKitRow)),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: classnames__rspack_import_3_default()("col col--6", (_styles_module_css__rspack_import_7_default().flexColumnFirstOnMobile)),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().plusFeatureTitle)),
                                            children: "Formation Gladys officielle"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Des heures de vid\xe9os et tutoriels d\xe9taill\xe9s pour ma\xeetriser Gladys de A \xe0 Z."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Je t'explique comment utiliser toutes les fonctionnalit\xe9s de Gladys : cr\xe9er des sc\xe8nes, automatiser ton logement, connecter tes appareils, et bien plus encore."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Je pars d'un logement vide, et je t'explique tous les choix que j'ai faits en termes de mat\xe9riel et de configuration."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                            children: [
                                                "Avoir acc\xe8s \xe0 cette base de connaissance, c'est gagner du",
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                    children: "temps"
                                                }),
                                                " et de ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                    children: "l'argent"
                                                }),
                                                " sur ton installation domotique."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: classnames__rspack_import_3_default()("col col--6", (_styles_module_css__rspack_import_7_default().flexColumnSecondOnMobile)),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        src: (0,_docusaurus_useBaseUrl__rspack_import_4/* ["default"] */.Ay)("/img/starter-kit/formation.png"),
                                        className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().specImage), (_styles_module_css__rspack_import_7_default().specImageRight))
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: classnames__rspack_import_3_default()("row", (_styles_module_css__rspack_import_7_default().starterKitRow)),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: classnames__rspack_import_3_default()("col col--6", (_styles_module_css__rspack_import_7_default().flexColumnSecondOnMobile)),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        src: (0,_docusaurus_useBaseUrl__rspack_import_4/* ["default"] */.Ay)("img/plus/mockup-1x.png"),
                                        srcSet: "".concat((0,_docusaurus_useBaseUrl__rspack_import_4/* ["default"] */.Ay)("img/plus/mockup-1x.png"), " 1x, ").concat((0,_docusaurus_useBaseUrl__rspack_import_4/* ["default"] */.Ay)("img/plus/mockup-2x.png"), " 2x"),
                                        className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().specImage), (_styles_module_css__rspack_import_7_default().specImageLeft))
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: classnames__rspack_import_3_default()("col col--6", (_styles_module_css__rspack_import_7_default().flexColumnFirstOnMobile)),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().plusFeatureTitle)),
                                            children: "6 mois de Gladys Plus offerts"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Profite du meilleur de Gladys Plus pendant 6 mois !"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Acc\xe8s \xe0 distance chiffr\xe9 de bout en bout"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Sauvegarde quotidienne"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Int\xe9gration Google Home/Alexa"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "API HTTP ouverte"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Streaming de cam\xe9ra \xe0 distance (chiffr\xe9)"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Int\xe9gration Enedis"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Parle avec l'IA dans notre int\xe9gration ChatGPT"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            style: {
                                marginTop: "50px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FAQ, {
                                data: faqData
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "container",
                            style: {
                                marginTop: "5rem",
                                marginBottom: "3rem"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                    className: (_styles_module_css__rspack_import_7_default().plusFeatureTitle),
                                    style: {
                                        textAlign: "center",
                                        marginBottom: "3rem",
                                        fontSize: "36px"
                                    },
                                    children: "Ce qu'ils pensent du kit de d\xe9marrage"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "col col--4",
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                marginBottom: "1.5rem"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                style: {
                                                    border: "1px solid #ddd",
                                                    padding: "25px",
                                                    borderRadius: "8px",
                                                    textAlign: "left",
                                                    flexGrow: 1,
                                                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                        style: {
                                                            fontStyle: "italic",
                                                            marginBottom: "15px"
                                                        },
                                                        children: "Je suis passé d’un Raspberry Pi au Beelink Mini S12 Pro grâce au Kit de démarrage Gladys et j’en suis très content. J’ai constaté un gain en réactivité et j’ai plus confiance en mon système domotique maintenant, tout ça dans un format compact et silencieux. Et la migration s’est faite en quelques minutes grâce aux sauvegardes Gladys Plus."
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                        style: {
                                                            fontWeight: "bold",
                                                            textAlign: "right"
                                                        },
                                                        children: "- cicoub13"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "col col--4",
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                marginBottom: "1.5rem"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                style: {
                                                    border: "1px solid #ddd",
                                                    padding: "25px",
                                                    borderRadius: "8px",
                                                    textAlign: "left",
                                                    flexGrow: 1,
                                                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                        style: {
                                                            fontStyle: "italic",
                                                            marginBottom: "15px"
                                                        },
                                                        children: '"Super offre clairement int\xe9ressant pour quelqu\'un qui veut se lancer en domotique avec Gladys"'
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                        style: {
                                                            fontWeight: "bold",
                                                            textAlign: "right"
                                                        },
                                                        children: "- McFlyPartages"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "col col--4",
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                marginBottom: "1.5rem"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                style: {
                                                    border: "1px solid #ddd",
                                                    padding: "25px",
                                                    borderRadius: "8px",
                                                    textAlign: "left",
                                                    flexGrow: 1,
                                                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                        style: {
                                                            fontStyle: "italic",
                                                            marginBottom: "15px"
                                                        },
                                                        children: '"Je viens de souscrire un kit de d\xe9marrage, content de rejoindre la communaut\xe9 !"'
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                        style: {
                                                            fontWeight: "bold",
                                                            textAlign: "right"
                                                        },
                                                        children: "- Nagromdark"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: classnames__rspack_import_3_default()("row", (_styles_module_css__rspack_import_7_default().starterKitRow)),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "col col--12",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                        className: classnames__rspack_import_3_default()((_styles_module_css__rspack_import_7_default().plusTooExpensiveTitle)),
                                        children: "Pourquoi nos kits avec Gladys pr\xe9-install\xe9e ?"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                        children: [
                                            "Les nouveaux kits de d\xe9marrage Gladys sont bas\xe9s sur des mini-PC Beelink de qualit\xe9, avec ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                children: "Gladys pr\xe9-install\xe9e"
                                            }),
                                            " ! Fini les installations complexes, tu re\xe7ois ton kit, tu le branches, tu suis le guide de d\xe9marrage rapide et tu es pr\xeat \xe0 utiliser Gladys en quelques minutes."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                        children: [
                                            "Nous proposons ",
                                            SHOW_BEELINK_T5 ? "trois" : "deux",
                                            " options pour s'adapter \xe0 tous les besoins :"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                        children: [
                                            SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                        children: "Beelink T5"
                                                    }),
                                                    " : Un mini-PC compact et \xe9conomique, parfait pour d\xe9buter avec Gladys. Processeur Intel N4020, 4 Go de RAM et 64 Go de stockage."
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                        children: "Beelink mini S12"
                                                    }),
                                                    " : Un bon rapport qualit\xe9/prix avec un processeur Intel N95, 8 Go de RAM et 256 Go de stockage SSD. Id\xe9al pour les int\xe9grations de base."
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                        children: "Beelink S13"
                                                    }),
                                                    " ⭐ : ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                        children: "Mon choix recommand\xe9 !"
                                                    }),
                                                    " Le meilleur \xe9quilibre avec un processeur Intel N150 de derni\xe8re g\xe9n\xe9ration, 16 Go de RAM et 500 Go de stockage. Parfait pour toutes les int\xe9grations, m\xeame les plus gourmandes (Node-RED, AdGuard Home, etc.)."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: (_styles_module_css__rspack_import_7_default().tableContainer),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("table", {
                                            className: (_styles_module_css__rspack_import_7_default().priceTable),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("thead", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                children: "Caract\xe9ristiques"
                                                            }),
                                                            SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                children: "Beelink T5"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                children: "Beelink mini S12"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                children: "Beelink S13"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tbody", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Processeur"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Intel Celeron N4020 (jusqu'\xe0 2,8 GHz)"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Intel N95 quad-core"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Intel Twin Lake-N150 (derni\xe8re g\xe9n\xe9ration)"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "M\xe9moire RAM"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "4 Go LPDDR4"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "8 Go DDR4"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "16 Go DDR4"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Stockage"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "64 Go eMMC"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "256 Go SSD"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "500 Go SSD"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "WiFi"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "WiFi 5"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "WiFi 5"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "WiFi 6"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Bluetooth"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Bluetooth 5.0"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Bluetooth 4.2"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Bluetooth 5.2"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Ports HDMI"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Double HDMI 4K"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Double HDMI 4K"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Double HDMI 4K@60Hz"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "LAN"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Gigabit Ethernet (1000 Mbps)"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Gigabit Ethernet (1000 Mbps)"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Gigabit Ethernet (1000 Mbps)"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Gladys"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                                        children: "✓ Pr\xe9-install\xe9e et configur\xe9e"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                                        children: "✓ Pr\xe9-install\xe9e et configur\xe9e"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                                        children: "✓ Pr\xe9-install\xe9e et configur\xe9e"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Formation Gladys"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "✓ Incluse (acc\xe8s \xe0 des tutoriels vid\xe9os et \xe9crits)"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "✓ Incluse (acc\xe8s \xe0 des tutoriels vid\xe9os et \xe9crits)"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "✓ Incluse (acc\xe8s \xe0 des tutoriels vid\xe9os et \xe9crits)"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Gladys Plus"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "✓ 6 mois offerts"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "✓ 6 mois offerts"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "✓ 6 mois offerts"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Support"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "✓ Assistance personnalis\xe9e"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "✓ Assistance personnalis\xe9e"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "✓ Assistance personnalis\xe9e"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Prix du kit complet"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                    children: [
                                                                        priceT5 && !isUnavailable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("b", {
                                                                                    style: {
                                                                                        fontSize: "1.3em",
                                                                                        color: "var(--ifm-color-primary)"
                                                                                    },
                                                                                    children: [
                                                                                        priceT5,
                                                                                        " €"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("small", {
                                                                                    style: {
                                                                                        color: "var(--ifm-color-emphasis-600)"
                                                                                    },
                                                                                    children: "+ frais de ports"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        isUnavailable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                                            children: unavailableMessage
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                    children: [
                                                                        priceMiniS && !isUnavailable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("b", {
                                                                                    style: {
                                                                                        fontSize: "1.3em",
                                                                                        color: "var(--ifm-color-primary)"
                                                                                    },
                                                                                    children: [
                                                                                        priceMiniS,
                                                                                        " €"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("small", {
                                                                                    style: {
                                                                                        color: "var(--ifm-color-emphasis-600)"
                                                                                    },
                                                                                    children: "+ frais de ports"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        isUnavailable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                                            children: unavailableMessage
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                    children: [
                                                                        priceS13 && !isUnavailable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("b", {
                                                                                    style: {
                                                                                        fontSize: "1.3em",
                                                                                        color: "var(--ifm-color-primary)"
                                                                                    },
                                                                                    children: [
                                                                                        priceS13,
                                                                                        " €"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("small", {
                                                                                    style: {
                                                                                        color: "var(--ifm-color-emphasis-600)"
                                                                                    },
                                                                                    children: "+ frais de ports"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        isUnavailable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                                                            children: unavailableMessage
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: "Je commande"
                                                                }),
                                                                SHOW_BEELINK_T5 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                        type: "submit",
                                                                        onClick: subscribeT5,
                                                                        value: isBlackFridayActive ? "🎁 Profiter de l'offre" : "Commander le Kit T5",
                                                                        disabled: isUnavailable || loading || !priceT5,
                                                                        className: classnames__rspack_import_3_default()("button button--primary button--lg"),
                                                                        style: {
                                                                            fontSize: "1.1em",
                                                                            padding: "10px 30px",
                                                                            background: isBlackFridayActive ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : undefined,
                                                                            border: "none"
                                                                        }
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                        type: "submit",
                                                                        onClick: subscribeMiniS,
                                                                        value: isBlackFridayActive ? "🎁 Profiter de l'offre" : "Commander le Kit mini S12",
                                                                        disabled: isUnavailable || loading || !priceMiniS,
                                                                        className: classnames__rspack_import_3_default()("button button--primary button--lg"),
                                                                        style: {
                                                                            fontSize: "1.1em",
                                                                            padding: "10px 30px",
                                                                            background: isBlackFridayActive ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : undefined,
                                                                            border: "none"
                                                                        }
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                        type: "submit",
                                                                        onClick: subscribeS13,
                                                                        value: isBlackFridayActive ? "🎁 Profiter de l'offre" : "Commander le Kit S13",
                                                                        disabled: isUnavailable || loading || !priceS13,
                                                                        className: classnames__rspack_import_3_default()("button button--primary button--lg"),
                                                                        style: {
                                                                            fontSize: "1.1em",
                                                                            padding: "10px 30px",
                                                                            background: isBlackFridayActive ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : undefined,
                                                                            border: "none"
                                                                        }
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
function PlusParent() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
        title: "Kit de d\xe9marrage Gladys cl\xe9 en main",
        description: "Mini-PC Beelink mini S12 ou S13 avec Gladys d\xe9j\xe0 install\xe9e + formation officielle + 6 mois de Gladys Plus offerts. Branchez et c'est parti !",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Plus, {})
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

};
;
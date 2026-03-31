exports.ids = ["7397"];
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
94113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(54617);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_3 = __webpack_require__(19087);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(33721);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);
/* import */ var _docusaurus_Translate__rspack_import_5 = __webpack_require__(91785);
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
function Home() {
    var context = (0,_docusaurus_useDocusaurusContext__rspack_import_3/* ["default"] */.A)();
    var _useState = _sliced_to_array((0,react__rspack_import_1.useState)(""), 2), email = _useState[0], setEmail = _useState[1];
    var _useState1 = _sliced_to_array((0,react__rspack_import_1.useState)(""), 2), message = _useState1[0], setMessage = _useState1[1];
    var _useState2 = _sliced_to_array((0,react__rspack_import_1.useState)(STATUS.INITIAL), 2), status = _useState2[0], setStatus = _useState2[1];
    var i18n = context.i18n;
    var language = i18n.currentLocale;
    var updateEmail = function(e) {
        setEmail(e.target.value);
    };
    var updateMessage = function(e) {
        setMessage(e.target.value);
    };
    var sendMessage = function(e) {
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
                        if (message.length === 0) {
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
                            fetch("https://contact-page.gladysassistant.workers.dev/", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    email: email,
                                    message: message
                                })
                            })
                        ];
                    case 2:
                        _state.sent();
                        setEmail("");
                        setMessage("");
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
    var submitButtonInitialState = (0,_docusaurus_Translate__rspack_import_5/* .translate */.T)({
        id: "contact.submit",
        description: "Contact page submit",
        message: "Send message"
    });
    var submitButtonSending = (0,_docusaurus_Translate__rspack_import_5/* .translate */.T)({
        id: "contact.sendingMessage",
        description: "Contact page sendingMessage",
        message: "Sending message..."
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
        title: (0,_docusaurus_Translate__rspack_import_5/* .translate */.T)({
            id: "contact.title",
            description: "Contact page title",
            message: "Contact Us"
        }),
        description: (0,_docusaurus_Translate__rspack_import_5/* .translate */.T)({
            id: "contact.metaDescription",
            description: "Contact page meta description",
            message: "If you want to contact us"
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                style: {
                    paddingTop: "2rem",
                    paddingBottom: "2rem"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_5/* ["default"] */.A, {
                                id: "contactPage.title",
                                description: "Gladys contact page title",
                                children: "Contact Us"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_5/* ["default"] */.A, {
                                id: "contactPage.explanation",
                                description: "Gladys contact page explanation",
                                children: "If you have a specific question, a parternship request, you can use this form. For technical support, please use the forum."
                            })
                        }),
                        language === "fr" && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "alert alert--warning margin-bottom--md",
                            role: "alert",
                            children: [
                                "Vous \xeates sur le formulaire de contact de Gladys Assistant, un logiciel de maison connect\xe9e open-source.",
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                    href: "/fr/",
                                    children: "Pour en savoir plus"
                                }),
                                ".",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                "Nous n'avons ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                                    children: "aucun lien"
                                }),
                                " avec wedoogift !"
                            ]
                        }),
                        status === STATUS.SUCCESS && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "alert alert--success margin-bottom--md",
                            role: "alert",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_5/* ["default"] */.A, {
                                id: "contactPage.success",
                                description: "Gladys contact page success message",
                                children: "Message sent with success! We'll contact you back as soon as possible."
                            })
                        }),
                        status === STATUS.VALIDATION_ERROR && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "alert alert--warning margin-bottom--md",
                            role: "alert",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_5/* ["default"] */.A, {
                                id: "contactPage.validationError",
                                description: "Gladys contact page validation error",
                                children: "The contact form is not valid. Is your email address is valid? Did you write a message?"
                            })
                        }),
                        status === STATUS.NETWORK_ERROR && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "alert alert--danger margin-bottom--md",
                            role: "alert",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_5/* ["default"] */.A, {
                                id: "contactPage.networkError",
                                description: "Gladys contact page network error",
                                children: "Network error: Are you connected to the internet? Please retry. If the problem persist, you can contact us on Twitter, or on the forum."
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("form", {
                            onSubmit: sendMessage,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_5/* ["default"] */.A, {
                                        id: "contactPage.email",
                                        description: "Gladys contact email",
                                        children: "Email"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                    type: "text",
                                    className: (_styles_module_css__rspack_import_4_default().inputField) + " margin-top--sm margin-bottom--sm",
                                    onChange: updateEmail,
                                    value: email,
                                    placeholder: (0,_docusaurus_Translate__rspack_import_5/* .translate */.T)({
                                        id: "contact.emailPlaceholder",
                                        description: "Contact page email placeholder",
                                        message: "Enter your email"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_5/* ["default"] */.A, {
                                        id: "contactPage.message",
                                        description: "Gladys contact message",
                                        children: "Message"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("textarea", {
                                    placeholder: (0,_docusaurus_Translate__rspack_import_5/* .translate */.T)({
                                        id: "contact.messagePlaceholder",
                                        description: "Contact page message placeholder",
                                        message: "Write here your message!"
                                    }),
                                    className: (_styles_module_css__rspack_import_4_default().contactTextAreaField) + " margin-top--sm margin-bottom--sm",
                                    onChange: updateMessage,
                                    value: message
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                    type: "submit",
                                    disabled: status === STATUS.SENDING,
                                    value: status === STATUS.SENDING ? submitButtonSending : submitButtonInitialState,
                                    className: "button button--primary margin-top--sm"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* export default */ const __rspack_default_export = (Home);


},

};
;
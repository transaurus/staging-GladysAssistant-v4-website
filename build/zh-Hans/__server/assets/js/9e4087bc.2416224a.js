"use strict";
exports.ids = ["9660"];
exports.modules = {
38880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (BlogArchive)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(25863);
/* import */ var _docusaurus_Translate__rspack_import_3 = __webpack_require__(91785);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(64329);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(39407);
/* import */ var _theme_Layout__rspack_import_4 = __webpack_require__(54617);
/* import */ var _theme_Heading__rspack_import_5 = __webpack_require__(92107);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}








function Year(param) {
    var year = param.year, posts = param.posts;
    var dateTimeFormat = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useDateTimeFormat */.i)({
        day: 'numeric',
        month: 'long',
        timeZone: 'UTC'
    });
    var formatDate = function(lastUpdated) {
        return dateTimeFormat.format(new Date(lastUpdated));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_5/* ["default"] */.A, {
                as: "h3",
                id: year,
                children: year
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                children: posts.map(function(post) {
                    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                            to: post.metadata.permalink,
                            children: [
                                formatDate(post.metadata.date),
                                " - ",
                                post.metadata.title
                            ]
                        })
                    }, post.metadata.date);
                })
            })
        ]
    });
}
function YearsSection(param) {
    var years = param.years;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "margin-vert--lg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "row",
                children: years.map(function(_props, idx) {
                    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "col col--4 margin-vert--lg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Year, _object_spread({}, _props))
                    }, idx);
                })
            })
        })
    });
}
function listPostsByYears(blogPosts) {
    var postsByYear = blogPosts.reduce(function(posts, post) {
        var year = post.metadata.date.split('-')[0];
        var _posts_get;
        var yearPosts = (_posts_get = posts.get(year)) !== null && _posts_get !== void 0 ? _posts_get : [];
        return posts.set(year, [
            post
        ].concat(_to_consumable_array(yearPosts)));
    }, new Map());
    return Array.from(postsByYear, function(param) {
        var _param = _sliced_to_array(param, 2), year = _param[0], posts = _param[1];
        return {
            year: year,
            posts: posts
        };
    });
}
function BlogArchive(param) {
    var archive = param.archive;
    var title = (0,_docusaurus_Translate__rspack_import_3/* .translate */.T)({
        id: 'theme.blog.archive.title',
        message: 'Archive',
        description: 'The page & hero title of the blog archive page'
    });
    var description = (0,_docusaurus_Translate__rspack_import_3/* .translate */.T)({
        id: 'theme.blog.archive.description',
        message: 'Archive',
        description: 'The page & hero description of the blog archive page'
    });
    var years = listPostsByYears(archive.blogPosts);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_7/* .PageMetadata */.be, {
                title: title,
                description: description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_4/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("header", {
                        className: "hero hero--primary",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_5/* ["default"] */.A, {
                                    as: "h1",
                                    className: "hero__title",
                                    children: title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "hero__subtitle",
                                    children: description
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
                        children: years.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(YearsSection, {
                            years: years
                        })
                    })
                ]
            })
        ]
    });
}


},
39407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  i: () => (useDateTimeFormat)
});
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_0 = __webpack_require__(19087);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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

function useCalendar() {
    var _useDocusaurusContext = (0,_docusaurus_useDocusaurusContext__rspack_import_0/* ["default"] */.A)(), _useDocusaurusContext_i18n = _useDocusaurusContext.i18n, currentLocale = _useDocusaurusContext_i18n.currentLocale, localeConfigs = _useDocusaurusContext_i18n.localeConfigs;
    return localeConfigs[currentLocale].calendar;
}
function useDateTimeFormat() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _useDocusaurusContext = (0,_docusaurus_useDocusaurusContext__rspack_import_0/* ["default"] */.A)(), currentLocale = _useDocusaurusContext.i18n.currentLocale;
    var calendar = useCalendar();
    return new Intl.DateTimeFormat(currentLocale, _object_spread({
        calendar: calendar
    }, options));
} //# sourceMappingURL=IntlUtils.js.map


},

};
;
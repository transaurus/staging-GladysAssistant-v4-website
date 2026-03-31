"use strict";
exports.ids = ["5575"];
exports.modules = {
14889(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DocVersionRoot)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(64329);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_3 = __webpack_require__(69150);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_5 = __webpack_require__(50608);
/* import */ var _docusaurus_renderRoutes__rspack_import_6 = __webpack_require__(22831);
/* import */ var _theme_SearchMetadata__rspack_import_2 = __webpack_require__(3730);
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






function DocVersionRootMetadata(props) {
    var version = props.version;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_SearchMetadata__rspack_import_2/* ["default"] */.A, {
                version: version.version,
                tag: (0,_docusaurus_plugin_content_docs_client__rspack_import_3/* .getDocsVersionSearchTag */.k)(version.pluginId, version.version)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_4/* .PageMetadata */.be, {
                children: version.noIndex && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            })
        ]
    });
}
function DocVersionRootContent(props) {
    var version = props.version, route = props.route;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_4/* .HtmlClassNameProvider */.e3, {
        className: version.className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_docs_client__rspack_import_5/* .DocsVersionProvider */.n, {
            version: version,
            children: (0,_docusaurus_renderRoutes__rspack_import_6/* .renderRoutes */.v)(route.routes)
        })
    });
}
function DocVersionRoot(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocVersionRootMetadata, _object_spread({}, props)),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocVersionRootContent, _object_spread({}, props))
        ]
    });
}


},

};
;
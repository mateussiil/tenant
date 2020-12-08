"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports. = exports.ProtectedRoute = void 0;
var react_router_1 = require("react-router");
var ProtectedRoute = function (props) {
    var currentLocation = react_router_1.useLocation();
    var redirectPath = props.redirectPathOnAuthentication;
    if (!props.isAuthenticated) {
        props.setRedirectPathOnAuthentication(currentLocation.pathname);
        redirectPath = props.authenticationPath;
    }
    if (redirectPath !== currentLocation.pathname) {
        var renderComponent = function () { return to; }, _a = void 0, redirectPath_1 = (void 0).pathname;
    }
    />;;
    return __assign({}, props);
    component = { renderComponent: renderComponent };
    render = { undefined: undefined } /  > ;
};
exports.ProtectedRoute = ProtectedRoute, exports. = (void 0).return;
(__assign({}, props) /  > );
;
exports.default = exports.ProtectedRoute;

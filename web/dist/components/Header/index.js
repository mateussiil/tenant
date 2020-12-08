"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var logo_svg_1 = __importDefault(require("../../utils/images/logo.svg"));
var auth_1 = __importDefault(require("../../auth"));
require("./styles.css");
var Header = function () {
    var history = react_router_dom_1.useHistory();
    function handleLogout() {
        auth_1.default.logout();
        history.push('/');
    }
    ;
    function handleHome() {
        history.push('/');
    }
    return (<div className="header row center color-white b-color-blue tam-header">
            <button className="ml4 b-color-blue" onClick={handleHome}>
                <img src={logo_svg_1.default} alt="house"/>
            </button>
            <div className="mr2">
                <react_router_dom_1.Link className="color-white mr3" to=""> Sobre Nós</react_router_dom_1.Link>
            {auth_1.default.isAuthenticated() ? //usuario está logado?
        (history.location.pathname === '/profile') ? //usuario esta na aba profile?
            <react_router_dom_1.Link className="color-white mr3" to="" onClick={handleLogout}>Logout</react_router_dom_1.Link>
            : <react_router_dom_1.Link className="mr3 color-white" to="/profile">Perfil</react_router_dom_1.Link>
        : (history.location.pathname === "/login") ? //usuario esta na aba login?
            <></>
            : <react_router_dom_1.Link className="color-white" to="/login">Login</react_router_dom_1.Link>}
            </div>
        </div>);
};

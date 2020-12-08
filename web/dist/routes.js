"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var Home_1 = __importDefault(require("./pages/Home"));
var AdicionarImoveis_1 = __importDefault(require("./pages/AdicionarImoveis"));
var AdicionarFotos_1 = __importDefault(require("./pages/AdicionarFotos"));
var Login_1 = __importDefault(require("./pages/Login"));
var Imoveis_1 = __importDefault(require("./pages/Imoveis"));
var Profile_1 = __importDefault(require("./pages/Profile"));
var CadastroUsuario_1 = __importDefault(require("./pages/CadastroUsuario"));
var AluguelCasa_1 = __importDefault(require("./pages/AluguelCasa"));
var Routes = function () {
    return path = "/";
    exact;
    component = { Home: Home_1.default } /  >
        path;
    "/imoveis";
    exact;
    component = { Imoveis: Imoveis_1.default } /  >
        path;
    "/cadastroUser";
    exact;
    component = { Cadastro: CadastroUsuario_1.default } /  >
        path;
    "/login";
    exact;
    component = { Login: Login_1.default } /  >
        path;
    "/profile";
    exact;
    component = { Profile: Profile_1.default } /  >
        path;
    "/adicionarImoveis";
    exact;
    component = { AdicionarImoveis: AdicionarImoveis_1.default } /  >
        path;
    "/fotos";
    exact;
    component = { AdicionarFotos: AdicionarFotos_1.default } /  >
        path;
    "/aluguel";
    exact;
    component = { AluguelCasa: AluguelCasa_1.default } /  >
        /Switch>
        < /BrowserRouter>;
};
exports.Routes = Routes;

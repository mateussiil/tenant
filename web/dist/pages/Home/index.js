"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var api_1 = __importDefault(require("../../services/api"));
var Header_1 = __importDefault(require("../../components/Header"));
var filterCity_1 = __importDefault(require("../../utils/filter/filterCity"));
var filterPrice_1 = __importDefault(require("../../utils/filter/filterPrice"));
var Home = function () {
    var history = react_router_dom_1.useHistory();
    var _a = react_1.useState([]), houses = _a[0], setHouses = _a[1];
    var _b = react_1.useState(''), city = _b[0], setCity = _b[1];
    var _c = react_1.useState(''), uf = _c[0], setUf = _c[1];
    var _d = react_1.useState(''), price = _d[0], setPrice = _d[1];
    var _e = react_1.useState(''), qtdQuartos = _e[0], setQtdQuartos = _e[1];
    var handleForm = function (e) {
        e.preventDefault();
        localStorage.setItem('city', city);
        localStorage.setItem('uf', uf);
        localStorage.setItem('price', price);
        localStorage.setItem('qtdQuartos', qtdQuartos);
        history.push('/imoveis');
    };
    react_1.useEffect(function () {
        api_1.default.get('imoveis').then(function (response) {
            setHouses(response.data);
        });
    }, [city, uf]);
    return (<div>
            <Header_1.default />
            <section className="container-home tam-page">
                <div className="collum center titulos">
                <h1><span>Reinvente seu jeito de morar</span></h1>
                <h2><span>Alugue seu imóvel sem drama</span></h2>
                </div>
                <form className="h-center" onSubmit={handleForm}>
                <div className="collum input-container-home">
                    <div className="half">
                    <div>
                        <span>Cidade</span>
                    </div>
                    <div className="input-box">
                        <input className="input-default" list="cidades" placeholder="Busque por cidade" value={city} onChange={function (e) { return setCity(e.target.value); }}/>
                        <datalist id="cidades">
                        {filterCity_1.default(houses).map(function (response) { return (<option>{response}</option>); })}
                        </datalist>
                    </div>
                    </div>
                    <div className="home-input-down half">
                    <div className="container-down">
                        <div>
                        <span>Bairros</span>
                        </div>
                        <div className="input-box">
                        <input className="input-default" list="bairros" placeholder="Busque por bairro"/>
                        <datalist id="bairros">
                            <option value="Renascença"/>
                            <option value="Calhau"/>
                            <option value="Monte Castelo"/>
                            <option value="Cidade Operaria"/>
                        </datalist>
                        </div>
                    </div>
                    <div className="container-down">
                        <div>
                        <span>Aluguel até</span>
                        </div>
                        <div className="input-box">
                        <input className="input-default" list="valores" placeholder="Valor" value={price} onChange={function (e) { return setPrice(e.target.value); }}/>
                        <datalist id="valores">
                            {(city) ?
        filterPrice_1.default(houses).map(function (response) { return (<option>{response}</option>); })
        : <option></option>}
                        </datalist>
                        </div>
                    </div>
                    <div className="container-down">
                        <div>
                        <span>Quartos</span>
                        </div>
                        <div className="input-box">
                        <input className="input-default right" list="quartos" placeholder="Quartos" value={qtdQuartos} onChange={function (e) { return setQtdQuartos(e.target.value); }}/>
                        <datalist id="quartos">
                            <option disabled selected value="">Quartos</option>
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                            <option value="4"/>
                            <option value="5"/>
                        </datalist>
                        </div>
                    </div>
                    </div>
                </div>
                <button className="h-center v-center b-color-blue color-white button-home" type="submit">Encontrar Imoveis</button>
                </form>
                <react_router_dom_1.Link className="link-prop color-blue" to='/login'>Proprietario, anuncie aqui</react_router_dom_1.Link>
            </section>
        </div>);
};

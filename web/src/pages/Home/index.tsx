import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';

import filterCity from '../../utils/filter/filterCity';
import filterPrice from '../../utils/filter/filterPrice';

interface Iimoveis {
    place: string;
    price: string;
}

const Home = () =>{
    const history = useHistory();

    const [houses, setHouses ] = useState<Iimoveis[]>([]);
    const [ city, setCity ] = useState('');
    const [ uf, setUf ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ qtdQuartos, setQtdQuartos ] = useState('');

    const handleForm = (e) => {
        e.preventDefault();

        localStorage.setItem('city', city)
        localStorage.setItem('uf', uf)
        localStorage.setItem('price', price)
        localStorage.setItem('qtdQuartos', qtdQuartos)

        history.push('/imoveis');
    }

    useEffect(()=>{
        api.get<Iimoveis[]>('imoveis').then(response => {
            setHouses(response.data)
        })
      },[city,uf]);

    return(
        <div >
            <Header />
            <section className="container-home tam-page">
                <div className="collum center titulos">
                <h1><span>Reinvente seu jeito de morar</span></h1>
                <h2><span>Alugue seu imóvel sem drama</span></h2>
                </div>
                <form
                className="h-center"
                onSubmit={handleForm}
                >
                <div className="collum input-container-home">
                    <div className="half">
                    <div>
                        <span>Cidade</span>
                    </div>
                    <div className="input-box">
                        <input 
                        className="input-default"
                        list="cidades"
                        placeholder="Busque por cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <datalist id="cidades">
                        {
                            filterCity(houses).map(response=>(
                            <option>{response}</option>
                            ))
                        }
                        </datalist>
                    </div>
                    </div>
                    <div className="home-input-down half">
                    <div className="container-down">
                        <div>
                        <span>Bairros</span>
                        </div>
                        <div className="input-box">
                        <input 
                            className="input-default"
                            list="bairros" 
                            placeholder="Busque por bairro"/>
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
                        <input  
                            className="input-default"
                            list="valores"
                            placeholder="Valor"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                        <datalist id="valores">
                            {
                            (city) ?
                                filterPrice(houses).map(response=>(
                                <option>{response}</option>
                                ))
                                : <option></option>
                            }
                        </datalist>
                        </div>
                    </div>
                    <div className="container-down">
                        <div>
                        <span>Quartos</span>
                        </div>
                        <div className="input-box">
                        <input 
                            className="input-default right"
                            list="quartos" 
                            placeholder="Quartos"
                            value={qtdQuartos}
                            onChange={e => setQtdQuartos(e.target.value)}  
                        />
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
                <Link className="link-prop color-blue" to='/login'>Proprietario, anuncie aqui</Link>
            </section>
        </div>
    );

}
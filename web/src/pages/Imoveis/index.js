import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';
import './styles.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import House from '../../components/House';

export default function Imoveis(){
    const [ houses, setHouses ] = useState([])
    const [ city, setCity ] = useState(localStorage.getItem('city'))
    const [ price, setPrice ] = useState(localStorage.getItem('price'))
    const [ qtdQuartos, setQtdQuartos ] = useState(localStorage.getItem('qtdQuartos'))
    const [ arquivos, setArquivos ] = useState([]);

    useEffect(()=>{
        api.get('/imoveis',{
            params:{
                city,
                price,
                qtdQuartos,
            }
        }).then(response=>{
            setHouses(response.data)
        })
        
        api.get('/arquivos').then(response=>{
            setArquivos(response.data)
        })
    },[city,price,qtdQuartos])

    return(
        <div>
            <Header/>
            <div className=" flex collum center mt4">
                <div className="center v-center mt1 mb2">{city}</div>
                <div className="filtro" placeholder="Filtro">
                    <form className="row v-center center mb4">
                        <div className="">
                            <input 
                                className="filtro-input"
                                list="bairros" 
                                placeholder="Bairros"
                                />
                            <datalist id="bairros">
                                <option value="Renascença"/>
                                <option value="Calhau"/>
                                <option value="Monte Castelo"/>
                                <option value="Cidade Operaria"/>
                            </datalist>
                        </div>
                        <div className="">
                            <input 
                                className="filtro-input"
                                list="Quartos" 
                                placeholder="Quartos"
                                />
                        </div>
                        <div className="">
                            <input 
                                className="filtro-input"
                                list="Valores" 
                                placeholder="Valores"
                                />
                        </div>
              </form>
                </div>
                <div className=" row mt4 mb4">
                    <ul className="grid-container">
                        <House data={houses} arquivos={arquivos}/>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
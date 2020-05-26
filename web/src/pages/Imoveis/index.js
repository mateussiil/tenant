import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';
import './styles.css'
import Header from '../../components/Header';
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
            <div className="row tam-page">
                <aside className="container-left">
                    <h1>Filtros</h1>
                </aside>
                <aside className="card-ul">
                    <ul className="grid-container">
                        <House data={houses} arquivos={arquivos}/>
                    </ul>
                </aside>
            </div>
        </div>
    )
}
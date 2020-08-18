import React, { useState, useEffect } from 'react';
import { FiSettings, FiTrash2, FiDollarSign } from 'react-icons/fi';
import { IoMdPeople } from 'react-icons/io';
import {useHistory, Link} from 'react-router-dom';

import api from '../../services/api';
import auth from '../../auth';

import './styles.css';

import filterImage from '../../utils/filter/filterImage';

export default function House({data, arquivos}){
    const [ houses, setHouses ] = useState([])

    const userId = localStorage.getItem('userID');
    const history = useHistory();

    useEffect(()=>{
        setHouses(data)
    },[data])

    async function handleDeleteHouse(id){
        try{
            await api.delete(`/imoveis/${id}`, {
                headers:{
                    Authorization: userId,
                }
            });
            
            setHouses(houses.filter(house => house.id !== id));
        }catch(err){
            alert('Erro ao deletar, tente novamente');
        }
    }

    async function handleUpdateHouse(id){
        history.push('/casa/editar')
    }

    function handleAlugar(){
        history.push('/aluguel');
    }

    return(
            houses.map(house=>(
                <li key={house.id}>
                    <div className="flex card collum">
                        <p>{house.id}</p>
                        <img 
                            className="mb2"
                            src={filterImage(arquivos, house.id)}
                            alt="casa de aluguel"
                            />
                            <br></br
                            >
                        { (history.location.pathname==="/profile") ? 
                            <div className="row mb2">
                                <button type="button" onClick={() => handleDeleteHouse(house.id)}> 
                                    <FiTrash2 size={20} color="#a8a8b3"/>
                                </button>
                                <button type="button" onClick={() => handleUpdateHouse(house.id)}> 
                                    <FiSettings size={20} color="#a8a8b3"/>
                                </button>
                            </div>
                            : <></> 
                        }
                        <div className="space mb2">
                            <strong className="color-blue text-large">{house.street}</strong>
                        </div>
                        <div className="mb1">
                            <div className="row center">
                                <IoMdPeople className="color-gray mr1"/>
                                <strong className="color-gray">Quantidade de quartos disponiveis</strong>
                            </div>
                            <div className="card-value">
                                <strong className="color-green">{house.qtdQuartos} quartos</strong>
                            </div>                                
                        </div>
                        <div className="collum mb1">
                            <div className="row center">
                                <FiDollarSign className="color-gray mr1"/>
                                <strong className="color-gray">Valor</strong>
                            </div>
                            <div className="card-value">
                                <strong className="color-green">R$ {house.price}</strong>
                            </div>
                        </div>
                    </div>
                </li>
            ))
            
    )
}
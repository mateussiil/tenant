import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import Header from '../../components/Header';
import House from '../../components/House';

import './styles.css';
import api from '../../services/api';

export default function Profile(){
    const [ houses, setHouses ] = useState([]);
    const [ arquivos, setArquivos ] = useState([]);

    const [ prop, setProp] = useState();
    const [ tenant, setTenant ] = useState();
    const [ name, setName ] = useState();

    const userId = localStorage.getItem('userID');

    useEffect(()=>{
        api.get('/users',{
            params:{
                'cpf': userId
            }
        }).then(response=>{
            setProp(response.data.proprietary)
            setTenant(response.data.tenant)
            setName(response.data.name)
        })

        api.get('/imoveis',{
            params:{
                'id_prop': userId
            }
        }).then(response=>{
            setHouses(response.data)
        })

        api.get('/arquivos', {
            params:{
                'id_prop': userId
            }
        }).then(response=>{
            setArquivos(response.data)
        })
    },[userId])

    return(
        <div>
            <Header/>
            <div className="row tam-page">
                <aside className="collum container-left">
                    <div className="container-user">
                        <h1>Bem vindo, {name}</h1>
                        <button type="button" onClick={() => {}}> 
                            <FiSettings size={20} color="#a8a8b3"/>
                        </button>
                        <b> </b>
                        {(prop) ?
                            <Link className="color-blue" to='/adicionarImoveis'>Adicionar casa</Link>
                            :<></>
                        }
                    </div>
                </aside>
                <aside className="card-ul">
                    <ul>
                        <House data={houses} arquivos={arquivos} />
                    </ul>
                </aside>
            </div>
        </div>
    )
}
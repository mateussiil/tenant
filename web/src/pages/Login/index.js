import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import Header from '../../components/Header';
import cpfMask from '../../utils/cpfMask';
import api from '../../services/api';

import auth from '../../auth';

export default function Login(){
    const [ cpf, setCpf ] = useState();
    
    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();

        try{
            await api.post('/session', {
                'cpf': cpf.replace(/[^\d]+/g,''),
            }).then(response=>{
                auth.login(cpf.replace(/[^\d]+/g,''))
            });

            history.goBack(-1)
            // history.push('/profile');
            
        }catch(err){
            alert('Cpf invalido, tente novamente!')
        }
    }

    return(
        <div >
            <Header />
            <div className="row center tam-page">
                <div className="collum center">
                    <div className="collum center container-info">
                        <h1>Descubra um novo jeito pra morar</h1>
                        <p>Encontre ja alguem!</p>
                        <p>Sem burocracia!</p>
                    </div>
                    <div className="row">
                        <div className="b-color-blue border-left"></div>
                        <div className="b-color-blue" >
                            <div className="border-right b-color-white"></div>
                        </div>
                    </div>
                </div>
                <div className="collum center content">
                    <form onSubmit={handleLogon} className="form-logon">
                        <input 
                            className="input-default"
                            value={cpf}
                            maxLength="14"
                            placeholder="Digite seu cpf"
                            onChange={e => setCpf(cpfMask(e.target.value))}
                        />
                        <button type="submit" className="b-color-blue v-center h-center color-white btn-logar">Logar</button>
                    </form>
                    <div className="center">
                        <Link className="color-blue" to='/cadastroUser'>Não tenho cadastro</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
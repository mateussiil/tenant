import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';

import './styles.css';

export default function AdicionarImoveis(){
    const [ state, setState ] = useState({ uploadedFiles:[] });

    const [ cep, setCep ] = useState('');
    const [ street, setStreet ] = useState('Rua Dom Pedro');
    const [ city, setCity ] = useState('Belo Horizonte');
    const [ uf, setUf ] = useState('SP');
    const [ number, setNumber ] = useState();
    const [ price, setPrice ] = useState();
    const [ qtdQuartos, setQtdQuartos ] = useState();
    const [ qtdPeoples, setQtdPeoples] = useState();
    const [ description, setDescription ] = useState('')

    const id_prop = localStorage.getItem('userID');
    const history = useHistory();
    
    const data={
        cep,
        street,
        city,
        uf,
        number,
        price,
        qtdQuartos,
        qtdPeoples,
        description,
        id_prop
    }

    async function handleCreateHouse(e){
        e.preventDefault();
        try{
            await api.post('/imoveis', data, {
                headers: {
                    Authorization: id_prop
                }
            }).then(response=>{
                localStorage.setItem('houseId', response.data.id_house);
            })
            history.push('/fotos');
        }catch(err){
            alert('Erro ao cadastrar caso, tente novamente')
        }
    }
    
    return(
        <div>
            <Header />
            <div className="container-cadastro center collum">
                <form className="center" style={{width:500}} onSubmit={handleCreateHouse}>
                    <div className="row mb4 input-group">
                        <h3>CEP :</h3>
                        <input
                            required
                            maxLength='11'
                            className="input-cadastro-user"
                            placeholder='00000 - 000'
                            value={cep}
                            onChange = {e => setCep(e.target.value)}
                            />
                    </div>

                    <div className="row mb4 input-group">
                        <h3>N° :</h3>
                        <input
                            required
                            maxLength='11'
                            className="input-cadastro-user"
                            value={number}
                            placeholder="Numero"
                            onChange = {e => setNumber(e.target.value)}
                            />
                    </div>     
                    
                    <div className="row mb4 input-group">
                        <h3>Quantos Quartos:</h3>
                        <input
                            required
                            maxLength='11'
                            className="input-cadastro-user"

                            value={qtdQuartos}
                            placeholder="Quartos"
                            onChange = {e => setQtdQuartos(e.target.value)}
                            />
                    </div>

                    <div className="row mb4 input-group">
                        <h3>Quantas pessoas?</h3>
                        <input
                            required
                            maxLength='11'
                            className="input-cadastro-user"
                            value={qtdPeoples}
                            placeholder="Pessoas"
                            onChange = {e => setQtdPeoples(e.target.value)}
                            />
                    </div>    

                    <div className="row mb4 input-group">
                        <h3>Preço</h3>
                        <input
                            required
                            maxLength='11'
                            className="input-cadastro-user"
                            value={price}
                            placeholder="Valor em reais"
                            onChange = {e => setPrice(e.target.value)}
                            />
                    </div>    
                    <textarea 
                        value={description}
                        placeholder="Descrição"
                        onChange = {e => setDescription(e.target.value)}
                        />
                    <button className="b-color-blue color-white btn-cadastro" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
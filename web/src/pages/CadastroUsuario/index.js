import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import cpfMask from '../../utils/cpfMask';
import foneMask from '../../utils/foneMask';
import nascMask from '../../utils/nascMask';

import api from '../../services/api';
import auth from '../../auth';

import './styles.css'

export default function Cadastro(){
    const [ cpf, setCpf ] = useState(" ");
    const [ sexo, setSexo ] = useState(" ");
    const [ tenant, setTenant] = useState(true);
    const [ proprietary, setProp ] = useState(false);
    const [ nascimento, setNascimento ] = useState(" ");
    const [ name, setName ] = useState(" ");
    const [ whatsapp, setWhatsapp ] = useState(" ");
    const [ email, setEmail ] = useState(" ");

    const history = useHistory()

    async function handleCadastro(e){
        e.preventDefault();
        
        try{
            await api.post('/users', {
                'cpf' : cpf.replace(/[^\d]+/g,''), //pra nao enviar pro banco de dados com mascara
                name,
                'whatsapp' : whatsapp.replace(/[^\d]+/g,''),
                email,
                tenant, 
                proprietary,
            })

            await api.post('/session', {
                'cpf': cpf.replace(/[^\d]+/g,''),
            }).then(response=>{
                auth.login(cpf.replace(/[^\d]+/g,''))
            });
            
            history.push('/profile');

        }catch(err){
            alert('Erro ao cadastrar caso, tente novamente')
        }
    }

    return(
        <div>
            <Header/>
            <div className="collum h-center">
                <div className="titulos color-gray text-large">
                    <h2>Nos conte um pouco sobre você</h2>
                </div>
                <form className="center" style={{width:500}} onSubmit={handleCadastro}>
                    <div className="row mb4 input-group">
                        <h3>Name:</h3>
                        <input
                            className=" input-cadastro-user"
                            value={name}
                            required
                            onChange={e => { setName(e.target.value)}}
                            />
                    </div>

                    <div className="row mb4 input-group-radio">
                            <h3>Sexo: </h3>
                            <div className="collum ml7">
                                <label>
                                    <input 
                                        type="radio"
                                        onChange={e => setSexo(e.target.value)}
                                        defaultChecked
                                        value="MALE"
                                        name="sexo" 
                                        />
                                        Masculino
                                </label>
                                <label>
                                    <input 
                                        type="radio"
                                        onChange={e => setSexo(e.target.value)}
                                        name="sexo" 
                                        value="FEMALE"
                                        />
                                        Feminino
                                </label>
                                <label>
                                    <input 
                                        type="radio"
                                        onChange={e => setSexo(e.target.value)}
                                        name="sexo" 
                                        value="OTHER"
                                        />
                                        Outro
                                </label>
                            </div>
                    </div>

                    <div className="row mb4 input-group-radio">
                            <h3>Voce é:</h3>
                            <div className="collum ml5">
                                <label>
                                    <input 
                                        required
                                        type="checkbox"
                                        onChange={e => e.target.checked ? setTenant(true):  setTenant(false)}
                                        defaultChecked
                                        name="type" 
                                        value={tenant}
                                        />
                                        Inquilino
                                </label>
                                <label>
                                    <input 
                                        required
                                        type="checkbox"
                                        onChange={e => e.target.checked ? setProp(true):  setProp(false)}
                                        value={proprietary}
                                        name="type" 
                                        />
                                        Proprietario
                                </label>

                            </div>
                    </div>
                    
                    <div className="row mb4 input-group">
                        <h3>Data:</h3>
                        <input
                            className="input-cadastro-user"
                            maxLength='10'
                            placeholder='dia/mês/ano'
                            value={nascMask(nascimento)}
                            onChange={e => { setNascimento(e.target.value)}}
                            />
                    </div>

                    <div className="row mb4 input-group">
                        <h3>Whatsapp:</h3>
                        <input
                            required
                            maxLength='17'
                            className="input-cadastro-user"
                            placeholder='(00) 0000 - 0000'
                            value={whatsapp}
                            onChange={e => { setWhatsapp(foneMask(e.target.value))}}
                            />
                    </div>
       
                    <div className="row mb4 input-group">
                        <h3>Email:</h3>
                        <input
                            required
                            className="input-cadastro-user"
                            value={email}
                            onChange={e => { setEmail(e.target.value)}}
                            />
                    </div>

                    <div className="row input-group">
                        <h3>CPF:</h3>
                        <input
                            required
                            maxLength='14'
                            placeholder='000.000.000.00'
                            className="input-cadastro-user"
                            value={cpf}
                            onChange={e => { setCpf(cpfMask(e.target.value))}}
                            />
                    </div>
                    <button type="submit" className="h-center v-center b-color-blue color-white btn-cadastro-user">Cadastrar!</button>
                </form>
            </div>
        </div>
    )
}
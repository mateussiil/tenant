import React, {useState} from 'react';
import { uniqueId } from 'lodash'; //cria um id unico
import filesize from 'filesize'; //cria um id unico
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Upload from '../../components/Upload';
import FileList from '../../components/FileList';

import api from '../../services/api';

import './styles.css';

export default function AdicionarFotos(){
    const [ file, setFile ] = useState([]);

    const history = useHistory();
    
    const id_prop = localStorage.getItem('userID');
    const houseId = localStorage.getItem('houseId');

    function handleUpload(files){
        const id = uniqueId();

        const uploadedFiles = files.map(file => ({
            file,
            id, 
            //f de fot c de casa e p de proprietario
            name: `f${id}-c${houseId}-p${id_prop}${file.name.substring(file.name.indexOf('.'))}`,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
        }))
        
        setFile(file.concat(uploadedFiles));

        uploadedFiles.forEach(processUpload)
    }

    function updateFile( id, data ){
        // setFile(file.map(uploadedFile => {
        //         return uploadedFile.id === id ?  {...uploadedFile, ...data} : uploadedFile;
        //     })
        // );
    }

    function processUpload(uploadedFile){
        const data = new FormData();
        data.append('file', uploadedFile.file, uploadedFile.name);

        api.post('/arquivos', data, {
            onUploadProgress: e => {
                const progress = parseInt(Math.round(e.loaded  / e.total * 100))

                updateFile(uploadedFile.id, {
                    progress,
                })
            },

            headers:{
                Authorization: id_prop
            },

            params:{
                'id_house': houseId
            }
        }).then(response=>{
            updateFile(uploadedFile.id, {
                uploaded:true,
            })
        }).catch(response=>{
            updateFile(uploadedFile.id, {
                error:true
            })
        })
    }

    async function handleCreateHouse(e){
        e.preventDefault();

        try{
            history.push('/profile');
        }catch(err){
            console.log(err)
            // alert('Erro ao cadastrar caso, tente novamente')
        }
    }
    
    return(
        <div>
            <Header />
            <section className="container-cadastro">
                <div>
                    <form required onSubmit={handleCreateHouse}>
                        <div>
                            <Upload onUpload={handleUpload}/>
                            {!!file.length && (
                                <FileList files={file}/>
                            )}
                        </div>
                        <button className="btn btn-cadastro" type="submit">Cadastrar</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
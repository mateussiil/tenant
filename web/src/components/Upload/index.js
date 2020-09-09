import React from 'react';
import Dropzone from 'react-dropzone';

import './styles.css';

export default function Upload({ onUpload }){
    function renderDragMessage(isDragReject, isDragActive){
        if(!isDragActive){
            return <p className="comum default">Arraste suas imagens aqui, ou click para selecionar</p>
        }
        if(isDragReject){
            return <p className="comum err">Arquivo não suportado</p>
        }
        return <p className="comum sucess">Solte os arquivos aqui</p>
    }
    
    return(
        <div>
            <Dropzone accept="image/*" onDropAccepted={onUpload}>
                { ({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                    <section className="section-input-container">
                        <div 
                            {...getRootProps()}
                            isDragActive={isDragActive}
                            isDragReject={isDragReject} 
                        >
                            <input required {...getInputProps()} />
                            {renderDragMessage(isDragReject, isDragActive)}
                        </div>
                    </section>
                )}
            </Dropzone>
        </div>
    )
}
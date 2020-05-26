import React from 'react';
import Dropzone from 'react-dropzone';

export default function Upload({ onUpload }){
    function renderDragMessage(isDragReject, isDragActive){
        if(!isDragActive){
            return <p className="default-message comum">Arraste suas imagens aqui, ou click para selecionar</p>
        }
        if(isDragReject){
            return <p className="error-message comum">Arquivo não suportado</p>
        }
        return <p className="sucess-message comum">Solte os arquivos aqui</p>
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
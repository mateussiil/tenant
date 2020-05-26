import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import './styles.css';

export default function FileList({ files }){

    function handleDelete(e){
        e.preventDefault()
    }
    
    return(
        <ul className="container-arquives">
            {files.map(uploadedFile =>(
                <li key={uploadedFile.id} className="list-arquives">
                    <div className="file-info">
                        <img src={uploadedFile.preview}/>
                        <div>
                            <strong>{ uploadedFile.name }</strong>
                            <span>
                                {uploadedFile.readableSize}{" "}
                                <button
                                    className="btn-delete"
                                    onClick={()=> handleDelete(uploadedFile.id)}
                                    >
                                    Excluir
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="btns">
                        {!uploadedFile.uploaded &&
                            !uploadedFile.error && (
                                <CircularProgressbar
                                    styles={{
                                        root: { width:24 },
                                        path: {stroke: '#7159c1'}
                                    }}
                                    strokeWidth={10}
                                    percentage={uploadedFile.progress}
                                />
                        )}

                        {uploadedFile.url && (
                            <a 
                                href={uploadedFile.url}
                                target='_blank'
                                rel="nooper noreferrer"
                            >
                                <MdLink style={{ marginRight: 8 }} size={24} color="#222"/>
                            </a>
                        )}
                        
                        {uploadedFile.uploaded && <MdCheckCircle size={24} color="#1f3bdf"/>}
                        {uploadedFile.error && <MdError size={24} color="#e57878"/>}
                    </div>
                </li>
            ))}
        </ul>
    )
}
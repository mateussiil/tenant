import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorLogin(){
    return(
        <div>
            <h1>Ei amg você precisa logar</h1>
            <Link to="/login">Logar</Link>
        </div>
    )
}
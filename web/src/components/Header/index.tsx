import React, { useEffect, ReactNode } from 'react';
import { useHistory, Link } from 'react-router-dom';
import logo from 'src/utils/images/logo.svg';


import api from '../../services/api';

import auth from '../../auth';

import './styles.css';

interface Props {
    to: string;
    children: ReactNode;
}

const Header = () => {
    const history = useHistory();

    function handleLogout(){
        auth.logout()
        history.push('/')
    };

    function handleHome(){
        history.push('/')
    }

    return(
        <div className="header row center color-white b-color-blue tam-header">
            <button className="ml4 b-color-blue" onClick={handleHome}>
                <img src={logo} alt="house" />
            </button>
            <div className="mr2">
                <Link className="color-white mr3" to=""> Sobre Nós</Link>
            {
                auth.isAuthenticated() ? //usuario está logado?
                (history.location.pathname==='/profile') ? //usuario esta na aba profile?
                    <Link className="color-white mr3" to="" onClick={handleLogout}>Logout</Link>
                : <Link className="mr3 color-white" to="/profile">Perfil</Link>
                : (history.location.pathname==="/login") ? //usuario esta na aba login?
                <></>
                : <Link className="color-white" to="/login">Login</Link>
            }
            </div>
        </div>
    )
}
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png"
import Phon from "../img/pngegg (8) 1.png"
import BasicModal2 from './BasicModal2';

const Navibar = () => {
    
    return (
        
        <div className="nav">
            <Container>
            <div className="navbar">
                <Link className="navbar-brand" to="/">
                    <img width={200} src={Logo} alt="" />
                </Link>
                <div className="modalbasik">
                    <BasicModal2/>
                </div>
                <div className="numb">
                    <img src={Phon} alt="" />
                    <div className="num">
                        <div className="operator1">
                            <a href="tel:+996700562342">0700 562 342</a>
                        </div>
                        <div className="operator1">
                            <a href="tel:+996700562342">0700 562 342</a>
                        </div>
                        <div className="operator1">
                            <a href="tel:+996700562342">0700 562 342</a>
                        </div>
                    </div>
                </div>
            </div>
            
                
               
            
        </Container>
            <div className="block">
                <Container>

                <p>Транспортная компания «Портер Такси» выполняет все виды грузоперевозок  по самым выгодным тарифам. К вашим услугам целый ряд грузовиков от 1,5 тонны.</p>
                </Container>
            </div>
        </div>
        
    )
};

export default Navibar;
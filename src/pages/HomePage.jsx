import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import BasicModal from '../components/BasicModal';
import Porter from "../img/porter.png"
import Porter1 from "../img/porter1.png"
import Porter12 from "../img/porter2 (1).png"
import Porter2 from "../img/porter2.png"
import Porter3 from "../img/porter3.png"
import Porter4 from "../img/porter4.png"
import Porter6 from "../img/porter6.png"
import Porter5 from "../img/porter5.png"


import { Link } from 'react-router-dom';
import Logo from "../img/logo.png"
import Phon from "../img/pngegg (8) 1.png"
import BasicModal2 from '../components/BasicModal2';

const HomePage = () => {

   
    return (
        <div>
           <Container>
              <div className="header">
                  <div className="header__text">
                      <h1>ПОРТЕР ТАКСИ</h1>
                      <p>У нас разработаны выгодные тарифы, которые позволят недорого заказать 
                      Портер Такси в Бишкеке для перевозки мебели, 
                      техники, вещей, строительных материалов, а также перевезти крупногабаритный и тяжелый груз.
                      </p>
                      <BasicModal/>
                  </div>
                  <img width={500} src={Porter} alt="" />
              </div>
              <div className="onas">
                 <div className="zagolovok">
                     <div className="line"></div>
                      <h2>О нас</h2>
                      <div className="line"></div>
                 </div>
                  <div className="onas__content">
                  <img width={400} src={Porter1} alt="" />
                  <div className="onas__text">
                      <p>Транспортная компания «Портер Такси» выполняет все виды грузоперевозок 
                       по самым выгодным тарифам. К вашим услугам целый ряд грузовиков от 1,5 тонны  до 4 тонн.
                        У нас разработаны выгодные тарифы, которые позволят недорого заказать Портер Такси в Бишкеке 
                        для перевозки мебели, техники, вещей, 
                      строительных материалов, а также перевезти крупногабаритный и тяжелый груз.</p>
                      <ul>
                        <li className="uslugi">Наши уcлуги:</li>
                          <li>Квартирные, офисные переезды</li>
                          <li>Вывоз мусора</li>
                          <li>Доставка и разборка, сборка мебели</li>
                          <li>Услуги грузчиков</li>
                      </ul>
                  </div>
                  </div>
              </div>
              <div className="usluga">
              <div className="zagolovok">
                     <div className="line"></div>
                      <h2>Наши услуги</h2>
                      <div className="line"></div>
                 </div>
                 <div className="usluga-content">
                     <div className="usluga-card">
                         <img src={Porter12} alt="" />
                         <p>Переезды</p>
                     </div>
                     <div className="usluga-card">
                         <img src={Porter3} alt="" />
                         <p>Услуги грузчиков</p>
                     </div>
                     <div className="usluga-card">
                         <img src={Porter2} alt="" />
                         <p>Экспресс перевозки</p>
                     </div>
                     <div className="usluga-card">
                         <img src={Porter4} alt="" />
                         <p>Доставка грузов</p>
                     </div>
                     <div className="usluga-card">
                         <img src={Porter5} alt="" />
                         <p>Грузоперевозки по Кыргызстану</p>
                     </div>
                     <div className="usluga-card">
                         <img src={Porter6} alt="" />
                         <p>Вывоз мусора</p>
                     </div>
                 </div>
              </div>
           </Container>
        <footer className='footer'>
          <Container>
          <div className="navbar">
                <Link className="navbar-brand" to="/">
                    <img width={200} src={Logo} alt="" className='log' />
                </Link>
                <div className="modalbasik">
                    <BasicModal2/>
                </div>
                <div className="numb">
                    <img src={Phon} alt="" />
                    <div className="num">
                        <div className="operator12 operator1">
                            <a href="tel:+996700562342">0700 562 342</a>
                        </div>
                        <div className="operator12 operator1">
                            <a href="tel:+996700562342">0700 562 342</a>
                        </div>
                        <div className="operator12 operator1">
                            <a href="tel:+996700562342">0700 562 342</a>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <p className="footer-text">Транспортная компания «Портер Такси» выполняет все виды грузоперевозок 
                       по самым выгодным тарифам. К вашим услугам целый ряд грузовиков от 1,5 тонны  до 4 тонн.
                        У нас разработаны выгодные тарифы, которые позволят недорого заказать Портер Такси в Бишкеке 
                        для перевозки мебели, техники, вещей, 
                      строительных материалов, а также перевезти крупногабаритный и тяжелый груз.</p>
          </Container>
        </footer>
        </div>
    );
};

export default HomePage;
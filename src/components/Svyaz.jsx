import React from 'react';
import PhoneIcon from "../img/pngegg (8).png"
import WhatsAppIcon from "../img/pngegg (9).png"
import ItemIcon from "../img/tell.png"

const Svyaz = () => {
    
    return (
        
        // <div className="multibutton">
        //     <ul className='multibutton__list'>
        //         <li className="multibutton__item ">
        //             <a href="tel: +996990556390" className="multibutton__title">
        //                 Позвонить нам
        //             </a>
        //             <a href="tel: +996990556390" className="multibutton__icon">
        //                 <img src={PhoneIcon} alt="" />
        //             </a>
        //         </li>
        //         <li className="multibutton__item">
        //             <a href="" className="multibutton__title">
        //                 Напишите нам в WhatsApp
        //             </a>
        //             <a href="" className="multibutton__icon">
        //             <img src={WhatsAppIcon} alt="" />
        //             </a>
        //         </li>
        //     </ul>
        // </div>
        
        <div class="multibutton">
        <ul class="multibutton__list">
            <li class="multibutton__item">
                <a href="tel:+375291112233" class="multibutton__icon">
                <img className='tell' src={PhoneIcon} alt="" />
                    {/* <svg height="512" viewBox="0 0 74 74" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m53.5 72h-33a4 4 0 0 1 -4-4v-62a4 4 0 0 1 4-4h33a4 4 0 0 1 4 4v62a4 4 0 0 1 -4 4zm-33-68a2 2 0 0 0 -2 2v62a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-62a2 2 0 0 0 -2-2z"></path><path d="m56.5 13h-39a1 1 0 0 1 0-2h39a1 1 0 0 1 0 2z"></path><path d="m56.5 59h-39a1 1 0 0 1 0-2h39a1 1 0 0 1 0 2z"></path><path d="m37 68.188a3.688 3.688 0 1 1 3.688-3.688 3.692 3.692 0 0 1 -3.688 3.688zm0-5.375a1.688 1.688 0 1 0 1.688 1.687 1.689 1.689 0 0 0 -1.688-1.687z"></path><path d="m41 8.75h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"></path></svg> */}
                </a>
                <a href="tel:+375291112233" class="multibutton__title">Повонить нам</a>
            </li>
            
            
            <li class="multibutton__item">
                <a href="https://wa.me/+996755410910" class="multibutton__icon">
                    <img src={WhatsAppIcon} alt="" />
                </a>
                <a href="https://wa.me/+996755410910" class="multibutton__title">Напишите нам в Whatsapp</a>
            </li>
        </ul>
        <div class="multibutton__button">
           <div>
              <img width={80} src={ItemIcon} alt="" />
           </div>
        </div>
    </div>

    )
};

export default Svyaz;
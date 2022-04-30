import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import Oshka from "../img/oshka.png"
import Mega from "../img/mega.png"
import Bilain from "../img/bilain.png"
import Wats from "../img/pngegg (9).png"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className='call-btn' onClick={handleOpen}>Быстрый звонок</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="fastcall">
             <h3>Быстрый звонок</h3>
             <div className="phonenumber">
               <div className="operator">
                 <img src={Oshka} alt="" />
                 <a href="tel:+996700562342">0700 562 342</a>
               </div>
               <div className="operator">
               <img src={Bilain} alt="" />
                 <a href="tel:+996700562342">0700 562 342</a>
               </div>
               <div className="operator">
               <img src={Mega} alt="" />
                 <a href="tel:+996700562342">0700 562 342</a>
               </div>
               <div className="whats">
               
                 <a href="https://wa.me/+996755410910">Написать в WhatsApp</a>
               </div>
             </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

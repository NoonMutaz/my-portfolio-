  
   import * as React from 'react';
// import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
// import ModalClose from '@mui/joy/ModalClose';
// import Typography from '@mui/joy/Typography';
import LoginComponent from '../Login/LoginComponent';  
import Sheet from '@mui/joy/Sheet';

export default function LoginModal() {
  const [open, setOpen] = React.useState (false);
  return (
    <React.Fragment>
           <button  onClick={() => setOpen(true)} style={{  boxShadow: "rgba(0, 0, 0, 0.5) 0px -40px 36px -28px inset" }}  className="z-10  button   cursor-pointer    rounded-[30px] text-[white] bg-[red]  ">
          Login
   
      </button>  
      <Modal
      className="flex  items-center justify-center  w-full"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        // sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 650, borderRadius: 'md', px: 3, boxShadow: 'lg', }}>
          <div className='   text-[red] font-bold cursor-pointer  mt-2 flex justify-end' onClick={() => setOpen(false)}>X</div>
            <LoginComponent />
   
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

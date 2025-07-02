  
   import * as React from 'react';
// import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
// import ModalClose from '@mui/joy/ModalClose';
// import Typography from '@mui/joy/Typography';
import RegisterComponent from '../Register/RegisterComponent';  
import Sheet from '@mui/joy/Sheet';

export default function Register() {
  const [open, setOpen] = React.useState (false);
  return (
    <React.Fragment>
           <button  onClick={() => setOpen(true)}  className=" cursor-pointer w-[90px] h-[60px] bg-[white] border-2 border-[red]   bg-none rounded-[30px] text-[red]  md:w-[90px]   md:h-[60px]">
          Register
   
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
            <RegisterComponent />
   
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

  
   import * as React from 'react';
// import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
// import ModalClose from '@mui/joy/ModalClose';
// import Typography from '@mui/joy/Typography';
import RegisterComponent from '../Register/RegisterComponent';  
import Sheet from '@mui/joy/Sheet';
 
 function Register() {
  const [open, setOpen] = React.useState (false);
  return (
    <React.Fragment>
           <button  onClick={() => setOpen(true)}  className=" z-15 button  cursor-pointer rounded-[30px] bg-white text-red-500
    w-[120px] h-[48px] text-base
    sm:w-[100px] sm:h-[40px] sm:text-sm
    md:w-[140px] md:h-[56px] md:text-lg
    lg:w-[160px] lg:h-[60px] lg:text-xl
  ">
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
          <div className='    text-[red] font-bold cursor-pointer  mt-2 flex justify-end' onClick={() => setOpen(false)}>X</div>
            <RegisterComponent />
   
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}export default React.memo(Register);

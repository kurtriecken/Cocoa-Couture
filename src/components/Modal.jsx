import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import chocIcon from '../assets/chocolate_bar.svg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#e1ba84',
  border: '2px solid #4d3319',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome to Cocoa Couture 
            <img 
                src={chocIcon} 
                alt="chocolate bar" 
                style={{
                    height: '30px',
                    transform: 'rotate(45deg)'}}/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Indulge in Elegance, Savor the Art of Cocoa Couture.
            Open the doors to our service!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
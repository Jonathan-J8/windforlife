import { Backdrop, Box, Modal } from '@mui/material';
import { PropsWithChildren } from 'react';
// import style from './style.module.css';

interface MarkerDetailProps extends PropsWithChildren {
  open: boolean;
  onClose: (e: Event) => void;
}

const MarkerDetail = ({ open = false, onClose }: MarkerDetailProps) => {
  return (
    // <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={onClose}>
    <Modal open={open} onClose={onClose} aria-labelledby="title" aria-describedby="description">
      <Box>
        <p style={{ width: '50%' }}>marker detail</p>
      </Box>
    </Modal>
    // </Backdrop>
  );
};

export default MarkerDetail;

import { Box, Modal } from '@mui/material';
import { PropsWithChildren } from 'react';

interface MarkerDetailProps extends PropsWithChildren {
  open: boolean;
  onClose: (e: Event) => void;
}

const MarkerDetail = ({ open = false, onClose }: MarkerDetailProps) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="title" aria-describedby="description">
      <Box
        sx={{
          width: 300,
          height: 300,
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <p style={{ width: '50%' }}>marker detail</p>
      </Box>
    </Modal>
  );
};

export default MarkerDetail;

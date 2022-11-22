import { Box, Grow, Modal, Paper } from '@mui/material';
import { useAnemometerState } from '../anemometer/store';

const MarkerDetail = () => {
  const anemometer = useAnemometerState();

  const show = anemometer ? true : false;
  return (
    <Grow in={show}>
      <Paper
        elevation={2}
        style={{
          zIndex: 1000,
          position: 'absolute',
          top: '100px',
          left: '15px',
          minWidth: '300px',
          minHeight: '300px',
        }}></Paper>
    </Grow>

    // <Modal open={open} onClose={onClose} aria-labelledby="title" aria-describedby="description">
    //   <Box
    //     sx={{
    //       width: 300,
    //       height: 300,
    //       position: 'absolute' as 'absolute',
    //       top: '50%',
    //       left: '50%',
    //       transform: 'translate(-50%, -50%)',
    //     }}>
    //     <p style={{ width: '50%' }}>marker detail</p>
    //   </Box>

    // </Modal>
  );
};

export default MarkerDetail;

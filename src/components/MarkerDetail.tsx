import { Close } from '@mui/icons-material';
import { Box, Button, Divider, Fab, Grow, Modal, Paper, Typography } from '@mui/material';
import { useAnemometerAction, useAnemometerState, AnemometerAction } from '../anemometer/store';

const MarkerDetail = () => {
  const anemometer = useAnemometerState();
  const dispatch = useAnemometerAction();

  const onClose = () => dispatch({ type: AnemometerAction.REMOVE });
  const show = anemometer ? true : false;
  const name = anemometer?.name;
  const lat = anemometer?.loc?.lat;
  const long = anemometer?.loc?.long;
  const weeklyForce = anemometer?.statistics?.average?.weekly?.force || '';
  const dailyForce = anemometer?.statistics?.average?.daily?.force || '';

  return (
    <Grow in={show} style={{ transformOrigin: '0 0 0' }}>
      <Paper
        elevation={2}
        sx={{
          p: 2,
          zIndex: 1000,
          position: 'absolute',
          top: '100px',
          left: '15px',
          minWidth: '300px',
          minHeight: '300px',
        }}>
        <Button onClick={onClose}>
          <Close></Close>
        </Button>
        <Typography variant="body1" component="h2">
          {name}
        </Typography>
        <Divider />
        <Typography variant="body2">Latitude {lat}</Typography>
        <Typography variant="body2">Longitude {long}</Typography>
        <Divider />
        <Typography variant="body2">Weekly force average {weeklyForce}</Typography>
        <Typography variant="body2">Daily force average {dailyForce}</Typography>
        <Divider />
      </Paper>
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

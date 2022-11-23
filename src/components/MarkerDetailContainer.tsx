import { ChevronLeft, ExpandMore } from '@mui/icons-material';
import { IconButton, Paper, Slide } from '@mui/material';

import isMobile from '../utils/isMobile';
import { marker, useMarkerAction, useMarkerState } from '../stores/marker';

import { PropsWithChildren } from 'react';

const css = {
  paper: {
    zIndex: 1000,
    position: 'absolute',
    minHeight: '100px',
    borderRadius: '20px',
  },

  desktop: {
    left: '25px',
    top: '60px',
    width: 'clamp(200px, 85%, 340px)',
  },
  mobile: {
    left: '10px',
    bottom: '10px',
    width: 'clamp(200px, 93%, 340px)',
  },
  fab: {
    position: 'absolute',
    right: '10px',
    top: '10px',
  },
};

const MarkerDetailContainer = ({ children }: PropsWithChildren) => {
  const { show } = useMarkerState();
  const dispatch = useMarkerAction();
  const onClose = () => dispatch({ type: marker.actions.HIDE });

  return (
    <Slide in={show} direction={isMobile() ? 'up' : 'right'}>
      <Paper aria-live="assertive" elevation={2} sx={{ ...css.paper, ...(isMobile() ? css.mobile : css.desktop) }}>
        <IconButton sx={{ ...css.fab }} aria-label="close marker detail" color="primary" size="small" onClick={onClose}>
          {isMobile() ? <ExpandMore /> : <ChevronLeft />}
        </IconButton>
        {children}
      </Paper>
    </Slide>
  );
};

export default MarkerDetailContainer;

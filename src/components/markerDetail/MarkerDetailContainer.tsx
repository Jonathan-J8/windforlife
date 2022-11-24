import type { PropsWithChildren } from 'react';
import { IconButton, Paper, Slide } from '@mui/material';
import { ChevronLeft, ExpandMore } from '@mui/icons-material';

import isMobile from '../../utils/isMobile';
import { marker, useMarkerAction, useMarkerState } from '../../stores/marker';

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
      <Paper
        sx={{ ...css.paper, ...(isMobile() ? css.mobile : css.desktop) }}
        aria-live="assertive"
        elevation={2}
        tabIndex={0}>
        <IconButton
          sx={{ ...css.fab }}
          onClick={onClose}
          aria-label="close marker detail"
          title="close marker detail"
          color="primary"
          size="small">
          {isMobile() ? <ExpandMore /> : <ChevronLeft />}
        </IconButton>
        {children}
      </Paper>
    </Slide>
  );
};

export default MarkerDetailContainer;

import type { PropsWithChildren } from 'react';
import { Paper, Slide } from '@mui/material';

import isMobile from '../../utils/isMobile';

const css = {
  paper: {
    zIndex: 1000,
    position: 'absolute',
    minHeight: '50px',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  desktop: {
    left: '25px',
    top: '60px',
    width: 'clamp(100px, 85%, 340px)',
  },
  mobile: {
    left: '10px',
    bottom: '10px',
    width: 'clamp(200px, 93%, 340px)',
  },
};

interface Props extends PropsWithChildren {
  open: boolean;
}

const Modal = ({ open, children }: Props) => {
  return (
    <Slide in={open} direction={isMobile() ? 'up' : 'right'}>
      <Paper
        sx={{ ...css.paper, ...(isMobile() ? css.mobile : css.desktop) }}
        aria-live="assertive"
        elevation={2}
        tabIndex={0}>
        {children}
      </Paper>
    </Slide>
  );
};

export default Modal;

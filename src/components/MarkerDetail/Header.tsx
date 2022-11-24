import { useEffect, useRef, type MutableRefObject } from 'react';

import { Typography, IconButton, Box } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const css = {
  container: {
    position: 'relative',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'primary.main',
    gap: '1rem',
    background: `linear-gradient(
      var(--direction),
      var(--color1),
      var(--color2)
    )`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    transition: 'background 1s ease',
    // animation: ${gradient} 4s ease 1.8s 1;
  },
  title: {
    flexGrow: 1,
    color: 'primary.contrastText',
  },
  fab: {
    backgroundColor: 'primary.contrastText',
    transition: 'transform 0.3s ease',
  },
};

interface Props {
  title: string;
  expand: boolean;
  direction: {
    current: number;
    previous: number;
  };
  onExpand: () => void;
}

const Header = ({ title, expand, direction, onExpand }: Props) => {
  const box = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    box.current.style['--direction'] = `${direction.current}deg`;
  });

  return (
    <Box
      ref={box}
      component="div"
      sx={{
        ...css.container,
        '--color1': (theme) => theme.palette.primary.dark,
        '--color2': (theme) => theme.palette.primary.light,
        '--direction': `${direction.previous}deg`,
      }}>
      <Typography sx={{ ...css.title }} component="h2" variant="body1">
        {title}
      </Typography>

      <IconButton
        sx={{
          ...css.fab,
          '&:hover': {
            backgroundColor: 'primary.contrastText',
            transform: 'scale(1.1)',
          },
        }}
        onClick={onExpand}
        aria-label="close marker detail"
        title="close marker detail"
        color="primary"
        size="small">
        {expand ? <ExpandLess /> : <ExpandMore />}
        {/* {isMobile() ? <IconMobile expand={expand} /> : <IconDesktop expand={expand} />} */}
      </IconButton>
    </Box>
  );
};

export default Header;

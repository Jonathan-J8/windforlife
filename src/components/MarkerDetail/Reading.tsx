import { MutableRefObject, useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';

const css = {
  grow: { flexGrow: 1 },
  img: {
    transformOrigin: 'center',
    transform: 'rotate(0deg)',
    transition: 'transform 0.5s ease-in-out 0.5s',
  },
};

interface ItemProps {
  timestamp: { current: Date; previous?: Date };
  force: { current: number; previous?: number };
  dir: { current: number; previous?: number };
}

const Reading = ({ timestamp, force, dir }: ItemProps) => {
  const img = useRef() as MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    img.current.style.transform = `rotate(${dir.current}deg)`;
  }, [dir.current]);

  const date = new Date(timestamp.current).toLocaleString();
  const alt = `Direction ${dir.current} degree`;

  return (
    <>
      <Box sx={{ ...css.grow }} component="span">
        <Typography variant="caption">{date}</Typography>
        <Typography variant="body2">{force.current} kn</Typography>
      </Box>

      <Box
        ref={img}
        sx={{ ...css.img }}
        style={{ transform: `rotate(${dir.previous || 0}deg)` }}
        component="img"
        src="/north_FILL1_wght400_GRAD0_opsz40.png"
        alt={alt}
        width={25}
        height={25}
      />
    </>
  );
};

export default Reading;

import { MutableRefObject, useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';

const css = {
  container: { display: 'inline-flex', width: '100%' },
  grow: { flexGrow: 1 },
  dir: { display: 'flex', alignItems: 'center', gap: '1rem' },
  img: {
    transformOrigin: 'center',
    transform: 'rotate(0deg)',
    transition: 'transform 0.5s ease-in-out 0.5s',
  },
};

const MarkerDetailReading = ({ timestamp, force, dir }: MarkerReadingData) => {
  const img = useRef() as MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    if (img.current && img.current instanceof HTMLElement) {
      img.current.style.transform = `rotate(${dir}deg)`;
    }
  }, [dir]);

  const date = new Date(timestamp).toLocaleDateString();
  const alt = `Direction ${dir} degree`;

  return (
    <Box component="li" sx={css.container}>
      <Box component="span" sx={css.grow}>
        <Typography variant="caption" sx={css.grow}>
          {date}
        </Typography>
        <Typography variant="body2">Force {force}</Typography>
      </Box>
      <Box sx={css.dir}>
        <Box
          ref={img}
          component="img"
          sx={css.img}
          width={25}
          height={40}
          alt={alt}
          src="/navigation_FILL1_wght700_GRAD0_opsz48.png"
          // style={{ transform: `rotate(${prevDir.current}deg)` }}
        />
        <Typography component="span" variant="body2">
          {dir}°
        </Typography>
      </Box>
    </Box>
  );
};

export default MarkerDetailReading;

import { MutableRefObject, useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';

const css = {
  container: { display: 'inline-flex', width: '100%' },
  grow: { flexGrow: 1 },
  img: {
    paddingRight: '0.5rem',
    transformOrigin: 'center',
    transform: 'rotate(0deg)',
    transition: 'transform 0.5s ease-in-out 0.5s',
  },
};

const MarkerDetailReading = ({ timestamp, force, dir }: MarkerReadingData) => {
  const img = useRef() as MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    img.current.style.transform = `rotate(${dir}deg)`;
  }, [dir]);

  const date = new Date(timestamp).toLocaleDateString();
  const alt = `Direction ${dir} degree`;

  return (
    <Box component="li" sx={css.container}>
      <Box component="span" sx={css.grow}>
        <Typography variant="caption" sx={css.grow}>
          {date}
        </Typography>
        <Typography variant="body2">{force} kn</Typography>
      </Box>
      <Box
        ref={img}
        component="img"
        sx={css.img}
        width={25}
        height={40}
        alt={alt}
        src="/navigation_FILL1_wght700_GRAD0_opsz48.png"
      />
    </Box>
  );
};

export default MarkerDetailReading;

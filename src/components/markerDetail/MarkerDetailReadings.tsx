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

interface ItemProps {
  timestamp: { current: Date; previous?: Date };
  force: { current: number; previous?: number };
  dir: { current: number; previous?: number };
}

const Item = ({ timestamp, force, dir }: ItemProps) => {
  const img = useRef() as MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    img.current.style.transform = `rotate(${dir.current}deg)`;
  }, [dir.current]);

  const date = new Date(timestamp.current).toLocaleDateString();
  const alt = `Direction ${dir.current} degree`;

  return (
    <Box sx={{ ...css.container }} component="li">
      <Box sx={{ ...css.grow }} component="span">
        <Typography sx={{ ...css.grow }} variant="caption">
          {date}
        </Typography>
        <Typography variant="body2">{force.current} kn</Typography>
      </Box>

      <Box
        ref={img}
        sx={{ ...css.img }}
        style={{ transform: `rotate(${dir.previous || 0}deg)` }}
        component="img"
        src="/navigation_FILL1_wght700_GRAD0_opsz48.png"
        alt={alt}
        width={25}
        height={35}
      />
    </Box>
  );
};

interface Props {
  markerId: number;
  currentList: MarkerReadingData[];
  previousList: MarkerReadingData[];
}

const MarkerDetailReadings = ({ markerId, currentList, previousList }: Props) => {
  const readingsMerged = currentList.map((obj: MarkerReadingData, i: number) => {
    return {
      id: markerId + obj.timestamp.toString(),
      timestamp: { current: obj.timestamp, previous: previousList[i]?.timestamp || 0 },
      force: { current: obj.force, previous: previousList[i]?.force || 0 },
      dir: { current: obj.dir, previous: previousList[i]?.dir || 0 },
    };
  });

  return (
    <>
      {readingsMerged.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </>
  );
};

export default MarkerDetailReadings;

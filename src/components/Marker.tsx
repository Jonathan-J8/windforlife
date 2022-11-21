import { useState } from 'react';
import { Place } from '@mui/icons-material';
import MarkerDetail from './MarkerDetail';
import style from './style.module.css';

type MarkerProps = {
  x?: number;
  y?: number;
};

const Marker = ({ x = 50, y = 50 }: MarkerProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <span onClick={onOpen} className={style.marker} style={{ translate: `${x}% ${y}%` }}>
        <Place />
      </span>
      <MarkerDetail open={open} onClose={onClose} />
    </>
  );
};

export default Marker;

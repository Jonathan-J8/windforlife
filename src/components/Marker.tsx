import { useState } from 'react';
import { Place } from '@mui/icons-material';
import MarkerDetail from './MarkerDetail';
import { Marker as MarkerLeafet, Popup } from 'react-leaflet';

import style from './style.module.css';
import useFetch from '../utils/useFetch';
import { anemometerById } from '../api';

type MarkerProps = {
  lat: number;
  long: number;
  label: string;
  id: number;
};

const Marker = ({ id, label, lat, long }: MarkerProps) => {
  const [open, setOpen] = useState(false);

  const res = useFetch(anemometerById(id));

  const onOpen = () => setOpen(true);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <MarkerLeafet position={[lat, long]}>
      <Popup>{label}</Popup>
    </MarkerLeafet>
    // <span onClick={onOpen} className={style.marker} style={{ translate: `${x}% ${y}%` }}>
    //   <Place />
    // </span>
    // <MarkerDetail open={open} onClose={onClose} />
    // </>
  );
};

export default Marker;

import { useState } from 'react';
import { Place } from '@mui/icons-material';
import MarkerDetail from './MarkerDetail';
import { Marker as MarkerLeafet, Popup } from 'react-leaflet';

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
    <MarkerLeafet position={[21.663522, -158.052865]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </MarkerLeafet>
    // <span onClick={onOpen} className={style.marker} style={{ translate: `${x}% ${y}%` }}>
    //   <Place />
    // </span>
    // <MarkerDetail open={open} onClose={onClose} />
    // </>
  );
};

export default Marker;

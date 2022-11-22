import { useState } from 'react';
import { Navigation, Place } from '@mui/icons-material';
import MarkerDetail from './MarkerDetail';
import { Marker as MarkerLeafet, Popup } from 'react-leaflet';

import style from './style.module.css';
import useFetch from '../utils/useFetch';
import { anemometerById } from '../api';
import { DivIcon, Icon } from 'leaflet';

type MarkerProps = {
  lat: number;
  long: number;
  label: string;
  id: number;
};

// d: "M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
// icon={{ imagePath: '/navigation_FILL1_wght700_GRAD0_opsz48' }}

const Marker = ({ id, label, lat, long }: MarkerProps) => {

  const icon = new DivIcon(html:<div></div>)

  Icon.
  return (
    <MarkerLeafet
      position={[lat, long]}
      
      eventHandlers={{
        click: () => {
          console.log('marker clicked');
        },
      }}>
      <Popup>{label}</Popup>
      <Navigation />
    </MarkerLeafet>
  );
};

export default Marker;

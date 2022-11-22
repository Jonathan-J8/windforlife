import { Navigation, Place } from '@mui/icons-material';
import { Marker as MarkerLeafet, Popup } from 'react-leaflet';

import useFetch from '../utils/useFetch';
import { anemometerById } from '../anemometer/api';
import { useAnemometerAction } from '../anemometer/store';

type MarkerProps = {
  lat: number;
  long: number;
  label: string;
  id: number;
};

// d: "M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
// icon={{ imagePath: '/navigation_FILL1_wght700_GRAD0_opsz48' }}

const Marker = ({ id, label, lat, long }: MarkerProps) => {
  const dispatch = useAnemometerAction();

  const res = useFetch(anemometerById(id));

  console.log('anemo', id);

  return (
    <>
      {/* <div ref={icon}>
        <img src="/navigation_FILL1_wght700_GRAD0_opsz48.png" />
      </div> */}
      <MarkerLeafet
        position={[lat, long]}
        // icon={new DivIcon({ iconUrl: '/navigation_FILL1_wght700_GRAD0_opsz48.png', html: icon.current })}
        eventHandlers={{
          click: () => {
            console.log('marker clicked');
            // add(res.data);
            dispatch({ type: 'add', payload: res.data });
          },
        }}>
        <Popup>{label}</Popup>
        <Navigation />
      </MarkerLeafet>
    </>
  );
};

export default Marker;

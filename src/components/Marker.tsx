import { Marker as MarkerLeafet, Popup, useMap } from 'react-leaflet';

import useFetch from '../utils/useFetch';
import { anemometerById } from '../anemometer/api';
import { useAnemometerAction, AnemometerAction } from '../anemometer/store';

type MarkerProps = {
  lat: number;
  long: number;
  label: string;
  id: number;
};

// d: "M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
// icon={{ imagePath: '/navigation_FILL1_wght700_GRAD0_opsz48' }}

const Marker = ({ id, label, lat, long }: MarkerProps) => {
  const map = useMap();

  const dispatch = useAnemometerAction();
  const res = useFetch(anemometerById(id));

  console.log(map);

  const onClick = () => {
    map.setView([lat, long]);
    if (res.state === 'fullfilled' && res.type === 'object') {
      const anemometer = res.data as AnemometerDetail;
      dispatch({ type: AnemometerAction.ADD, payload: { show: true, anemometer } });
    }
  };

  return (
    <>
      {/* <div ref={icon}>
        <img src="/navigation_FILL1_wght700_GRAD0_opsz48.png" />
      </div> */}
      <MarkerLeafet
        position={[lat, long]}
        // icon={new DivIcon({ iconUrl: '/navigation_FILL1_wght700_GRAD0_opsz48.png', html: icon.current })}
        eventHandlers={{
          click: onClick,
        }}>
        {/* <Popup>{label}</Popup> */}
      </MarkerLeafet>
    </>
  );
};

export default Marker;

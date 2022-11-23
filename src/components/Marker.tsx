import { Marker as MarkerLeafet, Popup, useMap } from 'react-leaflet';

import useFetch from '../utils/useFetch';
import { marker as endpoint } from '../stores/apiEndpoints';
import { useMarkerAction, MarkerAction } from '../stores/markerContext';

type MarkerProps = {
  lat: number;
  long: number;
  label: string;
  id: number;
};

// d: "M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
// icon={{ imagePath: '/navigation_FILL1_wght700_GRAD0_opsz48' }}

const Marker = ({ id, name, loc }: MarkerData) => {
  const map = useMap();

  const dispatch = useMarkerAction();
  const marker = useFetch(endpoint.getById(id));

  const onClick = () => {
    map.setView([loc.lat, loc.long]);
    if (marker.state === 'fullfilled' && marker.type === 'object') {
      const anemometer = marker.data as MarkerDetailData;
      dispatch({ type: MarkerAction.ADD, payload: { show: true, anemometer } });
    }
  };

  return (
    <>
      {/* <div ref={icon}>
        <img src="/navigation_FILL1_wght700_GRAD0_opsz48.png" />
      </div> */}
      <MarkerLeafet
        position={[loc.lat, loc.long]}
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

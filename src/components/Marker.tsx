import { Marker as MarkerLeafet, useMap } from 'react-leaflet';

import useFetch from '../utils/useFetch';
import { marker, useMarkerAction } from '../stores/marker';

// d: "M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
// icon={{ imagePath: '/navigation_FILL1_wght700_GRAD0_opsz48' }}

const Marker = ({ id, name, loc }: MarkerData) => {
  const map = useMap();

  const dispatch = useMarkerAction();
  const { data, type, state } = useFetch(marker.endpoints.getById(id));

  const onClick = () => {
    map.setView([loc.lat, loc.long]);
    if (state === 'fullfilled' && type === 'object') {
      const current = data as MarkerDetailData;
      dispatch({ type: marker.actions.ADD, payload: { show: true, current } });
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

import { Marker as MarkerLeafet, Popup, useMap } from 'react-leaflet';

import useFetch from '../utils/useFetch';
import { marker, useMarkerAction } from '../stores/marker';
import { DivIcon } from 'leaflet';

// d: "M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"

const createIcon = (dir: number) =>
  new DivIcon({
    html: `<div class="react-leaflet-div-icon" style="--rotate:${dir}deg" >
              <img src="/navigation_FILL1_wght700_GRAD0_opsz48.png" />
           </div>`,
  });

const Marker = ({ id, name, loc }: MarkerData) => {
  const map = useMap();

  const dispatch = useMarkerAction();
  const { data, type, state } = useFetch(marker.endpoints.getById(id));

  const onClick = () => {
    map.flyTo([loc.lat, loc.long]);
    if (state === 'fullfilled' && type === 'object') {
      const current = data as MarkerDetailData;
      dispatch({ type: marker.actions.ADD, payload: { show: true, current } });
    }
  };

  const getLastDir = ({ readings }: MarkerDetailData) => {
    const last = readings.length - 1;
    const lastDir = readings[last].dir;
    return lastDir;
  };

  const lastDir = state === 'fullfilled' && type === 'object' ? getLastDir(data as MarkerDetailData) : 20;

  return (
    <>
      <MarkerLeafet
        position={[loc.lat, loc.long]}
        riseOnHover={true}
        icon={createIcon(lastDir)}
        eventHandlers={{ click: onClick }}>
        <Popup>{name}</Popup>
      </MarkerLeafet>
    </>
  );
};

export default Marker;

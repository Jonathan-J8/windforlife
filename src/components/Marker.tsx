import { useMemo } from 'react';
import { DivIcon as DivIconLeaflet } from 'leaflet';
import { Marker as MarkerLeaflet, Popup as PopupLeaflet, useMap } from 'react-leaflet';

import useFetch from '../utils/useFetch';
import { marker, useMarkerAction } from '../stores/marker';
import isMobile from '../utils/isMobile';

const createIcon = (dir: number) => {
  return new DivIconLeaflet({
    html: `<div class="react-leaflet-div-icon" style="--rotate:${dir}deg" >
              <img src="/navigation_FILL1_wght700_GRAD0_opsz48.png" alt="." />
           </div>`,
  });
};

const Marker = ({ id, name, loc }: MarkerData) => {
  const map = useMap();
  const dispatch = useMarkerAction();
  const { data, state } = useFetch<MarkerDetailData>(marker.endpoints.getById(id), marker.utils.getDefaultData());

  const lastDir = state === 'fullfilled' ? marker.utils.getLastDirection(data.readings) : 0;
  const icon = useMemo(() => createIcon(lastDir), [lastDir]);

  const onOpen = () => {
    if (isMobile()) {
      // need to transpose Map latitude (y axis)
      // to feet the Marker above MarkerDetail
      // todo : get exact transposition
      const zMax = map.getMaxZoom();
      const z = map.getZoom();
      const range = 1 - z / zMax;
      const bounds = map.getBounds();
      const middleY = (bounds.getNorth() - bounds.getSouth()) / 2;
      map.flyTo([loc.lat - middleY * range, loc.long]);
    } else map.flyTo([loc.lat, loc.long]);

    if (state !== 'fullfilled') return;
    const current = data as MarkerDetailData;
    dispatch({ type: marker.actions.ADD, payload: { show: true, current } });
  };

  const onClose = () => {
    if (!isMobile()) return;
    const coord = map.getCenter();
    const zMax = map.getMaxZoom();
    const z = map.getZoom();
    const range = 1 - z / zMax;
    const bounds = map.getBounds();
    const middleY = (bounds.getNorth() - bounds.getSouth()) / 2;
    map.flyTo([coord.lat + middleY * range, coord.lng]);
    dispatch({ type: marker.actions.HIDE });
  };

  return (
    <MarkerLeaflet
      title={`click to see details`}
      aria-label={`${name}, click to see details`}
      eventHandlers={{ click: onOpen, popupclose: onClose }}
      icon={icon}
      position={[loc.lat, loc.long]}
      riseOnHover={true}>
      <PopupLeaflet>{name}</PopupLeaflet>
    </MarkerLeaflet>
  );
};

export default Marker;

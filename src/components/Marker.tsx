import { useMemo } from 'react';
import { DivIcon as DivIconLeaflet, type Map as MapLeaflet } from 'leaflet';
import { Marker as MarkerLeaflet, Popup as PopupLeaflet, useMap } from 'react-leaflet';

import useFetch from '../utils/useFetch';
import isMobile from '../utils/isMobile';
import { marker, useMarkerAction } from '../stores/marker';

const createIcon = (dir: number) => {
  return new DivIconLeaflet({
    html: `<div class="react-leaflet-div-icon" style="--rotate:${dir}deg" >
              <img width="40" height="40" src="/navigation_FILL1_wght400_GRAD0_opsz40.png" alt="." />
           </div>`,
  });
};

const transposeCenter = (map: MapLeaflet) => {
  // need to transpose Map latitude (y axis)
  // to feet the Marker above MarkerDetail
  // todo : get exact transposition

  const zMax = map.getMaxZoom();
  const z = map.getZoom();
  const zRange = 1 - z / zMax;

  const bounds = map.getBounds();
  const mapMiddleY = (bounds.getNorth() - bounds.getSouth()) / 2;

  return zRange + mapMiddleY / 2;
};

const Marker = ({ id, name, loc }: MarkerData) => {
  const map = useMap();
  const dispatch = useMarkerAction();
  const { data, state } = useFetch<MarkerDetailData>(marker.endpoints.getById(id), marker.utils.getDefaultData());

  const lastDir = state === 'fullfilled' ? marker.utils.getReadingsLastDirectionByDate(data.readings) : 0;
  const icon = useMemo(() => createIcon(lastDir), [lastDir]);

  const onOpen = () => {
    if (isMobile()) {
      const trans = transposeCenter(map);
      map.flyTo([loc.lat - trans, loc.long]);
    } else map.flyTo([loc.lat, loc.long]);

    if (state !== 'fullfilled') return;
    const current = data as MarkerDetailData;
    current.readings = marker.utils.sortReadingsByDate(current.readings);
    dispatch({ type: marker.actions.ADD, payload: { show: true, current } });
  };

  const onClose = () => {
    if (!isMobile()) return;
    const coord = map.getCenter();
    const trans = transposeCenter(map);
    map.flyTo([coord.lat + trans, coord.lng]);
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

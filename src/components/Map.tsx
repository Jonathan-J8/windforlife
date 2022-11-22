import type { PropsWithChildren } from 'react';
import type { LeafletMouseEvent, Map as LeafletMap } from 'leaflet';
import { MapContainer, TileLayer, type MapContainerProps } from 'react-leaflet';

import useRefWithCallback from '../utils/useRefWithCallback';

interface MapProps extends MapContainerProps, PropsWithChildren {}

const MapCustom = ({ center, zoom, children }: MapProps) => {
  const setRef = useRefWithCallback((map: LeafletMap | undefined) => {
    const onMove = (e: LeafletMouseEvent) => {
      const map = e.target;
      console.log(map.getCenter());
    };

    if (map) map.on('click', onMove);

    return () => {
      if (map) map.off('click', onMove);
      map = undefined;
    };
  });

  return (
    <MapContainer ref={setRef} center={center} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
      {/* <Marker position={[21.663522, -158.052865]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          
        </Marker> */}
    </MapContainer>
  );
};

export default MapCustom;

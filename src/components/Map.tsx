import { memo, type PropsWithChildren } from 'react';
import type { LeafletMouseEvent, Map as LeafletMap } from 'leaflet';
import { MapContainer, TileLayer, type MapContainerProps } from 'react-leaflet';

import useRefWithCallback from '../utils/useRefWithCallback';

interface MapProps extends MapContainerProps, PropsWithChildren {}

const Map = memo(
  ({
    children,
    center = [21.022982546427425, -158.15368652343753],
    zoom = 7,
    scrollWheelZoom = true,
    ...rest
  }: MapProps) => {
    const setRef = useRefWithCallback((map: LeafletMap | undefined) => {
      const onMove = (e: LeafletMouseEvent) => {
        const map = e.target;
        console.log(map.getCenter());
      };

      if (map) map.on('click', onMove);

      return () => {
        if (map) map.off('click', onMove);
      };
    });
    console.log('> rednerder');

    return (
      <MapContainer ref={setRef} {...rest} center={center} zoom={zoom} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    );
  }
);

export default Map;

import { memo, type PropsWithChildren } from 'react';
import { MapContainer, TileLayer, type MapContainerProps } from 'react-leaflet';
import type { LeafletMouseEvent, Map as LeafletMap } from 'leaflet';
import useRefWithCallback from '../utils/useRefWithCallback';

interface MapProps extends MapContainerProps, PropsWithChildren {}

const Map = ({
  children,
  center = [20.511303413289298, -156.70894456095994],
  zoom = 7,
  scrollWheelZoom = true,
  zoomControl = false,
  ...rest
}: MapProps) => {
  const setRef = useRefWithCallback((map: LeafletMap | undefined) => {
    const onCLick = (e: LeafletMouseEvent) => {
      const map = e.target;
      console.log(map.getCenter());
    };
    if (map) map.on('click', onCLick);
    return () => {
      if (map) map.off('click', onCLick);
    };
  });
  return (
    <MapContainer
      ref={setRef}
      center={center}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      zoomControl={zoomControl}
      {...rest}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};
export default memo(Map);

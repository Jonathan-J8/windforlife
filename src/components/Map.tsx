import { memo, type PropsWithChildren } from 'react';
import { MapContainer, TileLayer, type MapContainerProps } from 'react-leaflet';

interface MapProps extends MapContainerProps, PropsWithChildren {}

const Map = memo(
  ({
    children,
    center = [21.022982546427425, -158.15368652343753],
    zoom = 7,
    scrollWheelZoom = true,
    ...rest
  }: MapProps) => {
    return (
      <MapContainer {...rest} center={center} zoom={zoom} scrollWheelZoom>
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

import useFetch from './utils/useFetch';
import { allAnemometer } from './anemometer/api';
import { AnemometerProvider } from './anemometer/store';

import Navbar from './components/Navbar';
import Map from './components/Map';
import Marker from './components/Marker';
import MarkerDetail from './components/MarkerDetail';

function App() {
  const markers = useFetch(allAnemometer());

  return (
    <>
      <Navbar />
      <main>
        <AnemometerProvider>
          <Map>
            {markers.data?.length > 0 &&
              markers.data.map(({ id, name, loc: { lat, long } }: Anemometer) => (
                <Marker key={id} id={id} label={name} lat={lat} long={long} />
              ))}
          </Map>
          <MarkerDetail />
        </AnemometerProvider>
      </main>
    </>
  );
}

export default App;

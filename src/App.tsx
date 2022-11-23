import useFetch from './utils/useFetch';
import { marker as endpoint } from './stores/apiEndpoints';
import { MarkerProvider } from './stores/markerContext';

import Navbar from './components/Navbar';
import Map from './components/Map';
import Marker from './components/Marker';
import MarkerDetail from './components/MarkerDetail';

function App() {
  const markers = useFetch(endpoint.getAll());

  return (
    <>
      <Navbar />
      <main>
        <MarkerProvider>
          <Map>
            {Array.isArray(markers.data) &&
              markers.data.map((marker: MarkerData) => <Marker key={marker.id} {...marker} />)}
          </Map>
          <MarkerDetail />
        </MarkerProvider>
      </main>
    </>
  );
}

export default App;

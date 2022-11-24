import { CssBaseline } from '@mui/material';

import useFetch from './utils/useFetch';
import { marker, MarkerProvider } from './stores/marker';

import Navbar from './components/Navbar';
import Map from './components/Map';
import Marker from './components/Marker';
import MarkerDetail from './components/MarkerDetail';

function App() {
  const { data } = useFetch(marker.endpoints.getAll());

  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <MarkerProvider>
          <Map>{Array.isArray(data) && data.map((marker: MarkerData) => <Marker key={marker.id} {...marker} />)}</Map>
          <MarkerDetail />
        </MarkerProvider>
      </main>
    </>
  );
}

export default App;

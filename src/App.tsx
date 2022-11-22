import Navbar from './components/Navbar';
import Map from './components/Map';
import Marker from './components/Marker';
import useFetch from './utils/useFetch';
import { allAnemometer } from './api';

function App() {
  const res = useFetch(allAnemometer());

  return (
    <>
      <Navbar />
      <main>
        <Map>
          {/* <Marker /> */}
          {res.data?.length > 0 &&
            res.data.map(({ id, name, loc: { lat, long } }) => (
              <Marker key={id} id={id} label={name} lat={lat} long={long} />
            ))}
        </Map>
      </main>
    </>
  );
}

export default App;

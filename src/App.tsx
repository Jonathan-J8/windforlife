import Navbar from './components/Navbar';
import Map from './components/Map';
import Marker from './components/Marker';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Map>
          <Marker />
        </Map>
      </main>
    </>
  );
}

export default App;

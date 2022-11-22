import Navbar from './components/Navbar';
import Map from './components/Map';
import Marker from './components/Marker';
import style from './components/style.module.css';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [mount, setMount] = useState(false);
  return (
    <>
      {/* <Navbar /> */}
      <main>
        {/* LatLng {lat: 21.022982546427425, lng: -158.15368652343753} 7 */}
        {mount && <Map center={[21.022982546427425, -158.15368652343753]} zoom={7}></Map>}
        <Button style={{ zIndex: 10000, position: 'absolute', bottom: 0 }} onClick={() => setMount((mount) => !mount)}>
          Mount {mount}
        </Button>
      </main>
    </>
  );
}

export default App;

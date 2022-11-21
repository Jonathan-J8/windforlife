import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Card, CardContent } from '@mui/material';
import { Forward } from '@mui/icons-material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card>
        <CardContent>
          <a href="https://vitejs.dev" target="_blank">
            <Forward />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </CardContent>
      </Card>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;

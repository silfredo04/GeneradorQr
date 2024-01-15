import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Qrgenerador from './componente/Qrgenerador';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Generador QR</h1>
      <Qrgenerador />
    </>
  );
}

export default App;

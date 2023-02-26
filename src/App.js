import './App.css';
import Markdown from './Components/Markdown';
import Result from './Components/Result';
import { useState } from 'react';

function App() {
  const [MDinput, setMDinput] = useState("# Markdown Preview")
  return (
    <div className="App">
      <div className='markdown'>
        <Markdown MDinput={MDinput} setMDinput={setMDinput} />
        <Result MDinput={MDinput} setMDinput={setMDinput} />
      </div>
    </div>
  );
}

export default App;
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(0);
  return (
    <div className="App">
    {name}
{/* <button onClick={() => setName('Male')}>Male</button> */}
<button onClick={() => setName(name + 1)}>Counter</button>
    </div>
  );
}

export default App;

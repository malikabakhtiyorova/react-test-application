import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [name, setName] = useState(0);

  useEffect(() =>{
    document.title = `you clicked ${name} times`;
  })
  return (
    <div className="App">
    {name}
{/* <button onClick={() => setName('Male')}>Male</button> */}
<button onClick={() => setName(name + 1)}>Counter</button>
    </div>
  );
}

export default App;

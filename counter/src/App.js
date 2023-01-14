import {useState} from "react";
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);
 
  return (
    <div className="App">
      <header className="App-header">
          <h2>Counter</h2>   
          <span>{counter}</span>
          <button onClick={()=>{setCounter(counter-1) 
          }} disabled={counter === 0}>Decreament Counter</button>
          <button onClick={()=>{setCounter(counter+1)}} >Increament Counter</button>
      </header>
    </div>
  );
}

export default App;

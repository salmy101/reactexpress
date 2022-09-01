import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  const [data, setData] = useState({})

  useEffect(() => { //fetches the api route in backend, 
    fetch("/api/data", {
      // headers : { 
      //   'Content-Type': 'application/json'
      //   // 'Accept': 'application/json'
      //  }
    })
    .then(res => res.json())
    .then(data => setData(data))
  }, [])  
  return (
    <div className="App">
      <h1>{data.name}</h1>
      <p>{data.age}</p>
      <p>{data.food}</p>

    </div>
  );
}

export default App;

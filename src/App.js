import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';


function App() {
  const [title,setTitle]=useState("")
  const [data,setData]=useState([])
  useEffect(()=>{
    if (title.length === 2) {
    let handle = setTimeout(()=>{
      fetch("")
      .then(stream=>stream.json())
      .then(results=>setData(results.data))
    },1000)
    return()=>{
      clearTimeout(handle)
    }
    }
  },[title])
  let confirmed = ""
  let name = ""
  if (data !== undefined) {
    confirmed = data.latest_data.confirmed
    name = data.name
  }
  return (
    <div className="App">
      <input 
      type='text'
      value={title}
      onChange={(evt)=>setTimeout(evt.target.value)}
      />
    </div>
  );
}

export default App;

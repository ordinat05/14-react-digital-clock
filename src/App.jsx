import React, { useState } from 'react'
import './App.css'
import 'animate.css';

function App() {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  function Time() {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(Time, 4000);

  return (
    <div className="App">
      <div className="container">
        <div className="alttakal">

          <h1 className="animate__animated animate__zoomInUp">An animated element</h1>
        </div>
        <div className="alttakal">

          <h1 className="animate__animated animate__zoomInUp">{currentTime}</h1>

        </div>
        <div className="alttakal">

          <h1>Saat Geliyor.</h1>
        </div>
      </div>
    </div>
  )
}

export default App;

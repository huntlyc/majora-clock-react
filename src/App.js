import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const minuteToDeg = (min) => min*6;
  const hourToDeg = (hour) => {
    if(hour > 12){
      hour -= 12;
    }
    return hour*30;
  }

  const hourDeg = hourToDeg(timestamp.getHours());
  const minDeg = minuteToDeg(timestamp.getMinutes());

  const hourStyle = {
    transform: `rotate(${hourDeg}deg)`
  };

  const minStyle = {
    transform: `rotate(${minDeg}deg)`
  };

  return (
    <div className="App">
      <img style={minStyle} className="back" src={process.env.PUBLIC_URL + '/clock-back.png'} alt=""/>
      <img style={hourStyle} className="middle" src={process.env.PUBLIC_URL + '/clock-middle.png'} alt=""/>
      <img className="marker" src={process.env.PUBLIC_URL + '/marker.png'} alt=""/>
    </div>
  );
}

export default App;

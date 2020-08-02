import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [timestamp, setTimestamp] = useState(new Date());
  const [dayOrNight, setDayOrNight] = useState();
  const [isShowingDebugClock, setDebugClock] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date());
    }, 200);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
      if(timestamp.getHours() > 18){
        setDayOrNight('night');
      }else{
        setDayOrNight('day');
      }

  }, [timestamp])


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

  const showDebugClock = () => {
    setDebugClock(true);
    setTimeout(() => { setDebugClock(false) }, 2000);
  }

  return (
    <div onClick={showDebugClock} className="App">
      <img style={minStyle} className="back" src={process.env.PUBLIC_URL + '/clock-back.png'} alt=""/>
      <img style={hourStyle} className="middle" src={process.env.PUBLIC_URL + `/clock-middle-${dayOrNight}.png`} alt=""/>
      <img className="marker" src={process.env.PUBLIC_URL + '/marker.png'} alt=""/>
      {isShowingDebugClock &&
        <time>{timestamp.toLocaleTimeString()}</time>
      }
    </div>
  );
}

export default App;

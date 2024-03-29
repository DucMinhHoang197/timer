import React, { useRef, useState } from "react";
import "./App.css";
const App = () => {
  const [timer, setTimer] = useState(0);
  const countRef = useRef(null);
  const FormatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  const handelStart = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setTimer(0);
  };

  return (
    <div className="container">
      <h3>React watch</h3>
      <div className="watch">
        <p>{FormatTime(timer)}</p>
      </div>
      <div className="button">
        <button onClick={handelStart}>Start</button>
        <button onClick={handlePause}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default App;

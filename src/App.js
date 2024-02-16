import React, { useRef, useState } from "react";
import "./App.css";
const App = () => {
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(false);
  // const [pause, setPause] = useState(false);
  const countRef = useRef(null);
  const FormatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  // setInterval(func,time)
  // 1000ms=1 second
  const handelStart = () => {
    setActive(true);

    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    setActive(false);
    clearInterval(countRef.current);
  };

  const handleReset = () => {
    setActive(false);
    // setPause(false);
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

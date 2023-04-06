import ResetArrow from '/src/assets/arrow-repeat.svg';
import PlayArrow from '/src/assets/play-circle-fill.svg';
import PauseArrow from '/src/assets/pause-fill.svg';
import { useRef, useState } from 'react';
import SessionLength from '../sessionLength';
import BreakLength from '../breakLength';

export default function Timer() {
    const [time, setTime] = useState(25 * 60)
    const [isRunning, setIsRunning] = useState(false);

    const breakLengthRef = useRef(5);
    const sessionLengthRef = useRef(25);
    const timeLeftRef = useRef(null);


    const handleReset = () => {
        setTime(25 * 60);
        setIsRunning(false);
        breakLengthRef.current = 5;
        sessionLengthRef.current = 25;
        timeLeftRef.current = 25 * 60;
    }

    const handleBreakDecrement = () => {
        if (breakLengthRef.current > 1) {
          breakLengthRef.current--;
        }
      };
    
      const handleBreakIncrement = () => {
        if (breakLengthRef.current < 60) {
          breakLengthRef.current++;
        }
      };
    
      const handleSessionDecrement = () => {
        if (sessionLengthRef.current > 1) {
          sessionLengthRef.current--;
          setTime(sessionLengthRef.current * 60);
        }
      };
    
      const handleSessionIncrement = () => {
        if (sessionLengthRef.current < 60) {
          sessionLengthRef.current++;
          setTime(sessionLengthRef.current * 60);
        }
      };

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${pad(minutes)}:${pad(seconds)}`;
    }

    function pad(num) {
        return num.toString().padStart(2, '0');
    }

    return (
        <div className="timer">
            <div className="timer-wrapper">
                <div id="timer-label">Session</div>
                <div id="time-left">{formatTime(time)}</div>
            </div>
            <SessionLength
                length={sessionLengthRef.current}
                onDecrement={handleSessionDecrement}
                onIncrement={handleSessionIncrement}
            />
            <BreakLength
                length={breakLengthRef.current}
                onDecrement={handleBreakDecrement}
                onIncrement={handleBreakIncrement}
            />
            <TimerControl 
            setTime={setTime}
            handleReset={handleReset} 
            handleBreakDecrement={handleBreakDecrement}
            handleBreakIncrement={handleBreakIncrement}
            handleSessionDecrement={handleSessionDecrement}
            handleSessionIncrement={handleSessionIncrement}
            />
        </div>
    )
}

function TimerControl({ handleReset }) {
    
    return (
        <div className="timer-control">
            <button className="btn btn-info" id="start_stop">
                <img src={PlayArrow} alt="play" />
                <img src={PauseArrow} alt="pause" />
                </button>
            <button 
            className="btn btn-info" 
            id="reset"
            onClick={handleReset}
            >
                <img src={ResetArrow} alt="reset" />
            </button>
        </div>
    )
}
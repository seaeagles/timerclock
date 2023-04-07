import ResetArrow from '/src/assets/arrow-repeat.svg';
import PlayArrow from '/src/assets/play-circle-fill.svg';
import PauseArrow from '/src/assets/pause-fill.svg';
import { useRef, useState, useEffect } from 'react';
import SessionLength from '../sessionLength';
import BreakLength from '../breakLength';

export default function Timer() {
    const [time, setTime] = useState(25 * 60)
    const [breakLength, setBreakLength] = useState(5);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState('session');
    const [timeLeft, setTimeLeft] = useState(time * 60);

    const breakLengthRef = useRef(breakLength);
    const sessionLengthRef = useRef(25);
    const timeLeftRef = useRef(timeLeft);

    useEffect(() => {
        breakLengthRef.current = breakLength;
        console.log('Break length changed:', breakLengthRef.current)
      }, [breakLength]);
    
      useEffect(() => {
        sessionLengthRef.current = time / 60;
        setTimeLeft(sessionLengthRef.current * 60);
        timeLeftRef.current = sessionLengthRef.current * 60;
        console.log('Session length changed:', sessionLengthRef.current)
        console.log('Time left:', timeLeftRef.current)
      }, [time]);

    useEffect(() => {
        let timerID = null;

        if (isRunning && timeLeft > 0) {
            timerID = setInterval(() => {
                setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
            }, 1000);
        } else if (!isRunning && timeLeft !== 0) {
            clearInterval(timerID);
        } else if (timeLeft === 0) {
            setIsRunning(false);
            setMode((prevMode) => (prevMode === 'session' ? 'break' : 'session'));
            setTimeLeft((prevTimeLeft) =>
                prevMode === 'session' ? breakLengthRef.current * 60 : sessionLengthRef.current * 60
            );
            setTime((prevTime) =>
                prevMode === 'session' ? sessionLengthRef.current * 60 : breakLengthRef.current * 60
            );
        }
        return () => clearInterval(timerID);
    }, [isRunning, timeLeft, mode]);

    const handleReset = () => {
        setTime(25 * 60);
        setIsRunning(false);
        breakLengthRef.current = 5;
        sessionLengthRef.current = 25;
        timeLeftRef.current = sessionLengthRef.current * 60;
    }

    const handleBreakDecrement = () => {
        if (breakLengthRef.current > 1) {
          setBreakLength(breakLengthRef.current - 1);
          breakLengthRef.current = breakLengthRef.current -1;
        }
      };
    
      const handleBreakIncrement = () => {
        if (breakLengthRef.current < 60) {
          setBreakLength(breakLengthRef.current + 1);
          breakLengthRef.current = breakLengthRef.current + 1;
        }
      }
    
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
                sessionLengthRef={sessionLengthRef}
            />
            <BreakLength
                length={breakLengthRef.current}
                onDecrement={handleBreakDecrement}
                onIncrement={handleBreakIncrement}
                breakLengthRef={breakLengthRef}
            />
            <TimerControl 
            setTime={setTime}
            handleReset={handleReset} 
            handleBreakDecrement={handleBreakDecrement}
            handleBreakIncrement={handleBreakIncrement}
            handleSessionDecrement={handleSessionDecrement}
            handleSessionIncrement={handleSessionIncrement}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            timeLeftRef={timeLeftRef}
            sessionLengthRef={sessionLengthRef}
            />
        </div>
    )
}

function TimerControl({ isRunning, setIsRunning, handleReset, timeLeftRef, sessionLengthRef }) {
    const handleStartStop = () => {
        console.log('Handle start/stop called.');
    if (!isRunning) {
        // Start the timer
        setIsRunning(true);
        timeLeftRef.current = sessionLengthRef.current * 60;
        console.log('timeLeftRef has updated:', timeLeftRef.current)
      } else {
        // Stop the timer
        setIsRunning(false);
      }
    };
    
    return (
        <div className="timer-control">
            <button 
            onClick={handleStartStop}
            className="btn btn-info" 
            id="start_stop">
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
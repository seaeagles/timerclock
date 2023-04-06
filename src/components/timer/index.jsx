import ResetArrow from '/src/assets/arrow-repeat.svg';
import PlayArrow from '/src/assets/play-circle-fill.svg';

export default function Timer() {
    return (
        <div className="timer">
            <div className="timer-wrapper">
                <div id="timer-label">Session</div>
                <div id="time-left">25:00</div>
            </div>
            <TimerControl />
        </div>
    )
}

function TimerControl() {
    return (
        <div className="timer-control">
            <button className="btn btn-info" id="start_stop"><img src={PlayArrow} alt="play" /></button>
            <button className="btn btn-info" id="reset"><img src={ResetArrow} alt="reset" /></button>
        </div>
    )
}
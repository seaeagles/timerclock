import ArrowUp from '/src/assets/arrow-up.svg';
import ArrowDown from '/src/assets/arrow-down.svg';

export default function SessionLength() {
    return (
        <div>
            <div id="session-label">Session Length</div>
            
            <button className="btn btn-warning" id="break-decrement" value="-"><img src={ArrowDown} alt="arrow down" /></button>
            <div id="session-length">25</div>
            <button className="btn btn-warning" id="break-increment" value="+"><img src={ArrowUp} alt="arrow up" /></button>
        </div>
    )
}
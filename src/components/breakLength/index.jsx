import ArrowUp from '/src/assets/arrow-up.svg';
import ArrowDown from '/src/assets/arrow-down.svg';

export default function BreakLength() {
    return (
        <div>
            <div id="break-label">Break Length</div>
        
            <button className="btn btn-warning" id="break-decrement" value="-"><img src={ArrowDown} alt="arrow down" /></button>
            <div id="break-length">5</div>
            <button className="btn btn-warning" id="break-increment" value="+"><img src={ArrowUp} alt="arrow up" /></button>
        </div>
    )
}
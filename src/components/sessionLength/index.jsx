import ArrowUp from '/src/assets/arrow-up.svg';
import ArrowDown from '/src/assets/arrow-down.svg';
import Timer from '../timer';

export default function SessionLength(props) {
    return (
        <div>
            <div id="session-label">Session Length</div>
            
            <button 
            onClick={props.onDecrement}
            className="btn btn-warning" 
            id="session-decrement" 
            value="-"><img src={ArrowDown} alt="arrow down" />
            </button>

            <div id="session-length">{props.length}</div>

            <button 
            onClick={props.onIncrement}
            className="btn btn-warning" 
            id="session-increment" 
            value="+">
                <img src={ArrowUp} alt="arrow up" />
            </button>
        </div>
    )
}
import ArrowUp from '/src/assets/arrow-up.svg';
import ArrowDown from '/src/assets/arrow-down.svg';

export default function BreakLength(props) {
    return (
        <div>
            <div id="break-label">Break Length</div>
        
            <button 
                onClick={props.onDecrement}
                className="btn btn-warning" 
                id="break-decrement" value="-">
                 <img src={ArrowDown} alt="arrow down" 
                />
            </button>

            <div id="break-length">{props.breakLengthRef.current}</div>
            <button 
                onClick={props.onIncrement}
                className="btn btn-warning" 
                id="break-increment" 
                value="+">
                 <img src={ArrowUp} alt="arrow up" 
            />
            </button>
        </div>
    );
}
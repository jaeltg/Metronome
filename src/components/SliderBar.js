import {useState} from 'react';
import PlayButton from '../components/PlayButton';
import "./PlayButton.css"

const SlideBar = () => {

    const [value, setValue] = useState(100)
    
    const subtractOne = () => {
        setValue(value - 1);
    }
    const addOne = () => {
        setValue(value + 1);
    }

    const showValue = (event) => {
        setValue(event.target.valueAsNumber);    
    }

    return(
        <>
            <PlayButton value={value}/>
            <h4 className="BPM">{value} BPM</h4>
            <button className="plus-minus" value={value} onClick={subtractOne}>-</button>
            <input type="range" id="BPM" name="BPM" min="40" max="218" step="1" onChange={showValue} value={value}/>
            <button className="plus-minus" value={value} onClick={addOne}>+</button>
        </>

    )
}

export default SlideBar;
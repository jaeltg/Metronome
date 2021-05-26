import {useState} from 'react';

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
            <h4>{value}</h4>
            <button value={value} onClick={subtractOne}>-</button>
            <input type="range" id="BPM" name="BPM" min="40" max="218" step="1" onChange={showValue} value={value}/>
            <button value={value} onClick={addOne}>+</button>
        </>

    )
}

export default SlideBar;
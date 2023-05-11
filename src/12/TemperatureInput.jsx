import React, {useState} from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function TemperatureInput(props){
    // const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        // setTemperature(event.target.value);
        props.onTemperatureChange(event.target.value)
    };

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
            {/* <input value={temperature} onChange={handleChange} /> */}
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
}
export default TemperatureInput;
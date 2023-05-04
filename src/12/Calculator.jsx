import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

function Calculator(props){
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    function tryConvert(temperature, convert){
        const input = parseFloat(temperature);
    
        if(Number.isNaN(input)){
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    console.log(celsius, fahrenheit);
    return (
         // <fieldset>
        //     <legend>Enter temperature</legend>
        //     <input value={temperature} onChange={handleChange} />
        //     <BoilingVerdict celsius={parseFloat(temperature)} />
        // </fieldset>
        // <div>
        //     <TemperatureInput scale="c" />
        //     <TemperatureInput scale="f" />
        // </div>
        
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;
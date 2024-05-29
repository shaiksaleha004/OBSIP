function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitInput').value;
    let convertedTemperature;
    let result;

    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else {
        switch (unit) {
            case 'celsius':
                convertedTemperature = {
                    fahrenheit: (temperature * 9/5) + 32,
                    kelvin: temperature + 273.15
                };
                result = `${temperature}°C is equal to ${convertedTemperature.fahrenheit.toFixed(2)}°F and ${convertedTemperature.kelvin.toFixed(2)}K.`;
                break;
            case 'fahrenheit':
                convertedTemperature = {
                    celsius: (temperature - 32) * 5/9,
                    kelvin: ((temperature - 32) * 5/9) + 273.15
                };
                result = `${temperature}°F is equal to ${convertedTemperature.celsius.toFixed(2)}°C and ${convertedTemperature.kelvin.toFixed(2)}K.`;
                break;
            case 'kelvin':
                convertedTemperature = {
                    celsius: temperature - 273.15,
                    fahrenheit: (temperature - 273.15) * 9/5 + 32
                };
                result = `${temperature}K is equal to ${convertedTemperature.celsius.toFixed(2)}°C and ${convertedTemperature.fahrenheit.toFixed(2)}°F.`;
                break;
        }
    }

    document.getElementById('resultOutput').innerText = result;
}

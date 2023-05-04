export const calculateTemperature = (first, second, firstValue) => {
    let Kelvin = 'Kelvin';
    let Celsius = 'Celsius';
    let Fahrenheit = 'Fahrenheit';
    firstValue = Number(firstValue);

    if (first === second) return firstValue
    else if (first === Kelvin) {
        if (second === Celsius) {
            return firstValue - 273.15
        } else if (second === Fahrenheit)
            return ((firstValue - 273.15) * 9 / 5) + 32
    }
    else if (first === Fahrenheit) {
        if (second === Celsius) return (firstValue - 32) * 5 / 9
        else if (second === Kelvin) return ((firstValue - 32) * 5 / 9) + 273.15
    } else if (first === Celsius) {
        if (second === Kelvin) return (firstValue) + 273.15;
        else if (second === Fahrenheit) return (firstValue * 9 / 5) + 32
    }
}
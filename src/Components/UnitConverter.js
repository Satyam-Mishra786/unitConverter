import { useEffect, useState } from "react";
import { calculateTemperature } from "../Assests/utils";

function UnitConverter({ typeOfUnit, lengthUnits }) {
    // Stores the value of Input field
    const [fromLength, setFromLength] = useState(0);
    // Stores the result after calculation
    const [toLength, setToLength] = useState(0);

    // Store the type of units in both fields
    const [unitType, setUnitType] = useState({
        type1Unit: "",
        type2Unit: "",
    });

    // Manage the type of unit change like : 'Length', 'Temperature' etc
    useEffect(() => {
        setUnitType({
            type1Unit: lengthUnits[0].name,
            type2Unit: lengthUnits[0].name,
        })
    }, [lengthUnits])

    // Handle change of value of length field
    const handleChange = (event) => {
        setFromLength(event.target.value);
    };


    // Calculate the result every time value changes
    useEffect(() => {

        // The idea is simple Take length example
        // Store the value of input field in meter 
        let unit1inUnit = lengthUnits.find(
            (length) => length.name === unitType.type1Unit
        )?.inUnit;
        // Store the value of any unit in meter
        let unit2inUnit = lengthUnits.find(
            (length) => length.name === unitType.type2Unit
        )?.inUnit;

        // Return if either is undefined
        if (!unit1inUnit || !unit2inUnit) return;

        // Simple conversion of units
        // for e.g. Converting Kilometer -> meter
        // unit1inUnit -> 1000 & unit2inUnit -> 1
        // Therefore if input is 12 kilometer then 12 * (1000/1) = 12000 meters
        let res = fromLength * unit1inUnit / unit2inUnit;

        // Temperature conversion is bit different so it is handled separately 
        if (typeOfUnit === 'Temperature') {
            res = calculateTemperature(unitType.type1Unit, unitType.type2Unit, fromLength)
        }
        setToLength(res);
    }, [fromLength, unitType, lengthUnits, typeOfUnit]);

    // Reset the data when navigate to other conversion unit for e.g :(Length -> Temperature)
    useEffect(() => {
        setFromLength(0)
        setToLength(0)
        setUnitType({
            type1Unit: lengthUnits[0].name,
            type2Unit: lengthUnits[0].name,
        })
    }, [typeOfUnit, lengthUnits])


    // To handle the change of select menu i.e unit of measurement
    const handleSelectChange = (e) => {
        setUnitType({
            ...unitType,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="unit-converter-container">
            <div className="unit-converter">
                <div className="fromBox box">
                    <label htmlFor="inputLength">From :</label>
                    <input
                        className="fromInput"
                        id="inputLength"
                        type="number"
                        value={fromLength}
                        onChange={handleChange}
                    />
                    <select
                        id="unit1-list"
                        name="type1Unit"
                        value={unitType.type1Unit}
                        onChange={handleSelectChange}
                    >
                        {lengthUnits.map((length, index) => {
                            return (
                                <option className="option" key={index} value={length.name}>
                                    {length.name}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className="toBox box">
                    <label htmlFor="">To :</label>
                    <input className="toInput" disabled value={toLength} />
                    <select
                        id="unit2-list"
                        name="type2Unit"
                        value={unitType.type2Unit}
                        onChange={handleSelectChange}
                    >
                        {lengthUnits.map((length, index) => {
                            return (
                                <option className="option" key={index} value={length.name}>
                                    {length.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="resultContainer">
                <div className="result">
                    <span className="red">Result :- </span> {fromLength} {unitType.type1Unit}{" "}
                    = {toLength} {unitType.type2Unit}
                </div>
            </div>
        </div>
    );
}

export default UnitConverter;

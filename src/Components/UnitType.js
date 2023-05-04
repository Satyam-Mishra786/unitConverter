function UnitType({ typeOfUnit, setTypeOfUnit }) {
    const units = ['Length', 'Temperature', 'Area', 'Volume', 'Weigth', 'Time', 'Speed']
    const handleClick = (unit) => {
        setTypeOfUnit(unit)
    }
    return (
        <div className="unitContainer">
            <ul className="unitTypes">
                {units.map((unit) => {
                    return <li key={unit} onClick={() => handleClick(unit)} className={(typeOfUnit === unit) ? 'units activeUnit' : 'units'}> {unit} </li>
                })}
            </ul>
        </div >
    )
}

export default UnitType;
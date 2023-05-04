import { useEffect, useState } from "react";
import "./App.css";
import Navbar from './Components/Navbar'
import UnitConverter from './Components/UnitConverter'
import UnitType from "./Components/UnitType";
import Footer from "./Components/Footer";
import { lengthUnits, tempeartureUnits, areaUnits, volumeUnits, weightUnits, timeUnits, speedUnits } from "./Assests/data";

function App() {
  const [typeOfUnit, setTypeOfUnit] = useState('Length');
  const [data, setData] = useState(lengthUnits)

  useEffect(() => {
    if (typeOfUnit === 'Temperature') {
      setData(tempeartureUnits)
    } else if (typeOfUnit === 'Length') {
      setData(lengthUnits)
    } else if (typeOfUnit === 'Area') {
      setData(areaUnits)
    } else if (typeOfUnit === 'Volume') {
      setData(volumeUnits)
    } else if (typeOfUnit === 'Weigth') {
      setData(weightUnits)
    } else if (typeOfUnit === 'Time') {
      setData(timeUnits)
    } else if (typeOfUnit === 'Speed') {
      setData(speedUnits)
    }
  }, [typeOfUnit])
  return (
    <>
      <Navbar />
      <UnitType typeOfUnit={typeOfUnit} setTypeOfUnit={setTypeOfUnit} />
      <UnitConverter typeOfUnit={typeOfUnit} lengthUnits={data} />
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import TempApiCaller from "./components/tempApiCaller"
import PointsAdjuster from "./components/PointsAdjuster"
import DriverDisplayer from "./components/DriverDisplayer"
import { scoringData } from './dataTemplates/template'
import { totalPoints } from './helpers/totalPoints'

const App = () => {
  const [driverData, setDriverData] = useState('None');
  const [pointsSystem, setPointsSystem] = useState(scoringData);
  const [raceDetails, setRaceDetails] = useState('None')
  const [season, setSeason] = useState('2020');

  function updateScoringData(newPoints){
    setPointsSystem(newPoints)
  }

  function getNewDrivers(drivers) {
    setRaceDetails(drivers.races)
    const newDriverData = Object.values(drivers.drivers)
    console.log(newDriverData)
    setDriverData(newDriverData)
  }

  function handlePointsCalculation(){
    console.log(driverData)
    console.log(raceDetails)
    let newDriverData = totalPoints(pointsSystem, driverData, raceDetails)
    setDriverData(newDriverData)
  }

  return ( 
    <div style={{
      'display': 'flex',
      'justifyContent': 'space-evenly'
    }}>
      <div>
        <TempApiCaller 
        updateDrivers={getNewDrivers}/>
        <PointsAdjuster 
          driverAmount={driverData.length} 
          scoringData = {pointsSystem} 
          updateScoringData = {updateScoringData}
          />
        <button onClick={() => handlePointsCalculation()}>Calculate Points</button>
      </div>
      <div>
        <DriverDisplayer drivers={driverData}/>
      </div>
    </div>
   );
}
 
export default App;
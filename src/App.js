import { useEffect, useState } from "react";
import TempApiCaller from "./components/tempApiCaller"
import PointsAdjuster from "./components/PointsAdjuster"
import DriverDisplayer from "./components/DriverDisplayer"
import { scoringData } from './dataTemplates/template'
import { totalPoints } from './helpers/totalPoints'
import { getDefaultData } from './helpers/getDefaultData'

const App = () => {
  const [driverData, setDriverData] = useState('None');
  const [pointsSystem, setPointsSystem] = useState(scoringData);
  const [raceDetails, setRaceDetails] = useState('None')
  const [season, setSeason] = useState(2020);

  useEffect(() => {
    const newPointsSystem = getDefaultData(season)
    console.log(newPointsSystem)
    updateScoringData(newPointsSystem)
  },[])

  function updateScoringData(newPoints){
    setPointsSystem(newPoints)
  }

  function getNewDrivers(drivers) {
    setRaceDetails(drivers.races)
    const newDriverData = Object.values(drivers.drivers)
    setDriverData(newDriverData)
  }

  function handlePointsCalculation(){
    let newDriverData = totalPoints(pointsSystem, driverData, raceDetails)
    setDriverData(newDriverData)
  }

  function handleSeasonChange(season){
    let newSeason = parseInt(season)
    setSeason(newSeason)
  }

  return ( 
    <div style={{
      'display': 'flex',
      'justifyContent': 'space-evenly'
    }}>
      <div>
        <TempApiCaller 
        handleSeasonChange={handleSeasonChange}
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
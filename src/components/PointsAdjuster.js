import { useState } from 'react';
import StandardPointsSheet from './PointsAdjuster/StandardPointsSheet'

const PointsAdjuster = (props) => {
    const [pointsSystem, setPointsSystem] = useState(props.scoringData)

    function updateStandardPoints(points){
        let newPointsSystem = pointsSystem
        newPointsSystem.standardPoints = points
        setPointsSystem(newPointsSystem)
        props.updateScoringData(pointsSystem)
    }

    return ( 
        <div>
            <StandardPointsSheet 
            driverAmount={props.driverAmount}
            updateStandardPoints={updateStandardPoints} 
            standardPoints = {pointsSystem.standardPoints}></StandardPointsSheet>
        </div>
        
     );
}
 
export default PointsAdjuster;
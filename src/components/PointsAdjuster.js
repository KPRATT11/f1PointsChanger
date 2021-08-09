import { useEffect, useState } from 'react';
import StandardPointsSheet from './PointsAdjuster/StandardPointsSheet'
import DropPointsDisplayer from './PointsAdjuster/DropPointsDisplayer'
import ExtraPointsSheet from './PointsAdjuster/ExtraPointsSheet'

const PointsAdjuster = (props) => {
    const [pointsSystem, setPointsSystem] = useState(props.scoringData)
    const [showDropPoints, setShowDropPoints] = useState(props.scoringData.extraRules.dropScores)

    useEffect(() => {
        setPointsSystem(props.scoringData)
    },[props.scoringData])

    function updateStandardPoints(points){
        let newPointsSystem = pointsSystem
        newPointsSystem.standardPoints = points
        setPointsSystem(newPointsSystem)
        props.updateScoringData(pointsSystem)
    }

    function updateDropPoints(dropPoints, dropPointTotal){
        let newDropPoints = dropPoints
        let newPointsSystem = pointsSystem
        newPointsSystem.extraRules.dropScoresData = newDropPoints
        setPointsSystem(newPointsSystem)
        props.updateScoringData(newPointsSystem)
    }

    function updateExtraPoints(extraPoints){
        let newPointsSystem = pointsSystem
        newPointsSystem.extraPoints = extraPoints
        setPointsSystem(newPointsSystem)
        props.updateScoringData(newPointsSystem)
    }

    function toggleDropPoints(){
        props.updateDropPointsShowing(!showDropPoints)
        setShowDropPoints(!showDropPoints)
    }

    if (props.isLoading === true){
        return (
            <div style = {{
                height: '100%',
                position: 'inherit',
                display: 'flex',
                flex: '1',
                justifyContent: 'space-evenly'
            }}>
                Loading
            </div>
        )
    }
    else if (props.isLoading === false){
        return (
            <div style = {{
                height: '100%',
                position: 'inherit',
                display: 'flex',
                flex: '1',
                justifyContent: 'space-evenly'
            }}>
                <div className = "MainPoints"
                    style={{
                        height: '100%'
                    }}
                >
                    <StandardPointsSheet 
                        driverAmount={props.driverAmount}
                        updateStandardPoints={updateStandardPoints} 
                        standardPoints = {pointsSystem.standardPoints}>
                    </StandardPointsSheet>
                </div>
                <div className = "ExtraPointsContainer">
    
                    <div className = "ExtraPoints"
                        style = {{height: "50%"}}>
                        <ExtraPointsSheet
                            extraPoints = {pointsSystem.extraPoints}
                            updateExtraPoints = {updateExtraPoints}
                        /> 
                    </div>
    
                    <div className = "DropScores"
                        style = {{height: "50%"}}>
                        <button onClick={toggleDropPoints}>
                            Enable Drop Points
                        </button>
    
                        <DropPointsDisplayer
                            dropPointsEnabled = {showDropPoints} 
                            defualtDropPoints = {pointsSystem.extraRules.dropScoresData}
                            totalRaces = {props.raceAmount}
                            updateDropPoints = {updateDropPoints} >
                        </DropPointsDisplayer>
                    </div>
    
                </div>
            </div>
        )
    }

    
}
 
export default PointsAdjuster;
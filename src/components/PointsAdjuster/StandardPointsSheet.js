import { useEffect, useState } from 'react'
import PointsAdjusterEl from './PointsAdjustmentEl'

const StandardPointsSheet = (props) => {
    const [curPointsSys, setCurPointsSys] = useState(props.standardPoints)

    const updateCurPointsSys = (key, intendedValue) => {
        let newCurPointsSys = curPointsSys
        newCurPointsSys[key] = intendedValue
        setCurPointsSys(newCurPointsSys)
        console.log(curPointsSys)
        props.updateStandardPoints(curPointsSys)
    }

    let pointsElArrayEven = []
    let pointsElArrayOdd = []
    for (let index = 0; index < props.driverAmount; index++) {
        if (index % 2){
            pointsElArrayEven.push(<PointsAdjusterEl 
                key={index} 
                id={index}
                pos={String(index + 1)} 
                updatePoints={updateCurPointsSys} 
                displayPoints={curPointsSys[index]}></PointsAdjusterEl>)
        }
        else{
            pointsElArrayOdd.push(<PointsAdjusterEl 
                key={index} 
                id={index}
                pos={String(index + 1)} 
                updatePoints={updateCurPointsSys} 
                displayPoints={curPointsSys[index]}></PointsAdjusterEl>)
        }
    }

    useEffect(() => {
        
    })

    return ( 
        <div style={{
            "display" : "flex",
            "justifyContent" : "space-around"
        }}>
            <div>
                {pointsElArrayOdd}
            </div>
            <div>
                {pointsElArrayEven}
            </div>
            
        </div>
     );
}
 
export default StandardPointsSheet;
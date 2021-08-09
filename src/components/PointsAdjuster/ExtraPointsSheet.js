import { useState, useEffect } from 'react';

const ExtraPointsSheet = (props) => {
    const [extraPoints, setExtraPoints] = useState(props.extraPoints)

    useEffect(() => {
        setExtraPoints(props.extraPoints)
    },[props])

    const inputStyle = {
        width: "50px",
        height: "50px"
    }
    
    return ( 
        <div>
            <div style = {{display: "flex"}}>
                <p>
                    FastestLap
                </p>
                <input
                    style = {inputStyle}
                    type = "number"
                    value = {extraPoints.fastestLap}
                    onChange = {(e) => {
                        let newExtraPoints = 
                        {
                            ...extraPoints
                        }
                        newExtraPoints.fastestLap = e.target.value
                        console.log(newExtraPoints)
                        props.updateExtraPoints(newExtraPoints)
                        setExtraPoints(newExtraPoints)
                    }}
                ></input>
            </div>
            <div style = {{display: "flex"}}>
                <p>
                    Pole Position
                </p>
                <input
                    style = {inputStyle}
                    type = "number"
                    value = {extraPoints.qualyPoints}
                    onChange = {(e) => {
                        let newExtraPoints = 
                        {
                            ...extraPoints
                        }
                        newExtraPoints.qualyPoints = e.target.value
                        props.updateExtraPoints(newExtraPoints)
                        setExtraPoints(newExtraPoints)
                    }}
                ></input>
            </div>
            <div style = {{display: "flex"}}>
                <p>
                    DNF
                </p>
                <input
                    style = {inputStyle}
                    type = "number"
                    value = {extraPoints.dnf}
                    onChange = {(e) => {
                        let newExtraPoints = 
                        {
                            ...extraPoints
                        }
                        newExtraPoints.dnf = e.target.value
                        props.updateExtraPoints(newExtraPoints)
                        setExtraPoints(newExtraPoints) 
                    }}
                ></input>
            </div>
        </div>
     );
}
 
export default ExtraPointsSheet;
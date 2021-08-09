import { useEffect, useState } from "react";

const DropPointsEl = (props) => {
    const [dropScores, setDropScores] = useState([props.dropPoints[0], props.dropPoints[1]])

    useEffect(() => {
        setDropScores([props.dropPoints[0], props.dropPoints[1]])
    },[props.dropPoints])

    const inputStyle = {
        width: '30px',
        height: '30px'
    }

    const changeAmountKept = (e) => {
        if (e.target.value <= dropScores[1]){
            let newDropScores = dropScores
            newDropScores[0] = e.target.value
            setDropScores(newDropScores)
        }
        else{
            //Todo change to a popup warning
            console.log("Cant have amount of races to drop be lower than races dropped")
        }
        
    }

    const changeAmountToDropFrom = (e) => {
        if (e.target.value >= dropScores[0]){
            let newDropScores = dropScores
            newDropScores[1] = e.target.value
            setDropScores(newDropScores)
        }
        else{
            console.log("Cant have amount of races to drop be lower than races dropped")
        }
    }

    const updateDropScores = (val, index)=> {
        val = parseInt(val)
        if(index === 0){
            if(val <= dropScores[1] && val >= 0){
                setDropScores([val, dropScores[1]])
                props.updateDropPointsParent([val, dropScores[1]], props.id)
            }
        }
        else if(index === 1){
            if(val >= dropScores[0]  && val >= 0){
                setDropScores([dropScores[0], val])
                props.updateDropPointsParent([dropScores[0], val], props.id)
            }
            else if(val >= 0){
                setDropScores([dropScores[0] - 1, val])
                props.updateDropPointsParent([dropScores[0] - 1, val], props.id)
                
            }
        }
        
    }

    return ( 
        <div>
            <input 
                type="number"
                style = {inputStyle}
                value = {dropScores[0]}
                onChange = {(val) => {updateDropScores(val.target.value, 0)}}
            />

           
            <input
                type="number" 
                style = {inputStyle}
                value = {dropScores[1]}
                onChange = {(val) => {updateDropScores(val.target.value, 1)}}
            />
        </div>
     );
}
 
export default DropPointsEl;
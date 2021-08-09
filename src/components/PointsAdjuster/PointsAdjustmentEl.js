import { useEffect, useState } from 'react';
import { positionSuffix } from '../../helpers/positionPrefix'

const PointsAdjusterEl = (props) => {
    const [inputValue, setInputValue] = useState(props.displayPoints)
    const [labelValue, setLabelValue] = useState('NLV')

    useEffect(() => {
        if(props.displayPoints === undefined){
            setInputValue('0')
        }
        else{
            setInputValue(props.displayPoints)
        }
        
    },[props.displayPoints]) 

    useEffect(() => {
        if (props.position === true){
            setLabelValue(props.label + positionSuffix(props.label))
        }
        else {
            setLabelValue(props.label)
        }
    },[props.position, props.label])

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const submitChange = () => {
        if (inputValue === ''){
            setInputValue(0)
            props.updatePoints(props.id, 0)
        }
        else {
            props.updatePoints(props.id, parseInt(inputValue))
        }
        
    }

    return ( 
        <div style={{
            "display": "flex",
            "justifyContent": "space-between"
        }}>
            <h2>{labelValue}</h2>
            <input type="text" 
            value={inputValue} 
            onChange={(e) => handleChange(e)}
            onBlur={(e) => submitChange()} 
            style={{
                "width": "50px",
                "height": "50px"
            }}></input>
        </div>
     );
}
 
export default PointsAdjusterEl;
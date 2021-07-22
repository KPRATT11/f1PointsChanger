import { useEffect, useState } from 'react';
import { positionSuffix } from '../../helpers/positionPrefix'

const PointsAdjusterEl = (props) => {
    const [inputValue, setInputValue] = useState(props.displayPoints)

    useEffect(() => {
        if(props.displayPoints === undefined){
            setInputValue('0')
        }
        else{
            setInputValue(props.displayPoints)
        }
        
    },[props.displayPoints]) 

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const submitChange = () => {
        console.log(inputValue)
        if (inputValue === ''){
            setInputValue('0')
            props.updatePoints(props.id, '0')
        }
        else {
            props.updatePoints(props.id, inputValue)
        }
        
    }

    return ( 
        <div style={{
            "display": "flex",
            "justifyContent": "space-between"
        }}>
            <h2>{props.pos + positionSuffix(props.pos)}</h2>
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
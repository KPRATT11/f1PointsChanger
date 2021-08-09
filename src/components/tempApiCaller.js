import { useEffect, useState } from "react";
import { createApiReqUrl, formatRawApiData } from '../apiScripts'

const TempApiCaller = (props) => {
    const [input , setInput] = useState(2020)

  function handleChange (event) {
    setInput(event.target.value)
    props.handleSeasonChange(event.target.value)
  }

  function handleSubmit() {
      props.callApi()
  }



  return ( 
    <div>
      <input type="number" value={input} onChange={e => handleChange(e)}></input>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
   );
}
 
export default TempApiCaller;




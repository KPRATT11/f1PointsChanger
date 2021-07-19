import { useEffect, useState } from "react";
import { createApiReqUrl, formatRawApiData } from '../apiScripts'

const TempApiCaller = (props) => {
    const [input , setInput] = useState('2020')

  function handleChange (event) {
    setInput(event.target.value)
  }

  function handleSubmit() {
      console.log(input)
      callApi()
  }

  async function callApi(){
      const response = await fetch(createApiReqUrl(input));
      const data = await response.json()
      let formattedData = formatRawApiData(data)
      console.log(formattedData)
      props.updateDrivers(formattedData)
  }

  return ( 
    <div>
      <input type="text" value={input} onChange={e => handleChange(e)}></input>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
   );
}
 
export default TempApiCaller;




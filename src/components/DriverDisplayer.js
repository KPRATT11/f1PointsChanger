import { useState } from "react";
import DriverDisplayCard from "./DriverDisplayerElements/DriverDisplayerCard"

const DriverDisplayer = (props) => {
    function sortDriverArray(driverElArray){
        return driverElArray.sort((a , b) => {
            return parseInt(b.points) - parseInt(a.points)
        })
    }


    let driverElArray = props.drivers
    if (driverElArray !== "None"){
        driverElArray = sortDriverArray(driverElArray)
        driverElArray = driverElArray.map((element) => {
            return (
                <DriverDisplayCard
                    name = {element.firstName + element.lastName}
                    nationality = {element.nationality}
                    points = {element.points}
                />
            )
        })
    }
    else{
        driverElArray = "No Drivers To Render"
    }

    return ( 
        <div>
            {driverElArray}
        </div>
     );
}
 
export default DriverDisplayer;
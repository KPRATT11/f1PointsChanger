import { useState } from "react";
import DriverDisplayCard from "./DriverDisplayerElements/DriverDisplayerCard"

const DriverDisplayer = (props) => {
    function sortDriverArray(driverElArray){
        return driverElArray.sort((a , b) => {
            return parseInt(b.points) - parseInt(a.points)
        })
    }

    let driversOdd = []
    let driversEven = []
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

        driverElArray.forEach((element, index) => {
            if (index % 2){
                driversEven.push(element)
            }
            else{
                driversOdd.push(element)
            }
        });
    }
    else{
        driverElArray = "No Drivers To Render"
    }
    if  (props.isLoading){
        return (
            <div style={{
                overflow: "scroll",
                height: "800px",
                display: "flex",
                justifyContent: "space-evenly"
            }}>
                Loading
            </div>
        )
    }
    else {
        return (
            <div style={{
                overflow: "scroll",
                height: "800px",
                display: "flex",
                justifyContent: "space-evenly"
            }}>
                <div style = {{
                    height: "100%",
                    paddingRight: "20px",
                    paddingTop: '55px'
                }}>
                    {driversEven}
                </div>
                <div>
                    {driversOdd}
                </div>
            </div>
        )
    }
}
 
export default DriverDisplayer;
export function totalPoints(pointsSheet, drivers, races){
    let driverCalcSheet = drivers
    driverCalcSheet = Object.values(calcStandardPoints(drivers, races, pointsSheet))
    console.log(driverCalcSheet)
    return driverCalcSheet
}

function calcStandardPoints(drivers, races, pointsSheet){
    let driverMap = mapDriver(drivers)
    for (let outerIndex = 0; outerIndex < races.length; outerIndex++) {
        const element = races[outerIndex];
        for (let index = 0; index < element.length; index++) {
            const innerElement = element[index];
            const driverId = innerElement.Driver.driverId
            const driver = driverMap[driverId]
            driver.points = String(parseFloat(driver.points) + parseFloat(pointsSheet.standardPoints[index]))
            console.log(element)

            //Calculate points for fastest lap
            if(innerElement.FastestLap !== undefined){
                if (innerElement.FastestLap.rank === "1" && parseInt(innerElement.position) < 10){
                    driver.points = String(parseFloat(driver.points) + parseFloat(pointsSheet.extraPoints.fastestLap))
                }
            }
            
            driverMap[driverId] = driver
        }
    }
    return driverMap
}

function mapDriver(drivers){
    let driverMap = {}
    for (let index = 0; index < drivers.length; index++) {
        const element = drivers[index];
        driverMap[element.id] = element
    }
    return driverMap
}
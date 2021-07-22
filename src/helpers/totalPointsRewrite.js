export function totalPoints(pointsSheet, drivers, races){
    let driverMap = mapDriver(drivers) 
    driverMap = calcPoints(driverMap, pointsSheet, races)
    driverMap = Object.values(driverMap)
    return driverMap
}

function calcPoints(driverMap, pointsSheet, races){
    for (let index = 0; index < races.length; index++) {
        const race = races[index];
        
        for (let position = 0; position < race.length; position++) {
            const finishedDriver = race[position];
            console.log(finishedDriver)
            const driverId = finishedDriver.Driver.driverId
            let driver = driverMap[driverId]
            driver = addStandardPoints(driver, pointsSheet, race, position)
            driverMap[driverId] = driver
        }
    }
    return driverMap
}

function addStandardPoints(driver, pointsSheet, race, position){
    let newDriver = driver
    let scoreArrayIndex = 0
    if (pointsSheet.extraRules.dropScores){
        let totalOfElements = 0
        for (let index = 0; index < race.length; index++) {
            const element = race[index];
            if(race < element[1] + totalOfElements){
                scoreArrayIndex = index
                break
            }
            else{
                totalOfElements += element[1]
            }
        }
    }
    while(scoreArrayIndex > driver.pointsArray.length){
        newDriver.pointsArray.push([])
    }
    newDriver.pointsArray[scoreArrayIndex].push(pointsSheet.standardPoints[position])
    return driver
}

function totalAllPoints(driver){
    let standardPoints = totalDeepArray(driver.pointsArray)
}

function totalDeepArray(array){
    let total = 0
    for (let i = 0; i < array.length; i++){
      const element = array[i]
      if (Array.isArray(element)){
        total += totalDeepArray(element)
      }
      else{
        total += element
      }
    }
    return total
  }

function mapDriver(drivers){
    let driverMap = {}
    for (let index = 0; index < drivers.length; index++) {
        const driver = drivers[index];
        driver.pointsArray=[[]]
        driverMap[driver.id] = driver
    }
    return driverMap
}
export function totalPoints(pointsSheet, drivers, races){
    drivers = resetAllDriverPoints(drivers)
    let driverMap = mapDriver(drivers) 
    driverMap = calcPoints(driverMap, pointsSheet, races)
    driverMap = Object.values(driverMap)
    driverMap = totalAllPoints(driverMap)
    return driverMap
}

function resetAllDriverPoints(drivers){
    for (let index = 0; index < drivers.length; index++) {
        const driver = drivers[index];
        driver.points = 0
    }
    return drivers
}

function totalAllPoints(drivers){
    
    for (let index = 0; index < drivers.length; index++) {
        const driver = drivers[index];
        driver.points += totalDriverPoints(driver)
        console.log(driver)
    }
    return drivers
}

function calcPoints(driverMap, pointsSheet, races){
    for (let index = 0; index < races.length; index++) {
        const race = races[index];
        for (let position = 0; position < race.length; position++) {
            const finishedDriver = race[position];
            const driverId = finishedDriver.Driver.driverId
            let driver = driverMap[driverId]
            driver = addStandardPoints(driver, pointsSheet, race, position)
            driver.points += addFastestLap(finishedDriver, pointsSheet)
            driverMap[driverId] = driver
        }
    }
    return driverMap
}

function addFastestLap(driver, pointsSheet){
    if (driver.FastestLap !== undefined){
        if (parseInt(driver.FastestLap.rank) === 1){
            return pointsSheet.extraPoints.fastestLap
        }
        return 0
    }
    return 0
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

function totalDriverPoints(driver){
    let standardPoints = totalDeepArray(driver.pointsArray)
    return standardPoints
}

function totalDeepArray(array){
    let total = 0
    for (let i = 0; i < array.length; i++){
      const element = array[i]
      if (Array.isArray(element)){
        total += totalDeepArray(element)
      }
      else if(element === undefined){
          total += 0
      }
      else{
        total += element
      }
    }
    return total
  }

//TODO Add Driver Drop

function mapDriver(drivers){
    let driverMap = {}
    for (let index = 0; index < drivers.length; index++) {
        const driver = drivers[index];
        driver.pointsArray=[[]]
        driverMap[driver.id] = driver
    }
    return driverMap
}
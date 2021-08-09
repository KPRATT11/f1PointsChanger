import { createApiReqUrl } from "../apiScripts"

export function totalPoints(pointsSheet, drivers, races){
    drivers = resetAllDriverPoints(drivers)
    let driverMap = mapDriver(drivers) 
    driverMap = calcPoints(driverMap, pointsSheet, races)
    driverMap = Object.values(driverMap)
    driverMap = totalAllPoints(driverMap, pointsSheet)
    return driverMap
}

function resetAllDriverPoints(drivers){
    for (let index = 0; index < drivers.length; index++) {
        const driver = drivers[index];
        driver.points = 0
    }
    return drivers
}

function totalAllPoints(drivers, pointsSheet){
    
    for (let index = 0; index < drivers.length; index++) {
        let driver = drivers[index];
        if (pointsSheet.extraRules.dropScores){
            driver.pointsArray = dropScores(driver, pointsSheet.extraRules.dropScoresData)
        }
        driver.points += totalDriverPoints(driver)
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
            driver.points += addPolePosition(finishedDriver, pointsSheet)
            driver.points += addDnf(finishedDriver.positionText, pointsSheet)
            driverMap[driverId] = driver
        }
    }
    return driverMap
}

function addFastestLap(driver, pointsSheet){
    if (driver.FastestLap !== undefined){
        if (parseInt(driver.FastestLap.rank) === 1){
            return parseInt(pointsSheet.extraPoints.fastestLap)
        }
        return 0
    }
    return 0
}

function addPolePosition(driver, pointsSheet){
    if (driver.grid === "1"){
        return parseInt(pointsSheet.extraPoints.qualyPoints)
    }
    return 0
}

function addDnf(positionText, pointsSheet){
    if (positionText === "R"){
        let dnfPoints = parseInt(pointsSheet.extraPoints.dnf)
        return Math.abs(dnfPoints) * -1
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
    if (position > pointsSheet.standardPoints.length - 1){
        newDriver.pointsArray[scoreArrayIndex].push(0)
    }
    else {
        newDriver.pointsArray[scoreArrayIndex].push(parseInt(pointsSheet.standardPoints[position]))
    }
    
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

function dropScores(driver, dropTable){
    for (let index = 0; index < driver.pointsArray.length; index++) {
        let specificRound = driver.pointsArray[index];
        //sort for int and not alphabetical 
        let sortedSpecificRounds = specificRound.sort((a ,b) => {
            return b - a
        })
        
        let amountOfRacesTOBeRemovedFrom
        if (dropTable[index][1] === 0){
            amountOfRacesTOBeRemovedFrom = sortedSpecificRounds.length
        }
        else{
            amountOfRacesTOBeRemovedFrom = dropTable[index][1]
        }
        let removeAmount = amountOfRacesTOBeRemovedFrom - dropTable[index][0]
        
        removeAmount = sortedSpecificRounds.length - (amountOfRacesTOBeRemovedFrom - removeAmount) 
        console.log(removeAmount)
        for (let index = 0; index < removeAmount; index++) {
            let popped = sortedSpecificRounds.pop()
        }
        driver.pointsArray[index] = sortedSpecificRounds

        
    }
    return driver.pointsArray
}

function mapDriver(drivers){
    let driverMap = {}
    for (let index = 0; index < drivers.length; index++) {
        const driver = drivers[index];
        driver.pointsArray=[[]]
        driverMap[driver.id] = driver
    }
    let newMap = {...driverMap}
    console.log(newMap)
    return driverMap
}
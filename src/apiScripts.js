export const createApiReqUrl = (year) => {
    return 'http://ergast.com/api/f1/' + String(year) + '/results.json?limit=1000'
}

export const formatRawApiData = (raceData) => {
    let formattedTable = {
        drivers: {},
        races: []
    }
    let races = raceData.MRData.RaceTable.Races
    for (let index = 0; index < races.length; index++) {
        const element = races[index];
        formattedTable.races.push(element.Results)
    }
    for (let outerIndex = 0; outerIndex < formattedTable.races.length; outerIndex++) {
        const element = formattedTable.races[outerIndex];
        for (let index = 0; index < formattedTable.races[outerIndex].length; index++) {
            const element = formattedTable.races[outerIndex][index];
            if(element.Driver.driverId in formattedTable.drivers){
            
            }
            else{
                formattedTable.drivers[element.Driver.driverId] = {
                    points: 0,
                    firstName: element.Driver.givenName,
                    lastName: element.Driver.familyName,
                    nationality: element.Driver.nationality,
                    constructor: element.Constructor.Name,
                    id: element.Driver.driverId
                }
            }
        }
    }
    return formattedTable
}
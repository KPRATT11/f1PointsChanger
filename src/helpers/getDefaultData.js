import { defaultData } from '../dataTemplates/pointsTemplatesByYear'
import { dropScoresData } from '../dataTemplates/dropScoresData'

export function getDefaultData(year){
    
    let returnData = {}
    for (let index = 0; index < defaultData.length; index++) {
        const element = defaultData[index];
        if(element.startingYear < year){
            returnData = element
            break
        }
        
    }
    returnData.extraRules.dropScoresData = getDropScores(year)
    return returnData
}

function getDropScores(year){
    return dropScoresData[String(year)]
}
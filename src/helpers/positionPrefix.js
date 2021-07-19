export const positionSuffix = (str) => {
    let prefixChar = str.charAt(str.length - 1)
    const prefixMap = {
        '1': 'st',
        '2': 'nd',
        '3': 'rd',
    }
    if (str.length > 1 && str.charAt(str.length - 2 === '1')){
        return 'th'
    }
    else if (prefixChar in prefixMap){
        return prefixMap[prefixChar]
    }
    else {
        return 'th'
    }
}
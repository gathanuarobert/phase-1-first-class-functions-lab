// Code your solution in this file!


    
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
 
function createFareMultiplier (integer){
    return function(fare){
        return integer * fare
    }

}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, selectingFunction){
    return selectingFunction(arrayOfDrivers);
}

const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers)
console.log(firstTwoDrivers)

const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers)
console.log(lastTwoDrivers)
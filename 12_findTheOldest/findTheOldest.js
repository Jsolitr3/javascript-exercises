const findTheOldest = function(x) {
    const nameList = x.sort(function(a, b) {
        const lastGuy = (a.hasOwnProperty('yearOfDeath') ? a.yearOfDeath : new Date().getFullYear()) - a.yearOfBirth;
        const nextGuy = (b.hasOwnProperty('yearOfDeath') ? b.yearOfDeath : new Date().getFullYear())  - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    })
    
    return nameList[0];
};

// Do not edit below this line
module.exports = findTheOldest;

const removeFromArray = function(inputArr , ...args) {
    for (const values of args) {
        if (inputArr.indexOf( values ) >= 0) {
            inputArr.splice( inputArr.indexOf( values ) , 1 );
        }
    }
    return inputArr;
}

// Do not edit below this line
module.exports = removeFromArray;

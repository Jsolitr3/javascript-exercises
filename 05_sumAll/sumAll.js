const sumAll = function(x , y) {
    let result = 0;
    if (!((typeof x) === "number" ) || !((typeof y) === "number") || x < 0 || y < 0) {
        result = "ERROR";
    } else {
        const maxInput = Math.max(x, y);
        const minInput = Math.min(x, y);
        for (let i = minInput; i <= maxInput; i++){
            result += i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

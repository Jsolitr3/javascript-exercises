const fibonacci = function(x) {
    x = parseInt(x);
    if (x > 0) {
    const fibArr = [1,1];
    for (let i = 3; i <=x; i++){
        fibArr.push(fibArr[i-3]+fibArr[i-2])
    }
    return fibArr[fibArr.length-1];
    } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;

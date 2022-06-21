const palindromes = function (s1) {
    s1 = s1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    s1 = s1.replace(/\s+/g, "");
    s1 = s1.toLowerCase();
    let s2 = "";
    for (let i = s1.length-1; i>=0; i--){
        s2 =  s2.concat(s1.charAt(i));
    }
    return (s1 == s2);
};

// Do not edit below this line
module.exports = palindromes;

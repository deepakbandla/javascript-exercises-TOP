const reverseString = function(word) {
    let f = "";
    for(let i = word.length-1; i>=0; i--){
        f+=word[i];
    }
    return f;
};

// Do not edit below this line
module.exports = reverseString;

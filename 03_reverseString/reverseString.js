const reverseString = function() {
    oldString="hello";
    let newString = "";
    for (let i=oldString.length-1; i>=0; i--) {
        newString += oldString.charAt(i);
    }
    
    return newString;
}

// Do not edit below this line
module.exports = reverseString;

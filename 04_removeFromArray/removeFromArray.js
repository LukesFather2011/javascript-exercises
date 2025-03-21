const removeFromArray = function(array, first, second="", third="", fourth="") {
    // using to push relavent elements from array to new array since .delete leaves holes. 
    const newArray = [];

    for (const element of array) {
        if (element === first || element === second || element === third || element === fourth) {
            continue;

        } else {
            newArray.push(element);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

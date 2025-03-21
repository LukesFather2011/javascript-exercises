const removeFromArray = function(array, numToRemove) {
    // using to push relavent elements from array to new array since .delete leaves holes. 
    const newArray = [];

    for (num of array) {
        if (num === numToRemove) {
            continue;

        } else {
            newArray.push(num);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

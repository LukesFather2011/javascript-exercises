const getTheTitles = function(array) {
    let newArray = [];
    for (book of array) {
      newArray.push(book.title);
    };
  
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;

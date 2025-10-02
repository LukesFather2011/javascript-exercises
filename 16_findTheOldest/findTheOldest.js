const findTheOldest = function(array) {
  let oldestPerson = null;
  let ageOfCurrentOldest = 0;
  
  for (let person of array) {
    // handle case where yearOfDeath is missing (assume still alive)
    const yearOfDeath = person.yearOfDeath || new Date().getFullYear();
    const age = yearOfDeath - person.yearOfBirth;

    if (age > ageOfCurrentOldest) {
      ageOfCurrentOldest = age;
      oldestPerson = person; // store the whole object
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

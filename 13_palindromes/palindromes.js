const palindromes = function (str) {
  const validChars = "abcdefghijklmnopqrstuvwxyz0123456789"; // used to check for valid characters
  let filteredString = "";

  // ensure everything is lower case and remove all invalid characters.
  for (const char of str.toLowerCase()) {
    if (validChars.includes(char)) {
      filteredString += char;
    }
  }

  const reversedString = filteredString.split("").reverse().join("");
  return filteredString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

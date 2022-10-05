/*n this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.*/

const numberOfVowels = function(data) {
  let totalOfVowels = 0;
  for (let i = 0; i < data.length; i++) {
    if(data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      totalOfVowels++
    }
  }
  return totalOfVowels
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
//We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

const camelCase = function(input) {
  let newStr = '';
  let inputArr = [];
  for(let i = 0; i < input.length; i++) {
    if(input[i] === ' ') {
      let upperCase = input[i+1].toUpperCase();
      inputArr.push(upperCase);
      i++
    } else {
      inputArr.push(input[i])
    }
  } 
  return inputArr.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
/*titleCase("this is an example") should return "This Is An Example"
titleCase("test") should return "Test"
titleCase("i r cool") should return "I R Cool"
titleCase("WHAT HAPPENS HERE") should return "What Happens Here"
titleCase("") should return ""
titleCase("A") should return "A"*/

const titleCase = str => {
  let result = '';
  if (!str) return '';
  str = str.trim().toLowerCase();
  result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== ' ') {
      result += str[i];
    } else {
      result += ' ' + str[i + 1].toUpperCase();
      i++;
    }
  }

  return result;
};

console.log(titleCase("this is an example"));
console.log(titleCase("test"));
console.log(titleCase("i r cool"));
console.log(titleCase("WHAT HAPPENS HERE"));
console.log(titleCase(""));
console.log(titleCase("A"));
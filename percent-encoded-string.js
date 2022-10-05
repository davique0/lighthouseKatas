/*In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.*/

const urlEncode = function(text) {
  let code20 = '20%';
  let encodedText = "";
  text[0] === " " ? text = text.slice(1) : false;
  text[text.length-1] === " " ? text = text.slice(0, -1) : false;
  for (let i = 0; i < text.length ; i++) {
    if (text[i] === " " && i !== 0 ) {
      encodedText += code20;
    } else {
      encodedText += text[i]
    }
  }
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
/*In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.
*/

const sumLargestNumbers = function(data) {
  let firstBigNum = 0;
  let secondBigNum = 0;

  data.forEach((x, i) => {
    if (x > firstBigNum) {
      firstBigNum = x;
    } 
  data.forEach((x, i) => {
    if (x > secondBigNum && firstBigNum > x) {
      secondBigNum = x
    }
  })
    
  });
  return firstBigNum + secondBigNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
 
    
    function max(arr) {
      let maxValue = 0;
      let maxYear = 0;
      let keysArr = Object.keys(arr);
      let valsArr = Object.values(arr);
      for (let i=0; i < keysArr.length; i++) {
        if (valsArr[i] > maxValue) {
          maxValue = valsArr[i];
          maxYear = keysArr[i];
        }
      }
      return maxYear/1;
    }
   
    const yearList = data.asteroids.reduce((asteroidsArr, asteroid) => {
    const count = asteroidsArr[asteroid.discoveryYear] ?? 0;
      return { ...asteroidsArr, [asteroid.discoveryYear]: count + 1 };
    }, {})
  console.log( yearList)
  return max(yearList);

  /* Alternate solution with nested for loops 
let discYearArr = [data.asteroids[0].discoveryYear];
let discYearSum = [1];

for (let a = 1; a < data.asteroids.length; a++) {
  for (let i = 0; i < discYearArr.length; i++) {

    
    if (data.asteroids[a].discoveryYear === discYearArr[i]) {
      discYearSum[i] +=  1; 
    }
      
    else if (!discYearArr.includes(data.asteroids[a].discoveryYear) && i === discYearArr.length - 1) {
      discYearSum.push(0);
      discYearArr.push(data.asteroids[a].discoveryYear);
    }
  }
} 

return (discYearArr[(max(discYearSum))]);


*/
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

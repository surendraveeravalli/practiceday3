// divisible 2 and 5

function isDivisibleByTwoAndFive(num) {
    if (num % 2 === 0 && num % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let num1 = 24;
  let num2 = 30;
  
  console.log(num1 + " is div by 2 and 5:", isDivisibleByTwoAndFive(num1));
  console.log(num2 + " is div by 2 and 5:", isDivisibleByTwoAndFive(num2));


//counting 0 and 1 in an Array

function countZeroesOnes(a) {
    let count0 = 0;
    let count1 = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] === 0) {
        count0++;
      } else if (a[i] === 1) {
        count1++;
      }
    }
  
    return { count0, count1 };
  }
  
  let array = [0, 1, 0, 1, 1, 0, 1, 0];
  let counts = countZeroesOnes(array);
  console.log("Count of 0:", counts.count0);
  console.log("Count of 1:", counts.count1);

  
  // divisible by 5 number 

function isDivisibleByFive(num) {
    return num % 5 === 0;
  }
  
  var numbe1 = 10;
  var numbe2 = 15;
  
  console.log( isDivisibleByFive(numbe1));
  console.log( isDivisibleByFive(numbe2));

  
  // array [51, 20, 53, 40, 84, 80];


function ByFive(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 5 === 0) {
        console.log(array[i]);
      }
    }
  }
  
  let numbers = [51, 20, 53, 40, 84, 80];
  ByFive(numbers);

  
  // write a function of array=[-1, 5, 8, -13, -17] replace negative numbers with 0

function negative(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arr[i] = 0;
      }
    }
  }
  
  let arr = [-1, 5, 8, -13, -17];
  negative(arr);
  console.log(arr);

  //array counting how many positive numbers

function PositiveNumbers(ar) {
    let count = 0;
  
    for (let i = 0; i < ar.length; i++) {
      if (arr[i] > 0) {
        count++;
      }
    }
  
    return count;
  }
  
  let ar= [ 15, -2, -52, -8, 16, -9, -6];
  let positiveCount = PositiveNumbers(arr);
  console.log("positive numbers:", positiveCount);



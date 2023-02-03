function randomArray(length,min, max) {
    return Array.apply(null, Array(length)).map(function() {
        return  Math.floor(Math.random() * (max - min) + min);
    });
}

numbers= [1,2,3,4,5,6,7,7];
const mode = numbers => {
  const mode = [];
  let max = 0, count = 0;

  for(const item of numbers) {
    if(mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    
    if(count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
   
  return max;
};



function median(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}



const average = numbers => numbers.reduce((a, b) => a + b) / numbers.length;

var evens = numbers.filter(function(x) {
  if (x % 2 !== 0) {
    return x;
  }
})


var ar = [-1, -2, -3, 0, 0, 5, 12, 0, -10];

function counter(ar) {
  var counter = 0;
  ar.forEach(function(a) {
   if (a > 0) {
      counter +=1;}
    else{
      counter +=0
  } });
  return counter;
}

var result = counter(ar);


var numbersForFive = [-200, -163, -26, -4, 0, 7, 76, 55, 135, 125, 100];

var getDividedByFive  = numbersForFive.filter(function(x) {
  if (x % 5 == 0) {
    return x;
  }
})

console.log("Home work 5");
console.log("Task - 1: ",randomArray(5,1, 5));
console.log("Task - 2: MODA -", mode(numbers));
console.log("Task - 3: MEDIAN -", median(numbers));
console.log("Task - 4: AVERAGE -", average(numbers));
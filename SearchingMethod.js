//find--it return 1st element of an array which satisfied the condition.
const arr=[1,2,3,4,5,6];
const evenFirst=arr.find(number => number%2==0);
console.log(evenFirst);

//findLast()--it return the last element of an array which satisfied the condition.
const evenLast=arr.findLast(number=> number%2==0);
console.log(evenLast);

//findIndex()--it return the index of first element which stisfy the condition.
const evenFirstIndex=arr.findIndex(num=>num%2==0);
console.log(evenFirstIndex);

//findLastIndex--it return the index of last element which satisfy the condition.
const evenLastIndex=arr.findLastIndex(num=>num%2==0);
console.log(evenLastIndex);
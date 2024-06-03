//reduce method give us one value like we do sum of array,find max and min
const arr=[1,2,3,4,5];
//first approach using for loop
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];

}
console.log("sum of array is ",sum);
//using Reduce method
const sum1=arr.reduce(function(acc,curr){
           acc=acc+curr;
           return acc;
},0);
console.log(sum1);

//lets find maximum element from an array
//first apporch using for loop
let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log("maximum no is ",max);
//lets find minimum
let min=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log( "minimum no is ",min);

//lets using reduce method for finding max and min
const maxNum=arr.reduce(function(maxi,num){
       if(num>maxi){
        maxi=num;
    
       }
       return maxi;
},0);
console.log("Maximum no is using reduce method ",maxNum);

const minNum=arr.reduce(function(mini,num){
    if(num<mini){
     mini=num;
 
    }
    return mini;
},1);
console.log("minimum no of an array using reduce method ",minNum);

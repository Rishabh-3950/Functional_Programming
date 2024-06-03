//Map--higher order function which is used to change the content of an array.
//it not modified the original array.

const arr1=[1,2,3,4,5];
function square(x){
    return x*x;
}
const newArr=arr1.map(square);
console.log("Original Array ",arr1);
console.log("Squared Array ", newArr);


const newArr1=arr1.map(function square(x){
    return x*x;
});
console.log(newArr1);

const newArr2=arr1.map(x=>x*x);
console.log(newArr2);

//let's double array element using map and arrow
const doubledArr=arr1.map(x=> 2*x);
console.log("doubled array ",doubledArr);

// let's take an object as a array
const users=[
 {
    firstName:"rishabh",
    lastName:"yadav",
    age:25
 },
 {
    firstName:"Naina",
    lastName:"Gupta",
    age:25
}];
const fName=users.map(user=>user.firstName);
console.log(fName);

const lName=users.map(user=>user.lastName);
console.log(lName);
    



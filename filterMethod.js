//filter-Method---this method used for filterout the content from an array based on condition .
// it not modified the original array.
const arr1=[6,56,44,61,63,71,80];
//lets find even element from an array using filter method
function even(x){
    return x%2==0;
}
const evenArr=arr1.filter(even);
console.log("original array ",arr1);
console.log("even Array ",evenArr);

const evnArr=arr1.filter(function even(num){
    return num%2==0;
});
console.log(evnArr);

//lets using arrow function inside the filter function
const numArr=arr1.filter(num=>num>50);
console.log(numArr);//[56,61,63,71,80]

const students=[
    {
        Name:"Rishabh",
        roll:50,
        marks:78
    },
    {
        Name:"Ankit",
        roll:60,
        marks:35
    },
    {
        Name:"Subodh",
        roll:70,
        marks:80
    }
];
const goodMarks=students.filter(student=>student.marks>50);
console.log(goodMarks);


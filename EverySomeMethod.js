function check(age){
    if(age>18){
        console.log("Person is adult");
    }
    else{
        console.log("Person is not adult");

    }

}
check(19);

//check in array every person is adult or not so we use every() method--it gives true if all element satisfy the condition.

const ages=[17,31,21,34,67,89];
const isAdult=ages.every(age=>age>18);
console.log (" isAdult ",isAdult);

//some()--even if one element in array satify the condition it return true.
const isKid=ages.some(age => age<18);
console.log("is kid ",isKid);


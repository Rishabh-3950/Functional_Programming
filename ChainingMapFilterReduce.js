const students=[
    { name:"Rishabh",rollNo:21,marks:71},
    { name:"Rajan",rollNo:23, marks:97},
    { name:"Rajnish",rollNo:16, marks:25},
    { name:"Rajanesh",rollNo:17, marks:59},

];
//const updatedMarks=students.map(student=>{
    //if(student.marks<60){
     //   student.marks+=20;
        
   // }
   // return student;
//});

//const  filterArray=updatedMarks.filter(student=> student.marks>60);
//console.log(filterArray);

//const totalMarks=filterArray.reduce(function(acc,curr){
          //    acc=acc+curr.marks;
            //  return acc;
//},0);
//console.log(totalMarks);


const totMarks=students.map(student=>{
   if(student.marks<60){
        student.marks+=20;
        
    }
    return student;
}).filter(student=> student.marks>60).reduce(function(acc,curr){
acc=acc+curr.marks;
return acc;
},0);
console.log(totMarks);


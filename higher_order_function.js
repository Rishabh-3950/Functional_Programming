function x(){
    console.log("x is a function");

}
function y(x){
    x();
}
y(x);
//y is a higher order function because it take another function as parameter.
//x is a callback function because it is passed as parameter to another function.

//calculate the square root of a circle, given the radius and the precision of the result (9 decimal places)
function calculate(){
    var radius = prompt("Enter the radius of the circle");
    var precision = prompt("Enter the precision of the result");
    var result = Math.sqrt(radius);
    var result = result.toFixed(precision);
    console.log(result);
} 

function add(a,b) {
return(a+b)
}
console.log(add(4,6))
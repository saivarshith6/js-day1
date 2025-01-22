
function a( num1,  num2,  num3){
    if(num1 > num2 && num1 > num3){ 
        let num4=num1 + num2 + num3;
        console.log("The sum of the numbers is: " + num4);
        let num5=num1 * num2 * num3;
        console.log("The product of the numbers is: " + num5);
        let num6=(num1 - num2 - num3);
        console.log("The difference of the numbers is: " + num6);
        let num7=(num1 / num2 / num3);
        console.log("The quotient of the numbers is: " + num7);
        console.log("The largest number is: " + num1);
     } else if(num2 > num1 && num2 > num3){
         console.log("The largest number is: " + num2);
         }else {
            console.log("The largest number is: " + num3);
         }
}

//let num1=prompt("Enter first number: ");
//let num2=prompt("Enter second number: ");
//let num3=prompt("Enter third number: ");
//a(num1,num2,num3);

let b=function(c){
    console.log(c);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]); 
    console.log(arguments);
}
b(10,20,30);
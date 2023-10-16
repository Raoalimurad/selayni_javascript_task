let num1= +prompt("Enter the value of number 1");
let num2=+prompt("Enter the value of number 2");
let operator=prompt("Enter the operation which you want to perform");

if(operator=="+"){
    document.write(`The sum of ${num1} and ${num2} is ${num1+num2}`)
}else if(operator=="-"){
    document.write(`The subtract of ${num1} and ${num2} is ${num1-num2}`)
}else if(operator=="*"){
    document.write(`The multiplication  of ${num1} and ${num2} is ${num1*num2}`)
}else if(operator=="/"){
    document.write(`The divison  of ${num1} and ${num2} is ${num1/num2}`)
}else if(operator=="%"){
    document.write(`The Modules  of ${num1} and ${num2} is ${num1%num2}`)}

function add(number1, number2){
    return number1 + number2;
};

function substract(number1, number2){
    return number1 - number2;
};

function multiply(number1, number2){
    return number1 * number2;
};

function divide(number1, number2){
    return number1 / number2;
};

let number1;
let number2;
let operator;

function operate(number1, operator, number2){
    if(operator == "add"){return add(number1,number2);}
    else if(operator == "substract"){return substract(number1,number2);}
    else if(operator == "multiply"){return multiply(number1,number2);}
    else if(operator == "dvide"){return divide(number1,number2);};
}

number1 = 4;
console.log(number1);
number2 = 4;
console.log(number2);
operator = "add";
console.log(operator);
console.log(operate(number1,operator,number2));
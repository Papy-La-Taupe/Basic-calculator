    //set up the basic operations

function add(number1, number2){
    return number1 + number2;
};

substract = function substract(number1, number2){
    return number1 - number2;
};

multiply = function multiply(number1, number2){
    return number1 * number2;
};

divide = function divide(number1, number2){
    return number1 / number2;
};

let constructingNumber1 = "";
let constructingNumber2 = "";
let preOperator = 1;
let toClear = 0;
let display = 0;
let displayMiniScreen = 0;
let number1 = "";
let number2 = "";
let operation = 0;
let operator;

function operate(number1, operator, number2){
    if(operator == "add"){return add(number1,number2);}
    else if(operator == "substract"){return substract(number1,number2);}
    else if(operator == "multiply"){return multiply(number1,number2);}
    else if(operator == "divide"){return divide(number1,number2);};
};

function clearScreen(){
    display = 0;
    displayMiniScreen = 0;
    preOperator = 1;
    constructingNumber1 = "";
    constructingNumber2 = "";
    operation = 0;
};

    //create the interactive interface

document.getElementById("screen").value = display;
document.getElementById("miniScreen").value = displayMiniScreen;

document.addEventListener("click", (e)=>{
    console.log(e.target.id);
    if(parseInt(e.target.id) >=0 && parseInt(e.target.id) <=9){
        if(preOperator == 1){
            
            if(constructingNumber1 == ""){
                clearScreen();
                constructingNumber1 = e.target.id;
                console.log(constructingNumber1, number1);
                displayMiniScreen = constructingNumber1;
                display = constructingNumber1;
            } else {
                constructingNumber1 += e.target.id;
                console.log(constructingNumber1, number1);
                displayMiniScreen = constructingNumber1;
                display += e.target.id;
            };
        }
        else if(preOperator == 0){
            if(constructingNumber2 == ""){
                constructingNumber2 = e.target.id;
                console.log(constructingNumber2);
                displayMiniScreen = constructingNumber2;
                display += e.target.id;
            } else {
                constructingNumber2 += e.target.id;
                console.log(constructingNumber2);
                displayMiniScreen = constructingNumber2;
                display += e.target.id
            };
        }
    }
    else if(e.target.className == "Operator"){
        if(operation == 0){
            operator = e.target.id;
            console.log(operator);
            preOperator = 0;
            console.log(e);
            displayMiniScreen = e.target.innerHTML;
            display+= displayMiniScreen;
            operation = 1;
        }
        else if(operation == 1){
            number1 = parseFloat(constructingNumber1);
            console.log(number1);
            number2 = parseFloat(constructingNumber2);
            console.log(number2);
            let result = operate(number1, operator, number2);
            console.log(result);
            operator = e.target.id;
            constructingNumber2 = "";
            constructingNumber1 = result;
            console.log(constructingNumber1);
            displayMiniScreen = e.target.innerHTML;
            display += displayMiniScreen;
            number1 = "";
            number2 = "";
        }
    }
    else if(e.target.id == "enter"){
        number1 = parseFloat(constructingNumber1);
        number2 = parseFloat(constructingNumber2);
        let result = operate(number1, operator, number2);
        preOperator = 1;
        constructingNumber1 = "";
        constructingNumber2 = "";
        number1 = "";
        number2 = "";
        toClear = 1;
        displayMiniScreen = result;
    }
    else if(e.target.id == "clear"){
        clearScreen();
    }
    document.getElementById("miniScreen").value = displayMiniScreen;
    document.getElementById("screen").value = display;
});

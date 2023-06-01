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
    if(number2 == 0){
        alert("No ! Bad User ! Stop this right now ! pshht pshht è_é");
        clearScreen();
        return 0;
        
    }
    else return number1 / number2;
};

function prioritize(){
    if(operator == "multiply" || operator == "divide"){
        if(priorOperator == "add" || priorOperator == "substract"){
            return display = `(${display})`;
        };
    };
};

let constructingNumber1 = "";
let constructingNumber2 = "";
let parenthesesNumber1 = "";
let parenthesesNumber2 = "";
let parenthesesControl = 0;
let preOperator = 1;
let display = 0;
let displayMiniScreen = 0;
let number1 = "";
let number2 = "";
let operation = 0;
let operator;
let priorOperator;
let power =0;


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

document.addEventListener("click", (e)=>{
    console.log(e.target.id);
    if(power == 1){
        if(parseInt(e.target.id) >=0 && parseInt(e.target.id) <=9 || e.target.id == "."){
            if(preOperator == 1){
                
                if(constructingNumber1 == ""){
                    clearScreen();
                    constructingNumber1 = e.target.id;
                    displayMiniScreen = constructingNumber1;
                    display = constructingNumber1;
                } else {
                    constructingNumber1 += e.target.id;
                    displayMiniScreen = constructingNumber1;
                    display += e.target.id;
                };
            }
            else if(preOperator == 0){
                if(constructingNumber2 == ""){
                    constructingNumber2 = e.target.id;
                    displayMiniScreen = constructingNumber2;
                    display += e.target.id;
                } else {
                    constructingNumber2 += e.target.id;
                    displayMiniScreen = constructingNumber2;
                    display += e.target.id
                };
            }
        }
        else if(e.target.className == "Operator"){
            if(display.charAt(display.length -1) == "+" || display.charAt(display.length -1) == "-" || display.charAt(display.length -1) == "*" || display.charAt(display.length -1) == "/"){
                alert("no, sorry, this won't work, you can't have two operators next to each other :(");
            }
            else{
                if(operation == 0){
                    operator = e.target.id;
                    preOperator = 0;
                    displayMiniScreen = e.target.innerHTML;
                    display+= displayMiniScreen;
                    
                    operation = 1;
                }
                else if(operation == 1){
                    priorOperator = operator;
                    
                    number1 = parseFloat(constructingNumber1);
                    number2 = parseFloat(constructingNumber2);
                    let result = operate(number1, operator, number2);
                    operator = e.target.id;
                    constructingNumber2 = "";
                    constructingNumber1 = result;
                    displayMiniScreen = e.target.innerHTML;
                    prioritize();
                    display += displayMiniScreen;
                    displayMiniScreen = result + displayMiniScreen;
                    number1 = "";
                    number2 = "";
                };
            };
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
            displayMiniScreen = result.toFixed(3);        
        }
    
        else if(e.target.id == "clear"){
            clearScreen();
        }
        else if(e.target.id == "erase"){
            if(parseInt(display.charAt(display.length -1)) >=0 && parseInt(display.charAt(display.length -1)) <=9 || display.charAt(display.length -1) == "."){
                if (preOperator == 1){constructingNumber1 = constructingNumber1.slice(0, -1); display = display.slice(0, -1)}
                else if (preOperator == 0){constructingNumber2 = constructingNumber2.slice(0, -1); display = display.slice(0, -1)};
            }
            else if(display.charAt(display.length -1) == "+" || display.charAt(display.length -1) == "-" || display.charAt(display.length -1) == "*" || display.charAt(display.length -1) == "/"){
                alert("Come on now, dont be greedy, just start again ;)");
                clearScreen();
            };
        };
        document.getElementById("miniScreen").value = displayMiniScreen;
        document.getElementById("screen").value = display;
        console.log(displayMiniScreen);
    };
    if(e.target.id == "power"){
        if (power == 0){
            document.getElementById("screen").value = display;
            document.getElementById("miniScreen").value = displayMiniScreen;
            power = 1;
        }
        else{
            document.getElementById("screen").value = "...";
            document.getElementById("miniScreen").value = "off";
            power = 0;
        };
    }
});

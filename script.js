let numOne = "";
let numTwo = "";
let operator = "";
let result = "";

let calcBtnContainer = document.querySelector("#calc-buttons");
let primaryDisplay = document.querySelector("#primary");
let body = document.querySelector("body");
let secondaryDisplay = document.querySelector("#secondary");
let calcButtons = document.querySelectorAll(".calc-button");
calcBtnContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("number") && primaryDisplay.innerText.length < 11){
        updateNumber(e.target.innerText);
        console.log(e.target.innerText);
    }else if(e.target.id == "ce"){
        numOne = "";
        numTwo = "";
        operator = "";
        clearDisplay();
    }else if(e.target.classList.contains("operator")){
        if(numOne != ""){
            clearDisplay();
            operator = e.target.innerText;
        }
    }else if(e.target.id == "equal"){
        if(numTwo != ""){
            operate(numOne, numTwo, operator);
        }
    }else if(e.target.id = "plusMinus"){
        if(numTwo != ""){
            numTwo = -(numTwo);
            updateDisplay(numTwo);
        }else if(numOne != "" && operator == ""){
            numOne = -(numOne);
            updateDisplay(numOne);
        }
    }
    updateSecondaryDisplay();  
});

body.addEventListener("keydown",(k)=>{
    console.log(k.key);
    switch(k.key){
        case "Escape":
            console.log(k.key)
            calcButtons[0].click();
            break;
        case "_":
            console.log(k.key)
            calcButtons[1].click();
            break;
        case "/":
            console.log(k.key)
            calcButtons[2].click();
            break;
        case "Backspace":
            console.log(k.key)
            calcButtons[3].click();
            break;
        case "7":
            console.log(k.key)
            calcButtons[4].click();
            break;
        case "8":
            console.log(k.key)
            calcButtons[5].click();
            break;
        case "9":
            console.log(k.key)
            calcButtons[6].click();
            break;
        case "*":
            console.log(k.key)
            calcButtons[7].click();
            break;
        case "4":
            console.log(k.key)
            calcButtons[8].click();
            break;
        case "5":
            console.log(k.key)
            calcButtons[9].click();
            break;
        case "6":
            console.log(k.key)
            calcButtons[10].click();
            break;
        case "-":
            console.log(k.key)
            calcButtons[11].click();
            break;
        case "1":
            console.log(k.key)
            calcButtons[12].click();
            break;
        case "2":
            console.log(k.key)
            calcButtons[13].click();
            break;
        case "3":
            console.log(k.key)
            calcButtons[14].click();
            break;
        case "+":
            console.log(k.key)
            calcButtons[15].click();
            break;
        case ".":
            console.log(k.key)
            calcButtons[16].click();
            break;
        case "0":
            console.log(k.key)
            calcButtons[17].click();
            break;
        case "=" :
        case"Enter":    
            console.log(k.key)
            calcButtons[19].click();
            break;
    }
});

function add(num1, num2){
    return num1 + num2;
}
function substract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function devide(num1, num2){
    return num1 / num2;
}
function operate(num1, num2, operatorLocal){
    num1 = Number(num1);
    num2 = Number(num2);
    let result;

    switch(operatorLocal){
        case ("+"):
            result = add(num1,num2);
            break;
        case ("-"):
            result = substract(num1, num2);
            break;
        case ("/"):
            result = devide(num1, num2);
            break;
        case ("x"):
            result = multiply(num1, num2);
            break;            
    }
    updateDisplay(result);
    numOne = result;
    numTwo = "";
    operator = "";

}
function updateNumber(num){
    if(operator == ""){
        numOne = numOne+num;
        updateDisplay(numOne)
        console.log(numOne)
    }else{
        numTwo = `${numTwo}${num}`
        updateDisplay(numTwo);
    };
    
}
function updateDisplay(num){
    primaryDisplay.innerText = num;
}
function updateSecondaryDisplay(){
    let secDisplayText = numOne;
    if(operator != ""){
        secDisplayText = secDisplayText+" "+operator;
    }
    if(numTwo != ""){
        secDisplayText = secDisplayText + " "+ numTwo;
    }
    if(result != ""){
        secDisplayText = secDisplayText+" "+result;
    }
    secondaryDisplay.innerText = secDisplayText;
}
function clearDisplay(){
primaryDisplay.innerText = "0";
}   
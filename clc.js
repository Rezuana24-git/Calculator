function sum (a , b){
    return a + b;
};
function difference(a ,b){
    return a -b;
};
function multiply ( a, b){
    return a * b;
};
function divide (a, b){
    return a / b;
};
function power (a , b){
    return a**b;
};
let firstNumber;
let lastNumber;
let operator;

function operate(operator, firstNumber, lastNumber){
    if (operator == "+" ){
        return sum(firstNumber, lastNumber)
    }
    else if (operator == "-"){
        return difference(firstNumber, lastNumber)
    }
    else if (operator == "/"){
        return  Number((divide(firstNumber, lastNumber)).toFixed(5))
    }
    else if (operator == "*"){
        return multiply(firstNumber, lastNumber)
    }
    else{
        return power(firstNumber, lastNumber)
    }
}
const digits= document.querySelectorAll("[data-digit]");
let current = document.getElementById('current')
let expression = document.getElementById('expression')
let currentValue= "";
let resultShown = false;
digits.forEach((e)=>{
    e.addEventListener("click", (event)=>{
        if (resultShown){
            firstNumber= ""
            operator =""
            currentValue = ""
            expression.textContent = ""
            resultShown = false
        }
         if ((event.target.textContent === ".") && (currentValue.includes("."))){
            return;
        }
        else if((currentValue == "") && (event.target.textContent === ".")){
            currentValue = "0"
        }
        currentValue += event.target.textContent
        current.textContent = currentValue  
    
    })
})

const buttons = document.querySelectorAll("[data-operator]")
buttons.forEach((e)=>{
    e.addEventListener("click", (event)=>{
        if (event.target.dataset.operator == "="){
            if (resultShown && currentValue != ""){
                return;
            }
            if ((operator === "/") && (currentValue == 0) && (currentValue != "")){
                current.textContent = "Divided by zero error"
                firstNumber= ""
                currentValue = ""
                expression.textContent = ""
                resultShown = true
                return
            }
            else if(firstNumber&&currentValue&&operator){
            lastNumber= currentValue
            expression.textContent += lastNumber
            expression.textContent += event.target.dataset.operator
            current.textContent= operate(operator , Number(firstNumber), Number(lastNumber))
            resultShown = true
            }
            else{
                return;
            }
            }
        else if ((!currentValue) && (firstNumber)){
            operator= event.target.dataset.operator
            expression.textContent = firstNumber + operator
            return 
        }
        
        else{
            resultShown = false
            if(firstNumber&&currentValue&&operator){
                firstNumber= operate(operator , Number(firstNumber), Number(currentValue))
                current.textContent = firstNumber
            }
            else{
                firstNumber = currentValue
            }
           operator = event.target.dataset.operator
           currentValue = ""
           expression.textContent = firstNumber + operator
        }
    })
})

const clear = document.getElementById("clear")
clear.addEventListener("click", ()=>{
    firstNumber="";
    lastNumber="";
    currentValue="";
    operator="";
    resultShown = false;
    expression.textContent = "";
    current.textContent = "";
})

const backspace = document.getElementById("backspace")
backspace.addEventListener("click", ()=>{
    if (resultShown){
        return;
    }
    else{
        currentValue= currentValue.slice(0,-1)
        current.textContent = currentValue
    }
    

})

document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (key === "Backspace") {
        document.getElementById("backspace").click();
        return;
    }
    if (key === "Escape") {
        document.getElementById("clear").click();
        return;
    }

    if (key === "Enter") {
        key = "=";
        event.preventDefault();
    }
    if (key === "/") {
        event.preventDefault();
    }

    const button =
        document.querySelector(`[data-digit="${key}"]`) ||
        document.querySelector(`[data-operator="${key}"]`);

    if (button) {
        button.click();
    }
});
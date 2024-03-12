// Think about how you are going to store the state of the calculator. What kind of information do you need to track?
// When the user clicks a button, how are you going to get which number or operation they clicked? When they click a certain button, what code are you going to have to run?
// Try not to use a separate event handler for each button; remember what we learned in the DOM events lesson about "event delegation."

/*----- constants -----*/


/*----- state variables -----*/
let currentInput = '';
let operator = '';
let userInput = [];


/*----- cached elements  -----*/
const headerEl = document.querySelector('header');
const outputEl = document.getElementById('output');
const numbersEl = document.getElementById('numbers');
const clearBtnEl = document.getElementById('clear');
const totalBtnEl = document.getElementById('equal');
const displayEl = document.getElementById('display');





/*----- event listeners -----*/
document.getElementById("numbers").addEventListener("click", handleNumbers);
document.getElementById("operators").addEventListener("click", handleOperator)
clearBtnEl.addEventListener("click", init);
totalBtnEl.addEventListener("click", handleTotal);


/*----- functions -----*/
init();

function init() {
   
    clearCalculator()
}

function handleTotal(evt) {
    userInput.push(currentInput);
    let total = handleMathOp();
    outputEl.innerText = total;
}

function handleMathOp(evt){
    const input = userInput.map(item => isNaN(item) ? item : parseFloat(item));
    let result = input[0]
    for (let i = 1; i < input.length; i += 2) {
        const operator = input[i];
        const operand = input[i + 1];
    
        switch (operator) {
            case "+":
                result += operand;
                break;
            case "-":
                result -= operand;
                break;
            case "*":
                result *= operand;
                break;
            case "/":
                result /= operand;
                break;
            default:
                console.error("Invalid operator:", operator);
                break;
        }}
    return result
}


function handleNumbers(evt) {
    
    if(evt.target.id=== "numbers") return;
    if (outputEl.innerText === "0") {
        outputEl.innerText = evt.target.innerText
        currentInput = outputEl.innerText;
    } else {
        outputEl.innerText = outputEl.innerText + evt.target.innerText
        currentInput = outputEl.innerText;
        console.log(currentInput)
        console.log(outputEl.innerText)
    }
}

function handleOperator(evt) {
    if(evt.target.id === "operators") return;
    operator = evt.target.id;
    userInput.push(currentInput);
    userInput.push(operator)
    currentInput = '';
    console.log(userInput)
    updateDisplay();
    
}

function updateDisplay() {
    document.getElementById('output').innerText = currentInput || '0';
}

function renderCurrentNumber() {
    displayEl = evt.target.innerText
}


function clearCalculator() {
    currentInput = '';
    operator = '';
    outputEl.innerText = "0";
    userInput = [];
}

// Step-01 Select all input fields
const inputOne = document.getElementById("input1");
const inputTwo = document.getElementById("input2");
const result = document.getElementById("result");
//Step-02 take two input value and find the sum of two values

function add() {
    if (inputOne.value && inputTwo.value) {
        let add = parseInt(inputOne.value) + parseInt(inputTwo.value);
        result.innerHTML = add;
    } else {
        alert("Please enter value");
    }
}
function substract() {
    if (inputOne.value && inputTwo.value) {
        let substract = parseInt(inputOne.value) - parseInt(inputTwo.value);
        result.innerHTML = substract;
    } else {
        alert("Please enter value");
    }
}
function multiply() {
    if (inputOne.value && inputTwo.value) {
        let multiply = parseInt(inputOne.value) * parseInt(inputTwo.value);
        result.innerHTML = multiply;
    } else {
        alert("Please enter value");
    }
}
function division() {
    if (inputOne.value && inputTwo.value) {
        let division = parseInt(inputOne.value) / parseInt(inputTwo.value);
        result.innerHTML = division;
    } else {
        alert("Please enter value");
    }
}

// Selectors
const calcKeys = document.querySelectorAll('.btn-number, .btn-operator');
const displayInput = document.querySelector('.display-input');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');
const btnDelete = document.querySelector('.btn-delete');

let displayValue ="";

// Event listeners
calcKeys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.getAttribute('data-num');
    displayValue += keyValue;
   displayInput.textContent = displayValue;
  //  alert(displayInput.textContent);
  })
})

btnEqual.addEventListener('click', equalsBtn);
btnDelete.addEventListener('click', deleteBtn);
btnClear.addEventListener('click', clearBtn);

// FUNCTIONS
function equalsBtn() {
  displayValue = eval(displayValue);
  displayInput.textContent = displayValue;
}

function deleteBtn() {
  displayValue = displayValue.substring(0, displayValue.length - 1);
displayInput.textContent = displayValue;
console.log(displayValue);
}

function clearBtn() {
  displayValue = "";
  displayInput.textContent = displayValue;
}

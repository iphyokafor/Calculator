// Selectors
const calcKeys = document.querySelectorAll('.btn-number, .btn-operator');
const displayInput = document.querySelector('.display-input');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');
const btnDelete = document.querySelector('.btn-delete');

let displayValue ="";
let maxLength = 15;

// Event listeners
calcKeys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.getAttribute('data-num');
    displayValue += keyValue;
    if (displayValue.length > maxLength){
      alert ('You have exceeded the input limit');
    } else {
   displayInput.textContent = displayValue;
  }
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
}

function clearBtn() {
  displayValue = "";
  displayInput.textContent = displayValue;
}

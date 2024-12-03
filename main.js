let billAmountInput = document.getElementById('bill-amount-input');
let tipAmountText = document.getElementById('tip-amount-person');
let tipAmountTotal = document.getElementById('tip-amount-total');
let tipAmountCustom = document.getElementById('tip-amount-custom');
let numberOfPeople = document.getElementById("number-people-input");
let numberPeopleErrorMessage = document.getElementById("number-people-error");
let numberPeopleInput = document.getElementById("number-people-input");

const displayTipAmounts = () => {
    let selectedRadio = document.querySelector('input[name="tip"]:checked');
    if ((selectedRadio !== null | tipAmountCustom.value !== '') && numberOfPeople.value !== '' && billAmountInput.value !== '' && billAmountInput.value !== 0) {
        let tip = (billAmountInput.value * ((tipAmountCustom.value !== '' ? tipAmountCustom.value : selectedRadio.value) / 100)).toFixed(2);

        let tipPerPerson = (tip / numberOfPeople.value).toFixed(2);
        
        tipAmountText.innerText = "$" + tip;
        tipAmountTotal.innerText = "$" + tipPerPerson;
    }
};

billAmountInput.addEventListener('input', function (evt) {
    displayTipAmounts();
});

numberOfPeople.addEventListener('input', function (evt) {
    if (numberOfPeople.value > 0) {
        numberPeopleErrorMessage.classList.remove("error-visible")
        numberPeopleInput.classList.remove("error-visible-border")
        displayTipAmounts();
    } else {
        numberPeopleErrorMessage.classList.add("error-visible")
        numberPeopleInput.classList.add("error-visible-border")
    }
});

document.querySelectorAll("input[name='tip']").forEach((input) => {
    if (billAmountInput.value !== null && billAmountInput.value !== 0) {
        input.addEventListener('change', displayTipAmounts);
    } else {
        input.checked = false;
    }
});

tipAmountCustom.addEventListener('input', function (evt) {
    let selectedRadio = document.querySelector('input[name="tip"]:checked');
    if (selectedRadio !== null) {
        selectedRadio.checked = false
    }
    
    displayTipAmounts();
});
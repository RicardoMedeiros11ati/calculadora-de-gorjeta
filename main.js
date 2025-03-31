let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

//receber valor da conta 
let billInput = document.querySelector("#bill")
billInput.addEventListener('input', receiveBillValue)

function receiveBillValue(){
    bill = billInput.valueAsNumber
}

//receber o numero de pessoas

let numberOfPeopleInput = document.querySelector ("#people")
numberOfPeopleInput.addEventListener('input', receiveNumberOfPeople )

function receiveNumberOfPeople(){
    numberOfPeople  = numberOfPeopleInput.valueAsNumber
    calculate()
}

function receiveTipPercentage (value){

    if (buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
    }
}
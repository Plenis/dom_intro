// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemType");

//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill


var callsTotalElemTwo = document.querySelector(".callTotalTwo");
var smsTotalElemTwo = document.querySelector(".smsTotalTwo");
var totalCostElemTwo = document.querySelector(".totalTwo");


var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

// my radio bill function 

function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}
    if (billItemType === "call"){
        callsTotal += 2.75 
        
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
    
    callsTotalElemTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalElemTwo.innerHTML = smsTotal.toFixed(2);
     totalCost = callsTotal + smsTotal;
    totalCostElemTwo.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        totalCostElemTwo.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElemTwo.classList.add("warning");
    }
}

// event listener

radioBillAddBtn.addEventListener('click', radioBillTotal);



// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemType");

//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill


var callsTotalElemTwo2 = document.querySelector(".callTotalTwo2");
var smsTotalElemTwo2 = document.querySelector(".smsTotalTwo2");
var totalCostElemTwo2 = document.querySelector(".totalTwo2");


var callTotalTwo2 = 0;
var smsTotalTwo2 = 0;
var totalCostTwo2 = 0;

// my radio bill function 

function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}
    if (billItemType === "call"){
        callTotalTwo2 += 2.75 
        
    }
    else if (billItemType === "sms"){
        smsTotalTwo2 += 0.75;
    }
    
    callsTotalElemTwo2.innerHTML = callTotalTwo2.toFixed(2);
    smsTotalElemTwo2.innerHTML = smsTotalTwo2.toFixed(2);
     totalCostTwo2 = callTotalTwo2 + smsTotalTwo2;
    totalCostElemTwo2.innerHTML = totalCostTwo2.toFixed(2);

    if (totalCostTwo2 >= 50){
        totalCostElemTwo2.classList.add("danger");
    }
    else if (totalCostTwo2 >= 30){
        totalCostElemTwo2.classList.add("warning");
    }
}

// event listener

radioBillAddBtn.addEventListener('click', radioBillTotal);



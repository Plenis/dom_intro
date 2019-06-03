// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");

//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn")

//create a variable that will keep track of the total bill
var callsTotalElemOne = document.querySelector(".callTotalOne");
var smsTotalElemOne = document.querySelector(".smsTotalOne");
var totalCostElemOne = document.querySelector(".totalOne");

// these variables are global and defined outside of the Add button event listener.
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;


function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75 
        
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElemOne.innerHTML = callsTotal.toFixed(2);
    smsTotalElemOne.innerHTML = smsTotal.toFixed(2);
     totalCost = callsTotal + smsTotal;
    totalCostElemOne.innerHTML = totalCost.toFixed(2);


    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElemOne.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElemOne.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);

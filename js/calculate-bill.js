//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
var billStringField = document.querySelector(".billString");

let calculateBill = FactoryCalculateBill();


function calculateBtnClicked(){
  
    var billString = billStringField.value;
    var billTotal = calculateBill.billString(billType);
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
    // for (var i=0;i<billItems.length;i++){
    //     var billItem = billItems[i].trim();
    //     if (billItem === "call"){
    //         billTotal += 2.75;
    //     }
    //     else if (billItem === "sms"){
    //         billTotal += 0.75;
    //     }
    // }
    
   var colour = calculateBill.colourIndicator(billTotal)

    if( colour == "danger"){
        billTotalElement.classList.add(colour);
        billTotalElement.classList.remove("warning");
    }
    else if(colour == "warning"){
        billTotalElement.classList.add(colour);
        billTotalElement.classList.remove("danger");

    }
    else{
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.remove("danger");

    }
  
}
   
calculateBtn.addEventListener('click', calculateBtnClicked);



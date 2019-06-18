var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
var billStringField = document.querySelector(".billString");

var totalBill = calculateBtnClicked();
    calculateBtn.addEventListener('click', function(){
    totalBill.logic();
    billTotalElement.innerHTML =  totalBill.logic()
    });

    var roundedBillTotal = billTotalElement;

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

billTotalElement.innerHTML = roundedBillTotal;

calculateBtn.addEventListener('click', calculateBtnClicked);
var billTypeText = document.querySelector(".billTypeText");
var textTotalAddBtn = document.querySelector(".addToBillBtn")
var callsTotalElemOne = document.querySelector(".callTotalOne");
var smsTotalElemOne = document.querySelector(".smsTotalOne");
var totalCostElemOne = document.querySelector(".totalOne");

var instance = textBillOpp();



var billSource = document.querySelector(".billTemplate").innerHTML;
var billTemplate = Handlebars.compile(billSource);
var textBillElem = document.querySelector(".textBill");

function textBillTotal() {

    instance.textBillTot(billTypeText.value);

    var colorChange = instance.colorIndicator();
     
    
    var textBill = ({
    callTotal: instance.getTotalCall(),
    smsTotal: instance.getTotalSms(),
    total: instance.getTotalBill(), 
    colorChange
    });

    textBillHTML = billTemplate(textBill);
    textBillElem.innerHTML = textBillHTML;
}

textTotalAddBtn.addEventListener('click', textBillTotal);

// Handlebars.registerHelper('warn', function() {
//     if(instance.colorIndicator() === "warning"){ 
//         console.log('warning')
//     return true
//     }
// });

// Handlebars.registerHelper('danger', function() {
//     if(instance.colorIndicator() === "danger"){
//         console.log('danger')
//         return true
//         } 
// });
var billItemTypeRadio = document.querySelector(".billItemType");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var callsTotalElemTwo2 = document.querySelector(".callTotalTwo2");
var smsTotalElemTwo2 = document.querySelector(".smsTotalTwo2");
var totalCostElemTwo2 = document.querySelector(".totalTwo2");

var instance1 = RadioButtonBill();

var radioSource = document.querySelector(".billTemplate").innerHTML;
var billTemplate = Handlebars.compile(radioSource);
var radioBillElem = document.querySelector(".radioBill");

function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
 var colorSwitch = instance1.colorChanger();

    instance1.radioBill(checkedRadioBtn.value )
    
  
    // callsTotalElemTwo2.innerHTML = instance1.getTotalCall();
    // smsTotalElemTwo2.innerHTML = instance1.getTotalSms();
    // totalCostElemTwo2.innerHTML = instance1.getTotalBill();

    var radioBill = ({
        callTotal: instance1.getCallTotal(),
        smsTotal: instance1.getSmsTotal(),
        total: instance1.getBillTotal(), 
        colorSwitch
        });
    
        radioBillHTML = billTemplate(radioBill);
        radioBillElem.innerHTML = radioBillHTML;
    }

// event listener

radioBillAddBtn.addEventListener('click', radioBillTotal);


Handlebars.registerHelper('warn', function() {
    if(instance1.colorChanger() === "warning"){
        console.log('test')
    return true
    }
});

Handlebars.registerHelper('danger', function() {
    if(instance1.colorChanger() === "danger"){
        return true
        } 
});
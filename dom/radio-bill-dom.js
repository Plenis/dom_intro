var billItemTypeRadio = document.querySelector(".billItemType");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var callsTotalElemTwo2 = document.querySelector(".callTotalTwo2");
var smsTotalElemTwo2 = document.querySelector(".smsTotalTwo2");
var totalCostElemTwo2 = document.querySelector(".totalTwo2");

var instance1 = RadioButtonBill();

var radioSource = document.querySelector(".billTemplate").innerHTML;
var billTemplate = Handlebars.compile(radioSource);
var radioBillElem = document.querySelector(".radioBill");

function radioBillTotal() {
    
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  
    instance1.radioBill(checkedRadioBtn.value)

    var colorChange = instance1.colorChanger();


    var radioBill = ({
        callTotal: "R" + instance1.getCallTotal(),
        smsTotal: "R" + instance1.getSmsTotal(),
        total: "R" + instance1.getBillTotal(),
        colorChange
    });

    radioBillHTML = billTemplate(radioBill);
    radioBillElem.innerHTML = radioBillHTML;
}

radioBillAddBtn.addEventListener('click', radioBillTotal);


function calculateBtnClicked() {
    var billTotal = 0;

    function billString(billType) {
        // var billItems = billType.split(",");
        // for (var i=0;i<billItems.length;i++){
        //     var billItem = billItems[i].trim();
        if (billType === "call") {
            billTotal += 2.75;
        }
        else if (billType === "sms") {
            billTotal += 0.75;
        }
        return "R" + billTotal.toFixed(2)
    }

// function returnTotal(){
//     return billTotal.toFixed(2)
// }

function warningLevel() {
    //   if (totalBill > 20 && totalBill < 30){
    return billTotal >= 20;
}

function criticalLevel() {
    //   if (totalBill > 20 && totalBill < 30){
    return billTotal >= 30;
}

return {
    logic: billString,
    colour1: warningLevel,
    colour2: criticalLevel
}
   
}   
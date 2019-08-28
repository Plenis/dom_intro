function textBillOpp() {

    var callsTotal = 0;
    var smsTotal = 0;
    var totalCost = 0;
    


    function textBillTot(textTotal) {
        var total = textTotal;

        if (total === "call") {
            callsTotal += 2.75

        }
        else if (total === "sms") {
            smsTotal += 0.75;
        }
        totalCost = callsTotal + smsTotal;
    }

    function getTotalCall() {
        return callsTotal.toFixed(2);
    }

    function getTotalSms() {
        return smsTotal.toFixed(2);
    }

    function getTotalBill() {
        return totalCost.toFixed(2);
    }

    function colorIndicator(){
            console.log('color indicator');
            console.log(getTotalBill());
          
            
        if (getTotalBill() > 30 && getTotalBill() < 50){
            
            return "warning"
        }
        if (getTotalBill() >= 50){
            return "danger"
        }
    }

    return {
        textBillTot,
        getTotalCall,
        getTotalSms,
        getTotalBill,
        colorIndicator,
    }
}
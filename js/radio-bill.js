function RadioButtonBill() {

    var callTotalTwo2 = 0;
    var smsTotalTwo2 = 0;
    var totalCostTwo2 = 0;

    function radioBill(bill) {

        var radioBillType = bill;

        if (radioBillType === "call") {
            callTotalTwo2 += 2.75

        }
        else if (radioBillType === "sms") {
            smsTotalTwo2 += 0.75;
        }
        totalCostTwo2 = callTotalTwo2 + smsTotalTwo2;
    }

    function getCallTotal() {
        return callTotalTwo2.toFixed(2)
    }

    function getSmsTotal() {
        return smsTotalTwo2.toFixed(2)
    }

    function getBillTotal() {
        return totalCostTwo2.toFixed(2)
    }

    function colorChanger() {

        if (getBillTotal() > 30 && getBillTotal() < 50) {
            return "warning"
        }

        if (getBillTotal() >= 50) {
            return "danger"

        }
    }
    return {
        radioBill,
        getCallTotal,
        getSmsTotal,
        getBillTotal,
        colorChanger,
    }
}
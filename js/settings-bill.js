// // get a reference to the sms or call radio buttons

// var callsTotalElemThree = document.querySelector(".callTotalSettings");
// var smsTotalElemThree = document.querySelector(".smsTotalSettings");
// var totalCostElemThree = document.querySelector(".totalSettings");
// var callCost = document.querySelector(".callCostSetting");
// var smsCost = document.querySelector(".smsCostSetting");
// var warningLevel = document.querySelector(".warningLevelSetting");
// var criticalLevel = document.querySelector(".criticalLevelSetting");
// var updateSettingsBtn = document.querySelector(".updateSettings");
// var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

// //get a reference to the add button
// var settingBillAddBtn = document.querySelector(".radioBillAddBtn");

// var callsTotal = 0;
// var smsTotal = 0;
// var totalCost = 0;

// var callCostThree = 0;
// var smsCostThree = 0;
// var warningLevelThree = 0;
// var criticalLevelThree = 0;


// // my setting bill function

// function updateSettingsBtn(){

// }

// function settingBillTotal(){
//     var checkedSettingBtn = document.querySelector("input[name='billItemType']:checked");
// if (checkedSettingBtn){
//     var settingItemType = checkedSettingBtn.value
//     // billItemType will be 'call' or 'sms'
// }
//     if (settingItemType === "call"){
//         callsTotal += 2.75 
        
//     }
//     else if (settingItemType === "sms"){
//         smsTotal += 0.75;
//     }
    
//     callsTotalElemThree.innerHTML = callsTotal.toFixed(2);
//     smsTotalElemThree.innerHTML = smsTotal.toFixed(2);
//      totalCost = callsTotal + smsTotal;
//      totalCostElemThree.innerHTML = totalCost.toFixed(2);

//     if (totalCost >= 50){
//         totalCostElemThree.classList.add("danger");
//     }
//     else if (totalCost >= 30){
//         totalCostElemThree.classList.add("warning");
//     }
// }

// // event listener

// radio.addEventListener('click', settingBillTotal);



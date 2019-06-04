// get a reference to the sms or call radio buttons

var callsTotalElemThree = document.querySelector(".callTotalSettings");
var smsTotalElemThree = document.querySelector(".smsTotalSettings");
var totalCostElemThree = document.querySelector(".totalSettings");
var callCost = document.querySelector(".callCostSetting");
var smsCost = document.querySelector(".smsCostSetting");
var settingBillAddBtn = document.querySelector(".settingBillAddBtn");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSettingsBtn = document.querySelector(".updateSettings");
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

var settingType = document.querySelector(".billItemTypeWithSettings");

//get a reference to the add button
// var settingsBtnElem = document.querySelector(".settingsBtn");

var callsTotalS = 0;
var smsTotals = 0;
var totalCostS = 0;

var callCostThree = 0;
var smsCostThree = 0;

var warningLevel = warningLevelSetting.value;
var criticalLevel = criticalLevelSetting.value;
 


// my setting bill function

function updateSettingsTotalbill(){
    callCostThree = Number(callCost.value);
    smsCostThree = Number(smsCost.value);
    warningLevel = Number(warningLevelSetting.value);
    criticalLevel = Number(criticalLevelSetting.value);

    
    if (totalCostS >= criticalLevel){
        totalCostElemThree.classList.add("danger");
        totalCostElemThree.classList.remove("warning");
        settingBillAddBtn.disabled = false;
        
    }
    if (totalCostS >= warningLevel){
        totalCostElemThree.classList.add("warning");
        totalCostElemThree.classList.remove("danger");
        settingBillAddBtn.disabled = false;
    }
   
    if (totalCostS < warningLevel){
        totalCostElemThree.classList.remove("warning");
        totalCostElemThree.classList.remove("danger");
        settingBillAddBtn.disabled = false;
    }
}

function addSettingBtn(){
  
     var elem = document.querySelector("input[name='billItemTypeWithSettings']:checked");

        if (elem.checked == true) {
            if (elem.value === "call") {
                callsTotalS += Number(callCostThree)
            } else if (elem.value === "sms") {
                smsTotals += Number(smsCostThree)
            }
        
   
    callsTotalElemThree.innerHTML = callsTotalS.toFixed(2);
    smsTotalElemThree.innerHTML = smsTotals.toFixed(2);
    totalCostS = callsTotalS + smsTotals;
     totalCostElemThree.innerHTML = totalCostS.toFixed(2);
    }
    

    if (totalCostS >= warningLevel){
        totalCostElemThree.classList.add("warning");
        totalCostElemThree.classList.remove("danger");
      
    }

    if (totalCostS >= criticalLevel){
        totalCostElemThree.classList.add("danger");
        totalCostElemThree.classList.remove("warning");
        settingBillAddBtn.disabled = true;
        
    }
  
    if (totalCostS < warningLevel){
        totalCostElemThree.classList.remove("warning");
        totalCostElemThree.classList.remove("danger");
       
    }
}
updateSettingsBtn.addEventListener('click', updateSettingsTotalbill);
settingBillAddBtn.addEventListener('click', addSettingBtn);


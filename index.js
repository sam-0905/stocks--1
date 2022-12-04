const intialPrice = document.querySelector("#intial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#Current-price");
const stockBtn = document.querySelector("#stock-btn")
const outputBox = document.querySelector("#output-box")


//console.log(intialPrice, stocksQuantity, currentPrice);
//console.log(stockBtn, outputBox);

function clickHandler() {
    var intiPrice = Number(intialPrice.value);
    var stcksQuantity = Number(stocksQuantity.value);
    var currPrice = Number(currentPrice.value);

    calculateProfitAndLoss(intiPrice, stcksQuantity, currPrice);

    intialPrice.value = "";
    stocksQuantity.value = "";
    currentPrice.value = "";

}

function calculateProfitAndLoss(intial, quantity, current) {

    if (intial < 0 || quantity < 0 || current < 0) {
        showMessage("Enter valid values")
        return;
    }

    if (intial > current) { // loss logic here 
        var loss = (intial - current) * quantity;
        var lossPercentage = (loss / intial) * 100;

        showMessage(`Hey! the loss is ${loss} and the percent is ${lossPercentage} %`)


    } else if (current > intial) { // profit logic here
        var profit = (current - intial) * quantity;
        var profitPercentage = (profit / intial) * 100;

        showMessage(`Hey the profit is ${profit} and the percent is ${profitPercentage} %`)

    } else { //  rest logic here
        //showMessage(`Hey !No pain No Gain and No gain No pain !`)

    }


}

function showMessage(message) {
    outputBox.innerHTML = message;

}

stockBtn.addEventListener('click', clickHandler)

//console.log(calculateProfitAndLoss(100, 10, 10));
//console.log(calculateProfitAndLoss(10, 10, 100));
//console.log(calculateProfitAndLoss(10, 10, 10));
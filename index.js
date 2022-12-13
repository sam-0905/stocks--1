const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#Current-price");
const stockBtn = document.querySelector("#stock-btn")
const outputBox = document.querySelector("#output-box")


//console.log(initialPrice, stocksQuantity, currentPrice);
//console.log(stockBtn, outputBox);

function clickHandler() {
    var initiPrice = Number(initialPrice.value);
    var stcksQuantity = Number(stocksQuantity.value);
    var currPrice = Number(currentPrice.value);

    calculateProfitAndLoss(initiPrice, stcksQuantity, currPrice);

    initialPrice.value = "";
    stocksQuantity.value = "";
    currentPrice.value = "";

}

function calculateProfitAndLoss(initial, quantity, current) {

    if (initial < 0 || quantity < 0 || current < 0) {
        showMessage("Enter valid values")
        return;
    }

    if (initial > current) { // loss logic here 
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showMessage(`Hey! the loss is ${loss} and the percent is ${lossPercentage} %`)


    } else if (current > initial) { // profit logic here
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        showMessage(`Hey the profit is ${profit} and the percent is ${profitPercentage} %`)

    }
    // else { //  rest logic here
    // showMessage(`Hey !No pain No Gain and No gain No pain !`)
    //}
}

function showMessage(message) {
    outputBox.innerHTML = message;

}

stockBtn.addEventListener('click', clickHandler)

//console.log(calculateProfitAndLoss(100, 10, 10));
//console.log(calculateProfitAndLoss(10, 10, 100));
//console.log(calculateProfitAndLoss(10, 10, 10));
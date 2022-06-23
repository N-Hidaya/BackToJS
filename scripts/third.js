//Function declaration
function doSomeMath(a, b) {
    let c = a + b
    return c;
}

//Function expression
const doMoreMath = function (a, b)  {
    let c = a*b;
    return c;
};

console.log(doSomeMath(5,6));
console.log(doMoreMath(5,6));

//Immediately invoked function expression (IIFE)
(function () {
    let a = 4;
    let b = 6;
    let c = doSomeMath(a, b);
    console.log(`The sum of a and b is ${c}`);
})();

//Arrow function with few parameters
const tipCalculator = (sum, percentage, currency, prefix) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    if(prefix){
        console.log(`
            Sum before tip: ${currency}${sum}
            Tip percentage: ${percentage}%
            Tip:            ${currency}${tip.toFixed(2)}
            Total:          ${currency}${total.toFixed(2)}
        `);
    } else {
        console.log(`
            Sum before tip: ${sum}${currency}
            Tip percentage: ${percentage}%
            Tip:            ${tip.toFixed(2)}${currency}
            Total:          ${total.toFixed(2)}${currency}
        `);
    }
};

tipCalculator(29.95, 28, "$", true);

//Using country currencies formatter
const formatter = (locale, currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,

    }).format(value);
    return formattedValue;
};

const finalCalculator = (locale, currency, sum, percentage, callback) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    const finalTip = {
        sum: formatter(locale, currency, sum),
        percentage: percentage + "%",
        tip: formatter(locale, currency, tip),
        total: formatter(local, currency, total)
    };
    callback(finalTip);
};

finalCalculator("de-DE", "EUR", 29.95, 18, printCalculator);

//creating HTML interface with callback
const printCalculator = (finalTip) => {
    const tipTable = document.createElement("table");
    tipTable.innerHTML = `
        <tr>
            <td>Sum before tip</td>
            <td>${finalTip.sum}</td>
        </tr>
        <tr>
            <td>Tip percentage</td>
            <td>$finalTip.percentage</td>
        </tr>
        <tr>
            <td>Tip:</td>
            <td>${finalTip.tip}</td>
        </tr>
        <tr>
            <td>Total:</td>
            <td>${finalTip.total}</td>
        </tr>
    `;
    document.querySelector("main").append(tipTable);
};
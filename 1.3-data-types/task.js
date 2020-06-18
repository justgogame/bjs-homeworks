"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    if(Number.isNaN(percent)){
        return `Некорректный параметр`;
    } else if(Number.isNaN(contribution)){
        return `Некорректный параметр`;
    } else if(Number.isNaN(amount)) {
        return `Некорректный параметр`;
    } else {
        let loanBody = amount - contribution;
        let paidMonths = ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth());
        let P = (percent / 100) / 12;
        let perMonth = loanBody * (P + P / (((1 + P) ** paidMonths) - 1));
        let totalAmount = parseFloat((perMonth * paidMonths).toFixed(2));
        return totalAmount;
    }
}





function getGreeting(name) {
    if (name == "null" || name == "undefined" || typeof name !=="string" || name.length < 1){
        return `Привет, мир! Меня зовут Аноним`;
    } else {
        return `Привет, мир! Меня зовут ${name}`;
    }
}
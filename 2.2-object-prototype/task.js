"use strict";
String.prototype.isPalindrome = function (){
    let text = this;
    text = text.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    for (let i = 0, j = text.length - 1; i < j; i++, j--) {
         if(text[i] != text[j])
           return false;
    }
    return true;
}

function getAverageMark(marks) {
    if(marks.length === 0){
       return 0; 
    }
    const average = marks.reduce((a, b) => (a + b)) / marks.length;
    const roundedAverage= Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
"use strict";
function getResult(a,b,c){
    let x = [];
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D === 0){
        x.push((-b + Math.sqrt(D)) / (2 * a));  
    }
    else if (D > 0){
        x.push((-b + Math.sqrt(D)) / (2 * a));
        x.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return x;
}

function getAverageMark(marks){
    let sum = 0;
    if (marks.length === 0){
        return 0;
    }
    if (marks.length > 5){
        marks.splice(5);
    }
    for(let i = 0; i < marks.length; i++){
            sum += marks[i];
    }
    return sum/marks.length;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age < 18){
        return("Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!");
    }
    else {
        return("Не желаете ли олд-фэшн, " + name + "?")
    }
}
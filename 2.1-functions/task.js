"use strict";
function getSolutions(a, b, c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    if (d < 0){
        return {D: d, roots: x};
    } else if (d === 0){
        x.push(-b/(2 * a));
        return {D: d, roots: x};
    } else{
        x.push((-b + Math.sqrt(d)) / (2 * a));
        x.push((-b - Math.sqrt(d)) / (2 * a));
        return {D: d, roots: x};
    }
}

function showSolutionsMessage(a, b, c){
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0){
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0){
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]} , X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1,9,2);

function getAverageScore(data){
    let averageGrade = {};
    let avarageMarks = [];
    for(let proper in data){
    averageGrade[proper] = getAverageMark(data[proper]);
    avarageMarks.push(averageGrade[proper]);
    }
    averageGrade.average = getAverageMark(avarageMarks);  
    return averageGrade;
}

function getAverageMark(marks){
    let averageMark;
    if(marks.length === 0){
        return 0;
    }
    averageMark = marks.reduce((a, b) => (a + b)) / marks.length;
    return averageMark;
}

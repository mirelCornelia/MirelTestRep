"use strict";

const marksWeights = 78;
const johnWeights = 92;

const marksHeight = 1.69;
const johnHeight = 1.95;


const johnBmi = johnWeights / (johnHeight * johnHeight);

const markBmi = marksWeights / (marksHeight * marksHeight);

console.log(markBmi, johnBmi);

const markHigherBmi = markBmi > johnBmi;
console.log(markHigherBmi);

if (markBmi > johnBmi){
    console.log(true);
};

const marksWeights2 = 95;
const marksHeights2 = 1.88;

const johnWeights2 = 85;
const johnHeights2 = 1.76;

const johnBmi2 = johnWeights2 / (johnHeights2 * johnHeights2);
const markBmi2 = marksWeights / (marksHeights2 * marksHeights2);

const markHigherBmi2 = markBmi2 > johnBmi2;


if (markBmi < johnBmi){
    console.log(`Mark's BMI ${markBmi} is higher than John's bmi ${johnBmi}`);
} else {
    console.log(`John's BMI ${johnBmi} is higher than Mark's bmi ${markBmi}`);
};

const dolphinsScore = (96+ 108 + 89) / 3;
const koalasScore = (88+ 91 + 110) / 3;

const dolphinsScore2 = (97 + 112 + 101 ) / 3;
const koalasScore2 = (109 + 95 + 123 ) / 3;


console.log(dolphinsScore, koalasScore);

if ( dolphinsScore < koalasScore  ){
    console.log('Dolphins win !! ');
} else {
    console.log('Koalas win');
};

console.log(dolphinsScore2, koalasScore2);

if (dolphinsScore2 > koalasScore2 && dolphinsScore2 > 100){
    console.log('Dolphins win the trophy');
} else if (dolphinsScore2 < koalasScore2 && koalasScore2 > 100) {
    console.log('Koalas win the trophy');
} else if (koalasScore2 === dolphinsScore2) {
    console.log('No winner :(');
}


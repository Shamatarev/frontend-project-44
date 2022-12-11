#!/usr/bin/env node

import readlineSync from 'readline-sync';
import  { name }  from './brain-games.js';
function num(){
    let number = (Math.round(Math.random() * 10));
      return number;
    }

function sing(){
    const startSing = '+-*'
    return startSing[Math.round(Math.random() * (0 - 2) + 2)];
}

export function game2(){
  console.log('What is the result of the expression?');
  
  for(let i = 0; i < 3; i++) {
    let randomNum = num();
    let randomNum2 = num();
    let randomSing = sing();
    let quest = readlineSync.question('Question: ' + `${randomNum} ${randomSing} ${randomNum2}` + '\nYour answer: ');
    if((eval(randomNum+randomSing+randomNum2)) ===  Number(quest)) {
        console.log(`Correct`)
    }else{
      console.log(`${quest} is wrong answer ;(. Correct answer was ${eval(randomNum+randomSing+randomNum2)}.\nLet's try again, ${name}`)
      return
    } 
  }
  console.log(`Congratulations, ${name}!`)
};


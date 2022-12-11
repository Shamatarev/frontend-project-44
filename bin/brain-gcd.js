#!/usr/bin/env node

import readlineSync from 'readline-sync';
import  { name }  from './brain-games.js';

function num(){
    let number = (Math.round(Math.random() * 100));
      return number;
    }

function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}

export function game3(){
  console.log('What is the result of the expression?');
  
  for(let i = 0; i < 3; i++) {
    let randomNum = num();
    let randomNum2 = num();
    let nod = NOD(randomNum,randomNum2);
    let quest = readlineSync.question('Question: ' + `${randomNum} ${randomNum2}` + '\nYour answer: ');
    if(nod ===  Number(quest)) {
        console.log(`Correct`)
    }else{
      console.log(`${quest} is wrong answer ;(. Correct answer was ${nod}.\nLet's try again, ${name}`)
      return
    } 
  }
  console.log(`Congratulations, ${name}!`)
};


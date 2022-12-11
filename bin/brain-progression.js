#!/usr/bin/env node

import readlineSync from 'readline-sync';
import  { name }  from './brain-games.js';

function num(){
    let number = (Math.round((Math.random() + 0.1) * 10));
      return number;
    }

function progression () {
    let  prog = [];
    let nomber = num() + 5;
    let nomber2 = num();
    let nomber3 = num();
    for (let i = 0; i < nomber; i++) {
    prog.push(i * nomber2 + nomber3)
    } 
	return prog;
}

export function game4(){
  console.log('What number is missing in the progression?');

  for(let i = 0; i < 3; i++) {
    const randomArrow = progression();
    const randomArrowNomber = Math.round(Math.random() * (randomArrow.length));
    const randomArroX = randomArrow.slice();
        randomArroX[randomArrowNomber] = `..`
    let res = randomArrow[randomArrowNomber];
  
    let quest = readlineSync.question('Question: ' + `${randomArroX}` + '\nYour answer: ');
    if(res ===  Number(quest)) {
        console.log(`Correct`)
    }else{
      console.log(`${quest} is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${name}`)
      return
    } 
  }
  console.log(`Congratulations, ${name}!`)
};


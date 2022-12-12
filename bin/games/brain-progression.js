#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../brain-games.js';

function num() {
  const number = (Math.round((Math.random()) * 10));
  return number;
}

function progression() {
  const prog = [];
  const nomber = num() + 5;
  const nomber2 = num();
  const nomber3 = num();
  for (let i = 0; i < nomber; i++) {
    prog.push(i * nomber2 + nomber3);
  }
  return prog;
}

export function game4() {
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i++) {
    const randomArrow = progression();
    const randomArrowNomber = Math.round(Math.random() * (randomArrow.length));
    const randomArroX = randomArrow.slice();
    randomArroX[randomArrowNomber] = '..';
    const res = randomArrow[randomArrowNomber];
    var myVar = randomArroX.join(' ')
    
    const quest = readlineSync.question('Question: ' + `${myVar}` + '\nYour answer: ');
    if (res === Number(quest)) {
      console.log('Correct');
    } else {
      console.log(`${quest} is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
game4();

#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../brain-games.js';

function num() {
  const number = (Math.round(Math.random() * 100));
  return number;
}

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

function game3() {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = num();
    const randomNum2 = num();
    const nod = NOD(randomNum, randomNum2);
    const quest = readlineSync.question('Question: ' + `${randomNum} ${randomNum2}` + '\nYour answer: ');
    if (nod === Number(quest)) {
      console.log('Correct');
    } else {
      console.log(`${quest} is wrong answer ;(. Correct answer was ${nod}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
game3();

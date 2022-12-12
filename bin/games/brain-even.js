#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../brain-games.js';

function num() {
  const number = (Math.round(Math.random() * 100));
  return number;
}

function game() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = num();
    const quest = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    if ((randomNum % 2 === 0 && quest === 'yes') || (randomNum % 2 !== 0 && quest === 'no')) {
      console.log('Correct');
    } else {
      console.log(`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
game();

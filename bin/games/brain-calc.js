#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../brain-games.js';

function num() {
  const number = (Math.round(Math.random() * 10));
  return number;
}

function sing() {
  const startSing = '+-*';
  return startSing[Math.round(Math.random() * (0 - 2) + 2)];
}

const getCalculate = (num1, num2, character) => {
  switch (character) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    default:
      return null;
  }
};

function game2() {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = num();
    const randomNum2 = num();
    const randomSing = sing();
    const result = getCalculate(randomNum, randomNum2, randomSing);

    const quest = readlineSync.question(`Question: ${randomNum} ${randomSing} ${randomNum2}\nYour answer: `);
    if (result === quest) {
      console.log('Correct');
    } else {
      console.log(`${quest} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
game2();

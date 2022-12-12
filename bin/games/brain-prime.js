#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../brain-games.js';

function num() {
  const number = (Math.round(Math.random() * 100));
  return number;
}

function test_prime(n) {
  if (n === 1) {
    return 'no';
  } if (n === 2) {
    return 'yes';
  }
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) {
      return 'no';
    }
  }

  return 'yes';
}

function game5() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = num();
    const quest = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    if ((test_prime(randomNum) === 'yes' && quest === 'yes') || (test_prime(randomNum) === 'no' && quest === 'no')) {
      console.log('Correct');
    } else {
      console.log(`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
game5();

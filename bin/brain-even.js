#!/usr/bin/env node

import readlineSync from 'readline-sync';
import  { name }  from './brain-games.js';

function num(){
    let number = (Math.round(Math.random() * 100));
      return number;
    }
   
export function game(){

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for(let i = 0; i < 3; i++) {
    let randomNum = num()
    let quest = readlineSync.question('Question: ' + randomNum  + '\nYour answer: ');
    if((randomNum % 2 === 0 && quest === `yes`) ||(randomNum % 2 !== 0 && quest === `no`)) {
        console.log(`Correct`)
    }else{
      console.log(`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`)
      return
    } 
  }
  console.log(`Congratulations, ${name}!`)
};


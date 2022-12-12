#!/usr/bin/env node

import readlineSync from 'readline-sync';
import  foo  from '../csr/cli.js';

foo();
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);

export { name };

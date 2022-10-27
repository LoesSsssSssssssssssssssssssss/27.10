const express = require('express');
const app = express();
const fs = require("fs");

const host = '127.0.0.1'
const port = 3000

const content = fs.readFileSync('files/data.txt', 'utf8');
console.log(content);
 
fs.appendFile(
    'files/data.txt',
    '\nKOLYA NE LOX',
    'utf8',
    (err) => {
      if (err) throw err;
  
      console.log('Done');
    }
  );
  try {
    const exists = fs.existsSync('files');
    console.log('Exists: ', exists);
  } catch (e) {
    console.log(e);
  }
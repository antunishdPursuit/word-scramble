import React from 'react';
import words from './components/WordsDb';
const API = process.env.REACT_APP_API_URL

let word = words[0]
fetch(API/word)
  .then(response => response.json())
  .then(wordAndDefinitions => console.log(wordAndDefinitions))
  .catch(error => console.error(error));

export default fetch;

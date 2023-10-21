import React from 'react';
import words from './WordsDb';
const API = process.env.REACT_APP_API_URL

let word = words[0]
// console.log(API)


function fetchWord(){
  fetch(`${API}/${word}`)
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.error(error));
}
export default fetchWord;

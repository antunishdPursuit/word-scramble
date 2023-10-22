import { useEffect, useState } from "react";
import words from './WordsDb';
import "./ScrambledWord.css"
const API = process.env.REACT_APP_API_URL

function ScrambledWord () {
  const [wordDefinition, setwordDefinition] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [won, setWon] = useState(false);
  const [todayWord, setTodayWord] = useState({word: ''});

  useEffect(() => {

      fetch(`${API}/${todayWord.word}`)
      .then(response => response.json())
      .then(data => {
        setwordDefinition(data)
        setIsLoading(true)
      })
      .catch(error => console.error(error));
  }, [API, todayWord]);


  function scramble (word) {
    console.log(word)
    let wordArr = word.split('')
    let newArr = []

    for (let i=0; i< word.length; i++ ){
      let letter = wordArr[Math.floor(Math.random() * wordArr.length)]
      let index = wordArr.indexOf(letter)
      wordArr.splice(index,1)
      newArr.push(letter)
    }
    return newArr.join('')
  }

  function todaysWord() {
    let todaysDate = (Math.ceil(Date.now() / 1000 / 60 / 60 / 24))-19653
    let todaysWord = words[todaysDate % words.length]
    console.log("todaysWord:", todaysWord)
    setTodayWord(todaysWord) 
  }
  function CheckWord(event) {
    event.preventDefault()
    let wrongList = []

    console.log(event.target.DailyWord.value)
    console.log(todayWord)
    if(todayWord.word === event.target.DailyWord.value){

      setWon(true)
    } else {
      setWon(false)

      wrongList.push(event.target.DailyWord.value)
      // wrongList()
    }
  }


  // wrongList for guesses users have made
  function wrongList(arr) {
    
  }

  function definitionOpaque(definition) {
    document.getElementById("defeinitionWebPage").innerText = definition
    console.log(document.getElementById("defeinitionWebPage").innerText)
    console.log(definition)
  }
  return (
    <div className="scrambled-area">
      <span className="scrambled-word__header">
        Scrambled Word
      </span>
      <h1 scrambled-word>
        {isLoading ? scramble(todayWord.word) : <h2></h2> }
      </h1>
      <button  
      className='scrambled-area__play-button'
        type="submit"
        onClick={todaysWord}
        >Play</button>

        <br></br>

        <form onSubmit={CheckWord}>
          <input
          id="DailyWord"
          className="daily-word"
          type="search"
          ></input>

          <button 
          className="daily-word__button"
          type="submit"
          >Guess</button>
        </form>
        {/* <h1 class="fadeIn">
          <span>Eat.</span>
          <span>Sleep.</span>
          <span>Repeat.</span>
        </h1> */}
        <h1 className="winner">{won ? "You did it " : "Try again"}</h1>
        {isLoading ? definitionOpaque(wordDefinition[0].meanings[0].definitions[0].definition) : <h1></h1>}
        <h1 className='word-definition' id = "defeinitionWebPage"></h1>
    </div>
  )
}

export default ScrambledWord;
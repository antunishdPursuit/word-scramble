import fetchWord from "./Fetch";
import { useEffect, useState } from "react";
import words from './WordsDb';

const API = process.env.REACT_APP_API_URL

function ScrambledWord () {
  const [wordDefinition, setwordDefinition] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [won, setWon] = useState(false);
  const [todayWord, setTodayWord] = useState('');

  useEffect(() => {

      fetch(`${API}/${todayWord}`)
      .then(response => response.json())
      .then(data => {
        setwordDefinition(data)
        setIsLoading(true)
      })
      .catch(error => console.error(error));
  }, [API, todayWord]);


  function scramble (word) {
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
    let dateRightNow = new Date
    let todaysDate = dateRightNow.getDate()
    let todaysWord = words[todaysDate % words.length]
    setTodayWord(todaysWord) 
  }
  function CheckWord(event) {
    event.preventDefault()
    let wrongList = []
    console.log(event.target.DailyWord.value)
    console.log(todayWord)
    if(todayWord === event.target.DailyWord.value){
      setWon(true)
    } else {
      wrongList.push(event.target.DailyWord.value)
      wrongList()
    }
  }

  function wrongList(arr) {
    
  }

  return (
    <div>
      "ScrambedWord"
      <h1>
        {isLoading ? scramble(wordDefinition[0].word) : <h2></h2> }
      </h1>
      <button  
        type="submit"
        onClick={todaysWord}
        >PLay</button>

        <br></br>

        <form onSubmit={CheckWord}>
          <input
          id="DailyWord"
          type="search"
          ></input>

          <button  
          type="submit"
          >Guess</button>
        </form>
        <h1>{won ? "You did it " : "Try again"}</h1>
      {/* {console.log(wordDefinition[0].meanings[0].definitions[0].definition)} */}
    </div>
  )
}

export default ScrambledWord;
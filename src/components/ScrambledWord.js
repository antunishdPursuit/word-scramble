import { useEffect, useState } from "react";
import words from './WordsDb';
import "./ScrambledWord.css"
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
    setTodayWord(todaysWord.word) 
  }
  function CheckWord(event) {
    event.preventDefault()
    let wrongList = []
    if(todayWord === event.target.DailyWord.value){
      setWon(true)
    } else {
      wrongList.push(event.target.DailyWord.value)
      // wrongList()
    }
  }

  function wrongList(arr) {
    
  }

  function definitionOpaque(definition) {
    document.getElementById("defeinitionWebPage").innerText = definition
    console.log(document.getElementById("defeinitionWebPage").innerText)
    console.log(definition)
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
        {/* <h1 class="fadeIn">
          <span>Eat.</span>
          <span>Sleep.</span>
          <span>Repeat.</span>
        </h1> */}
        <h1>{won ? "You did it " : "Try again"}</h1>
        {isLoading ? definitionOpaque(wordDefinition[0].meanings[0].definitions[0].definition) : <h1></h1>}
        <h1 id = "defeinitionWebPage"></h1>
    </div>
  )
}

export default ScrambledWord;
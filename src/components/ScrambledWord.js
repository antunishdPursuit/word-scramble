import { useEffect, useState } from "react";
import words from './WordsDb';
import "./ScrambledWord.css"
const API = process.env.REACT_APP_API_URL

function ScrambledWord () {
  const [wordDefinition, setwordDefinition] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [won, setWon] = useState(false);
  const [todayWord, setTodayWord] = useState({word: ''});
  const [definitionOfWord, setDefinitionOfWord] = useState([])
  const [revealDefinition, setRevealDefinition] = useState("Defintion: ")
  const [count, setCount] = useState(0)
  const [shown, setShown] = useState(false)

  useEffect(() => {

      fetch(`${API}/${todayWord.word}`)
      .then(response => response.json())
      .then(data => {
        setwordDefinition(data)
        let spiltDefinition = data[0].meanings[0].definitions[0].definition.split(" ")
        setDefinitionOfWord(spiltDefinition)
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
    let todaysDate = (Math.ceil(Date.now() / 1000 / 60 / 60 / 24))-19653
    let todaysWord = words[todaysDate % words.length]
    setTodayWord(todaysWord) 
    setShown(true)
    test()

  }
  function test(){
    let newRevealDefinition = "Defintion: "

    definitionOfWord.map( (word, index) => {
      setTimeout(() => {
        newRevealDefinition += " " + word
        console.log(word);
        setRevealDefinition(newRevealDefinition)
      }, 4000 * (index + 1) )
    }) 
    document.getElementById("PlayButton").innerText = "Need Defintion?"
    setCount(count+1)
    if(count === 1){
      document.getElementById("PlayButton").remove()
    }
  }


  function CheckWord(event) {
    event.preventDefault()
    let wrongList = []
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


  return (
    <div className="scrambled-area">
      <h1>
        {isLoading ? scramble(todayWord.word) : <h2></h2> }
      </h1>
      <button  
      className='scrambled-area__play-button'
        type="submit"
        onClick={todaysWord}
        id="PlayButton"
        >Play</button>

        <br></br>


      {shown ? <div>
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
        <h1 className="winner">{won ? "You did it " : "Click Guess?"}</h1>
        <h1>{revealDefinition}</h1>
        <h1 className='word-definition' id = "defeinitionWebPage"></h1>
      </div> : <h1> </h1>}

    </div>
  )
}

export default ScrambledWord;
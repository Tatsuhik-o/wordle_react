import React from "react";
import Letter from './Letter'
import './Answer.css'

function Answer({word, wordOfTheDay}){
   let objWord = {}
   let objWordOfTheDay = {}
   const arrayWord = word.split('')
   const arrayWordOfTheDay = wordOfTheDay.split('')
   arrayWordOfTheDay.forEach(elem => {
      if(objWordOfTheDay[elem]){
         objWordOfTheDay[elem]++
      }
      else{
         objWordOfTheDay[elem] = 1
      }
   })
   arrayWord.forEach((elem, idx) => {
      if(objWordOfTheDay[elem]){
         if(elem === arrayWordOfTheDay[idx]){
            objWord[elem] = 'correct'
         }
         else{
            objWord[elem] = 'misplaced'
         }
      }
      else{
         objWord[elem] = 'incorrect'
      }
   })
   return(
      <div className="Answer">
         {Object.keys(objWord).map((elem, idx) => {
            if(objWord[elem] === 'correct'){
               return (<Letter letter={elem} key={idx} position={'correct'}></Letter>)
            }
            else if(objWord[elem] === 'misplaced'){
               return (<Letter letter={elem} key={idx} position={'misplaced'}></Letter>)
            }
            else{
               return (<Letter letter={elem} key={idx} position={'incorrect'}></Letter>)
            }
         })}
      </div>
   )
}

export default Answer
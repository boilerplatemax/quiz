import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { v4 as uuidv4 } from 'uuid';

export default function Quiz({questions, setQuizPage, quizPage}) {
  const currentQuestion=questions[quizPage]


  function checkboxHandler(checked, answer){
    if(checked){
      console.log(answer)
    }
  }
  function nextQuizePageHandler(){
    setQuizPage(quizPage=>quizPage+1)
    manageScoreHandler()
  }
  function manageScoreHandler(answers){
  if(currentQuestion.correctAnswers.length){
    console.log('arrays are same length')
  }

  }
  return (
    <div className='quiz'>
    <div className='question'>
    {questions[quizPage].question}
    </div>
    <div className='answers'>
    Select All that apply:
    <FormGroup>
      {currentQuestion.answers.map(answer=>{
        return(<div><FormControlLabel key={uuidv4()} label={answer} value={answer} control={<Checkbox onChange={(e)=>checkboxHandler(e.target.checked, e.target.value)}/>} /></div>)
      })}
    </FormGroup>
    </div>
    
    <button className='btn__submit' onClick={nextQuizePageHandler}>submit</button>
    </div>
  )
}

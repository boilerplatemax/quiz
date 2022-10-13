import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Close from '@mui/icons-material/Close';
import Check from '@mui/icons-material/Check';

export default function Results({score, maxQuestions, questions, submittedAnswers}) {
//does the stored answer match the correct answer?
  const isCorrect=(question)=>{
    const answerAtIndex=submittedAnswers[question.id]
    if(answerAtIndex===question.correctAnswer)return true
  }
  //determine the className of the results
  const resultClassNameHandler=(question, answer)=>{
    let className='results__answer'
    //
    if(question.correctAnswer===answer){
      className+=' results__answer-correct'
      return className
    }
    else if(submittedAnswers[question.id]===answer){
        className+=' results__answer-incorrect'
        return className
    }
    //else could be ommitted, however, it helps with readability
    else{
      return className
    }
  }

  return (
    <div className='results__content'>
      <div className='results__header'>
        <h4>Review your score</h4>
        {/* refresh page to retake test. There are better solutions, however, this one is simplest for this demo */}
          <a href='/'>
            <button className='btn btn-retake' href='/'>
              Retake the test
            </button>
            </a>
        <div className='results__score'><p>You scored {`${score}/${maxQuestions}`}</p></div>
      </div>
      {questions.map(question=>{
        return(
        <div className='results__accordion' key={question.id}>
          <Accordion
            className={isCorrect(question)?'correct results__collapse':'incorrect results__collapse'}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <div className='results__question'>
              <Typography>
                {`Question ${question.id+1}: ${question.question}`}
              </Typography>
              <div className='results__question-icon'>
                {isCorrect(question)?
                <><Check/>Correct</>
                :<><Close/>incorrect</>
                }
              </div>
            </div>
          </AccordionSummary>
        <div className='results__answers'>
          {question.answers.map(answer=>
          {
            return(
              <div
              key={answer}
              className={resultClassNameHandler(question,answer)
            }>
          <AccordionDetails>
            <Typography>
            {answer}
            {question.correctAnswer===answer&&
            <span className='results__comment'>
              <em>
                {question.comment}
              </em>
            </span>
            }
            </Typography>
          </AccordionDetails>
            
            </div>)
          })}
        </div>
        </Accordion>
        </div>
        )
      })}
      </div>
  )
}

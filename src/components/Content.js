import React,{useState} from 'react'
import Quiz from './Quiz'
import Results from './Results'
import quizData from '../data/quiz.json'

const questions=quizData

const maxQuestions = questions.length

export default function Content() {
const [quizPage, setQuizPage]=useState(0)
const [submittedAnswers, setSubmittedAnswers]=useState([])
const [score,setScore]=useState(maxQuestions)
  return (
    <div className='content'>
      
        {quizPage<maxQuestions?
        <>
          <div className='App-title'>
            <h1>
              Wilderness Survival Quiz {quizPage+1}/{maxQuestions}
            </h1>
          </div>
          <Quiz questions={questions} quizPage={quizPage}setQuizPage={setQuizPage} score={score} setScore={setScore} setSubmittedAnswers={setSubmittedAnswers} submittedAnswers={submittedAnswers}/>
        </>
        :
        <Results score={score} maxQuestions={maxQuestions} questions={questions} submittedAnswers={submittedAnswers}/>
        }
    </div>
  
  )
}
  
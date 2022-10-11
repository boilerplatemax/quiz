import React,{useState} from 'react'
import Quiz from './Quiz'
import Results from './Results'
const questions=[
    {
        id:0,
        question: 'Which of these factors do not contribute to the drying of wood (for the purpose of finding dry parts of a bow-drill fire-making kit)?',
        answers:['Being on the south side of trees','Branches being exposed to sun and wind','Branches high up in a tree','Branches being covered in moss'],
        src:'https://stories.freepiklabs.com/storage/23283/beach-lifeguard-bro-2863.png',
        correctAnswers:['Branches being covered in moss'],
        answerType:'single',
        difficulty:'easy',
        userAnswers:[]
    }
    ,
    {
        id:1,
        question: 'Which of these is a programming language?',
        answers:['Python','BrassTacks','Sea Plus','Java'],
        src:'',
        correctAnswers:['Python','Java'],
        answerType:'multiple',
        difficulty:'easy',
        userAnswers:[]
    }
]
const maxQuestions = questions.length
export default function Content() {
const [quizPage, setQuizPage]=useState(0)
const [score,setScore]=useState(maxQuestions)
  return (
    <div className='content'>
        {quizPage<maxQuestions?
        <Quiz questions={questions} quizPage={quizPage}setQuizPage={setQuizPage} score={score} setScore={setScore}/>:
        <Results score={score} maxQuestions={maxQuestions}/>
        }
    </div>
  
  )
}
  
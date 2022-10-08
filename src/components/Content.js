import React,{useState} from 'react'
import Quiz from './Quiz'
const questions=[
    {
        id:0,
        question: 'What is 1+1?',
        answers:[3,4,5,2],
        src:'',
        correctAnswers:[2],
        answerType:'single',
        difficulty:'easy'
    }
    ,
    {
        id:1,
        question: 'Which of these is a programming language?',
        answers:['Python','BrassTacks','Sea Plus','Java'],
        src:'',
        correctAnswers:['Python','Java'],
        answerType:'multiple',
        difficulty:'easy'
    }
]
export default function Content() {
const [quizPage, setQuizPage]=useState(0)
  return (
    <>
        <Quiz questions={questions} quizPage={quizPage}setQuizPage={setQuizPage}/>
        <Results/>
    </>
  
  )
}
  
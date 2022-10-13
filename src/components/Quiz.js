import React,{useState, useEffect} from 'react'
import {img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14} from '../images/imageIndex.js'
const images = [
  img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14
]

export default function Quiz(props) {
  const {questions, setQuizPage, quizPage, setScore, setSubmittedAnswers, submittedAnswers} = props
  const currentQuestion=questions[quizPage]
  const [userAnswer, setUserAnswer] = useState('')
  
  useEffect(()=>{
    uncheck()
    setUserAnswer('')
  },[quizPage])
  
  const checkboxHandler=e=>{
    const answer = e.target.value
    setUserAnswer(answer)
  }
  const nextQuizePageHandler=()=>{
    
    if(userAnswer==='')return

    manageScoreHandler()
    setSubmittedAnswers([...submittedAnswers,userAnswer])
    setQuizPage(quizPage=>quizPage+1)
  }
  function manageScoreHandler(){
  //see if arrays are same length

    //see if arrays contain same answers
    if(currentQuestion.correctAnswer===userAnswer)return
    //subtract a point
    setScore(score=>score-1)

  }
  function uncheck() {
    document.getElementById('answerForm').reset()
  }
  return (
    <div className='quiz'>
      <div className='quiz__img-holder'>
        <img src={images[currentQuestion.id]} className='quiz__img' alt={currentQuestion.question}/>
      </div>      
      <div className='quiz__question'>
        {questions[quizPage].question}
      </div>
      <div className='quiz__answers'>
        <form id='answerForm'>
          {currentQuestion.answers.map(answer=>{
            return(
            <div key={answer} className='quiz__answer'>
              <input
                type="radio"
                id="html"
                name='answer-group'
                value={answer}
                className='quiz__answer-checkbox'
                onChange={checkboxHandler}
              />
              <label
                htmlFor="html"
                className='quiz__answer-label'>
                {answer}
              </label>
            </div>
            )
          }
        )
      }
      </form>
      </div>
      <button className='btn__submit btn' onClick={nextQuizePageHandler}>
        submit
      </button>
    </div>
  )
}

import React,{useState, useEffect} from 'react'
import img0 from '../images/img0.png'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import img8 from '../images/img8.png'
import img9 from '../images/img9.png'
import img10 from '../images/img10.png'
import img11 from '../images/img11.png'
import img12 from '../images/img12.png'
import img13 from '../images/img13.png'
import img14 from '../images/img14.png'

const images = [
  img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14
]

export default function Quiz(props) {
  const {questions, setQuizPage, quizPage, setScore, setSubmittedAnswers, submittedAnswers} = props
  const currentQuestion=questions[quizPage]
  const [userAnswer, setUserAnswer] = useState('')
  useEffect(()=>{
    setUserAnswer('')
  },[quizPage])
  
  const checkboxHandler=e=>{
    const answer = e.target.value
    setUserAnswer(answer)

  }
  const nextQuizePageHandler=()=>{
    
    if(userAnswer===''){return}
    manageScoreHandler()
    setSubmittedAnswers([...submittedAnswers,userAnswer])
    setQuizPage(quizPage=>quizPage+1)
    uncheck()
    setUserAnswer('')
  }
  function manageScoreHandler(){
  //see if arrays are same length

    //see if arrays contain same answers
    if(currentQuestion.correctAnswer===userAnswer){
      return
    }
  
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
          <input type="radio" id="html" name='answer-group' value={answer} className='quiz__answer-checkbox' onChange={checkboxHandler}/>
          <label htmlFor="html" className='quiz__answer-label'>{answer}</label>
        </div>)
      })}
    </form>
    
    </div>
    
    <button className='btn__submit btn' onClick={nextQuizePageHandler}>submit</button>

    

  


    </div>
  )
}

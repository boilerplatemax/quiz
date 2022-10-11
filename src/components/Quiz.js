import React,{useState, useEffect} from 'react'

export default function Quiz({questions, setQuizPage, quizPage, setScore, score}) {
  const currentQuestion=questions[quizPage]
  const [answers, setAnswers] = useState([])

  function checkboxHandler(e){
    const answer = e.target.value
    
    if(e.target.checked){
      setAnswers([...answers,answer])
    }
    else{
      setAnswers(answers.filter(a=>a!==answer))
    }

  }
  function nextQuizePageHandler(){
    manageScoreHandler()
    setQuizPage(quizPage=>quizPage+1)
    uncheck()
    setAnswers([])
  }
  function manageScoreHandler(){
  //see if arrays are same length
  if(currentQuestion.correctAnswers.length===answers.length){
    //see if arrays contain same answers
    if(JSON.stringify(currentQuestion.correctAnswers.sort()) === JSON.stringify(answers.sort())){
      return
    }
  }
  setScore(score=>score-1)


  }
  function uncheck() {
    document.getElementById('answerForm').reset()
  }
  return (
    <div className='quiz'>
      <div className='quiz__img-holder'>
      <img src={currentQuestion.src} className='quiz__img' alt={currentQuestion.question}/>
      </div>
      
    <div className='quiz__question'>
    {questions[quizPage].question}
    </div>
    <div className='quiz__answers'>
    <div>Select <b>all</b> that apply:</div>
    <form id='answerForm'>
      {currentQuestion.answers.map(answer=>{
        return(<div key={answer} className='quiz__answer'>
          
          <input type="checkbox" id="html" name={answer} value={answer} className='quiz__answer-checkbox' onChange={checkboxHandler}/>
          <label htmlFor="html" className='quiz__answer-label'>{answer}</label>
        </div>)
      })}
    </form>
    
    </div>
    
    <button className='btn__submit btn' onClick={nextQuizePageHandler}>submit</button>

    

  


    </div>
  )
}

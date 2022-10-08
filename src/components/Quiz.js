import React from 'react'

export default function Quiz({questions, setQuizPage, quizPage}) {
  return (
    <div className='quiz'>
    <div className='question'>
    {questions[quizPage].question}
    </div>
    <div className='answers'>
    Select All that apply:
    <div><input type="checkbox" name="check-1" value="check-1" id="check-1"/>
    <label for="check-1">{questions[quizPage].answers[0]}</label></div>
    <div><input type="checkbox" name="check-2" value="check-2" id="check-2"/>
    <label for="check-2">{questions[quizPage].answers[1]}</label></div>
    <div><input type="checkbox" name="check-3" value="check-3" id="check-3"/>
    <label for="check-3">{questions[quizPage].answers[2]}</label></div>
    <div><input type="checkbox" name="check-3" value="check-3" id="check-3"/>
    <label for="check-3">{questions[quizPage].answers[3]}</label></div>
    {/*map our answers*/}
    </div>
    
    <button className='btn__submit' onClick={()=>setQuizPage(quizPage=>quizPage+1)}>submit</button>
    </div>
  )
}

import React from 'react'

export default function Results({score, maxQuestions}) {
  return (
    <div>You scored {`${score}/${maxQuestions}`}</div>
  )
}

import React from 'react';
import './answer.css';

const Answer = (props) => {

  const answer = Object.keys(props.answer).map((qAnswer, i) => {
    return (<li
    className={
      props.correctAnswer === qAnswer ? 'correct' : 
      props.clickedAnswer === qAnswer ? 'incorrect' : ''
    }
     onClick={
      () => props.checkAnswer(qAnswer)
      }
       key={qAnswer}>
      {props.answer[qAnswer]}
    </li>)
  });

  return (
    <>
    <ul disabled={ props.clickedAnswer ? true : false} className='Answer'>
      {answer}
    </ul>
    <div>
      {props.correctAnswer ? 'Togri!' : 
      props.clickedAnswer ?
      'Notogri javob!' : ''}
    </div>
    </>
  )
}

export default Answer;
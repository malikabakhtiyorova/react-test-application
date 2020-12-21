import React, { Component } from 'react'
import './quizzapp.css';
import Question from "./question/question";
import Answer from './answer/answer'
export default class Quiz extends Component {

  state = {
    questions: {
      1: "Shar'iy ilmning turlari ?",
      2: "Eng buyuk ibodat ?",
      3: "Illiyun nima ?",
      4: "Sijjiyn nima ?",
      5: "Namozda nechta rukn bor ?",
      6: "Uluhiyyat, Rububiyyat, Asmoi Sifat - bular qaysi ilmning turlari ?",
      7: "Mutmainna, Ammora, Lavomma - bular ..."
    },
    answers: {
      1: {
        1: 'Farz, Muboh',
        2: 'Farz, Sunnat',
        3: 'Farzi Ayn, Farzi Kifoya',
      },
      2: {
        1: 'Namoz',
        2: 'Tavhid',
        3: 'Zikr'
      },
      3: {
        1: 'Ohiratdagi manzil',
        2: 'Arsh ostidagi jannatilar royhati yoziladigan kitob',
        3: '7 qavat yer ostidagi dozahiilar royhati yoziladigan kitob'
      },
      4: {
        1: 'Ohiratdagi manzil',
        2: 'Arsh ostidagi jannatilar royhati yoziladigan kitob',
        3: '7 qavat yer ostidagi dozahiilar royhati yoziladigan kitob'
      },
      5: {
        1: '7 ta',
        2: '10 ta',
        3: '14 ta'
      },
      6: {
        1: 'Tafsir',
        2: 'Tavhid',
        3: 'Fiqh',
      },
      7: {
        1: 'Fiqh ilmi yonalishlari',
        2: 'Tafsir ilmi yonalishlari',
        3: 'Nafs turlari',
      },
    },
    correctAnswers: {
      1: '3',
      2: '2',
      3: '2',
      4: '3',
      5: '3',
      6: '2',
      7: '3',
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  } 

  checkAnswer = answer => {
    const { correctAnswers, step, score } = this.state;

    if(answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer
      })
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer:answer,
      })
    }
  }

  nextStep = step => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  }


  render () {
    const { questions,answers, correctAnswer, clickedAnswer, step, score } = this.state;
    return (
      <div className='Content'>
         { step <= Object.keys(questions).length ?
         ( 
           <>
           <Question question={questions[step]}/>
          <Answer answer={answers[step]}
            step={step}
            checkAnswer={this.checkAnswer}
            correctAnswer={correctAnswer}
            clickedAnswer={clickedAnswer}
          />

          <button
          disabled={ clickedAnswer && Object.keys(questions).length >= step ? false : true}
          className='next'
          onClick={
            () => {this.nextStep(step)}
          }
          >Next</button>
          </>
          ) : (
           <div className='finalPage'>
            <h1> You have completed the test!</h1>
            <p className='score'>
              Your score is {score} out of {Object.keys(questions).length}
            </p>
           </div>
           )
         }

      </div>
    )
  }
}
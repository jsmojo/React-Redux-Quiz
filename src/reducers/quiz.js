import quizQuestions from '../api/quizQuestions';

let step = 0;

const initialState = {
  question: quizQuestions[step].prompt,
  answerOptions: quizQuestions[step].answers,
  answer: quizQuestions[step].correct,
  progress: 0,
  score: 0
}

  const quiz = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_POINT': 
        return {
          ...state,
          score: action.score
        }
      case 'NEXT_QUESTION':
        return  {
            ...state,
            question: quizQuestions[action.progress + 1].prompt,
            answerOptions: quizQuestions[action.progress  + 1].answers,
            answer: quizQuestions[action.progress  + 1].correct,
            progress: action.progress + 1
          }
        
      case 'RESET':
        return {
          question: quizQuestions[0].prompt,
          answerOptions: quizQuestions[0].answers,
          answer: quizQuestions[0].correct,
          progress: 0,
          score: 0
        }
      case 'PROCESS_ONLY': 
        return {
          ...state,
          progress: action.progress + 1
        }
      
      default:
        return state
    }
  }
  
  export default quiz
  
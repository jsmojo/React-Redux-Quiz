import { combineReducers } from 'redux'
import quiz from './quiz'
//import quizQuestions from '../api/quizQuestions'

// const initialState = {
//     question: quizQuestions[0].prompt,
//     answerOptions: quizQuestions[0].answers,
//     answer: quizQuestions[0].correct,
//     progress: 0,
//     score: 0
// }

export default combineReducers({
    quiz
})
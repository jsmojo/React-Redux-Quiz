import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import rootReducer from './reducers'
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
//import quizQuestions from './api/quizQuestions';

let store = createStore(rootReducer);

// store.dispatch({type: 'INIT'});

// const mapStateToProps = state => {
//   return {
//     question: quizQuestions[0].prompt,
//     answerOptions: quizQuestions[0].answers,
//     answer: quizQuestions[0].correct,
//     progress: 0,
//     score: 0
//   }
// }

// store.dispatch({type: 'INIT'});

// const ConnectApp = connect(
//   mapStateToProps
// )(App)
 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
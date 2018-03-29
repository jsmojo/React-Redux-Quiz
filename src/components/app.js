import React from 'react';
import logo from '../images/svg/logo.svg';
import pageStyles from './app.scss';
import Questions from './Questions/Questions';
import AnswerList from './AnswerList/AnswerList';
import Score from './Score/Score';
import Progress from './Progress/Progress';
import quizQuestions from '../api/quizQuestions';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { reset } from '../actions/addOne'


class App extends React.Component {
  renderQuiz() {

    return (
      <div>
        <Questions />
        <AnswerList />
        <Score />
        <Progress />
      </div>
    );
  }
  renderResult() {
    return (
      <div>
        <p>Quiz Finished!</p>
        <p>Your Score: { this.props.score }</p>
        <button type="button" onClick={this.props.resetQuiz}>Reset Quiz</button>
      </div>
    );
  }
  
  
  render() {
    return (
      
      <div className={pageStyles.App}>
        <div className={pageStyles.header}>
          <img src={logo} className={pageStyles.logo} alt="logo" />
          <h2 className={pageStyles.intro}>React Quiz</h2>
        </div>
        <div className={pageStyles.content}>
          {quizQuestions.length <= this.props.progress ? this.renderResult() : this.renderQuiz()}
        </div>
     </div> 
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    progress: state.quiz.progress,
    score: state.quiz.score
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    resetQuiz: () => dispatch(reset())
  }, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
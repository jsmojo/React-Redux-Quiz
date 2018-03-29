import React from 'react';
import {connect} from 'react-redux'
import quizQuestions from '../../api/quizQuestions'

class Progress extends React.Component {
  render() {
    return (
      <p>Question {this.props.progress + 1} of {quizQuestions.length}</p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return {
    progress: state.quiz.progress
  }
}


export default connect(mapStateToProps)(Progress);
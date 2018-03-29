import React from 'react';
import {connect} from 'react-redux'

class Score extends React.Component {
    render() {
      return (
        <span>Score: {this.props.score}</span>
      )
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      score: state.quiz.score
    }
  }

  export default connect(mapStateToProps)(Score);
import React from 'react';
import styles from './AnswerList.scss'
import ListItem from './ListItem'
import {connect} from 'react-redux'

class AnswerList extends React.Component {
    render() {
      return (
        <ul className={styles.items}>
          {this.props.answersOptions.map(function(answer, index) {
           return (
            <ListItem answerItem={answer} key={index} />
           )
          },this)}
        </ul>
      );
    }
  };

  const mapStateToProps = (state, ownProps) => {
    return {
      answersOptions: state.quiz.answerOptions,
      correctAnswer: state.quiz.answer
    }
  }

  export default connect(mapStateToProps)(AnswerList);
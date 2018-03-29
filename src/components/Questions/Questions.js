import React from 'react';
import styles from './Questions.scss'
import {connect} from 'react-redux'

class Questions extends React.Component {
    
    render() {
      return (
        <p className={styles.title}>{this.props.question}</p>
      )
    }
  }

  const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    return {
      question: state.quiz.question
    }
  }

  export default connect(mapStateToProps)(Questions)
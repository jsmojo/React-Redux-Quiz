import React from 'react';
import { connect } from 'react-redux'
import { nextQuestion, processOnly, addPoint } from '../../actions/addOne'
import styles from './AnswerList.scss'
import quizQuestions from '../../api/quizQuestions'
import { bindActionCreators } from 'redux'

function ListItem (props) {
    function onClickAnswer() {
        console.log(props.correctAnswer + " : " + props.answerItem)
        if(props.correctAnswer === props.answerItem) {
            console.log('adding point')
            addOnePoint();
        }

        if(quizQuestions.length >  props.progress + 1) {
            onClick()
        }
        else {
            showResults()
        }
    }
    const { onClick, showResults, addOnePoint } = props;
    console.log
    return (
      <li className={styles.item} onClick={onClickAnswer}>{props.answerItem} <span className={styles.arrow}></span></li>
    )
}

  const mapStateToProps = state => ({
    progress: state.quiz.progress,
    correctAnswer: state.quiz.answer
  })
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onClick: () => dispatch(nextQuestion()),
        showResults: () => dispatch(processOnly()),
        addOnePoint: () => dispatch(addPoint())
    }, dispatch) 
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListItem)


//   import React from 'react';
// import { connect } from 'react-redux'
// import { nextQuestion } from '../../actions/addOne'
// import styles from './AnswerList.scss'
// import { bindActionCreators } from 'redux'

// function ListItem (props) {
//     // function onClickAnswer() {
//     //   //props.answerCallback(props.answerItem);
//     //   console.log(props)
      
//     // }
    

//     console.log("props ", props)
//     return (
//       <li className={styles.item} 
//       onClick={this.props.onClick}>
//       {props.answerItem} <span className={styles.arrow}></span></li>
//     )
// }

// const mapStateToProps = state => ({
    
//   })
  
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         onClick: () => dispatch(nextQuestion())
//     }, dispatch) 
//   }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(ListItem)
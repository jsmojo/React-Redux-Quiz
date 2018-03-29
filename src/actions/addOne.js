let progressId = 0;
let scoreValue = 0;

export const nextQuestion = progressA => ({
    type: 'NEXT_QUESTION',
    progress: progressId++
  })    

  export const reset = () => {
      progressId = 0;
      scoreValue = 0;
      
      return {
        type: 'RESET'
      }
}    

  export const processOnly = () => ({
    type: 'PROCESS_ONLY',
    progress: progressId++
  }) 

  
  export const addPoint = () => ({
    type: 'ADD_POINT',
    score: ++scoreValue
  }) 
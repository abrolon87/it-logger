import { 
  GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG
} from "./types"

// Get logs from server
export const getLogs = () => async dispatch => {
  // is another way to do this, it is at the bottom of this file commented out
    try {
      setLoading()

      const res = await fetch('/logs')
      const data = await res.json()

      dispatch({
        type: GET_LOGS,
        payload: data
      })
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      })
    }
  }
// add new log
export const addLog = (log) => async dispatch => {
  // is another way to do this, it is at the bottom of this file commented out
    try {
      setLoading()
 
      const res = await fetch('/logs', { 
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      const data = await res.json()

      dispatch({
        type: ADD_LOG,
        payload: data
      })
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      })
    }
  }



//sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}



// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading()

//     const res = await fetch('/logs')
//     const data = await res.json()

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     })
//   }
// }
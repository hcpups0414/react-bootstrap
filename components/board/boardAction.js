import {
  GET_BOARD_LIST_SUCCESS,
  SET_CURRENT_BOARD
} from './constants.js'

export function getBoardListSuccess(boardList) {
  return {
    type: GET_BOARD_LIST_SUCCESS,
    payload: boardList
  }
}
export const getBoardList = () => (dispatch) => {
  fetch(`http://localhost:3000/api/boards`)
    .then((res) => {
      return res.json()
    })
    .then((boardList) => {
      dispatch(getBoardListSuccess(boardList))
    })
    .catch((err) => {
      return Promise.reject(err)
    })
}
export function setCurrentBoard(board){
  return {
    type: SET_CURRENT_BOARD,
    payload: board
  }
}
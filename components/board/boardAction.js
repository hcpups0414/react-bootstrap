import BoardActionType from './BoardActionType'

export function getBoardListSuccess(boardList) {
  return {
    type: BoardActionType.GET_BOARD_LIST_SUCCESS,
    payload: boardList
  }
}

export function setCurrentBoard(board){
  return {
    type: BoardActionType.SET_CURRENT_BOARD,
    payload: board
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

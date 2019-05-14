import BoardActionType from './BoardActionType'
import boardState from '../../state.js'

export const boardReducer = (state = boardState, action) => {
  switch (action.type) {
    case BoardActionType.GET_BOARD_LIST_SUCCESS:
      return Object.assign({}, state, {
        boardList: action.payload,
      })
    case BoardActionType.SET_CURRENT_BOARD: 
      return Object.assign({}, state, {
        currentBoard: action.payload,
      })
    default: return state
  }
}
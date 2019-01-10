import {
  GET_BOARD_LIST_SUCCESS,
  SET_CURRENT_BOARD
} from './constants'
import boardState from '../../state.js'

export const boardReducer = (state = boardState, action) => {
  console.log('reducer', state)
  switch (action.type) {
    case GET_BOARD_LIST_SUCCESS:
      return Object.assign({}, state, {
        boardList: action.payload,
      })
    case SET_CURRENT_BOARD: 
      return Object.assign({}, state, {
        currentBoard: action.payload,
      })
    default: return state
  }
}
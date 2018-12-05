import {
  GET_BOARD_LIST_SUCCESS,
} from './constants'
import boardReducer from '../../state.js'

export const boardReducer = (state = boardReducer, action) => {
  console.log('reducer', state)
  switch (action.type) {
    case GET_BOARD_LIST_SUCCESS:
      return Object.assign({}, state, {
        boardList: action.payload,
      })
    default: return state
  }
}
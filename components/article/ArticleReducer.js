import {
	GET_ARTICLES_SUCCESS,
  GET_LAST_ARTICLES_SUCCESS,
  SET_CURRENT_PAGE,
  GET_BOARD_LIST_SUCCESS,
} from './constants'
import articleState from '../../state.js'

export const articleReducer = (state = articleState, action) => {
  console.log('reducer', state)
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return Object.assign({}, state, { 
        articles: [...action.payload.articles],
        page: action.payload.page,
      })
    case GET_LAST_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        lastArticles: [...action.payload],
      })
    case SET_CURRENT_PAGE:
      return Object.assign({}, state, {
        currentPage: action.payload,
      })
    case GET_BOARD_LIST_SUCCESS:
      return Object.assign({}, state, {
        boardList: action.payload,
      })
    default: return state
  }
}
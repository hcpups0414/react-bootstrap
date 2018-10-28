import {
	GET_ARTICLES_SUCCESS,
  GET_LAST_ARTICLES_SUCCESS
} from './constants'
import articleState from '../../state.js'

export const articleReducer = (state = articleState, action) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return Object.assign({}, state, { 
        articles: [...action.payload],
        lastArticles: []
      })
    case GET_LAST_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        articles: [],
        lastArticles: [...action.payload]
      })
    
    default: return state
  }
}
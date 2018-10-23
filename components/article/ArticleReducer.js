import {GET_ARTICLES, GET_LAST_ARTICLES} from './ArticleActions.js'
import articleState from '../../state.js'

export const articleReducer = (state = articleState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return Object.assign({}, state, { 
        articles: ['test1','test2', 'test3'],
        lastArticles: []
      })
    case GET_LAST_ARTICLES:
      return Object.assign({}, state, {
        articles: ['test1','test2'],
        lastArticles: []
      })
    default: return state
  }
}
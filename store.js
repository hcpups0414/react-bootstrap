import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { articleReducer } from './components/article/ArticleReducer.js'
import articleState from './state.js'


export function initializeStore (initialState = articleState) {
  return createStore(combineReducers({
    articleReducer
  }), initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
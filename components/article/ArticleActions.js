import {
  GET_ARTICLES_SUCCESS,
  GET_LAST_PAGE_SUCCESS,
  SET_CURRENT_PAGE,
  SET_LAST_PAGE,
} from './constants.js'

export function getArticlesSuccess(articles) {
  return {
    type: GET_ARTICLES_SUCCESS,
    payload: articles
  }
}
export function getLastPageSuccess(lastPage) {
  console.log('success', lastPage)
  return {
    type: GET_LAST_PAGE_SUCCESS,
    payload: lastPage
  }
}
export function setCurrentPage(currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage
  }
}
export function setLastPage(lastPage) {
  return {
    type: SET_LAST_PAGE,
    payload: lastPage
  }
}

export const getArticles = (board, page) => (dispatch) => {
  fetch(`http://localhost:3000/api/articles/${board}/${page}`)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      dispatch(getArticlesSuccess(json))
      dispatch(setCurrentPage(page))
    })
    .catch((err) => {
      console.log(err)
    })
}
export const getLastPage = (board, callback) => dispatch => {
  return fetch(`http://localhost:3000/api/${board}/pages`)
    .then((res) => {
      return res.json()
    })
    .then((page) => {
      callback(page)
    })
    .catch((err) => {
      console.log(err)
    })
}
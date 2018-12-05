import {
  GET_ARTICLES_SUCCESS,
  GET_LAST_PAGE_SUCCESS,
} from './constants.js'

export function getArticlesSuccess(articles, page) {
  return {
    type: GET_ARTICLES_SUCCESS,
    payload: {
      articles,
      page
    }
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
    type: GET_CURRENT_PAGE,
    payload: currentPage
  }
}

export const getArticles = (board, page) => (dispatch) => {
  fetch(`http://localhost:3000/api/articles/${board}/${page}`)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      dispatch(getArticlesSuccess(json, page))
    })
    .catch((err) => {
      console.log(err)
    })
}
export const getLastPage = (board) => {
  return fetch(`http://localhost:3000/api/${board}/pages`)
    .then((res) => {
      return res.json()
    })
    .then((page) => {
      return Promise.resolve(page)
    })
    .catch((err) => {
      return Promise.reject(err)
    })
}
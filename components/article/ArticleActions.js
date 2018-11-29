import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ARTICLES_INITIATE,
  GET_LAST_PAGE_SUCCESS,
  GET_LAST_PAGE_FAIL,
  GET_LAST_PAGE_INITIATE,
  GET_BOARD_LIST_SUCCESS,
} from './constants.js'

export function getArticlesInitiate() {
  return {
    type: GET_ARTICLES_INITIATE,
    payload: 'start'
  }
}
export function getArticlesSuccess(articles, page) {
  return {
    type: GET_ARTICLES_SUCCESS,
    payload: {
      articles,
      page
    }
  }
}
export function getArticlesFail(err) {
  return {
    type: GET_ARTICLES_FAIL,
    payload: err
  }
}
export function getLastPageInitiate() {
  return {
    type: GET_LAST_PAGE_INITIATE,
    payload: 'start'
  }
}
export function getLastPageSuccess(lastPage) {
  console.log('success', lastPage)
  return {
    type: GET_LAST_PAGE_SUCCESS,
    payload: lastPage
  }
}
export function getLastPageFail(err) {
  return {
    type: GET_LAST_PAGE_FAIL,
    payload: err
  }
}
export function setCurrentPage(currentPage) {
  return {
    type: GET_CURRENT_PAGE,
    payload: currentPage
  }
}
export function getBoardListSuccess(boardList) {
  return {
    type: GET_BOARD_LIST_SUCCESS,
    payload: boardList
  }
}
export const getArticles = (board, page) => (dispatch) => {
  //console.log(GET_ARTICLES_SUCCESS)
  dispatch(getArticlesInitiate())
  fetch(`http://localhost:3000/api/articles/${board}/${page}`)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      dispatch(getArticlesSuccess(json, page))
    })
    .catch((err) => {
      console.log(err)
      dispatch(getArticlesFail(err))
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
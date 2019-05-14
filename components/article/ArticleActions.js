import ArticleActionType from './ArticleActionType'

export function getArticlesStart() {
  return {
    type: ArticleActionType.GET_ARTICLES_START,
  }
}
export function getArticlesSuccess(articles) {
  return {
    type: ArticleActionType.GET_ARTICLES_SUCCESS,
    payload: articles
  }
}
export function getArticlesFail(err) {
  return {
    type: ArticleActionType.GET_ARTICLES_FAIL,
    payload: err
  }
}

export function getLastPageStart() {
  return {
    type: ArticleActionType.GET_LAST_PAGE_START,
  }
}
export function getLastPageSuccess(lastPage) {
  return {
    type: ArticleActionType.GET_LAST_PAGE_SUCCESS,
    payload: lastPage,
  }
}
export function getLastPageFail(err) {
  return {
    type: ArticleActionType.GET_LAST_ARTICLES_FAIL,
    payload: err
  }
}

export function setCurrentPage(currentPage) {
  return {
    type: ArticleActionType.SET_CURRENT_PAGE,
    payload: currentPage
  }
}

export const nextPage = (currentPage, board) => {
  
  return async (dispatch) => {
    try{
      let lastPage = await dispatch(getLastPage(board));
      console.log(lastPage)
      let page = currentPage + 1 >= lastPage ?  lastPage : currentPage + 1
      dispatch(setLastPage(page))
      dispatch(getArticles(board, page));
    }
    catch (err) {
      console.log('next page err', err)
    }
  }
}

export const getArticles = (board, page) => dispatch => {
  dispatch(getArticlesStart())
  return new Promise((fulfill, reject) => {
    fetch(`http://localhost:3000/api/articles/${board}/${page}`)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        dispatch(getArticlesSuccess(json))
        dispatch(setCurrentPage(page))
        fulfill()
      })
      .catch((err) => {
        console.log(err)
        dispatch(getArticlesFail())
        reject(err)
      })
  })
}

export const getLastPage = (board) => dispatch => {
  dispatch(getLastPageStart())
  return new Promise((fulfill, reject) => {
    fetch(`http://localhost:3000/api/${board}/pages`)
      .then((res) => {
        return res.json()
      })
      .then((page) => {
        dispatch(getLastPageSuccess(page))
        fulfill(page)
      })
      .catch((err) => {
        console.log(err)
        dispatch(getLastPageFail())
        reject(err)
      })
    })
}

import ArticleActionType from './ArticleActionType'

export const articleState = {
  articleReducer: {
    articles: [],
    lastArticles: [],
    currentPage: 0,
    lastPage: 0,
    err: '',
  },
}
export const articleReducer = (state = articleState, action) => {
  switch (action.type) {
    case ArticleActionType.GET_ARTICLES_SUCCESS:
      return Object.assign({}, state, { 
        articles: [...action.payload],
      })
    case ArticleActionType.GET_LAST_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        lastArticles: [...action.payload],
      })
    case ArticleActionType.SET_CURRENT_PAGE:
      return Object.assign({}, state, {
        currentPage: action.payload,
      })
    case ArticleActionType.GET_LAST_PAGE_SUCCESS:
      return Object.assign({}, state, {
        lastPage: action.payload,
      })
    case ArticleActionType.GET_BOARD_LIST_SUCCESS:
      return Object.assign({}, state, {
        boardList: action.payload,
      })
    default: return state
  }
}
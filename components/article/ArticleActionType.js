export default class ArticleActionType{

  static get GET_ARTICLES_START(){
    return 'GET_ARTICLES_START'
  }
  static get GET_ARTICLES_SUCCESS(){
    return 'GET_ARTICLES_SUCCESS'
  }
  static get GET_ARTICLES_FAIL(){
    return 'GET_ARTICLES_FAIL'
  }
  static get GET_LAST_ARTICLES_START(){
    return 'GET_LAST_ARTICLES_START'
  }
  static get GET_LAST_ARTICLES_SUCCESS(){
    return 'GET_LAST_ARTICLES_SUCCESS'
  }
  static get GET_LAST_ARTICLES_FAIL(){
    return 'GET_LAST_ARTICLES_FAIL'
  }
  static get GET_LAST_PAGE_START(){
    return 'GET_LAST_PAGE_START'
  }
  static get GET_LAST_PAGE_SUCCESS(){
    return 'GET_LAST_PAGE_SUCCESS'
  }
  static get SET_CURRENT_PAGE(){
    return 'SET_CURRENT_PAGE'
  }
  static get GET_BOARD_LIST_SUCCESS(){
    return 'GET_BOARD_LIST_SUCCESS'
  }
}
export default class ArticleSelector{
  static getArticles(state){
    return state.articleReducer.articles
  }
  static getLastArticles(state){
    return state.articleReducer.lastarticles
  }
  static getCurrentPage(state){
    return state.articleReducer.currentPage
  }
  static getLastPage(state){
    return state.articleReducer.lastPage
  }
  static getCurrentBoard(state){
    return state.boardReducer.currentBoard
  }
}
import React from 'react';
import { connect } from 'react-redux'
import "isomorphic-fetch"
import { getArticles, getLastPage, setLastPage } from './ArticleActions.js'

class ArticleBtn extends React.Component{
  constructor(props){
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }
  nextPage(e){
    this.props.nextPage(this.props.articleReducer.currentPage, this.props.articleReducer.lastPage, this.props.boardReducer.currentBoard)
  }
  prevPage(e){
    this.props.prevPage(this.props.articleReducer.currentPage, this.props.boardReducer.currentBoard)
  }
  render(){ 
    return ( 
      <div className="article-list">
        <button 
          className="prev" 
          onClick={this.prevPage}
        >
          上一篇
        </button>
        <p className="page" >頁碼: {this.props.articleReducer.currentPage}</p>
        <button 
          className="next" 
          onClick={this.nextPage}
        >
          下一篇
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('article', state)
  const { articleReducer, boardReducer } = state
  return { articleReducer, boardReducer }
}
const mapDispatchToProps = (dispatch) => {
  return {
    nextPage: (currentPage, lastPage, board = 'all') => {
      let page = currentPage + 1 >= lastPage ?  lastPage : currentPage + 1
      dispatch(getArticles(board, page))
      dispatch(getLastPage(board, function(page){
        dispatch(setLastPage(page))
      }))
    },
    prevPage: (currentPage, board = 'all') => {
      // console.log(currentPage)
      let page = currentPage - 1 >= 0 ? currentPage - 1 : 0
      dispatch(getArticles(board, page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleBtn);
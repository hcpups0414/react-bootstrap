import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../layouts/Layout'
import Article from './Article.js'
import ArticleBtn from './ArticleBtn.js'

import { getArticles, getLastPage } from './ArticleActions.js'

class ArticleList extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount () {
    this.props.getArticles('sex')
    
    console.log('mounted', this.props)
    //this.props
  }
  render() { 
    console.log('page props', this.props)
    return ( 
      <Layout>
        <ArticleBtn 
          page={this.props.articleReducer.page}
          prevPage={this.props.prevPage.bind(this, this.props.articleReducer.page, this.props.boardReducer.currentBoard)}
          nextPage={this.props.nextPage.bind(this, this.props.articleReducer.page, this.props.boardReducer.currentBoard)}>
        </ArticleBtn>  
        {
          this.props.articleReducer.articles.map((article,index) => {
            return <Article key={index} index={index} article={article} ></Article>
          })
        }
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('article', state)
  const { articleReducer, boardReducer } = state
  return { articleReducer, boardReducer }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getBoardList: () => {
      dispatch(getBoardList())
    },
    getArticles: (board = 'all') => {
      getLastPage(board)
        .then( page => {
          console.log(page)
          dispatch(getArticles(board, page))
        })
        .catch( err => {
          console.error(err)
          dispatch(getArticles(board, 1))
          dispatch(getLastPageFail(err))
        })
    },
    nextPage: (currentPage) => {
      console.log(currentPage)
      let board = 'all'
      let page = currentPage + 1 >= ownProps ?  ownProps.page : 0
      dispatch(getArticles(board, page))
    },
    prevPage: (currentPage, board = 'all') => {
      console.log(currentPage)
      let page = currentPage - 1 >= 0 ? currentPage - 1 : 0
      dispatch(getArticles(board, page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);

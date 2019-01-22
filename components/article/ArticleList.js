import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../layouts/Layout'
import Article from './Article.js'
import ArticleBtn from './ArticleBtn.js'

import { getArticles, getLastPage, setLastPage } from './ArticleActions.js'

class ArticleList extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount () {
    this.props.initArticles(this.props.boardInfo.currentBoard)
    // console.log('mounted', this.props)
  }
  componentDidUpdate (prevProps) {
    if(this.props.boardInfo.currentBoard !== prevProps.boardInfo.currentBoard){
      this.props.initArticles(this.props.boardInfo.currentBoard)
    }
  }
  render() { 
    // console.log('page props', this.props)
    return ( 
      <Layout>
        <ArticleBtn></ArticleBtn>  
        {
          this.props.articleInfo.articles.map((article,index) => {
            return <Article key={index} index={index} article={article} ></Article>
          })
        }
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('article', state)
  const { articleReducer, boardReducer } = state
  return { 
    articleInfo: articleReducer, 
    boardInfo: boardReducer }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBoardList: () => {
      dispatch(getBoardList())
    },
    initArticles: (board = 'all') => {
      dispatch(getLastPage(board, function(page){
        dispatch(setLastPage(page))
        dispatch(getArticles(board, page))
      }))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);

import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../layouts/Layout'
import Article from './components/Article'
import ArticleBtnBar from './components/ArticleBtnBar'
import ArticleSelector from './ArticleSelector'
import { 
  getArticles, 
  getLastPage, 
  nextPage,
} from './ArticleActions'

class ArticleContainer extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount () {
    let {
      getLastPage,
      currentBoard,
    } = this.props;
    getLastPage(currentBoard)
  }
  componentDidUpdate (prevProps) {
    let {
      lastPage,
      currentBoard,
      getArticles,
    } = this.props
    if(currentBoard !== prevProps.currentBoard || lastPage !== prevProps.lastPage){
      getArticles(currentBoard, lastPage)
    }
  }
  render() { 
    let {
      articles,
      lastArticles,
      currentPage,
      lastPage,
      currentBoard,
      prevProps,
      nextPage,
    } = this.props
    return ( 
      <Layout>
        <ArticleBtnBar
          prevProps={()=>{}}
          nextPage={() => {
            nextPage(currentPage, currentBoard)
          }}
          currentPage={currentPage}
        />
        {
          articles.map((article, index) => {
            return <Article key={index} index={index} article={article} ></Article>
          })
        }
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: ArticleSelector.getArticles(state),
    lastArticles: ArticleSelector.getLastArticles(state),
    currentPage: ArticleSelector.getCurrentPage(state),
    lastPage: ArticleSelector.getLastPage(state),
    currentBoard: ArticleSelector.getCurrentBoard(state),
  }
}
const mapDispatchToProps = {
  getArticles: (board, page) => getArticles(board, page),
  getLastPage: (board) => getLastPage(board),
  prevPage: (currentPage, board) => prevPage(currentPage, board),
  nextPage: (currentPage, board) => nextPage(currentPage, board),
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);

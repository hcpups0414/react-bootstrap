import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../layouts/Layout'
import Article from './Article.js'
import { getArticles } from './ArticleActions.js'
class ArticleList extends React.Component {
  
  constructor(props){
    super(props);
  }
  componentDidMount () {
    
    this.props.onSubmitBoard()
    console.log('mounted' + this.props)
    //this.props
  }
  render() { 
    console.log(this.props)
    return ( 
      <Layout>
        {
          this.props.articleReducer.articles.map((article,index) => {
            console.log(article)
            return <Article index={index} article={article}></Article>
          })
        }
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { articleReducer } = state
  return { articleReducer }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitBoard: (board = 'all') => {
      dispatch(getArticles(board))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);

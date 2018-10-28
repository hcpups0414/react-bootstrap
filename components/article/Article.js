import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../layouts/Layout'
import { getArticles } from './ArticleActions.js'
class Article extends React.Component {

  constructor(props){
    super(props);
  }
  componentDidMount () {
    console.log(this.props)
    this.props.onSubmitBoard('sex')
  }
  render() { 
    return ( 
      <Layout>
        <p>hi</p>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { articles, lastArticles } = state
  return { articles, lastArticles }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitBoard: (board = 'all') => {
      dispatch(getArticles(board))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);

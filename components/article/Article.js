import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../layouts/Layout'
import { GET_ARTICLES } from './ArticleActions.js'
class Article extends React.Component {

  // static getInitialProps ({ reduxStore, req }) {
  //   const isServer = !!req
  //   reduxStore.dispatch({type: GET_ARTICLES})
  //   return {}
  // }

  componentDidMount () {
    console.log(this.props)
    const {dispatch} = this.props
    dispatch({type: GET_ARTICLES})
  }

  render() { 
    return ( 
      <Layout>
        <p>hi</p>
      </Layout>
    );
  }
}

function mapStateToProps (state) {
  const { articles, lastArticles } = state
  return { articles, lastArticles }
}

export default connect(mapStateToProps)(Article);

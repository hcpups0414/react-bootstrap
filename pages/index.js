import React from 'react'
import {connect} from 'react-redux'
import ArticleList from '../components/article/ArticleList.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/scss/content.scss'

class Index extends React.Component {
  
  render () {
    return (
      <ArticleList />
    )
  }
}

export default connect()(Index)
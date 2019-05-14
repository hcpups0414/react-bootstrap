import React from 'react'
import {connect} from 'react-redux'
import ArticleContainer from '../components/article/ArticleContainer'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/scss/content.scss'

class Index extends React.Component {
  
  render () {
    return (
      <ArticleContainer />
    )
  }
}

export default connect()(Index)